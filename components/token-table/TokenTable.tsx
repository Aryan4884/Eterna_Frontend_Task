"use client"
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/store'
import { Token } from '../../lib/tokenSlice'
import TokenColumn from './TokenColumn'
import { Popover } from '../ui/popover'
import { cn } from '../../lib/cn'
import TokenDetailsModal from './TokenDetailsModal'

type Props = { loading?: boolean }

type SortKey = 'symbol' | 'price' | 'change24h' | 'marketCapUsd'

const sortOptions: Array<{ key: SortKey; label: string }> = [
  { key: 'symbol', label: 'Alphabetical' },
  { key: 'price', label: 'Price' },
  { key: 'change24h', label: '24h Change' },
  { key: 'marketCapUsd', label: 'Market Cap' }
]

const columnConfig: Array<{ id: Token['category']; title: string; highlight: 'P1' | 'P2' | 'P3' }> = [
  { id: 'new', title: 'New Pairs', highlight: 'P1' },
  { id: 'stretch', title: 'Final Stretch', highlight: 'P2' },
  { id: 'migrated', title: 'Migrated', highlight: 'P3' }
]

export default function TokenTable({ loading = false }: Props) {
  const items = useSelector<RootState, Token[]>((state) => state.tokens.items)
  const [sortKey, setSortKey] = useState<SortKey>('symbol')
  const [directionDesc, setDirectionDesc] = useState(false)
  const [selected, setSelected] = useState<Token | null>(null)

  const sorted = useMemo(() => {
    const arr = [...items]
    arr.sort((a, b) => {
      const aValue = a[sortKey] ?? 0
      const bValue = b[sortKey] ?? 0
      const base = typeof aValue === 'string' ? aValue.localeCompare(String(bValue)) : Number(aValue) - Number(bValue)
      return directionDesc ? -base : base
    })
    return arr
  }, [items, sortKey, directionDesc])

  const [categorizedTokens, setCategorizedTokens] = useState<Record<Token['category'], Token[]>>({ new: [], stretch: [], migrated: [] })

  useEffect(() => {
    const next: Record<Token['category'], Token[]> = { new: [], stretch: [], migrated: [] }
    items.forEach((token) => {
      if (next[token.category]) {
        next[token.category].push(token)
      }
    })

    setCategorizedTokens((prev) => {
      const updates: Record<Token['category'], Token[]> = { ...prev }
      let hasChanges = false

        ; (Object.keys(next) as Array<Token['category']>).forEach((key) => {
          const prevList = prev[key]
          const nextList = next[key]

          const isDifferent =
            prevList.length !== nextList.length ||
            prevList.some((t, i) => t !== nextList[i])

          if (isDifferent) {
            updates[key] = nextList
            hasChanges = true
          }
        })

      return hasChanges ? updates : prev
    })
  }, [items])

  return (
    <>
      <div className="flex flex-1 min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-white/10">
        <div className="grid flex-1 min-h-0 gap-0 lg:grid-cols-3" style={{ gridTemplateRows: '1fr' }}>
          {columnConfig.map((column, index) => (
            <TokenColumn
              key={column.id}
              title={column.title}
              highlight={column.highlight}
              tokens={categorizedTokens[column.id]}
              ready={true}
              loading={loading}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>
      <TokenDetailsModal token={selected} open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)} />
    </>
  )
}

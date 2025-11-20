"use client"
import { memo, useEffect, useRef, useState } from 'react'
import { Token, appendTokens } from '../../lib/tokenSlice'
import TokenRow from './TokenRow'
import { cn } from '../../lib/cn'
import { useDispatch } from 'react-redux'
import { seedTokens } from '../../lib/mockData'
import { Zap, SlidersHorizontal } from 'lucide-react'

type ColumnProps = {
  title: string
  highlight: 'P1' | 'P2' | 'P3'
  tokens: Token[]
  ready: boolean
  loading: boolean
  onSelect: (token: Token) => void
}

const TokenColumn = memo(function TokenColumn({ title, highlight, tokens, ready, loading, onSelect }: ColumnProps) {
  const dispatch = useDispatch()
  const liquidityWithFlow = tokens.filter((token) => (token.liquidity ?? '0 SOL') !== '0 SOL').length
  const scrollRef = useRef<HTMLDivElement>(null)
  const [loadingMore, setLoadingMore] = useState(false)

  const handleScroll = () => {
    if (!scrollRef.current || loadingMore) return
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      setLoadingMore(true)
      // Simulate network delay
      setTimeout(() => {
        const newTokens = seedTokens().slice(0, 10).map(t => ({
          ...t,
          id: Math.random().toString(36).substr(2, 9),
          category: tokens[0]?.category || 'new'
        }))
        dispatch(appendTokens(newTokens))
        setLoadingMore(false)
      }, 500)
    }
  }

  return (
    <section
      className={cn(
        'flex h-full flex-col border-r border-white/10 bg-[#030303]/90 backdrop-blur transition duration-300 last:border-r-0',
        ready ? 'opacity-100 translate-y-0' : 'translate-y-2 opacity-0'
      )}
    >
      <div className="flex flex-shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
        <h3 className="text-base font-bold text-white">{title}</h3>

        <div className="flex items-center gap-3">
          {/* Pill Container */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
            {/* Lightning + Count */}
            <div className="flex items-center gap-1.5 pr-3 border-r border-white/10">
              <Zap className="h-3 w-3 fill-gray-500 text-gray-500" />
              <span className="font-bold text-white">0</span>
            </div>

            {/* Solana Logo */}
            <div className="px-3 border-r border-white/10">
              <svg viewBox="0 0 397 311" className="h-2.5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.6 237L0.5 310.6H331.4L395.5 237H64.6ZM395.5 73.6L331.4 0H0.5L64.6 73.6H395.5ZM331.4 155.3H0.5L64.6 228.9H395.5L331.4 155.3Z" fill="url(#solana_gradient)" />
                <defs>
                  <linearGradient id="solana_gradient" x1="0.5" y1="0" x2="395.5" y2="310.6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9945FF" />
                    <stop offset="1" stopColor="#14F195" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* P1 P2 P3 */}
            <div className="flex items-center gap-2 pl-3 font-bold text-[10px]">
              <span className={highlight === 'P1' ? 'text-[#5865F2]' : 'text-gray-500'}>P1</span>
              <span className={highlight === 'P2' ? 'text-[#5865F2]' : 'text-gray-500'}>P2</span>
              <span className={highlight === 'P3' ? 'text-[#5865F2]' : 'text-gray-500'}>P3</span>
            </div>
          </div>

          {/* Filter Button */}
          <button className="text-gray-400 hover:text-white transition-colors">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-[420px] min-h-0 overflow-y-auto overflow-x-auto"
      >
        {loading ? (
          <ColumnSkeleton />
        ) : (
          <div className="px-0 py-0">
            {tokens.map((token) => (
              <TokenRow key={token.id} token={token} onSelect={onSelect} />
            ))}
            {loadingMore && (
              <div className="py-4 text-center text-xs text-gray-500 animate-pulse">
                Loading more...
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
})

function ColumnSkeleton() {
  return (
    <div className="w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 border-b border-white/10 p-3">
          {/* Image placeholder */}
          <div className="h-12 w-12 shrink-0 rounded-full bg-white/10 animate-pulse" />

          {/* Content placeholder */}
          <div className="flex-1 space-y-2">
            <div className="flex justify-between">
              <div className="h-4 w-24 rounded bg-white/10 animate-pulse" />
              <div className="h-4 w-16 rounded bg-white/10 animate-pulse" />
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-32 rounded bg-white/10 animate-pulse" />
              <div className="h-3 w-20 rounded bg-white/10 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TokenColumn


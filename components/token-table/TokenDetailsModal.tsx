"use client"
import { Token } from '../../lib/tokenSlice'
import { Dialog } from '../ui/dialog'
import { formatPercent, formatUsd, formatVolume } from '../../lib/formatters'

type Props = {
  token?: Token | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function TokenDetailsModal({ token, open, onOpenChange }: Props) {
  if (!token) return null

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={`${token.name} · ${token.symbol}`}
      description="Live snapshot streamed from mock websocket"
    >
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
        <Detail label="Price" value={`$${token.price.toFixed(5)}`} />
        <Detail label="Change (24h)" value={formatPercent(token.change24h)} tone={token.change24h >= 0 ? 'green' : 'red'} />
        <Detail label="Market Cap" value={formatUsd(token.marketCapUsd)} />
        <Detail label="Volume" value={formatVolume(token.volumeUsd)} />
        <Detail label="Fee" value={`$${token.fee?.toFixed(2)}`} />
        <Detail label="Transactions" value={token.tx?.toLocaleString() ?? '—'} />
        <Detail label="Liquidity" value={token.liquidity ?? '—'} />
        <Detail label="Crowns" value={token.crowns ?? '—'} />
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
        <p>
          Axiom&apos;s replica view streams randomized metrics to emulate the live heatmap. Use this modal to validate interactions and micro
          transitions with a visual-regression tool.
        </p>
      </div>
    </Dialog>
  )
}

function Detail({ label, value, tone }: { label: string; value: string; tone?: 'green' | 'red' }) {
  return (
    <div className="space-y-1">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className={tone === 'green' ? 'text-emerald-400' : tone === 'red' ? 'text-rose-400' : 'text-gray-100'}>{value}</div>
    </div>
  )
}


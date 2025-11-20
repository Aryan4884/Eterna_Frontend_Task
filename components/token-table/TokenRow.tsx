"use client"
import { memo } from 'react'
import { Token } from '../../lib/tokenSlice'
import { cn } from '../../lib/cn'
import usePriceFlash from '../../lib/usePriceFlash'
import { formatUsd } from '../../lib/formatters'
import { Globe, Twitter, Search, User, Users, Trophy, Crown, Zap, Target, Ghost, Atom, Utensils } from 'lucide-react'

type Props = {
  token: Token
  onSelect: (token: Token) => void
}

const TokenRow = memo(function TokenRow({ token, onSelect }: Props) {
  const direction = usePriceFlash(token.price)

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(token)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(token)}
      className={cn(
        'group relative w-full min-w-[450px] overflow-hidden border-b border-white/10 p-3 text-left transition-colors duration-300 last:border-b-0 cursor-pointer outline-none',
        'hover:bg-[#111]',
        direction === 'up' ? 'bg-emerald-500/10' : direction === 'down' ? 'bg-rose-500/10' : 'bg-[#050505]'
      )}
    >
      <div className="flex gap-3">
        {/* LEFT COLUMN: Image + Address */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-emerald-500/30 bg-slate-800 shadow-lg shadow-emerald-900/20">
            {token.image ? (
              <img src={token.image} alt={token.symbol} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-xs font-bold text-white/40">
                {token.symbol.slice(0, 2)}
              </div>
            )}
            {/* Pill Icon Overlay */}
            <div className="absolute bottom-0 right-0 rounded-tl-lg bg-[#0B1221] p-0.5">
              <div className="rounded-full bg-emerald-500/20 p-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
          <span className="text-[9px] font-medium text-gray-500">Fi8d...Tbkt</span>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="flex flex-1 flex-col gap-1.5">

          {/* ROW 1: Header Info + MC/Vol */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">{token.name}</span>
              <span className="text-xs text-gray-500">{token.symbol}</span>
              <CopyIcon className="h-3 w-3 text-gray-600 hover:text-gray-400" />
            </div>

            <div className="text-right leading-tight">
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-[10px] font-medium text-gray-500">MC</span>
                <span className={cn(
                  "text-sm font-bold",
                  (token.marketCapUsd || 0) < 30_000 ? "text-blue-400" : // Blue for < 30k
                    (token.marketCapUsd || 0) < 300_000 ? "text-[#F3BA2F]" : // Gold for 30k-300k
                      "text-emerald-400" // Green for rest (>300k)
                )}>
                  {formatUsd(token.marketCapUsd || 0)}
                </span>
              </div>
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-[10px] font-medium text-gray-500">V</span>
                <span className="text-xs font-bold text-white">{formatUsd(token.volumeUsd || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: Icons + F/TX */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-[10px] font-bold text-emerald-400">{token.age}</span>
          <User className="h-3 w-3 text-blue-400" />
          <Globe className="h-3 w-3 hover:text-white" />
          <Search className="h-3 w-3 hover:text-white" />

          <div className="flex items-center gap-1 text-[10px]">
            <Users className="h-3 w-3 text-gray-500" />
            <span>{token.holders || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px]">
            <div className="flex h-3 w-3 items-center justify-center border border-gray-600 rounded-[1px]">
              <div className="h-1.5 w-[1px] bg-gray-500" />
              <div className="h-2 w-[1px] bg-gray-500 ml-[1px]" />
            </div>
            <span>{token.scans || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px]">
            <Trophy className="h-3 w-3 text-gray-500" />
            <span>{token.reviews || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-yellow-500">
            <Crown className="h-3 w-3 fill-current" />
            <span>{token.score || '0/10'}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px]">
          <span className="text-gray-500">F</span>
          <span className="text-cyan-400">≡ {token.fee?.toFixed(3) || '0.000'}</span>
          <span className="text-gray-500">TX</span>
          <span className="text-white">{token.tx || 0}</span>
          <div className="h-1 w-4 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* ROW 3: Chips + Action Button */}
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center gap-2">
          {/* Red Chip */}
          <div className="flex items-center gap-1 rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] text-rose-400 border border-rose-500/20">
            <User className="h-3 w-3" />
            <span className="font-bold">74%</span>
          </div>
          {/* Red Chef Chip */}
          <div className="flex items-center gap-1 rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] text-rose-400 border border-rose-500/20">
            <Utensils className="h-3 w-3" />
            <span className="font-bold">73%</span>
            <span className="text-rose-300/70 text-[9px]">41m</span>
          </div>
          {/* Red Target Chip */}
          <div className="flex items-center gap-1 rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] text-rose-400 border border-rose-500/20">
            <Target className="h-3 w-3" />
            <span className="font-bold">73%</span>
          </div>
          {/* Green Ghost Chip */}
          <div className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
            <Ghost className="h-3 w-3" />
            <span className="font-bold">0%</span>
          </div>
          {/* Green Atom Chip */}
          <div className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
            <Atom className="h-3 w-3" />
            <span className="font-bold">0%</span>
          </div>
        </div>

        <button className="flex items-center gap-1 rounded-full bg-[#5865F2] px-3 py-1 text-[10px] font-bold text-white hover:bg-[#4752C4] transition-colors">
          <Zap className="h-3 w-3 fill-current" />
          0 SOL
        </button>
      </div>

    </div>
  )
})

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

export default TokenRow

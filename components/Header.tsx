"use client"
import { Search, Bell, Star, ChevronDown, Wallet, User } from 'lucide-react'
import { cn } from '../lib/cn'

const navItems = ['Discover', 'Pulse', 'Trackers', 'Perpetuals', 'Yield', 'Vision', 'Portfolio']

export default function Header() {
  return (
    <header className="border-b border-white/5 bg-[#020202] text-gray-100">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L16 11H8L12 4Z" fill="currentColor" />
              <path d="M7 13H17L20 18H4L7 13Z" fill="currentColor" />
            </svg>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold tracking-wide text-white">AXIOM</span>
              <span className="text-sm font-normal text-gray-300">Pro</span>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                className={cn(
                  'text-sm font-medium transition-colors',
                  item === 'Pulse' ? 'text-[#5865F2]' : 'text-gray-400 hover:text-gray-200'
                )}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Search + Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden w-[280px] xl:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              placeholder="Search by token or CA..."
              className="h-9 w-full rounded-full border border-white/5 bg-[#0B1221] pl-10 pr-10 text-sm text-gray-200 placeholder:text-gray-600 focus:border-white/10 focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-500">
              /
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* SOL Selector */}
            <button className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500/10">
              <svg viewBox="0 0 397 311" className="h-3 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.6 237L0.5 310.6H331.4L395.5 237H64.6ZM395.5 73.6L331.4 0H0.5L64.6 73.6H395.5ZM331.4 155.3H0.5L64.6 228.9H395.5L331.4 155.3Z" fill="url(#solana_gradient_header)" />
                <defs>
                  <linearGradient id="solana_gradient_header" x1="0.5" y1="0" x2="395.5" y2="310.6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9945FF" />
                    <stop offset="1" stopColor="#14F195" />
                  </linearGradient>
                </defs>
              </svg>
              SOL
              <ChevronDown className="h-3 w-3 text-gray-500" />
            </button>

            {/* Deposit Button */}
            <button className="rounded-full bg-[#5865F2] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#4752C4] transition-colors">
              Deposit
            </button>

            {/* Icons */}
            <button className="text-gray-400 hover:text-white">
              <Star className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Bell className="h-5 w-5" />
            </button>

            {/* Wallet Pill */}
            <button className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0B1221] px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-white/5">
              <div className="flex items-center gap-1.5">
                <Wallet className="h-3.5 w-3.5 text-gray-500" />
                <span>0</span>
              </div>
              <div className="h-3 w-[1px] bg-white/10" />
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 397 311" className="h-2.5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64.6 237L0.5 310.6H331.4L395.5 237H64.6ZM395.5 73.6L331.4 0H0.5L64.6 73.6H395.5ZM331.4 155.3H0.5L64.6 228.9H395.5L331.4 155.3Z" fill="url(#solana_gradient_header)" />
                </svg>
                <span>0</span>
              </div>
              <ChevronDown className="h-3 w-3 text-gray-500" />
            </button>

            {/* Profile */}
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1221] border border-white/10 text-gray-400 hover:text-white hover:border-white/30">
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

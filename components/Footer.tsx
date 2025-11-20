"use client"
import { memo } from 'react'
import { Settings, Wallet, Twitter, Globe, Zap, Activity, Wifi } from 'lucide-react'
import { cn } from '../lib/cn'

const Footer = memo(function Footer() {
    return (
        <footer className="flex h-10 flex-shrink-0 items-center justify-between border-t border-white/5 bg-[#020202] px-4 text-[11px] text-gray-400">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 rounded bg-[#5865F2]/20 px-2 py-1 text-[#5865F2] hover:bg-[#5865F2]/30 transition-colors">
                    <Settings className="h-3 w-3" />
                    <span className="font-bold">PRESET 1</span>
                </button>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded border border-white/10 px-2 py-0.5">
                        <span className="h-2 w-2 rounded-sm bg-gray-600" />
                        <span className="text-white">1</span>
                        <span className="text-emerald-400">0</span>
                    </div>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 border-r border-white/10 pr-4">
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Settings className="h-3 w-3" />
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Wallet className="h-3 w-3" />
                        <span>Wallet</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Twitter className="h-3 w-3" />
                        <span>Twitter</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Globe className="h-3 w-3" />
                        <span>Discover</span>
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-rose-500 hover:text-rose-400 transition-colors">
                        <Activity className="h-3 w-3" />
                        <span>Pulse</span>
                    </button>
                    <div className="h-3 w-[1px] bg-white/10" />
                    <button className="hover:text-white transition-colors">PnL</button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5">
                    <div className="flex -space-x-1">
                        <div className="h-4 w-4 rounded-full bg-rose-500/20 border border-black" />
                        <div className="h-4 w-4 rounded-full bg-emerald-500/20 border border-black" />
                    </div>
                </div>

                <div className="flex items-center gap-3 text-[#F3BA2F]">
                    <span className="font-bold">$87.1K</span>
                    <span className="text-blue-400">$2823</span>
                    <span className="text-emerald-400">$131.84</span>
                </div>

                <div className="h-3 w-[1px] bg-white/10" />

                <div className="flex items-center gap-3 text-gray-500">
                    <span>$54.2K</span>
                    <span className="flex items-center gap-1"><span className="text-gray-600">□</span> 0.0₂25</span>
                    <span className="flex items-center gap-1"><span className="text-gray-600">□</span> 0.003</span>
                </div>

                <div className="flex items-center gap-2 rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Connection is stable</span>
                </div>

                <button className="flex items-center gap-1 hover:text-white transition-colors">
                    <span>GLOBAL</span>
                    <span className="text-[9px]">▼</span>
                </button>

                <div className="flex items-center gap-3 text-gray-500">
                    <Settings className="h-3 w-3" />
                    <Settings className="h-3 w-3" />
                    <Settings className="h-3 w-3" />
                </div>
            </div>
        </footer>
    )
})

export default Footer

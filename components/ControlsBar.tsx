"use client"
import { Settings, Star, LineChart } from 'lucide-react'

export default function ControlsBar() {
  return (
    <section className="border-b border-white/5 bg-[#020202] text-gray-400">
      <div className="flex h-10 items-center px-4">
        <div className="flex items-center">
          <button className="flex h-10 w-10 items-center justify-center border-r border-white/5 hover:bg-white/5 hover:text-white transition-colors">
            <Settings className="h-4 w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center border-r border-white/5 hover:bg-white/5 hover:text-white transition-colors">
            <Star className="h-4 w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center border-r border-white/5 hover:bg-white/5 hover:text-white transition-colors">
            <LineChart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

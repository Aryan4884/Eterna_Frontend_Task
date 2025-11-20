"use client"
import { useEffect, useState } from 'react'
import TokenTable from './token-table/TokenTable'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { setTokens } from '../lib/tokenSlice'
import { seedTokens } from '../lib/mockData'
import useMockWebSocket from '../lib/useMockWebSocket'
import Header from './Header'
import ControlsBar from './ControlsBar'
import { ErrorBoundary } from './ErrorBoundary'
import Footer from './Footer'

export default function TokenDiscoveryPage() {
  const dispatch = useDispatch()
  const [error, setError] = useState<string | null>(null)

  const { data, isLoading, error: queryError, refetch, isFetching } = useQuery({
    queryKey: ['tokens'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      return seedTokens()
    }
  })

  useEffect(() => {
    if (queryError) setError(String(queryError))
  }, [queryError])

  useEffect(() => {
    if (data) dispatch(setTokens(data))
  }, [data, dispatch])

  useMockWebSocket()

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#01030b] text-gray-100">
      <Header />
      <ControlsBar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-[1920px] px-6 py-4">
          <div className="mb-4 flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Pulse</h1>
              <div className="flex items-center gap-3">
                {/* Solana Logo */}
                <div className="h-6 w-6 rounded-full bg-[#14F195]/10 p-1">
                  <svg viewBox="0 0 397 311" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.6 237L0.5 310.6H331.4L395.5 237H64.6ZM395.5 73.6L331.4 0H0.5L64.6 73.6H395.5ZM331.4 155.3H0.5L64.6 228.9H395.5L331.4 155.3Z" fill="url(#solana_gradient_header)" />
                    <defs>
                      <linearGradient id="solana_gradient_header" x1="0.5" y1="0" x2="395.5" y2="310.6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9945FF" />
                        <stop offset="1" stopColor="#14F195" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Hexagon Icon */}
                <div className="h-6 w-6 text-[#F3BA2F]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-[#1e293b] px-4 py-2 text-sm font-medium text-white hover:bg-[#334155]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                Display
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className="flex items-center gap-4 text-gray-500">
                <button className="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </button>
                <button className="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </button>
                <button className="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </button>
                <button className="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                  </svg>
                </button>
              </div>

              <button className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="4" />
                  <line x1="8" y1="2" x2="8" y2="4" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>1</span>
                <span className="text-purple-500">≡</span>
                <span>0</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
          <div className="mx-auto flex-1 min-h-0 w-full max-w-[1920px] px-6 pb-0 flex flex-col overflow-hidden">
            {error ? (
              <div className="rounded-3xl border border-rose-500/30 bg-rose-500/10 p-6 text-sm text-rose-200">
                <p className="font-semibold">Failed to load tokens</p>
                <p className="text-rose-300">{error}</p>
                <button
                  className="mt-4 rounded-full border border-rose-400/40 px-4 py-2 text-xs uppercase text-white"
                  onClick={() => {
                    setError(null)
                    refetch()
                  }}
                >
                  Try again
                </button>
              </div>
            ) : (
              <ErrorBoundary>
                <TokenTable loading={isLoading} />
              </ErrorBoundary>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

"use client"
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePrice } from './tokenSlice'
import type { RootState } from './store'

// This hook simulates a websocket streaming price updates.
export default function useMockWebSocket() {
  const dispatch = useDispatch()
  const items = useSelector((s: RootState) => s.tokens.items)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    function tick() {
      if (!items || items.length === 0) return

      // Update multiple tokens at once for a busier feel
      const updateCount = Math.floor(Math.random() * 5) + 5 // 5 to 10 updates per tick

      for (let i = 0; i < updateCount; i++) {
        const idx = Math.floor(Math.random() * items.length)
        const t = items[idx]
        // simulate small price change
        const delta = (Math.random() - 0.5) * (t.price * 0.05) // 5% volatility
        const newPrice = +(Math.max(0.000001, t.price + delta)).toFixed(9)
        const change = +(t.change24h + (Math.random() - 0.5) * 2).toFixed(2)
        dispatch(updatePrice({ id: t.id, price: newPrice, change }))
      }

      timer.current = window.setTimeout(tick, 50 + Math.random() * 100) // 50ms to 150ms
    }

    timer.current = window.setTimeout(tick, 1200)
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [dispatch, items])
}

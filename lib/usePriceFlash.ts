"use client"
import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'down' | null

export default function usePriceFlash(value: number) {
  const previous = useRef<number>(value)
  const [direction, setDirection] = useState<Direction>(null)

  useEffect(() => {
    if (value > previous.current) setDirection('up')
    else if (value < previous.current) setDirection('down')
    else setDirection(null)
    previous.current = value
    const timer = window.setTimeout(() => setDirection(null), 400)
    return () => window.clearTimeout(timer)
  }, [value])

  return direction
}


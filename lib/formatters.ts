import type { Token } from './tokenSlice'

export const formatUsd = (value?: number): string => {
  if (value === undefined || Number.isNaN(value)) return '$0'
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`
  return `$${value.toLocaleString()}`
}

export const formatVolume = (value?: number): string => {
  if (!value) return '$0'
  return `$${value.toLocaleString()}`
}

export const formatPercent = (value: number): string => {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}



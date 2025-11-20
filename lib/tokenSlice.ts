import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Token = {
  id: string
  symbol: string
  name: string
  image?: string
  price: number
  change24h: number
  category: 'new' | 'stretch' | 'migrated'
  // dynamic display fields coming from the data source
  marketCapUsd?: number
  volumeUsd?: number
  fee?: number
  tx?: number
  liquidity?: string
  mintedSeconds?: number
  watchers?: number
  crowns?: string
  holders?: number
  scans?: number
  reviews?: number
  score?: string
  spotlightTier?: 'P1' | 'P2' | 'P3'
  badges?: Array<{ label: string; tone: 'success' | 'warning' | 'critical' | 'neutral' }>
  // small indicator chips shown under the name (icons/values)
  indicators?: Array<{ key: string; label?: string; value?: string; color?: string }>

  // New fields for high-density UI
  socials?: {
    website?: boolean
    twitter?: boolean
    telegram?: boolean
  }
  age?: string
  devStatus?: {
    action: 'held' | 'sold' | 'added'
    percentage: number
  }
  smartMoney?: {
    buy: number
    sell: number
  }
  progress?: Array<{
    label: string
    value: number // 0-100
    color: string // tailwind class
  }>
}

type State = {
  items: Token[]
}

const initialState: State = { items: [] }

const slice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      state.items = action.payload
    },
    updatePrice(state, action: PayloadAction<{ id: string; price: number; change: number }>) {
      const t = state.items.find((i) => i.id === action.payload.id)
      if (t) {
        t.price = action.payload.price
        t.change24h = action.payload.change
      }
    },
    appendTokens(state, action: PayloadAction<Token[]>) {
      // "Replacing and not extending": Keep a fixed buffer size per category.
      // Since we store all in one list, this is tricky. 
      // We'll just push to the end, but if the total list gets too huge, we shift from the start.
      // User said "number of cell are fixed... keep any replacing".
      // Let's cap the total items at 500.
      if (state.items.length > 500) {
        state.items.splice(0, action.payload.length)
      }
      state.items.push(...action.payload)
    }
  }
})

export const { setTokens, updatePrice, appendTokens } = slice.actions
export default slice.reducer

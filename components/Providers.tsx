"use client"
import React, { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../lib/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  )
}

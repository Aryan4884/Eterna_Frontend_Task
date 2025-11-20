"use client"
import { Component, ErrorInfo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onRetry?: () => void
}

type State = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('TokenBoundary error', error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
    this.props.onRetry?.()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-3xl border border-rose-500/30 bg-rose-500/5 p-8 text-center text-sm text-rose-200">
          <p className="font-semibold">Something went wrong while rendering the board.</p>
          <p className="mt-2 text-rose-300">{this.state.error?.message}</p>
          <button
            onClick={this.handleRetry}
            className="mt-4 rounded-full border border-rose-300/40 px-4 py-2 text-xs uppercase tracking-wide text-white hover:border-white/60"
          >
            Retry
          </button>
        </div>
      )
    }

    return this.props.children
  }
}


"use client"

import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
    children?: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    }

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
                        <div className="rounded-full bg-rose-500/10 p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-rose-500"
                            >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                <path d="M12 9v4" />
                                <path d="M12 17h.01" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">Something went wrong</h3>
                            <p className="text-sm text-gray-400">
                                We couldn't load this section. Please try refreshing the page.
                            </p>
                        </div>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
                        >
                            Try again
                        </button>
                    </div>
                )
            )
        }

        return this.props.children
    }
}

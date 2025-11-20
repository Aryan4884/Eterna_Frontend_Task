import './globals.css'
import { ReactNode } from 'react'
import Providers from '../components/Providers'

export const metadata = {
  title: 'Axiom Trade - Token Discovery (Clone)'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

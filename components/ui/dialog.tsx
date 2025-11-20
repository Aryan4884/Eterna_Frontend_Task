"use client"
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '../../lib/cn'
import { ReactNode } from 'react'

type DialogProps = {
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
}

export function Dialog({ children, open, onOpenChange, title, description }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <DialogPrimitive.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-3xl',
            'border border-white/10 bg-slate-950 p-6 shadow-3xl'
          )}
        >
          <div className="space-y-2">
            <DialogPrimitive.Title className="text-xl font-semibold text-white">{title}</DialogPrimitive.Title>
            {description ? (
              <DialogPrimitive.Description className="text-sm text-slate-400">{description}</DialogPrimitive.Description>
            ) : null}
          </div>
          <div className="mt-4">{children}</div>
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200 hover:bg-white/20">
            Close
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}


"use client"
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '../../lib/cn'
import { ReactNode } from 'react'

type PopoverProps = {
  trigger: ReactNode
  children: ReactNode
  align?: PopoverPrimitive.PopoverContentProps['align']
  side?: PopoverPrimitive.PopoverContentProps['side']
  className?: string
}

export function Popover({ trigger, children, align = 'end', side = 'bottom', className }: PopoverProps) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side={side}
          align={align}
          sideOffset={8}
          className={cn(
            'z-50 w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur',
            'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95',
            className
          )}
        >
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}


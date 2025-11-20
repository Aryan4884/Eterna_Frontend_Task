"use client"
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '../../lib/cn'
import { ReactNode } from 'react'

type Props = {
  content: ReactNode
  children: ReactNode
  side?: TooltipPrimitive.TooltipContentProps['side']
}

export function Tooltip({ content, children, side = 'top' }: Props) {
  return (
    <TooltipPrimitive.Provider delayDuration={50}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            className={cn(
              'z-50 rounded-md border border-white/10 bg-gray-900 px-3 py-1 text-xs text-gray-100 shadow-lg',
              'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=closed]:fade-out'
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-gray-900" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}


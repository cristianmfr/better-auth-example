'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Toaster } from 'sonner'

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
      {children}
      <Toaster richColors />
    </NextThemesProvider>
  )
}

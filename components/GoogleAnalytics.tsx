'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Push page view to dataLayer
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}


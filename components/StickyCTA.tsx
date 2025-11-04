'use client'

import { PhoneIcon } from '@heroicons/react/24/solid'

export default function StickyCTA() {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_call',
        button_location: 'sticky_mobile',
      })
    }
    window.location.href = 'tel:+33XXXXXXXXX'
  }

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-anthracite border-t border-white/20 shadow-2xl">
      <div className="flex items-center justify-around p-4">
        <button
          onClick={scrollToForm}
          className="bg-orange hover:bg-orange/90 text-white font-oswald font-bold text-sm py-3 px-6 rounded-lg transition flex-1 mr-2"
        >
          📞 Devis 24h
        </button>
        
        <a
          href="tel:+33XXXXXXXXX"
          onClick={handleCallClick}
          className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-anthracite text-white font-oswald font-bold text-sm py-3 px-6 rounded-lg transition flex-1"
        >
          <PhoneIcon className="w-5 h-5" />
          Appeler
        </a>
      </div>
    </div>
  )
}


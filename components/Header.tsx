'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_call',
        button_location: 'navbar',
      })
    }
    window.location.href = 'tel:+33XXXXXXXXX'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-anthracite/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-oswald font-bold text-2xl text-orange">
            IMGR Déco
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#benefices" onClick={(e) => handleNavClick(e, 'benefices')} className="text-white hover:text-orange transition">
              Bénéfices
            </a>
            <a href="#temoignages" onClick={(e) => handleNavClick(e, 'temoignages')} className="text-white hover:text-orange transition">
              Témoignages
            </a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="text-white hover:text-orange transition">
              Processus
            </a>
            <a
              href="tel:+33XXXXXXXXX"
              onClick={handleCallClick}
              className="flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-anthracite text-white px-4 py-2 rounded transition"
            >
              <PhoneIcon className="w-5 h-5" />
              Appeler
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-orange hover:bg-orange/90 text-white px-4 py-2 rounded transition">
              Devis Gratuit
            </a>
          </nav>

          {/* Menu mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a
                href="#benefices"
                onClick={(e) => handleNavClick(e, 'benefices')}
                className="text-white hover:text-orange transition"
              >
                Bénéfices
              </a>
              <a
                href="#temoignages"
                onClick={(e) => handleNavClick(e, 'temoignages')}
                className="text-white hover:text-orange transition"
              >
                Témoignages
              </a>
              <a
                href="#process"
                onClick={(e) => handleNavClick(e, 'process')}
                className="text-white hover:text-orange transition"
              >
                Processus
              </a>
              <a
                href="tel:+33XXXXXXXXX"
                onClick={handleCallClick}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-anthracite text-white px-4 py-2 rounded transition"
              >
                <PhoneIcon className="w-5 h-5" />
                Appeler
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-orange hover:bg-orange/90 text-white px-4 py-2 rounded transition text-center"
              >
                Devis Gratuit
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


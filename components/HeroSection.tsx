'use client'

import { PhoneIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function HeroSection() {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_call',
        button_location: 'hero',
      })
    }
    window.location.href = 'tel:+33XXXXXXXXX'
  }

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-anthracite text-white min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Atelier IMGR Déco"
          fill
          className="object-cover opacity-30"
          priority
          unoptimized
          onError={(e) => {
            // Fallback si l'image n'existe pas
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-oswald font-bold mb-6 text-shadow">
            Fabricant d'Enseignes à Béziers
            <br />
            <span className="text-orange">Conception · Fabrication · Pose</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-metal-gray mb-8 leading-relaxed">
            Atelier local, zéro sous-traitance. Qualité, délais et prix directs fabricant. Devis sous 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToForm}
              className="bg-orange hover:bg-orange/90 text-white font-oswald font-bold text-xl py-4 px-8 rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Devis Gratuit Sous 24h
            </button>
            
            <a
              href="tel:+33XXXXXXXXX"
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-anthracite text-white font-oswald font-bold text-xl py-4 px-8 rounded-lg transition"
            >
              <PhoneIcon className="w-6 h-6" />
              Appeler maintenant
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-orange text-2xl">★★★★★</span>
                <span>4.8/5 sur 150+ avis</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div>
                <span className="font-bold">18 ans</span> d'expérience
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div>
                <span className="font-bold">500+</span> enseignes installées
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


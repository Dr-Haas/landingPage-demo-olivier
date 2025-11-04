'use client'

import { useState, FormEvent } from 'react'
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

interface FormData {
  nom: string
  telephone: string
  email: string
  typeProjet: string
  message: string
}

export default function FormContact() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    telephone: '',
    email: '',
    typeProjet: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Envoi vers n8n webhook
      const response = await fetch('https://dikio.app.n8n.cloud/webhook/landing-page-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Push event vers dataLayer pour Google Tag Manager
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'form_submit',
            form_name: 'contact',
            form_location: 'landing_page',
          })
        }

        setShowToast(true)
        setFormData({
          nom: '',
          telephone: '',
          email: '',
          typeProjet: '',
          message: '',
        })

        // Redirection vers page de remerciement après 2 secondes
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-oswald font-bold text-anthracite mb-4 text-center">
          Demandez Votre Devis Gratuit
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Remplissez le formulaire ci-dessous et recevez votre devis sous 24h
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="nom"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-3 border border-metal-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              required
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="w-full px-4 py-3 border border-metal-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-metal-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de projet *
            </label>
            <div className="space-y-2">
              {['Enseigne lumineuse', 'Vitrophanie', 'Flocage véhicule', 'Signalétique', 'Autre'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="typeProjet"
                    value={type}
                    required
                    checked={formData.typeProjet === type}
                    onChange={(e) => setFormData({ ...formData, typeProjet: e.target.value })}
                    className="w-4 h-4 text-orange focus:ring-orange border-metal-gray"
                  />
                  <span className="ml-2 text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message (optionnel)
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-metal-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
            />
          </div>

          <p className="text-sm text-gray-500 text-center">
            Vos données restent privées. Zéro spam, promis.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange hover:bg-orange/90 text-white font-oswald font-bold text-lg py-4 px-8 rounded-lg transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
        </form>

        {showToast && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center space-x-2 z-50 animate-slide-in">
            <CheckCircleIcon className="w-6 h-6" />
            <span>Merci ! Votre devis arrive sous 24h.</span>
          </div>
        )}
      </div>
    </section>
  )
}


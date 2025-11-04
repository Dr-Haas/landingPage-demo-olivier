'use client'

import Image from 'next/image'

const testimonials = [
  {
    name: 'Marie Dupont',
    role: 'Gérante, Restaurant Le Jardin',
    photo: '/testimonials/client1.webp',
    text: 'Service impeccable de A à Z. L\'enseigne est magnifique et l\'installation professionnelle. Je recommande vivement !',
  },
  {
    name: 'Jean Martin',
    role: 'Directeur, Auto École 34',
    photo: '/testimonials/client2.webp',
    text: 'Excellent rapport qualité-prix. Délais respectés, équipe réactive. Parfait pour notre nouvelle enseigne lumineuse.',
  },
  {
    name: 'Sophie Bernard',
    role: 'Propriétaire, Salon Beauté',
    photo: '/testimonials/client3.webp',
    text: 'Très satisfaite de la vitrophanie sur nos vitrines. Travail soigné et prix honnête. Merci IMGR Déco !',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-metal-gray/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-oswald font-bold text-anthracite mb-12 text-center">
          Ce Que Disent Nos Clients
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4 flex items-center justify-center">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-anthracite">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="mt-4 text-orange">★★★★★</div>
            </div>
          ))}
        </div>

        {/* Logos clients */}
        <div className="bg-white rounded-lg p-8">
          <p className="text-center text-gray-600 mb-6 font-medium">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


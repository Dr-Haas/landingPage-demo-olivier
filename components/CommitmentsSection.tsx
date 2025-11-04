import { CheckIcon } from '@heroicons/react/24/solid'

const commitments = [
  'Devis sous 24h ou 50€ offerts',
  'Chef de projet dédié',
  'Fabrication locale 100%',
  'Délais garantis',
  'Garantie 5 ans fabrication / 3 ans installation',
]

export default function CommitmentsSection() {
  return (
    <section className="bg-anthracite text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-oswald font-bold mb-8 text-center">
          Nos Engagements
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div className="space-y-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange rounded-full flex items-center justify-center mt-1">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-metal-gray">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


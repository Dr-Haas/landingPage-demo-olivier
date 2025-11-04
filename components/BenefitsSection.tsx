import { 
  UserGroupIcon, 
  ClockIcon, 
  CurrencyEuroIcon 
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: UserGroupIcon,
    title: 'Un seul interlocuteur',
    description: 'Tout en interne. Pas de sous-traitance, pas de perte d\'information.',
  },
  {
    icon: ClockIcon,
    title: 'Délais garantis',
    description: 'Respect des délais ou 10% de remise. Engagement écrit.',
  },
  {
    icon: CurrencyEuroIcon,
    title: 'Prix fabricant direct',
    description: 'Sans intermédiaire. Tarifs transparents et compétitifs.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-oswald font-bold text-anthracite mb-12 text-center">
          3 Bénéfices qui Font la Différence
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-metal-gray/30 p-8 rounded-lg border border-metal-gray hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-2xl font-oswald font-bold text-anthracite mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


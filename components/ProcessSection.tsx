import { 
  PhoneIcon, 
  PaintBrushIcon, 
  CogIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline'

const steps = [
  {
    number: '1',
    icon: PhoneIcon,
    title: 'Consultation gratuite',
    description: 'Devis sous 24h après échange sur vos besoins',
  },
  {
    number: '2',
    icon: PaintBrushIcon,
    title: 'Conception validée',
    description: 'Maquette et validation avant fabrication',
  },
  {
    number: '3',
    icon: CogIcon,
    title: 'Fabrication atelier Béziers',
    description: 'Réalisation dans notre atelier local',
  },
  {
    number: '4',
    icon: WrenchScrewdriverIcon,
    title: 'Installation professionnelle',
    description: 'Pose par nos équipes qualifiées',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-oswald font-bold text-anthracite mb-12 text-center">
          Votre Enseigne en 4 Étapes
        </h2>
        
        <div className="relative">
          {/* Ligne de connexion (desktop) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-metal-gray" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <Icon className="w-10 h-10 text-orange" />
                  </div>
                  <div className="text-center">
                    <div className="text-orange font-oswald font-bold text-2xl mb-2">
                      Étape {step.number}
                    </div>
                    <h3 className="text-xl font-oswald font-bold text-anthracite mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-metal-gray/30 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl font-oswald font-bold text-anthracite mb-4">
          Merci pour votre demande !
        </h1>
        
        <p className="text-xl text-gray-700 mb-6">
          Votre devis arrive sous 24h dans votre boîte mail.
        </p>
        
        <p className="text-gray-600 mb-8">
          Notre équipe va étudier votre projet et vous contacter rapidement.
        </p>
        
        <Link
          href="/"
          className="inline-block bg-orange hover:bg-orange/90 text-white font-oswald font-bold text-lg py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}


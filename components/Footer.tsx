import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-anthracite text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-oswald font-bold text-2xl text-orange mb-4">
              IMGR Déco
            </h3>
            <p className="text-metal-gray mb-4">
              Fabricant d'enseignes à Béziers depuis 2006
            </p>
          </div>
          
          <div>
            <h4 className="font-oswald font-bold mb-4">Coordonnées</h4>
            <address className="text-metal-gray not-italic">
              <p>Adresse à compléter</p>
              <p>34500 Béziers</p>
              <p className="mt-2">
                <a href="tel:+33XXXXXXXXX" className="hover:text-orange transition">
                  Tél: +33 X XX XX XX XX
                </a>
              </p>
              <p>
                <a href="mailto:contact@imgr-deco.fr" className="hover:text-orange transition">
                  contact@imgr-deco.fr
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="font-oswald font-bold mb-4">Informations légales</h4>
            <ul className="space-y-2 text-metal-gray">
              <li>
                <Link href="/mentions-legales" className="hover:text-orange transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-orange transition">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-metal-gray">
          <p>© {currentYear} IMGR Déco. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}


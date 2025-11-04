export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-oswald font-bold text-anthracite mb-8">
          Mentions Légales
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-oswald font-bold text-anthracite mb-4">
              Éditeur du site
            </h2>
            <p>
              IMGR Déco<br />
              Adresse à compléter<br />
              34500 Béziers<br />
              Téléphone: +33 X XX XX XX XX<br />
              Email: contact@imgr-deco.fr
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-oswald font-bold text-anthracite mb-4">
              Hébergement
            </h2>
            <p>
              Netlify<br />
              Informations d'hébergement disponibles sur netlify.com
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-oswald font-bold text-anthracite mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              Tous les contenus de ce site sont la propriété d'IMGR Déco et sont protégés par les lois sur la propriété intellectuelle.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


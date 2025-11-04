import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'IMGR Déco | Fabricant d\'Enseignes à Béziers - Devis sous 24h',
  description: 'Fabricant intégré d\'enseignes à Béziers. Conception, fabrication et pose sans sous-traitance. Devis gratuit sous 24h. Garantie 5 ans.',
  keywords: 'enseigne Béziers, fabrication enseigne, enseigne lumineuse, vitrophanie, signalétique Béziers',
  openGraph: {
    title: 'IMGR Déco | Fabricant d\'Enseignes à Béziers',
    description: 'Fabricant intégré d\'enseignes à Béziers. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMGR Déco | Fabricant d\'Enseignes à Béziers',
    description: 'Fabricant intégré d\'enseignes à Béziers. Devis gratuit sous 24h.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Schema JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'IMGR Déco',
              description: 'Fabricant d\'enseignes à Béziers. Conception, fabrication et pose sans sous-traitance.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Adresse à compléter',
                addressLocality: 'Béziers',
                postalCode: '34500',
                addressCountry: 'FR',
              },
              telephone: '+33-X-XX-XX-XX-XX',
              url: 'https://imgr-deco.fr',
              areaServed: {
                '@type': 'City',
                name: 'Béziers',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '43.3472',
                longitude: '3.2158',
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Initialize dataLayer */}
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
          `}
        </Script>
        
        <GoogleAnalytics />
        {children}
        
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}


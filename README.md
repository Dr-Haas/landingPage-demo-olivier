# IMGR Déco - Landing Page

Landing page optimisée pour la conversion Google Ads pour IMGR Déco, fabricant d'enseignes à Béziers.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TailwindCSS** pour le styling
- **TypeScript**
- **Heroicons** et **Lucide React** pour les icônes
- **Google Tag Manager** et **Google Ads** pour le tracking

## 📦 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📝 Configuration

### Google Tag Manager

Dans `app/layout.tsx`, remplacez `GTM-XXXXXXX` par votre ID GTM réel.

### Google Ads Conversion

Dans `app/layout.tsx`, remplacez `AW-XXXXXXXXX/XXXXXXXXXX` par vos identifiants Google Ads.

### Webhook n8n

Dans `components/FormContact.tsx`, remplacez l'URL du webhook :
```typescript
'https://n8n.yourdomain.com/webhook/imgr-leads'
```

### Coordonnées

Mettez à jour les coordonnées dans :
- `components/Footer.tsx`
- `app/layout.tsx` (Schema JSON-LD)
- `app/mentions-legales/page.tsx`

## 🎨 Branding

- **Anthracite**: `#1C1C1C`
- **Gris métal**: `#E2E2E2`
- **Orange**: `#F97316`
- **Blanc**: `#FFFFFF`

Polices :
- **Oswald** pour les titres
- **Inter** pour le texte

## 📁 Structure

```
/
├── app/
│   ├── layout.tsx          # Layout principal avec GTM
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux Tailwind
│   ├── thank-you/          # Page de remerciement
│   ├── mentions-legales/   # Mentions légales
│   └── confidentialite/    # Politique de confidentialité
├── components/
│   ├── Header.tsx          # Header fixe
│   ├── HeroSection.tsx     # Section hero
│   ├── BenefitsSection.tsx # 3 bénéfices
│   ├── TestimonialsSection.tsx # Témoignages
│   ├── ProcessSection.tsx  # Timeline 4 étapes
│   ├── CommitmentsSection.tsx # Engagements
│   ├── FormContact.tsx     # Formulaire n8n
│   ├── Footer.tsx          # Footer
│   └── StickyCTA.tsx       # CTA mobile sticky
└── public/
    ├── hero.webp           # Image hero (à ajouter)
    └── logos/              # Logos clients (à ajouter)
```

## 🖼️ Images à ajouter

Placez les images suivantes dans le dossier `public/` :

- `hero.webp` - Image hero (recommandé: < 100 KB)
- `testimonials/client1.webp`
- `testimonials/client2.webp`
- `testimonials/client3.webp`
- `logos/` - Logos clients (optionnel)

## 📈 SEO

- Meta tags optimisés dans `app/layout.tsx`
- Schema JSON-LD LocalBusiness
- Open Graph pour les réseaux sociaux
- Structure sémantique HTML5

## 🔍 Tracking

- **form_submit** : Envoi du formulaire
- **click_call** : Clic sur bouton téléphone

Les événements sont poussés vers `dataLayer` pour Google Tag Manager.

## 🌐 Déploiement Netlify

1. Connectez votre repo GitHub à Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Ajoutez les variables d'environnement si nécessaire

## 📱 Responsive

La page est entièrement responsive avec :
- Design mobile-first
- CTA sticky en bas sur mobile
- Navigation adaptative

## ✨ Fonctionnalités

- ✅ Formulaire connecté à n8n
- ✅ Tracking Google Tag Manager
- ✅ Tracking Google Ads Conversion
- ✅ SEO optimisé
- ✅ Schema JSON-LD
- ✅ Page de remerciement
- ✅ Mentions légales & RGPD
- ✅ Design industriel moderne
- ✅ CTA sticky mobile

## 📄 Licence

© 2024 IMGR Déco - Tous droits réservés


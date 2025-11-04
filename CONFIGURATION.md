# Instructions pour configurer le projet IMGR Déco

## 🔧 Configuration initiale

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX/XXXXXXXXXX
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://n8n.yourdomain.com/webhook/imgr-leads
NEXT_PUBLIC_PHONE=+33XXXXXXXXX
NEXT_PUBLIC_EMAIL=contact@imgr-deco.fr
```

### 3. Remplacer les valeurs dans le code

**Dans `app/layout.tsx` :**
- Remplacez `GTM-XXXXXXX` par votre ID Google Tag Manager
- Mettez à jour les coordonnées dans le Schema JSON-LD

**Dans `components/FormContact.tsx` :**
- Remplacez l'URL du webhook n8n par votre URL réelle

**Dans tous les composants :**
- Remplacez `+33XXXXXXXXX` par votre numéro de téléphone réel
- Remplacez `contact@imgr-deco.fr` par votre email réel

**Dans `components/Footer.tsx` et `app/mentions-legales/page.tsx` :**
- Mettez à jour l'adresse complète

### 4. Ajouter les images

Placez les images suivantes dans le dossier `public/` :

- `hero.webp` - Image hero (1920x1080px, < 100 KB recommandé)
- `testimonials/client1.webp` - Photo témoignage 1 (400x400px)
- `testimonials/client2.webp` - Photo témoignage 2 (400x400px)
- `testimonials/client3.webp` - Photo témoignage 3 (400x400px)
- `logos/` - Logos clients (optionnel, 200x100px)

### 5. Tester en local

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### 6. Build de production

```bash
npm run build
npm start
```

## 🚀 Déploiement sur Netlify

1. Connectez votre repository GitHub à Netlify
2. Le fichier `netlify.toml` est déjà configuré
3. Ajoutez les variables d'environnement dans Netlify Dashboard > Site settings > Environment variables
4. Déployez !

## 📋 Checklist avant mise en production

- [ ] Toutes les variables d'environnement configurées
- [ ] Google Tag Manager ID configuré
- [ ] Webhook n8n URL configuré
- [ ] Coordonnées mises à jour partout
- [ ] Images ajoutées et optimisées
- [ ] Test du formulaire de contact
- [ ] Test des liens de navigation
- [ ] Vérification du tracking GTM
- [ ] Test sur mobile (CTA sticky)
- [ ] Vérification SEO (meta tags, schema)

## 🎨 Personnalisation

### Couleurs (dans `tailwind.config.js`)
- Anthracite: `#1C1C1C`
- Gris métal: `#E2E2E2`
- Orange: `#F97316`

### Polices
- Titres: Oswald (Google Fonts)
- Texte: Inter (Google Fonts)

Les polices sont chargées automatiquement dans `app/globals.css`.

## 🐛 Dépannage

### Les images ne s'affichent pas
- Vérifiez que les fichiers sont bien dans `public/`
- Vérifiez les noms de fichiers (sensible à la casse)
- Les composants Image ont un fallback si l'image n'existe pas

### Le formulaire ne fonctionne pas
- Vérifiez l'URL du webhook n8n
- Vérifiez que le webhook accepte les requêtes POST
- Ouvrez la console du navigateur pour voir les erreurs

### Google Tag Manager ne fonctionne pas
- Vérifiez l'ID GTM dans `app/layout.tsx`
- Vérifiez que le dataLayer est initialisé
- Utilisez Google Tag Assistant pour déboguer

## 📞 Support

Pour toute question, contactez le développeur ou consultez la documentation Next.js.


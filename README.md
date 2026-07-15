# CULTIVA Landing Page

Une landing page moderne et professionnelle pour présenter le projet CULTIVA, une plateforme numérique destinée à aider les agriculteurs à gérer facilement leurs exploitations agricoles.

## 🎨 Design

Le design utilise une identité visuelle premium inspirée des sites SaaS modernes (Notion, Stripe, Linear, Framer, Vercel, Apple) avec :

- **Vert** (#1B8A3A) - Couleur principale
- **Vert foncé** (#0E5A2B) - Couleur secondaire
- **Blanc** - Fond principal
- **Jaune soleil** (#F5B400) - Accent

## 🛠 Technologies

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icônes)
- **Responsive Design**
- **SEO optimisé**
- **Accessibilité (WCAG)**

## 📁 Structure du projet

```
cultura-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal avec SEO
│   │   ├── page.tsx            # Page d'accueil
│   │   └── globals.css         # Styles globaux
│   ├── components/
│   │   ├── navbar.tsx          # Barre de navigation avec blur
│   │   ├── hero.tsx            # Section héro avec animations
│   │   ├── why-cultiva.tsx     # Problèmes et solutions
│   │   ├── features.tsx        # Grille de fonctionnalités
│   │   ├── how-it-works.tsx    # Timeline de fonctionnement
│   │   ├── statistics.tsx      # Statistiques avec compteurs
│   │   ├── app-preview.tsx     # Galerie d'aperçus
│   │   ├── roadmap.tsx         # Roadmap des fonctionnalités
│   │   ├── testimonials.tsx    # Témoignages
│   │   ├── faq.tsx             # FAQ avec accordéon
│   │   ├── contact.tsx         # Formulaire de contact
│   │   └── footer.tsx          # Pied de page
│   └── lib/
│       └── utils.ts            # Utilitaires (cn function)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.mjs
```

## 🚀 Installation

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Étapes d'installation

1. **Naviguer vers le dossier du projet**
   ```bash
   cd c:\Users\Moses\Desktop\Moses\cultura-landing
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Exécute le linter ESLint

## 🎯 Fonctionnalités de la landing page

### 1. Navbar
- Logo CULTIVA avec icône
- Navigation responsive (desktop/mobile)
- Effet blur au scroll
- Menu hamburger pour mobile

### 2. Hero Section
- Titre principal accrocheur
- Sous-titre descriptif
- Deux boutons CTA
- Mockup de smartphone animé
- Statistiques rapides

### 3. Pourquoi CULTIVA ?
- Présentation des problèmes actuels
- Solutions proposées par CULTIVA
- Design comparatif visuel

### 4. Fonctionnalités
- Grille de 10 cartes modernes
- Icônes Lucide React
- Animations au hover
- Badge "Bientôt" pour fonctionnalités futures

### 5. Comment ça marche
- Timeline en 6 étapes
- Design visuel clair
- Animations d'apparition

### 6. Statistiques
- Compteurs animés
- 3 statistiques clés
- Design premium sur fond vert

### 7. Aperçu de l'application
- Galerie de 5 cartes
- Mockups colorés
- Hover effects

### 8. Roadmap
- 5 versions futures
- Indicateur de disponibilité
- Tags de fonctionnalités

### 9. Témoignages
- 3 cartes de témoignages
- Avatars avec initiales
- Note étoilée
- Indication "fictif pour démonstration"

### 10. FAQ
- Accordéon interactif
- 5 questions fréquentes
- Animations fluides

### 11. Contact
- Formulaire complet
- Informations de contact
- Placeholder Google Maps
- Design responsive

### 12. Footer
- Logo et description
- Liens organisés par catégorie
- Réseaux sociaux (placeholders)
- Copyright dynamique

## 🔧 Personnalisation

### Couleurs

Les couleurs personnalisées sont définies dans `tailwind.config.ts` :

```typescript
cultiva: {
  green: "#1B8A3A",
  darkGreen: "#0E5A2B",
  yellow: "#F5B400",
}
```

### SEO

Les métadonnées SEO sont configurées dans `src/app/layout.tsx` :
- Title
- Description
- Keywords
- Open Graph
- Schema.org

### Images

Les images sont actuellement des placeholders. Pour les remplacer :
1. Ajoutez vos images dans `public/`
2. Mettez à jour les composants correspondants

## 📱 Responsive Design

Le site est optimisé pour :
- **Desktop** (> 1024px)
- **Tablette** (768px - 1024px)
- **Mobile** (< 768px)

## ♿ Accessibilité

- Structure sémantique HTML
- Contraste des couleurs respecté
- Navigation clavier
- ARIA labels où nécessaire

## 🚀 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Autres plateformes

1. **Build pour production**
   ```bash
   npm run build
   ```

2. **Le dossier `.next` contient le build**

## 📝 Notes de développement

- Le code utilise TypeScript pour la sécurité des types
- Les composants sont modulaires et réutilisables
- Les animations Framer Motion sont optimisées pour la performance
- Le code est commenté pour une maintenance facile

## 🔮 Améliorations futures

- [ ] Intégration de vraies images
- [ ] Formulaire de contact fonctionnel
- [ ] Intégration Google Maps
- [ ] Tests E2E avec Playwright
- [ ] Internationalisation (i18n)
- [ ] Mode sombre
- [ ] PWA (Progressive Web App)

## 📄 Licence

Ce projet est développé pour MOSES EMPIRE.

## 👥 Contact

Pour toute question ou suggestion concernant le projet CULTIVA, veuillez contacter l'équipe de développement.

---

**Développé avec ❤️ pour les agriculteurs africains**

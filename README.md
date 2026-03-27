# Site Vitrine - CUBE

Une application web moderne de type site vitrine construite avec **React**, **Vite**, et **TailwindCSS**. Ce projet présente des services, des formations et des témoignages dans une interface élégante et responsive.

## 🚀 Fonctionnalités

- **Interface moderne** : Design épuré avec animations fluides grâce à [Motion](https://motion.dev/)
- **Navigation fluide** : Routage côté client avec React Router v7
- **Responsive Design** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Composants réutilisables** : Architecture modulaire avec des composants pour :
  - Header & Hero
  - Cartes de services
  - Cartes de formations
  - Témoignages
  - Accordéon interactif
- **Effets visuels** : Animations et effets de transition modernes

## 📦 Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| React | 18.3.1 | Bibliothèque UI |
| Vite | 6.0.5 | Build tool ultra-rapide |
| React Router | 7.1.3 | Routage |
| TailwindCSS | 3.4.17 | Framework CSS utilitaire |
| Motion | 12.0.6 | Bibliothèque d'animation |
| ESLint | 9.17.0 | Linting du code |

## 🛠️ Installation

### Prérequis

- Node.js (v18 ou supérieur recommandé)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd site_vitrine
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans votre navigateur**
   ```
   http://localhost:5173
   ```

## 📜 Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement avec hot-reload |
| `npm run build` | Compile l'application pour la production |
| `npm run preview` | Prévisualise la version production localement |
| `npm run lint` | Exécute ESLint pour analyser le code |

## 📁 Structure du projet

```
site_vitrine/
├── public/                 # Fichiers statiques
│   └── assets/            # Images, vidéos, logos
├── src/
│   ├── components/        # Composants React
│   │   ├── Accordion.jsx
│   │   ├── FormationCard.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── TestimonialCard.jsx
│   ├── App.jsx           # Composant principal
│   ├── main.jsx          # Point d'entrée
│   └── index.css         # Styles globaux
├── index.html            # HTML principal
├── vite.config.js        # Configuration Vite
├── tailwind.config.js    # Configuration TailwindCSS
└── package.json          # Dépendances et scripts
```

## 🎨 Sections du site

1. **Header** : Navigation principale
2. **Hero** : Section d'introduction avec appel à l'action
3. **Partenaires** : Logos des partenaires
4. **À propos** : Présentation de l'entreprise avec vidéo et accordéon
5. **Services** : Grille de cartes présentant les services offerts
6. **Formations** : Catalogue des formations disponibles
7. **Témoignages** : Avis et retours d'expérience

## 🔧 Configuration

### TailwindCSS

La configuration Tailwind est personnalisée dans `tailwind.config.js`. Les couleurs, polices et autres paramètres peuvent être modifiés selon vos besoins.

### Vite

La configuration Vite se trouve dans `vite.config.js`. Vous pouvez y ajouter des plugins ou modifier les options de build.

## 📝 Personnalisation

Pour personnaliser le contenu :

1. **Textes** : Modifiez les fichiers dans `src/components/`
2. **Images/Vidéos** : Remplacez les fichiers dans `public/assets/`
3. **Couleurs** : Ajustez la configuration TailwindCSS
4. **Données** : Ajoutez des données dynamiques aux composants

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## 📄 Licence

Ce projet est privé et réservé à un usage interne.

---

Développé avec ❤️ par CUBE

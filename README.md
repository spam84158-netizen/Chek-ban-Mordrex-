# XYLDREX CHECK BAN

App web (packagée en APK Android via Capacitor) qui vérifie si un numéro WhatsApp est banni.
Créateur : **Dr Xyldrex Mordrex** — Xyldrex Society.

L'app utilise la même API que le projet d'origine, hébergée sur Render :
**https://inconnu-check-ban-api.onrender.com**

---

## Structure du projet

```
.
├── inconnuboy/
│   └── index.html          # L'app entière (thème gothique Xyldrex)
├── android-icons/
│   └── logo-source.png     # Logo utilisé pour générer l'icône Android
├── .github/workflows/
│   └── build-apk.yml       # Build automatique de l'APK via GitHub Actions
├── capacitor.config.json   # Nom de l'app, appId, dossier web
└── package.json
```

## Personnalisation — directement dans l'app (sans toucher au code)

Une fois l'app ouverte :

- **Nom affiché** : clique sur le titre, ou menu ☰ → *Modifier le nom*
- **Fond d'écran & emblème** : menu ☰ → *Paramètres* → uploade tes images (sauvegardées sur l'appareil)
- **Son joué à l'entrée** : Paramètres → *Son d'entrée* → uploade ton fichier audio
- **Couleur du thème** : Paramètres → palette de couleurs ou sélecteur libre
- **Messages "Banni" / "Actif"** : Paramètres → libellé + texte pour chaque statut
- **Canaux WhatsApp / Telegram** : menu ☰ → *Xyldrex Society* → colle tes liens (stockés en base64, déverrouillés avec un effet de déchiffrement à l'ouverture)
- Un bouton **Réinitialiser** remet tout par défaut

## Personnalisation — dans le code (permanent, pour tout le monde)

Tout est dans `inconnuboy/index.html`. Repères utiles dans le `<script>` :

| Ce que tu veux changer | Où le trouver |
|---|---|
| URL de l'API de vérification | `const PROXY_URL = '...'` |
| Lien de support | `const SUPPORT_LINK = '...'` |
| Liens WhatsApp / Telegram par défaut (base64) | `DEFAULT_WA_B64` / `DEFAULT_TG_B64` (ou directement depuis l'app) |
| Son d'entrée par défaut | balise `<audio id="entrySound">` en haut du `<body>` |
| Nom / appId Android | `capacitor.config.json` — à faire **avant** le premier `npx cap add android` |
| Icône Android | remplace `android-icons/logo-source.png` |

## Build

```bash
npm install
npx cap add android      # une seule fois
npx cap sync android      # après chaque modif
npx cap open android      # ouvre Android Studio
```

Ou laisse `.github/workflows/build-apk.yml` construire l'APK automatiquement à chaque push sur `main` (récupérable dans **Actions → run → Artifacts**).

---

**Dr Xyldrex Mordrex — Xyldrex Society**
# Chek-ban-Mordrex-

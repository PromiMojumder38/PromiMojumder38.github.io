<div align="center">

# Promi Mojumder — Portfolio

**Software Engineer & ML Researcher**

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-0a192f?style=for-the-badge&logo=github)](https://promimojumder38.github.io)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=flat&logo=github)](https://promimojumder38.github.io)

</div>

---

## About

Personal academic portfolio for **Promi Mojumder**, a Software Engineering graduate from Shahjalal University of Science & Technology (SUST), Bangladesh. Specialised in Data Science, Machine Learning, and full-stack web development.

The site showcases:
- Research publications & interests (NLP, Computer Vision, Data Science)
- Projects with live demos and GitHub links
- Skills, experience, education, and awards
- Contact form powered by [Formspree](https://formspree.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Tailwind CSS v4 |
| Build | Vite 6 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |
| Contact Form | Formspree (no backend required) |
| Deployment | GitHub Pages via GitHub Actions |

---

## Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/PromiMojumder38/PromiMojumder38.github.io.git
cd PromiMojumder38.github.io

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at `http://localhost:3000`.

---

## Deploy to GitHub Pages

Deployment is fully automated via GitHub Actions. Every push to `main` triggers a build and deploy to `https://promimojumder38.github.io`.

### First-time setup

1. Go to your repo on GitHub → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push any change to `main` — the workflow builds and deploys automatically

### Workflow

The workflow is at [.github/workflows/deploy.yml](.github/workflows/deploy.yml). It:
1. Installs Node 20 and runs `npm ci`
2. Builds with `vite build` → outputs to `dist/`
3. Uploads `dist/` as a Pages artifact and deploys

---

## Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io) — free, no backend or environment variables needed.

1. Go to [formspree.io/new](https://formspree.io/new) and create a form with your email (`promimojumder8@gmail.com`)
2. Copy your form ID (e.g. `xyzabcde`)
3. Open [src/services/contact.ts](src/services/contact.ts) and replace `YOUR_FORM_ID`:

```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

4. Commit and push — the contact form will work live

Free tier: **50 submissions/month**.

---

## Project Structure

```
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions — build & deploy to Pages
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   └── sections/       # Hero, Skills, Experience, Research, Projects, etc.
│   ├── context/            # ThemeContext (dark/light mode)
│   ├── data/               # Portfolio content data
│   ├── services/
│   │   └── contact.ts      # Formspree API client
│   └── types/              # TypeScript types
├── index.html
├── vite.config.ts
└── vercel.json             # (kept for optional Vercel deploy)
```

---

## Features

- **Dark / Light mode** — persists via localStorage
- **Fully responsive** — mobile-first design
- **Smooth animations** — section transitions with Motion
- **SEO optimised** — meta tags, Open Graph, Twitter Cards
- **Contact form** — via Formspree (no server needed)
- **PDF CV download** — direct link to `cv.pdf`

---

## License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

Made with care by **Promi Mojumder**

</div>

<div align="center">

# Promi Mojumder — Portfolio

**Software Engineer & ML Researcher**

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-0a192f?style=for-the-badge&logo=vercel)](https://promimojumder38.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)](https://vitejs.dev)

</div>

---

## About

Personal academic portfolio for **Promi Mojumder**, a Software Engineering graduate from Shahjalal University of Science & Technology (SUST), Bangladesh. Specialised in Data Science, Machine Learning, and full-stack web development.

The site showcases:
- Research publications & interests (NLP, Computer Vision, Data Science)
- Projects with live demos and GitHub links
- Skills, experience, education, and awards
- A working contact form with email delivery

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Tailwind CSS v4 |
| Build | Vite 6 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |
| Backend (API) | Express (local dev) / Vercel Serverless Functions (prod) |
| Email | Nodemailer (Gmail SMTP) |
| Deployment | Vercel |

---

## Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/PromiMojumder38/PromiMojumder38.github.io.git
cd PromiMojumder38.github.io

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local
# Fill in your email credentials (see Environment Variables below)

# 4. Start the dev server
npm run dev
```

The app runs at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
CONTACT_EMAIL=your-receiving-email@gmail.com
```

> For Gmail, generate an **App Password** at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) (requires 2FA enabled). Do **not** use your regular Gmail password.

If these variables are not set, the contact form still returns success but logs the message to the console instead of sending an email.

---

## Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PromiMojumder38/PromiMojumder38.github.io)

### Manual Deploy

```bash
npm install -g vercel
vercel --prod
```

Add the environment variables (`EMAIL_SERVICE`, `EMAIL_USER`, `EMAIL_PASS`, `CONTACT_EMAIL`) in your Vercel project's **Settings → Environment Variables**.

### Build Settings (auto-detected via `vercel.json`)

| Setting | Value |
|---|---|
| Build Command | `vite build` |
| Output Directory | `dist` |
| Framework | Vite |

---

## Project Structure

```
├── api/
│   └── contact.ts          # Vercel serverless function (contact form)
├── public/                 # Static assets
├── server/
│   └── routes/contact.ts   # Express route (local dev only)
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   └── sections/       # Hero, Skills, Experience, Research, Projects, etc.
│   ├── context/            # ThemeContext (dark/light mode)
│   ├── data/               # Portfolio content data
│   ├── services/           # API client (contact form)
│   └── types/              # TypeScript types
├── index.html
├── server.ts               # Express dev server
├── vite.config.ts
└── vercel.json             # Vercel deployment config
```

---

## Features

- **Dark / Light mode** — persists via localStorage
- **Fully responsive** — mobile-first design
- **Smooth animations** — section transitions with Motion
- **SEO optimised** — meta tags, Open Graph, Twitter Cards
- **Contact form** — real email delivery via Gmail SMTP
- **PDF CV download** — direct link to `cv.pdf`

---

## License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

Made with care by **Promi Mojumder**

</div>

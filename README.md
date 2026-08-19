# Cairn Landing Page

Cairn is a responsive premium home page concept for a cloud migration assistant. The product pitch is simple: help teams move services to the cloud with generated infrastructure, CI/CD setup, monitoring, review gates, and rollback readiness before anything runs.

This project was built for the Acdyon Technologies frontend assessment, Part 2: The Premium Home Page.

## Live Links

- Deployed URL: add after deployment
- GitHub repo: add after publishing

## What Is Included

- Hero section with a clear value proposition and primary call to action
- Decorative migration pipeline visual in the hero
- Interactive product showcase for a `payments-api` migration
- Feature, reliability, metrics, FAQ, and request-access sections
- Responsive layout for mobile and desktop widths
- Honest product copy without fabricated testimonials, fake logos, or fake customer counts

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

On Windows PowerShell, if `npm run ...` is blocked by script execution policy, use:

```bash
npm.cmd run dev
npm.cmd run build
```

## Project Structure

```text
src/
  components/
    Hero.jsx
    MigrationAssistant.jsx
    ProductShowcase.jsx
    ...
  theme/
    tokens.js
  App.jsx
  main.jsx
  styles.css
```

## Assessment Notes

The main written explanation is in `DECISIONS.md`.


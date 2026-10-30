# Nandani Parmar — AI Systems Lab

Original React portfolio built with Vite, Tailwind CSS v4 and Lucide icons. The public reference repository was used to understand organization only. Personal content, design and components are Nandani's portfolio.

## Run locally (Node 22.12+ or Node 24)

```powershell
cd D:\Nandini_resume
npm install
npm run dev
```

Use the URL Vite prints. Changes refresh automatically. The development server reads `src`; it does not need `dist`.

```powershell
npm run build
npm run preview
```

The build creates `dist`. Preview serves that production build.

## Structure

```
src/
  main.jsx                 React entry point
  App.jsx                  Application root
  pages/Home.jsx           Section order and theme state
  components/              Navbar, Hero, AIWorkspace, About, Education,
                           Skills, Projects, ProjectDemo, ProjectDialog,
                           Certifications, Contact, Footer, Section
  data/                    profile.js, projects.js, skills.js, workflows.js
  styles/index.css         Tailwind import, theme tokens, base accessibility
public/
  resume.pdf               Downloadable resume
  favicon.svg              Original AI network icon
vite.config.js             React and Tailwind Vite plugins
```

Use Tailwind utilities inside components for layout, colors, spacing and responsive styling. The small stylesheet defines theme colors, shared base behavior and animation keyframes only. There is no legacy CSS file or inline CSS layout system.

Update LinkedIn, email and education in `src/data/profile.js`. Update project URLs in `src/data/projects.js`. Replace `public/resume.pdf` to update the resume download.

## GitHub and Render

Commit source, public files, package.json, package-lock.json, vite.config.js and index.html. Do not commit `node_modules`, `dist` or `.env` files. No secrets are required.

On Render choose **New > Static Site**, connect your own GitHub repository, then use:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Root directory: leave blank when package.json is at the repository root

If you upload this project inside a subfolder, set that subfolder as Render's root directory. This portfolio uses section anchors, not routed pages, so no SPA rewrite is needed. No backend or paid web service is required.

`dist` is generated output: Render creates it and serves its HTML, CSS, JavaScript and resume. Deleting your local `dist` is safe; recreate it with `npm run build`. Your source remains in `src`.

## Interaction boundaries

AI workspace and project examples are clearly labeled illustrative workflows, not live AI API calls. Contact opens a mail app or copies an email address. Certificates and project buttons open their external URLs. No fake contact form, credentials, deployment or GitHub publication is included.


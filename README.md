# Virendra Solanki Portfolio

A clean, modern personal portfolio website built with React and Vite.

## What this repo contains

- A polished Shopify-focused portfolio experience
- Project showcase section with Shopify launch details
- Resume download and contact CTA
- Responsive layout and animated project cards
- Local asset imports and Vite-optimized image handling

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in the terminal.

## GitHub repo setup

If you want to push this project to GitHub as `virendra-solanki-portfolio`:

1. Create a new repo on GitHub named `virendra-solanki-portfolio`.
2. In this project folder, initialize Git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/virendrasolanki03/virendra-solanki-portfolio.git
   git branch -M main
   git push -u origin main
   ```

> Replace `virendrasolanki03` with your GitHub username.
## GitHub Pages deployment

This project is configured for GitHub Pages deployment.

1. Push your `main` branch to GitHub.
2. Ensure GitHub Pages is configured to use the `gh-pages` branch.
3. On the first push, GitHub Actions will build and publish your site automatically.

You can also deploy manually after installing dependencies:

```bash
npm install
git add .
git commit -m "Add GitHub Pages deploy config"
npm run deploy
```
# Deploying Your Next.js Portfolio to GitHub Pages

## Prerequisites

Make sure you have these installed:
- **Node.js** (v18 or later) → https://nodejs.org
- **Git** → https://git-scm.com
- **A GitHub account** → https://github.com

---

## Step 1: Create the GitHub Repository

1. Go to https://github.com/new
2. Name the repository **exactly** `<your-username>.github.io`
   - Example: if your GitHub username is `farelryan`, name it `farelryan.github.io`
3. Set it to **Public**
4. Do NOT initialize with a README (you'll push your own code)
5. Click **Create repository**

---

## Step 2: Set Up the Project Locally

Open your terminal and navigate to the `portfolio` folder you downloaded:

```bash
cd portfolio
```

Install the dependencies:

```bash
npm install
```

Test it locally:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to preview the site.

---

## Step 3: Customize Your Content

Before deploying, update these files with your real info:

### `src/components/Hero.jsx`
- Replace the placeholder avatar `<i>` tag with your actual photo:
  ```jsx
  <img src="/your-photo.jpg" alt="Farel Ryan" className="w-full h-full object-cover" />
  ```
  (Put the image file in the `public/` folder)

### `src/components/Portfolio.jsx`
- Update the `projects` array with your real project names, descriptions, and GitHub links

### `src/components/Contact.jsx`
- Update the `socials` array with your real profile URLs:
  ```js
  { icon: 'fab fa-github', href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', href: 'https://instagram.com/YOUR_HANDLE', label: 'Instagram' },
  { icon: 'fab fa-whatsapp', href: 'https://wa.me/YOUR_NUMBER', label: 'WhatsApp' },
  ```

### `src/components/About.jsx`
- Update skill percentages and stat numbers
- Replace lorem ipsum with your real bio

---

## Step 4: Push to GitHub

Initialize git and push:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

Replace `<your-username>` with your actual GitHub username.

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. That's it! The workflow file (`.github/workflows/deploy.yml`) is already included in the project

---

## Step 6: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once done, visit `https://<your-username>.github.io/`

---

## Updating Your Site

Whenever you want to make changes:

```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Action will automatically rebuild and redeploy your site.

---

## Troubleshooting

### Site shows 404
- Make sure the repository name matches `<username>.github.io` exactly
- Check that GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch")
- Wait a few minutes after the workflow completes

### Build fails in GitHub Actions
- Check the Actions tab for error logs
- Make sure `npm run build` works locally first
- Ensure all imports are correct

### Styles not loading
- If deploying as a project site (e.g., `username.github.io/portfolio`), update `basePath` in `next.config.js`:
  ```js
  basePath: '/portfolio',
  ```

### Images not showing
- All images should be in the `public/` folder
- Reference them with `/image-name.jpg` (or `${basePath}/image-name.jpg` for project sites)

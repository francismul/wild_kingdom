# GitHub Pages Deployment Guide

This guide will help you deploy your Wild Kingdom application to GitHub Pages.

## Prerequisites

- A GitHub account
- This repository forked or cloned to your GitHub account
- Repository must be public (or GitHub Pro for private repos with Pages)

## Setup Instructions

### Step 1: Configure GitHub Pages Settings

1. Go to your repository on GitHub: `https://github.com/<your-username>/wild_kingdom`
2. Click on **Settings** (top right of the repository page)
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** from the dropdown
5. Save the settings (if prompted)

### Step 2: Trigger the First Deployment

You have three options to trigger your first deployment:

#### Option A: Push to Main Branch (Automatic)
```bash
git checkout main
git pull
# Make any change or just trigger a rebuild
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

#### Option B: Manual Workflow Trigger
1. Go to the **Actions** tab in your GitHub repository
2. Select "Deploy to GitHub Pages" from the workflows list
3. Click the **Run workflow** button (on the right)
4. Select the `main` branch
5. Click **Run workflow**

#### Option C: Create and Push a Version Tag
```bash
git tag v1.0.1
git push origin v1.0.1
```

### Step 3: Monitor the Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run named "Deploy to GitHub Pages"
3. Click on it to see the progress
4. The workflow has two jobs:
   - **build**: Installs dependencies and builds the project
   - **deploy**: Deploys the built files to GitHub Pages

### Step 4: Access Your Deployed Site

Once the deployment is complete (usually takes 1-3 minutes):

1. Go back to **Settings** > **Pages**
2. At the top, you'll see a message: "Your site is live at `https://<your-username>.github.io/wild_kingdom/`"
3. Click the link or copy the URL to visit your deployed application

## Deployment Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers on**:
   - Push to `main` branch
   - Version tags (e.g., `v1.0.0`, `v2.1.3`)
   - Manual workflow dispatch

2. **Build Process**:
   - Uses pnpm for package management
   - Installs all dependencies from `pnpm-lock.yaml`
   - Runs `pnpm run build` to create production-ready files
   - Adds `.nojekyll` file to prevent Jekyll processing
   - Uploads the `dist/` directory as a Pages artifact

3. **Deploy Process**:
   - Uses official GitHub Pages deployment action
   - Deploys to the `github-pages` environment
   - Provides a deployment URL in the workflow output

## Troubleshooting

### Deployment Failed

1. Check the Actions tab for error messages
2. Common issues:
   - **Build errors**: Check if the build works locally with `pnpm run build`
   - **Permission errors**: Ensure GitHub Actions is enabled in repository settings
   - **Pages not enabled**: Verify Pages source is set to "GitHub Actions"

### Site Not Loading Properly

1. Check browser console for errors
2. Common issues:
   - **404 errors**: Ensure `.nojekyll` file is being created
   - **Path issues**: Verify all asset paths are relative

### How to Redeploy

Simply push to the `main` branch or manually trigger the workflow:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
```

The deployment will start automatically.

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `wildkingdom.example.com`)
3. Follow GitHub's instructions to configure DNS records
4. GitHub will automatically generate SSL certificates

## Repository Visibility

- **Public repositories**: GitHub Pages is free
- **Private repositories**: Requires GitHub Pro, Team, or Enterprise

## Support

For more information, see:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Repository Issues](https://github.com/francismul/wild_kingdom/issues)

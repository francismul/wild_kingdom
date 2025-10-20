# GitHub Pages Deployment Flow

This document illustrates the complete deployment flow for the Wild Kingdom application.

## Deployment Triggers

```
┌─────────────────────────────────────────────────────────────┐
│                    Deployment Triggers                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Push to main branch                                     │
│     git push origin main                                    │
│                                                              │
│  2. Create version tag                                      │
│     git tag v1.0.0 && git push origin v1.0.0              │
│                                                              │
│  3. Manual workflow dispatch                                │
│     GitHub Actions UI > Run workflow                        │
│                                                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
```

## Workflow Execution

```
┌──────────────────────────────────────────────────────────────┐
│                    GitHub Actions Workflow                    │
│                  (.github/workflows/deploy.yml)               │
└──────────────────────┬───────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
┌───────────────────┐         ┌──────────────────┐
│   BUILD JOB       │         │   DEPLOY JOB     │
│   (runs first)    │────────>│  (runs after)    │
└───────────────────┘         └──────────────────┘
```

## Build Job Steps

```
┌─────────────────────────────────────────────────────────────┐
│                        Build Job                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Step 1: Checkout repository                                │
│     ✓ Clone code from GitHub                               │
│                                                              │
│  Step 2: Setup pnpm (v10.18.3)                             │
│     ✓ Install package manager                              │
│                                                              │
│  Step 3: Setup Node.js (v18)                               │
│     ✓ Configure Node environment                           │
│     ✓ Setup pnpm cache                                     │
│                                                              │
│  Step 4: Install dependencies                               │
│     $ pnpm install --frozen-lockfile                       │
│     ✓ Install all packages from pnpm-lock.yaml            │
│                                                              │
│  Step 5: Build application                                  │
│     $ pnpm run build                                       │
│     ✓ Parcel bundles and optimizes code                   │
│     ✓ Output: dist/ directory                             │
│                                                              │
│  Step 6: Add .nojekyll file                                │
│     $ touch dist/.nojekyll                                 │
│     ✓ Prevents GitHub from Jekyll processing              │
│                                                              │
│  Step 7: Upload Pages artifact                             │
│     ✓ Package dist/ directory                             │
│     ✓ Upload to GitHub Pages artifact storage             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Deploy Job Steps

```
┌─────────────────────────────────────────────────────────────┐
│                       Deploy Job                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Environment: github-pages                                   │
│                                                              │
│  Step 1: Deploy to GitHub Pages                            │
│     ✓ Download artifact from build job                    │
│     ✓ Deploy to GitHub Pages infrastructure               │
│     ✓ Generate deployment URL                             │
│                                                              │
│  Output:                                                    │
│     → https://<username>.github.io/wild_kingdom/          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Complete Flow Diagram

```
                    ┌─────────────┐
                    │   Trigger   │
                    │ (Push/Tag)  │
                    └──────┬──────┘
                           │
                           ▼
                  ┌────────────────┐
                  │ GitHub Actions │
                  │    Starts      │
                  └────────┬───────┘
                           │
                           ▼
              ┌────────────────────────┐
              │     Checkout Code      │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │   Setup Environment    │
              │  (Node, pnpm, cache)   │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │  Install Dependencies  │
              │   pnpm install         │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │    Build Project       │
              │    pnpm run build      │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │  Add .nojekyll File    │
              │  (prevent Jekyll)      │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │  Upload Artifact       │
              │  (dist/ directory)     │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │  Deploy to Pages       │
              │  (official action)     │
              └────────┬───────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │    Site is Live! 🎉    │
              │  https://....io/...    │
              └────────────────────────┘
```

## Timing

| Step | Approximate Time |
|------|-----------------|
| Checkout | 5-10 seconds |
| Setup | 10-20 seconds |
| Install dependencies | 20-60 seconds |
| Build | 5-15 seconds |
| Upload artifact | 5-10 seconds |
| Deploy | 30-90 seconds |
| **Total** | **1-3 minutes** |

## Permissions

The workflow has the following permissions:

```yaml
permissions:
  contents: read      # Read repository code
  pages: write        # Deploy to GitHub Pages
  id-token: write     # Authentication for deployment
```

## Concurrency

Only one deployment runs at a time:

```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```

This ensures:
- Multiple pushes don't create conflicting deployments
- Each deployment completes fully before the next starts
- No race conditions or partial deployments

## Environment Variables

The workflow automatically provides:

- `GITHUB_TOKEN`: For authentication
- `github-pages` environment: For deployment tracking
- Deployment URL: Available after deployment completes

## Monitoring

Track deployment progress:

1. **GitHub Actions Tab**
   - View running workflows
   - See detailed logs for each step
   - Check for errors or warnings

2. **Deployments Tab**
   - View deployment history
   - See active deployment URLs
   - Track deployment status

3. **Settings > Pages**
   - View current site URL
   - Check Pages configuration
   - See deployment source

## Rollback

If a deployment fails or has issues:

1. **Revert the commit:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Deploy previous tag:**
   ```bash
   git push origin v1.0.0
   ```

3. **Manual workflow with older commit:**
   - Go to Actions tab
   - Select workflow
   - Run with specific commit/branch

---

**For detailed setup instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

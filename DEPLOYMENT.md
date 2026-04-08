# Deployment Guide

This application can be deployed to GitHub Pages or Azure Static Web Apps.

## 📦 Prerequisites

- Node.js 20 or higher
- GitHub account
- Azure account (for Azure deployment)

## 🚀 Deploy to GitHub Pages

### Quick Setup

1. **Enable GitHub Pages in Repository Settings**
   - Go to your repository → Settings → Pages
   - Under "Build and deployment", select:
     - Source: **GitHub Actions**
   
2. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Access Your Site**
   - Your site will be available at: `https://<username>.github.io/<repository-name>/`
   - Check deployment status in the "Actions" tab

### Configuration

The GitHub Pages deployment is configured in `.github/workflows/deploy-github-pages.yml`.

**Important Notes:**
- Builds are automatic on every push to `main`
- The workflow uses Node.js 20
- Build output is from `client/dist`

---

## ☁️ Deploy to Azure Static Web Apps

### Setup Steps

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource" → Search for "Static Web Apps"
   - Click "Create"

2. **Configure Deployment**
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: Enter a name for your app (e.g., `verify8-brand`)
   - **Region**: Choose closest region
   - **Deployment Details**:
     - Source: **GitHub**
     - Sign in and authorize Azure
     - Organization: Your GitHub username/org
     - Repository: Your repository name
     - Branch: `main`
   - **Build Details**:
     - Build Presets: **Custom**
     - App location: `/client`
     - Api location: (leave empty)
     - Output location: `dist`

3. **Add Deployment Token to GitHub**
   - After creation, Azure generates a deployment token
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Create new secret:
     - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
     - Value: (paste the token from Azure Portal)

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Azure"
   git push origin main
   ```

5. **Access Your Site**
   - Your site will be available at: `https://<app-name>.azurestaticapps.net`
   - Check deployment in Azure Portal or GitHub Actions

### Azure Configuration

- Routing configuration: `staticwebapp.config.json`
- Workflow file: `.github/workflows/deploy-azure.yml`

### Custom Domain (Optional)

1. Go to Azure Portal → Your Static Web App → Custom domains
2. Click "Add"
3. Follow instructions to configure DNS
4. Azure provides free SSL certificates

---

## 🔧 Build Locally

Test the production build locally:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build
cd client/dist
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## 🐛 Troubleshooting

### GitHub Pages Issues

**Problem**: 404 errors or blank page
- **Solution**: Ensure GitHub Pages is set to use "GitHub Actions" as source

**Problem**: Assets not loading
- **Solution**: Check that all asset paths are relative or use the `@assets` alias

### Azure Issues

**Problem**: Deployment fails
- **Solution**: Verify the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret is correctly set

**Problem**: 404 on routes
- **Solution**: Ensure `staticwebapp.config.json` is in the root directory

---

## 📊 Monitoring

### GitHub Pages
- View deployments in the "Actions" tab
- Each commit triggers a new deployment

### Azure Static Web Apps
- Monitor in Azure Portal → Your app → Deployment History
- View logs in GitHub Actions tab

---

## 🔐 Environment Variables

This application doesn't require environment variables, but if you add any in the future:

### GitHub Pages
Add to `.github/workflows/deploy-github-pages.yml` under the build step:
```yaml
env:
  VITE_API_URL: ${{ secrets.API_URL }}
```

### Azure
Add in Azure Portal → Configuration → Application settings

---

## 📝 Notes

- Both platforms support automatic deployments on push to `main`
- GitHub Pages is free for public repositories
- Azure Static Web Apps has a free tier with generous limits
- SSL certificates are provided automatically by both platforms

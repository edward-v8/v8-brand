# Verify8 Brand Page

A clean, professional brand page showcasing the Verify8 logo, brand colors, and assets.

## 🌟 Features

- Official Verify8 logo variations (color, white, horizontal, icon-only)
- Brand color palette with hex codes
- Typography guidelines
- Responsive design
- Clean, modern interface

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5000` to view the application.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment

This application can be deployed to GitHub Pages or Azure Static Web Apps.

### Deploy to GitHub Pages

1. Enable GitHub Pages in your repository settings
   - Settings → Pages → Source: **GitHub Actions**

2. Push to the `main` branch
   ```bash
   git push origin main
   ```

3. Your site will be live at: `https://<username>.github.io/<repository-name>/`

### Deploy to Azure Static Web Apps

1. Create an Azure Static Web App in the [Azure Portal](https://portal.azure.com)
2. Connect to your GitHub repository
3. Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your GitHub repository
4. Push to trigger deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Backend**: Express.js (for development)

## 📁 Project Structure

```
.
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── index.css      # Global styles
│   └── public/            # Static assets
├── attached_assets/       # Brand assets (logos)
├── .github/
│   └── workflows/         # CI/CD workflows
├── staticwebapp.config.json  # Azure configuration
└── DEPLOYMENT.md          # Deployment guide
```

## 📝 Brand Assets

All Verify8 brand assets are located in the `attached_assets/` directory:

- Primary Logo (Color)
- Horizontal Logo (Color)
- Primary Logo (White)
- Horizontal Logo (White)
- Icon Only (No Label)

## 🎨 Brand Colors

- **Cyan**: #0BA5C9
- **Orange**: #E8A638
- **Gray**: #6B7280
- **White**: #FFFFFF
- **Black**: #000000

## 📄 License

MIT

## 🔗 Links

- [Verify8 Official Website](https://verify8.com)
- [Brand Guidelines](https://brand.verify8.com)

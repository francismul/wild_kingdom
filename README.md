# Wild Kingdom - Interactive Animal Showcase

An immersive web application showcasing the Big Five African animals with smooth animations and interactive galleries.

## Features

- **Interactive Landing Page**: Choose between vertical scroll and horizontal carousel layouts
- **Individual Animal Pages**: Dedicated pages for Lion, Leopard, Rhino, Elephant, and Cape Buffalo
- **Smooth Animations**: Powered by GSAP and Lenis for buttery-smooth scrolling
- **Autoscrolling Galleries**: Automatic image carousels with pause-on-hover functionality
- **Responsive Design**: Optimized for all screen sizes
- **Loading Animations**: Elegant loading spinners for enhanced user experience

## Technologies Used

- **TypeScript**: For type-safe JavaScript development
- **GSAP**: High-performance animation library
- **Lenis**: Smooth scrolling library
- **Parcel**: Zero-configuration bundler
- **SCSS/CSS**: Modern styling with custom properties

## Project Structure

```
src/
├── index.html          # Main landing page
├── css/
│   └── style.css       # Global styles and animations
├── ts/
│   └── main.ts         # Main application logic and animations
├── [animal].html       # Individual animal detail pages
└── assets/             # Images and other assets
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production (regular)
pnpm run build

# Build for production with JavaScript obfuscation
pnpm run build:obfuscated
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance Optimizations

- **Tree Shaking**: Unused code is automatically removed during build
- **Code Splitting**: JavaScript is split into optimized chunks
- **Image Optimization**: Images are automatically optimized by Parcel
- **CSS Minification**: Styles are minified for production
- **Lazy Loading**: Animations trigger based on scroll position

## Security Features

### JavaScript Obfuscation

For production deployments where code protection is important, use the obfuscated build:

```bash
pnpm run build:obfuscated
```

This command:

- Builds the project without source maps
- Applies high-level JavaScript obfuscation using `javascript-obfuscator`
- Makes the code difficult to read and reverse-engineer
- Maintains functionality while protecting intellectual property

**Note**: Obfuscated code is harder to debug, so use the regular `build` command during development.

## Deployment

### GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

#### Quick Setup

1. Go to your repository **Settings** > **Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` branch or manually trigger the workflow
4. Your site will be live at: `https://<your-username>.github.io/wild_kingdom/`

#### Manual Deployment

You can trigger a deployment manually:
- Go to **Actions** tab > "Deploy to GitHub Pages" > "Run workflow"

## License

MIT License - feel free to use this project. Contributions are welcome!

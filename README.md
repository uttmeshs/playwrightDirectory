# Playwright Commands Dashboard

A comprehensive, interactive dashboard for Playwright automation testing commands. This React application provides a searchable interface to browse, learn, and reference Playwright commands with detailed syntax, parameters, examples, and documentation links.

## Live Demo

**[Try it live at https://playwrightdirectory.netlify.app/](https://playwrightdirectory.netlify.app/)**

## Features

- **Smart Search**: Find commands by name, category, or description
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Category Filtering**: Filter commands by category (locators, actions, assertions, etc.)
- **Copy to Clipboard**: One-click copying of syntax and examples
- **Direct Documentation**: Links to official Playwright documentation
- **Fast & Modern**: Built with Vite for lightning-fast development and builds

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uttmeshs/playwrightDirectory.git
   cd playwrightDirectory/playwright-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the dashboard

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```



## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify's deploy area
3. Or connect your GitHub repository for automatic deployments

## Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test them thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for new features
- Test your changes in both light and dark themes
- Update documentation for new features
- Ensure responsive design works on all screen sizes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Playwright](https://playwright.dev/) - The amazing browser automation library
- [Material-UI](https://mui.com/) - Beautiful React components
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [React](https://react.dev/) - The UI library that powers this dashboard

## Support

If you encounter any issues or have questions:

1. Check the Issues page
2. Create a new issue with detailed information
3. Join the discussion in the Discussions section

---

Made with care for the Playwright community

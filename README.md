# 💰 FinTech Dashboard Web App

> A professional, modern financial dashboard application for managing investments, tracking portfolios, and analyzing market performance. Built with React, TypeScript, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-green)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

## 📋 Table of Contents
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Module Overview](#-module-overview)
- [API Integration](#-api-integration)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

## 🎯 Features

### Core Features
- ✅ **Complete Authentication System** - Secure login/signup with token management
- ✅ **9 Functional Modules** - Dashboard, Analytics, Wallet, Invoice, Portfolio, Charts, Community, Help, Settings
- ✅ **Portfolio Management** - Track and manage stock holdings with real-time metrics
- ✅ **Interactive Charts** - Beautiful financial charts using Recharts (Line, Bar, Pie)
- ✅ **Responsive Design** - Mobile-first, works perfectly on all devices
- ✅ **REST API Ready** - Pre-configured axios client for easy backend integration
- ✅ **State Management** - Lightweight Zustand for efficient state handling

### Dashboard Components

#### Main Dashboard
- 📊 Portfolio performance visualization
- 💹 Real-time statistics cards
- 📈 Interactive charts (Line, Pie, Bar)
- 📋 Transaction history with filters
- 🎨 Beautiful gradient UI

#### Navigation & Modules

| Module | Icon | Purpose | Key Features |
|--------|------|---------|--------------|
| **Dashboard** | 📊 | Financial Overview | Charts, Stats, Transactions |
| **Analytics** | 📈 | Performance Metrics | Traffic, Views, Conversions |
| **Wallet** | 💳 | Account Management | Balance, Transactions, Payments |
| **Invoice** | 📄 | Invoice Management | Billing, Status Tracking |
| **Portfolio** | 🎯 | Holdings Management | Stock Positions, Allocation |
| **Charts** | 📉 | Advanced Visualization | Multiple chart types |
| **Community** | 👥 | Social Features | Forums, Discussions, Members |
| **Help & Support** | 🆘 | Documentation | FAQ, Knowledge Base, Contact |
| **Settings** | ⚙️ | User Configuration | Account, Security, Preferences |

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**
- Modern web browser

### Installation

```bash
# 1. Navigate to project directory
cd "1. FinTech Dashboard Web App (MOST IMPORTANT – DO THIS FIRST)"

# 2. Install dependencies (already done, but if needed)
npm install

# 3. Start development server
npm run dev

# Server runs at: http://localhost:5173/
```

### Demo Credentials
```
Email:    demo@example.com
Password: password123
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.tsx              # Login page
│   ├── Signup.tsx             # User registration
│   └── Sidebar.tsx            # Navigation sidebar
├── pages/
│   ├── Dashboard.tsx          # Main dashboard
│   ├── Analytics.tsx          # Analytics module
│   ├── Wallet.tsx             # Wallet management
│   ├── Invoice.tsx            # Invoice system
│   ├── Portfolio.tsx          # Portfolio tracking
│   ├── Charts.tsx             # Advanced charts
│   ├── Community.tsx          # Community features
│   ├── Help.tsx               # Help & support
│   └── Settings.tsx           # User settings
├── contexts/
│   └── authStore.ts           # Zustand auth state
├── services/
│   └── api.ts                 # Axios HTTP client & endpoints
├── types/
│   └── index.ts               # TypeScript definitions
├── utils/
│   └── formatters.ts          # Helper functions
├── App.tsx                    # Main app with routing
├── main.tsx                   # Entry point
├── index.css                  # Global Tailwind styles
└── App.css                    # Component styles
```

## 🎨 Module Overview

### 🏠 Dashboard Module
Main landing page with financial overview
- **Components:**
  - Portfolio performance chart (7-day history)
  - Asset allocation pie chart
  - Holdings bar chart
  - Stats cards (Value, Gain, Cash, Holdings)
  - Transaction table
- **Tabs:** Overview, Portfolio, Transactions

### 📊 Analytics Module
Performance and traffic metrics
- Key metrics cards
- Traffic overview section
- Top pages list
- User activity tracking

### 💳 Wallet Module
Account and financial management
- Available balance display
- Income/Expense tracking
- Recent transactions history
- Payment method management

### 📄 Invoice Module
Invoice and billing management
- Invoice listing and filtering
- Status tracking (Paid, Pending, Overdue)
- Client information
- Amount tracking

### 🎯 Portfolio Module
Stock holdings management
- Portfolio statistics
- Detailed holdings table
- Stock performance metrics
- Gain/Loss calculations

### 📉 Charts Module
Advanced financial visualizations
- Stock performance chart
- Asset allocation visualization
- Monthly returns analysis
- Trading volume charts
- Portfolio history

### 👥 Community Module
Social and collaborative features
- Community forums
- Member directory
- Discussion threads
- Knowledge sharing

### 🆘 Help & Support Module
Customer support resources
- FAQ section
- Knowledge base
- Contact options
- Support channels

### ⚙️ Settings Module
User configuration and preferences
- Account settings
- Security options (2FA)
- Notification preferences
- Language & timezone

## 🔐 Authentication System

### How It Works

1. **Login Flow**
   ```
   User enters credentials → Validated → Token generated → Stored in localStorage → Access granted
   ```

2. **Protected Routes**
   - All modules except Login/Signup require authentication
   - Token checked on app load
   - Automatic redirect to login if unauthorized

3. **Token Management**
   - Stored in browser's localStorage
   - Sent with every API request via axios interceptor
   - Auto-cleared on logout

### Demo Credentials
```javascript
Email:    demo@example.com
Password: password123
```

Or create a new account using the Signup page

## 🔌 API Integration

### Base Setup

The app uses **Axios** for HTTP requests with pre-configured interceptors:

```javascript
// In src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

// Auto-adds Bearer token to all requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### API Services

#### Stock Service
```typescript
stockService.getStocks(limit)          // Get stock list
stockService.getStock(symbol)          // Get single stock
stockService.searchStocks(query)       // Search stocks
stockService.getStockHistory(symbol)   // Get historical data
```

#### Portfolio Service
```typescript
portfolioService.getPortfolio()        // Get user portfolio
portfolioService.addStock(...)         // Add stock holding
portfolioService.removeStock(id)       // Remove holding
portfolioService.updateStock(...)      // Update holding
```

#### Transaction Service
```typescript
transactionService.getTransactions()   // Get all transactions
transactionService.createTransaction() // Create new transaction
transactionService.getTransaction(id)  // Get single transaction
```

#### Watchlist Service
```typescript
watchlistService.getWatchlist()        // Get watchlist
watchlistService.addToWatchlist(symbol) // Add stock
watchlistService.removeFromWatchlist(id) // Remove stock
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://your-api-domain.com
VITE_API_KEY=your_api_key_here
VITE_TIMEOUT=30000
```

### Example API Integration

```typescript
// Replace mock data with real API
async function fetchPortfolio() {
  try {
    const portfolio = await portfolioService.getPortfolio();
    setPortfolioData(portfolio);
  } catch (error) {
    console.error('Failed to fetch portfolio:', error);
  }
}
```

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',    // Blue
        secondary: '#8b5cf6',  // Purple
        success: '#10b981',    // Green
        warning: '#f59e0b',    // Orange
        danger: '#ef4444',     // Red
      },
    },
  },
};
```

### Chart Colors

Modify in component files:

```typescript
const COLORS = [
  '#3b82f6', // Blue
  '#8b5cf6', // Purple
  '#ec4899', // Pink
  '#f59e0b', // Orange
  '#10b981'  // Green
];
```

### Company Name & Logo

Edit `Sidebar.tsx`:

```tsx
<h1 className="text-xl font-bold">Your Company Name</h1>
```

### Dashboard Data

Update mock data in component files or connect to real API:

```typescript
const portfolioData = [
  { name: 'AAPL', value: 25000 },
  { name: 'GOOGL', value: 18000 },
  // ...
];
```

## 🌐 Responsive Design

The app is fully responsive with Tailwind breakpoints:

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 640px | Single column, full-width sidebar |
| Tablet | 640px - 1024px | Two-column layout |
| Desktop | > 1024px | Full multi-column layout |

### Mobile Features
- Collapsible sidebar (optional)
- Touch-friendly buttons
- Optimized forms
- Readable typography

## 🏗️ Build & Optimization

### Development
```bash
npm run dev      # Start dev server with HMR
npm run lint     # Run ESLint
```

### Production Build
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

### Build Output
```
dist/
├── index.html          (50 KB gzipped)
├── assets/
│   ├── index.css       (18 KB gzipped)
│   └── index.js        (671 KB gzipped)
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts to deploy
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push 'dist' to gh-pages branch
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

```bash
docker build -t fintech-dashboard .
docker run -p 5173:5173 fintech-dashboard
```

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Applied
```bash
# Rebuild project
npm run build

# Or restart dev server
npm run dev
```

### Login Not Working
- Ensure you're using: `demo@example.com` / `password123`
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`

### TypeScript Errors
```bash
# Rebuild TypeScript
tsc --noEmit

# Fix all issues
npx tsc --skipLibCheck
```

## 📚 Learning Resources

| Resource | Link |
|----------|------|
| React Documentation | https://react.dev |
| TypeScript Handbook | https://www.typescriptlang.org/docs |
| Vite Guide | https://vitejs.dev |
| Tailwind CSS | https://tailwindcss.com |
| Recharts | https://recharts.org |
| Zustand | https://github.com/pmndrs/zustand |
| Axios | https://axios-http.com |

## 💡 Next Steps

1. **Connect Backend API**
   - Uncomment API calls in `src/contexts/authStore.ts`
   - Update `VITE_API_URL` in `.env`

2. **Add Real Stock Data**
   - Integrate with Alpha Vantage, IEX Cloud, or Finnhub
   - Update `src/services/api.ts`

3. **Enhance Features**
   - Add watchlist management
   - Implement trade alerts
   - Create user profiles
   - Add export functionality

4. **Improve UI/UX**
   - Add dark mode toggle
   - Create theme customization
   - Add animations
   - Implement notifications

5. **Testing**
   - Add unit tests (Jest)
   - Add E2E tests (Cypress)
   - Improve code coverage

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Keep components modular
- Add comments for complex logic
- Test before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 FinTech Dashboard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/fintech-dashboard/issues)
- **Email**: support@fintech-dashboard.com
- **Documentation**: Check `/docs` folder
- **Community**: Join our Discord server

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Charts by [Recharts](https://recharts.org)
- State management with [Zustand](https://github.com/pmndrs/zustand)

---

<div align="center">

**[⬆ Back to Top](#-fintech-dashboard-web-app)**

Made with ❤️ for aspiring FinTech engineers

Built in 2026 | Updated February 23, 2026

</div>
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


**Project Link:** "https://fin-tech-dashboard-web-app.vercel.app/login"

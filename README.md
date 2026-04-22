# E-Commerce Application

A modern, scalable e-commerce application built with React, TypeScript, Redux Toolkit, and Material-UI. This monorepo project features a modular architecture with separate packages for features, shared components, and store management.

## Features

- **Product Catalog**: Browse and search products with real-time filtering
- **Shopping Cart**: Add, remove, and update item quantities
- **Search History**: Persistent search history using localStorage
- **Responsive Design**: Mobile-first design with Material-UI
- **State Management**: Redux Toolkit with Redux-Saga for async operations
- **Routing**: React Router v6 with lazy loading and error boundaries
- **Testing**: Jest and React Testing Library for unit tests
- **CI/CD**: GitHub Actions for automated testing and deployment

## Tech Stack

- **Frontend**: React 18, TypeScript
- **State Management**: Redux Toolkit, Redux-Saga
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **Build Tool**: Webpack
- **Testing**: Jest, React Testing Library
- **Deployment**: GitHub Pages (via CI/CD)

## Project Structure

```
ecommerce/
├── Apps/
│   └── app/                    # Main application
│       ├── src/
│       │   ├── components/
│       │   │   ├── ErrorPage.tsx
│       │   │   ├── LoadingSpinner.tsx
│       │   │   └── RouterComponent.tsx
│       │   ├── App.tsx
│       │   ├── index.tsx
│       │   └── Routs.tsx
│       └── tsconfig.json
├── packages/
│   ├── features/
│   │   ├── cart/               # Cart feature package
│   │   │   ├── src/
│   │   │   │   ├── actions/
│   │   │   │   ├── components/
│   │   │   │   │   ├── CartPage.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── reducers/
│   │   │   │   ├── sagas/
│   │   │   │   └── index.ts
│   │   │   └── package.json
│   │   ├── home/               # Home page feature
│   │   ├── products/           # Products feature package
│   │   │   ├── src/
│   │   │   │   ├── actions/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ProductCard.tsx
│   │   │   │   │   ├── ProductList.tsx
│   │   │   │   │   ├── SearchBar.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── reducers/
│   │   │   │   ├── sagas/
│   │   │   │   └── index.ts
│   │   │   └── package.json
│   │   └── index.ts
│   ├── shared/                 # Shared utilities and components
│   │   ├── src/
│   │   │   ├── api/
│   │   │   ├── ui/
│   │   │   │   └── components/
│   │   │   │       └── HeaderComponent.tsx
│   │   │   └── index.ts
│   │   └── package.json
│   └── store/                  # Redux store configuration
│       ├── src/
│       │   ├── store.ts
│       │   └── index.ts
│       └── package.json
├── types/
│   └── global.d.ts             # Global type definitions
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── package.json
├── tsconfig.base.json
├── webpack.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## Development

### Adding New Features

1. Create a new package in `packages/features/` for feature-specific code
2. Update the main app routing in `Apps/app/src/Routs.tsx`
3. Add any shared components to `packages/shared/`

### Testing

Run tests with:
```bash
npm test
```

Tests are located next to the components they test (e.g., `Component.test.tsx`).

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## API

This app uses a mock API. In a real application, update the API endpoints in `packages/shared/src/api/client.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License.
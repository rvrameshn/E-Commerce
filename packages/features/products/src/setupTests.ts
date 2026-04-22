// Extend Jest with DOM matchers (toBeInTheDocument, etc.)
import '@testing-library/jest-dom';

// Optional: cleanup after each test (modern RTL does this automatically,
// but keeping it is safe for older setups)
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

// ---- Optional global mocks ---- //

// Mock window.matchMedia (fixes errors in some UI libraries)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated but sometimes used
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollTo (JSDOM doesn't implement it)
window.scrollTo = jest.fn();

// Optional: mock fetch if your app uses it
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  } as Response)
);

// Optional: silence console errors in tests (use carefully)
jest.spyOn(console, 'error').mockImplementation(() => {});
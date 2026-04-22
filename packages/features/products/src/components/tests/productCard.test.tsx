import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../../reducers/productsReducer';
import { cartReducer } from '../../../../cart/src/reducers/cartReducer';
import { ProductCard } from '../productCard';

// Mock the store
const createMockStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      product: productReducer,
      cart: cartReducer,
    },
    preloadedState,
  });
};

const mockProduct = {
  id: '1',
  name: 'Test Product',
  price: 100,
  images: ['https://example.com/image.jpg'],
};

const renderWithProviders = (component: React.ReactElement, store = createMockStore()) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('ProductCard', () => {
  test('renders product details correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  test('dispatches ADD_TO_CART action when Add to Cart button is clicked', () => {
    const mockStore = createMockStore();
    mockStore.dispatch = jest.fn();

    renderWithProviders(<ProductCard product={mockProduct} />, mockStore);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addToCartButton);

    expect(mockStore.dispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: expect.objectContaining({
        id: '1',
        name: 'Test Product',
        price: 100,
        images: ['https://example.com/image.jpg'],
      }),
    });
  });

  test('Buy Now button is present', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument();
  });
});
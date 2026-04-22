import React, { lazy, Suspense } from 'react';
import { store } from 'store';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';



// 1. Define your lazy-loaded components
const HomePage = lazy(() => import('@features/home').then(module => ({ default: module.HomePage })));
const ProductList = lazy(() => import('@features/products').then(module => ({ default: module.ProductList })));
const CartPage = lazy(() => import('@features/cart').then(module => ({ default: module.CartPage })));
// 2. Create a loading component


// Loader for products
const productsLoader = async () => {
  try {
    const { fetchProducts } = await import('@features/products');
    store.dispatch(fetchProducts());
    return null;
  } catch (error) {
    throw new Error('Failed to load products');
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} loader={productsLoader} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);

export function RouterComponent() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

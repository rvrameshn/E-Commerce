import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { productReducer, productRootSaga } from '@features/products';
import { cartReducer, cartRootSaga } from '@features/cart';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([productRootSaga(), cartRootSaga()]);
}

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
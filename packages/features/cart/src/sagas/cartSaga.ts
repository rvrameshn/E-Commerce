import { put, select } from 'redux-saga/effects';

export const addToCart = (action: any) => ({
     type: 'ADD_TO_CART',
     payload: action.payload
});

export function* updateCart(action: any): any {
    // Logic to update cart item
    const currentItems = yield select((state: any) => state.cart.items);
    const existingItem = currentItems.find((item: any) => item.id === action.payload.id);
    
    if (existingItem) {
    yield put({ type: 'INCREASE_QUANTITY', payload: action.payload.id });
  } else {
    let updatedItem = { ...action.payload };
    updatedItem.quantity = (updatedItem.quantity || 0) + 1;
    updatedItem.image = updatedItem.images?.[0] || 'https://via.placeholder.com/150';
    yield put({ type: 'UPDATE_CART', payload: updatedItem });
  }
}
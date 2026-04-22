import { call, put, takeLatest } from 'redux-saga/effects';
import { apiClient } from 'shared';
import { FETCH_PRODUCTS, SET_PRODUCTS } from '../actions';



export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export function* fetchProductsWorker(): any {
  const res = yield call(apiClient.get, '/products');
  yield put({ type: SET_PRODUCTS, payload: res.data.products });
}


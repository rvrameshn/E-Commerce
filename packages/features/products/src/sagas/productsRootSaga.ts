import { takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../actions";
import { fetchProductsWorker } from "./productSaga";

export function* productRootSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsWorker);
}
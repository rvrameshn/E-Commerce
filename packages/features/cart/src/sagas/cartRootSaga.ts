import { takeLatest } from "redux-saga/effects";
import { updateCart } from "./cartSaga";

export function* cartRootSaga(){
    yield takeLatest('ADD_TO_CART', updateCart);
}
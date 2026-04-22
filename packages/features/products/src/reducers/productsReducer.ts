export interface ProductState {
  data: any[];
  loading: boolean;
}

const initialState: ProductState = {
  data: [],
  loading: false
};

export const productReducer = (state: ProductState = initialState, action: any): ProductState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: []
};

export const cartReducer = (state: CartState = initialState, action: any): CartState => {
  switch (action.type) {
    case 'UPDATE_CART': {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
    }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ).filter(item => item.quantity > 0),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
import {
  ADD_TO_CART,
  ADJUST_QUANTITY,
  REMOVE_FROM_CART,
} from "../actions/actionTypes";
export const basketReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existitem = state.cartItem.find((x) => x.id === action.payload.id);

      if (existitem) {
        return {
          ...state,
          cartItem: state.cartItem.map((value) =>
            value.id === item.id ? { ...value, qty: value.qty + 1 } : value
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, { ...item, qty: 1 }],
        };
      }

    case ADJUST_QUANTITY:
      return {
        ...state,
        cartItem: state.cartItem.map((value) =>
          value.id === action.payload.id
            ? { ...value, qty: action.payload.qty }
            : value
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};

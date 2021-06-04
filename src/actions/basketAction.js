import { ADD_TO_CART, ADJUST_QUANTITY, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};
export const adjustQuantity = (id, qty) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: id,
      qty: qty,
    },
  };
};
export const RemovefromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

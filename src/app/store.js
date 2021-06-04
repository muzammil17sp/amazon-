import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { basketReducer } from "../reducers/basketReducer";
import rootReducer from "../reducers/root";
function saveToLocalStorage(state) {
  try {
    const setItem = JSON.stringify(state.basket.cartItem);
    localStorage.setItem("cart", setItem);
  } catch (e) {
    console.warn(e);
  }
}
// function loadFromLocalStorage() {
//     try {
//       const getItem = localStorage.getItem("cart");
//       if (getItem === null) return undefined;
//       return JSON.parse(getItem);
//     } catch (e) {
//       console.warn(e);
//       return undefined;
//     }
//   }

// const initialState = {
//     basket :{
//         cartItem : window.localStorage.cart
//     }
// }

const store = createStore(rootReducer,composeWithDevTools());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
  basket: basketReducer
});
export default rootReducer;

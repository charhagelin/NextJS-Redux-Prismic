import { combineReducers } from "redux";
import prismicReducer from "./prismicReducer";

const rootReducer = combineReducers({
  data: prismicReducer
});

export default rootReducer;

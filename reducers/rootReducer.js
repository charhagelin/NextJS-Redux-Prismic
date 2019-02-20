import { combineReducers } from "redux";
import prismicReducer from "./prismicReducer";

const rootReducer = combineReducers({
  posts: prismicReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import prismicReducer from "./prismicReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  data: prismicReducer,
  form: formReducer
});

export default rootReducer;

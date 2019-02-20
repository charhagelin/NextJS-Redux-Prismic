import { FETCH_PRISMIC } from "../actions/types";

function prismicReducer(state = {}, action) {
  console.log("action", action);
  switch (action.type) {
    case FETCH_PRISMIC:
      return action.posts;
    default:
      return state;
  }
}

export default prismicReducer;

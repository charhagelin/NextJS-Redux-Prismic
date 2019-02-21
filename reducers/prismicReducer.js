import { FETCH_PRISMIC } from "../actions/types";

function prismicReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_PRISMIC:
      return action.data;
    default:
      return state;
  }
}

export default prismicReducer;

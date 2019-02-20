import { FETCH_PRISMIC } from "./types";
import Prismic from "prismic-javascript";

const apiEndpoint = "https://pristastic.cdn.prismic.io/api/v2";
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export function fetchAllPrismic() {
  return dispatch => {
    Prismic.api(apiEndpoint, { accessToken }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "post"))
        .then(response => {
          dispatch(fetchPrismic(response.results));
        })
        .catch(error => {
          throw error;
        });
    });
  };
}

export function fetchPrismic(posts) {
  console.log("fetching", posts);
  return {
    type: FETCH_PRISMIC,
    posts
  };
}

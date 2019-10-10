// actions are just JS objects with a mandatory "type" property
import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }; // declare action types as constants since strings are error prone
}

// You can have promises as actions if you use redux-thunk
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json }); // We need to explicitly call dispatch inside the async function for dispatching the action.
      });
  };
}

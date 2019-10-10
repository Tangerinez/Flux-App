// actions are just JS objects with a mandatory "type" property
import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }; // declare action types as constants since strings are error prone
}

export function getData() {
  return { type: "DATA_REQUESTED" }; // This action will be “intercepted” by Redux saga with the takeEvery method
}

// A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer.

import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" }); // If the word types is one of the forbidden words, the action type will be dispatched as "FOUND_BAD_WORD"
        }
      }
      return next(action); // If you forget to return next(action) the application will stop, and no other action will reach the reducer.
    };
  };
}

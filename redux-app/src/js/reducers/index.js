import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  // initial state is default state
  // the only way to change state is to send an action to the store
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      // Object.assign([target], [sources]) => in this example we are copying all sources to the target object, which in this case is an empty object
      // use Object.assign() to return a new state and keep the original state immutable
      articles: state.articles.concat(action.payload) // combines array elements and keeps intial array immutable
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;

/* To avoid mutations in Redux, use:
- concat(), slice(), and ...spread for arrays
- Object.assign() and ...spread for objects
*/

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer); // createStore takes reducer as first argument, and reducers produce the state of your application
// reducer is a JS function that takes 2 parameters => current state and an action
export default store;

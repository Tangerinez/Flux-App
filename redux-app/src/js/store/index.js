import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer); // createStore takes reducer as first argument, and reducers produce the state of your application
// reducer is a JS function that takes 2 parameters => current state and an action
export default store;

/* Redux store api has important methods, such as:
1. getState() => accessing current state
    Ex) store.getState()

2. dispatch() => dispatching an action. 
    Ex) store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
        
3. subscribe() => listening on state changes. Accepts a callback that will fire whenever an action is displayed
    Ex) store.subscribe(() => console.log('Look ma, Redux!!'))
        - Every time state gets updated, this console log will appear!
*/

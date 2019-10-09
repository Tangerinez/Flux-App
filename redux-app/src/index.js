import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"; // Provider wraps up your React application and makes it aware of the entire Redux’s store.
import index from "./js/index";
import store from "./js/store/index";
import App from "./App.js";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

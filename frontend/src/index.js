import App from "./App";
import rootReducers from "./store/reducer/index";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import React from "react";
import { Provider } from "react-redux";

//here we create an object to store the current state of the application
const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

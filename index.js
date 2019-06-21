// import { AppRegistry } from "react-native";
// import App from "./App";
// import { name as appName } from "./app.json";

// AppRegistry.registerComponent(appName, () => App);


import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { name as appName } from "./app.json";
import { createStore, ApplyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import allReducers from './reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers());

const wrapRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => wrapRedux);

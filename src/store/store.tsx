import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";

export const sagaMiddleware = createSagaMiddleware({});

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...[
      sagaMiddleware,
      createLogger({ collapsed: true, diff: true })
    ])
  )
);

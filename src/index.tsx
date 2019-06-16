import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
// import { createBrowserHistory} from 'history';
import { Route, Switch } from 'react-router-dom';

import store from "./store/store";
import './index.css';
import App from './App';

// const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <Switch>
        <Route exact path='/' component={App}/>
        <Route render={() => 'world'}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);

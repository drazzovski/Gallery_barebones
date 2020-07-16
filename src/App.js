import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
//import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import './assets/base.scss';

import SearchBar from "./components/SearchBar/SearchBar";
import Tabs from "./components/Tabs/Tabs";
import AppBar from '@material-ui/core/AppBar';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <ScrollToTop>
            <div style={{ margin: "20px" }}>
              <SearchBar />
            </div>
            <div style={{ margin: "0 20px", width: "auto" }}>
              <Tabs />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

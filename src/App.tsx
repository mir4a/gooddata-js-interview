// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import GrossProfitPerMonth from './components/GrossProfitPerMonth';
import GrossProfitAllMonth from './components/GrossProfitAllMonth';
import './App.scss';

class App extends Component {
  render(): React.ReactElement {
    return (
      <div className="App">
        <GrossProfitPerMonth defaultMonth="2" />
        <GrossProfitAllMonth />
      </div>
    );
  }
}

export default App;

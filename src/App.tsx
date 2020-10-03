// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import GrossProfitPerMonth from './components/GrossProfitPerMonth';
import GrossProfitAllMonth from './components/GrossProfitAllMonth';
import './App.scss';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths =
  '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';

class App extends Component {
  getMeasures() {
    return [
      {
        measure: {
          localIdentifier: 'm1',
          definition: {
            measureDefinition: {
              item: {
                uri: grossProfitMeasure,
              },
            },
          },
          alias: '$ Gross Profit',
        },
      },
    ];
  }

  getViewBy() {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: dateAttributeInMonths,
        },
        localIdentifier: 'a1',
      },
    };
  }

  render() {
    const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
    const measures = this.getMeasures();
    const viewBy = this.getViewBy();

    return (
      <div className="App">
        <GrossProfitPerMonth measures={measures} projectId={projectId} />
        <GrossProfitAllMonth
          measures={measures}
          projectId={projectId}
          viewBy={viewBy}
        />
      </div>
    );
  }
}

export default App;

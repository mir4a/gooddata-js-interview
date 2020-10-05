import React from 'react';
import GrossProfit from '../GrossProfit';
import { DATE_ATTR_IN_MONTHS_URI } from '../../constants';

const DATE_ATTR_IN_MONTHS = {
  visualizationAttribute: {
    displayForm: {
      uri: DATE_ATTR_IN_MONTHS_URI,
    },
    localIdentifier: 'a1',
  },
};

const GrossProfitAllMonths = React.memo(
  function GrossProfitAllMonths(): React.ReactElement {
    return (
      <>
        <h1>$ Gross Profit - All months</h1>
        <div className="ChartWrapper">
          <GrossProfit viewBy={DATE_ATTR_IN_MONTHS} />
        </div>
      </>
    );
  },
);

export default GrossProfitAllMonths;

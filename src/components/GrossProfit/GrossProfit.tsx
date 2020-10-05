import React from 'react';
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import { PROJECT_ID, GROSS_PROFIT_MEASURE_URI } from '../../constants';

export interface IGrossProfitAllMonthProps {
  viewBy?: VisualizationObject.IVisualizationAttribute;
  filters?: VisualizationObject.VisualizationObjectFilter[];
}

const GROSS_PROFIT_MEASURES = [
  {
    measure: {
      localIdentifier: 'm1',
      definition: {
        measureDefinition: {
          item: {
            uri: GROSS_PROFIT_MEASURE_URI,
          },
        },
      },
      alias: '$ Gross Profit',
    },
  },
];

const GrossProfit = React.memo(function GrossProfit(
  props: IGrossProfitAllMonthProps,
): React.ReactElement {
  return (
    <ColumnChart
      projectId={PROJECT_ID}
      measures={GROSS_PROFIT_MEASURES}
      {...props}
    />
  );
});

export default GrossProfit;

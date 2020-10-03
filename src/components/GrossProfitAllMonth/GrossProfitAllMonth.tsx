import React from 'react'
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';

export interface GrossProfitAllMonthProps {
  measures: VisualizationObject.BucketItem[];
  projectId: string;
  viewBy: VisualizationObject.IVisualizationAttribute;
}

export default function GrossProfitAllMonth(props: GrossProfitAllMonthProps): React.ReactElement {
  const {measures, projectId, viewBy} = props;

  return (
    <>
    <h1>$ Gross Profit - All months</h1>
        <div>
          <ColumnChart
            measures={measures}
            viewBy={viewBy}
            projectId={projectId}
          />
        </div>
        </>
  )
}
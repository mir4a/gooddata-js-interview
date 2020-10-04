import React, { useCallback, useState, useMemo, ChangeEvent } from 'react';
import MonthPicker from '../base/MonthPicker';
import { VisualizationObject } from '@gooddata/typings';
import { ColumnChart } from '@gooddata/react-components';
import { getMonthDateRange } from './helpers/dates';

export interface GrossProfitMonthProps {
  measures: VisualizationObject.BucketItem[];
  projectId: string;
}

const GrossProfitMonth = React.memo(function GrossProfitMonth(
  props: GrossProfitMonthProps,
): React.ReactElement {
  const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';
  const [month, setMonth] = useState('1');
  const { projectId, measures } = props;

  const handleMonthChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setMonth(event.target.value);
    },
    [],
  );

  const monthFilter = useMemo(() => {
    const dates = getMonthDateRange('2016', month);

    return {
      absoluteDateFilter: {
        dataSet: {
          uri: dateAttribute,
        },
        from: dates[0],
        to: dates[1],
      },
    };
  }, [month]);

  return (
    <>
      <h1>
        $ Gross Profit in month
        {<MonthPicker onChange={handleMonthChange} />}
        2016
      </h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={[monthFilter]}
          projectId={projectId}
        />
      </div>
    </>
  );
});

export default GrossProfitMonth;

import React, { useCallback, useState, useMemo, ChangeEvent } from 'react';
import MonthPicker from '../base/MonthPicker';
import GrossProfit from '../GrossProfit';
import { getMonthDateRange } from './helpers/dates';
import { DATE_ATTR_URI } from '../../constants';

interface IGrossProfitMonth {
  defaultMonth?: string;
}

const GrossProfitMonth = React.memo(function GrossProfitMonth(
  props: IGrossProfitMonth,
): React.ReactElement {
  const { defaultMonth = '1' } = props;

  const [month, setMonth] = useState(defaultMonth);

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
          uri: DATE_ATTR_URI,
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
        {
          <MonthPicker
            onChange={handleMonthChange}
            defaultValue={defaultMonth}
          />
        }
        2016
      </h1>
      <div className="ChartWrapper">
        <GrossProfit filters={[monthFilter]} />
      </div>
    </>
  );
});

export default GrossProfitMonth;

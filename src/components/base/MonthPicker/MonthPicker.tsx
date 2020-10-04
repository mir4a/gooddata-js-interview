import React, { ChangeEvent, useCallback } from 'react';
import './MonthPicker.scss';

interface MonthPickerProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: number;
}

export default React.memo(function MonthPicker(
  props: MonthPickerProps,
): React.ReactElement {
  const { defaultValue = '1', onChange } = props;

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(event);
    },
    [onChange],
  );

  return (
    <div className="MonthPicker">
      <select
        defaultValue={defaultValue}
        onChange={handleOnChange}
        className="MonthPicker__select"
      >
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
});

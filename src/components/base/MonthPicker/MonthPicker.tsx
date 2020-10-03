import React, { ChangeEvent, useCallback } from 'react'
import './MonthPicker.scss'

interface MonthPickerProps {
  onChange: Function;
  defaultValue?: number;
}

// eslint-disable-next-line max-len
export default function MonthPicker(props: MonthPickerProps): React.ReactElement {
  const { defaultValue = '1', onChange } = props;

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
    console.log('onchange')
    onChange && onChange(event)
  }, [onChange])

  return (
    <div className="MonthPicker">
      <select
        defaultValue={defaultValue}
        onChange={handleOnChange}
        className="MonthPicker--select"
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
}
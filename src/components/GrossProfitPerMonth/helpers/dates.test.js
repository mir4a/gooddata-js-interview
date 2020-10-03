import {getMonthDateRange} from './dates'

describe('getMonthDateRange', () => {
  it('should return correct dates for Frebruary in leap year', () => {
    expect(getMonthDateRange('2020', '2')).toEqual(['2020-02-01', '2020-02-29']);
  })

  it('should return correct dates for Frebruary', () => {
    expect(getMonthDateRange('2019', '2')).toEqual(['2019-02-01', '2019-02-28']);
  })

  it('should handle both string and number representations of a year/month', () => {
    expect(getMonthDateRange(2020, 1)).toEqual(['2020-01-01', '2020-01-31']);
    expect(getMonthDateRange('2020', 1)).toEqual(['2020-01-01', '2020-01-31']);
    expect(getMonthDateRange('2020', '1')).toEqual(['2020-01-01', '2020-01-31']);
    expect(getMonthDateRange(2020, '1')).toEqual(['2020-01-01', '2020-01-31']);
  })

  it('should return correct dates in custom format YYYY/MM/DD', () => {
    expect(getMonthDateRange('2020', '1', 'YYYY/MM/DD')).toEqual(['2020/01/01', '2020/01/31'])
  })
})
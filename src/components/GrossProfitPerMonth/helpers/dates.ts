import dayjs from 'dayjs'

export function getMonthDateRange(year: string, month: string, format = 'YYYY-MM-DD'): string[] {
  const from = dayjs().year(Number(year)).month(Number(month) - 1).date(1);
  const to = dayjs(from).date(from.daysInMonth());

  return [from.format(format), to.format(format)]
}
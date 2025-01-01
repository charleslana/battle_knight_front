export function formatNumber(number: number): string {
  const numericValue = Number(number);
  return numericValue.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function formatCompactNumber(number: number): string {
  const formatter = new Intl.NumberFormat('en-US', {notation: 'compact'});
  return formatter.format(number);
}

export const GET_STOCK = (from, to) =>
  `/api/eod/MCD.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&period=d&from=${from}&to=${to}&fmt=json`;

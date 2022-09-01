function calculateDaysBetweenDates(firstDate, secondDate) {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}
// function searchOnSpotify()
function GetStockFromMarket(stockName) {
  const url = `https://api.iextrading.com/1.0/stock/${stockName}/quote`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const stockName = data.symbol;
      const stockPrice = data.latestPrice;
      const stockChange = data.change;
      const stockChangePercent = data.changePercent;
      const stockMarketCap = data.marketCap;
      const stockVolume = data.latestVolume;
      const stockPE = data.peRatio;
      const stockEPS = data.eps;
      const stockDivYield = data.dividendYield;
      const stockOpen = data.open;
      const stockHigh = data.high;
      const stockLow = data.low;
      const stockClose = data.close;
      const stockWeek52High = data.week52High;
      const stockWeek52Low = data.week52Low;
      const stockYTDChange = data.ytdChange;
      const stockLatestTime = data.latestTime;
      const stockLatestSource = data.latestSource;
      const stockLatestUpdate = data.latestUpdate;
      const stockLatestVolume = data.latestVolume;
      const stockPreviousClose = data.previousClose;
      const stockExchange = data.primaryExchange;
      const stockMarketOpen = data.open;
      const stockMarketHigh = data.high;
      const stockMarketLow = data.low;
      const stockMarketClose = data.close;
      const stockMarketVolume = data.latestVolume;
      const stockMarketLatestUpdate = data.latestUpdate;
      const stockMarketLatestVolume = data.latestVolume;
      const stockMarketLatestTime = data.latestTime;
      const stockMarketIexMarketPercent = data.iexMarketPercent;
      const stockMarketIexVolume = data.iexVolume;
      const stockMarketIexOpen = data.iexOpen;
      const stockMarketIexHigh = data.iexHigh;
      const stockMarketIexLow = data.iexLow;
  const url = `https://api.iextrading.com/1.0/stock/${stockName}/quote`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}
}
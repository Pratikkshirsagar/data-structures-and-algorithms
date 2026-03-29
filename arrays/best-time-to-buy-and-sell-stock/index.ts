// Question
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description

function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - min;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return maxProfit;
}

const result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);

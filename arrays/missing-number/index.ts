// Question
// https://leetcode.com/problems/missing-number/description

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return totalSum - sum;
}

console.log(missingNumber([0, 3, 1, 2]));

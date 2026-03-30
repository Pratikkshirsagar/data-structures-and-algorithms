// Question
// https://leetcode.com/problems/max-consecutive-ones/description

function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }

  return Math.max(currentCount, maxCount);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

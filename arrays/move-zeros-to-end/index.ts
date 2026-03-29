// Question
// https://leetcode.com/problems/move-zeroes

function moveZeroes(nums: number[]) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let j = x; j < nums.length; j++) {
    nums[j] = 0;
  }
}

moveZeroes([0, 1, 4, 0, 5, 2]);

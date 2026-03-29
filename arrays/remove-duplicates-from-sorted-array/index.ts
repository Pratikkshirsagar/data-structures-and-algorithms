// Question
// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}

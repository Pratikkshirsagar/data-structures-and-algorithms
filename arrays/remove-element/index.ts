// Question
// https://leetcode.com/problems/remove-element

function removeElement(nums: number[], val: number): number {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

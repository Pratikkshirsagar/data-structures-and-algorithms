// Question
// https://leetcode.com/problems/merge-sorted-array

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}

const num1 = [1, 2, 3];
const num2 = [2, 5, 6];
merge(num1, 3, num2, 3);
console.log(num1);

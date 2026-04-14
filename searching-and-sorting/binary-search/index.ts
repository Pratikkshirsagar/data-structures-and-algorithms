function binarySearch(nums: number[], target: number): number {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (rightPointer >= leftPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);

    if (target === nums[midPointer]) {
      return midPointer;
    } else if (target < nums[midPointer]) {
      rightPointer = midPointer - 1;
    } else {
      leftPointer = midPointer + 1;
    }
  }

  return -1;
}

const numbers1 = [-1, 0, 3, 5, 9, 12];
const result1 = binarySearch(numbers1, 9);
console.log(result1);

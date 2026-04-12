function bubbleSort(nums: number[], n: number): number[] {
  for (let i = 0; i < n - 1; i++) {
    let isSwaped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;

        isSwaped = true;
      }

      if (!isSwaped) break;
    }
  }

  return nums;
}

const numbers = [5, 2, 4, 1];
const result = bubbleSort(numbers, numbers.length);
console.log(result);

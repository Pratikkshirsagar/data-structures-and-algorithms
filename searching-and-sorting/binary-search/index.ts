function binarySearch(nums: number[], target: number): number {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (rightPointer >= leftPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);

    if (target === numbers[midPointer]) {
      return midPointer;
    } else if (target < numbers[midPointer]) {
      rightPointer = midPointer - 1;
    } else {
      leftPointer = midPointer + 1;
    }
  }

  return -1;
}

const numbers = [-1, 0, 3, 5, 9, 12];
const result1 = binarySearch(numbers, 9);
console.log(result1);

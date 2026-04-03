function sumOfAllNumbers(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  return nums[0] + sumOfAllNumbers([...nums.slice(1)]);
}

const result = sumOfAllNumbers([1, 2, 3, 4, 5]);
console.log(result);

// Index base

const array = [1, 2, 3, 4, 5];

function sumOfAllNumbersinArray(index: number): number {
  if (index === 0) {
    return array[index];
  }

  return array[index] + sumOfAllNumbersinArray(index - 1);
}

const result2 = sumOfAllNumbersinArray(array.length - 1);
console.log(result2);

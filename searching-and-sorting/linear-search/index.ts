function linearSearch(arr: number[], target: number) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const nums = [1, 5, 6, 2, 8];
let result1 = linearSearch(nums, 2);
console.log(result);

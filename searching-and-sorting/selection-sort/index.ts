let arr = [7, 1, 5, 4, 3, 2];

function selectionSort(numbers: number[]): number[] {
  let n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    let temp = numbers[i];
    numbers[i] = numbers[min];
    numbers[min] = temp;
  }
  return numbers;
}

let resultNew = selectionSort(arr);
console.log(resultNew);

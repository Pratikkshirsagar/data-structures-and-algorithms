const numbers = [7, 4, 3, 5, 1, 2];

function insertionSort(numbers: number[]): number[] {
  for (let i = 1; i < numbers.length; i++) {
    const currentValue = numbers[i];
    let previousIndex = i - 1;

    while (previousIndex >= 0 && numbers[previousIndex] > currentValue) {
      numbers[previousIndex + 1] = numbers[previousIndex];
      previousIndex--;
    }

    numbers[previousIndex + 1] = currentValue;
  }

  return numbers;
}

const insertationSortResult = insertionSort(numbers);
console.log(insertationSortResult);

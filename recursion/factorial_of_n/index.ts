function factorial(n: number): number {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

const result1 = factorial(5);
console.log(result1);

function adjacentElementsProduct(inputArray: number[]): number {
  let biggestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    biggestProduct = biggestProduct < product ? product : biggestProduct;
  }
  return biggestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

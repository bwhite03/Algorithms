function allLongestStrings(inputArray: string[]): string[] {
  let longestString = 0;
  const longestWord = [];

  inputArray.forEach((word: string) => {
    longestString = longestString < word.length ? word.length : longestString;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestString) {
      longestWord.push(word);
    }
  });

  return longestWord;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

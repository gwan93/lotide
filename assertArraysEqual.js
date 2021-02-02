const assertArraysEqual = (actualArr, expectedArr) => {
    if (actualArr.length !== expectedArr.length) {
      return `🛑🛑🛑Assertion Failed: ${actualArr} !== ${expectedArr}`;
    }
  
    for (let i = 0; i < actualArr.length; i++) {
      if (actualArr[i] !== expectedArr[i]) {
        return `🛑🛑🛑Assertion Failed: ${actualArr} !== ${expectedArr}`;
      }
    }
    return `✅✅✅Assertion Passed: ${actualArr} === ${expectedArr}`
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // => false
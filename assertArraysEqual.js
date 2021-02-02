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

// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
//   }
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return assertEqual(arr1.length, arr2.length);
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return assertEqual(arr1[i], arr2[i]);
//     }
//   }
//   return true;
// }

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // => false
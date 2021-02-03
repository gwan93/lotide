const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const flatten = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output = output.concat(arr[i]);
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(
  flatten([1, 2, [3, 4], 5, [6]]),
  [1, 2, 3, 4, 5, 6]);

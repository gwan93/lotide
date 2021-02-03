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

const middle = (arr) => {
  let output = [];
  if (arr.length <= 2) {
    return output;
  }

  if (arr.length % 2 !== 0) { // odd
    const midpoint = Math.floor(arr.length / 2);
    output.push(arr[midpoint]);
  } else if (arr.length % 2 === 0) { // even
    const midpoint = arr.length / 2;
    output.push(arr[midpoint - 1]);
    output.push(arr[midpoint]);
  }
  return output;
};


// console.log('single and double element arrays');
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
// console.log('odd element arrays');
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// console.log('even element arrays');
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
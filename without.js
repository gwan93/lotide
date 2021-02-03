// assertEqual refactored to use eqArrays to compare
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = (sourceArr, itemsToRemoveArr) => {
  let output = [...sourceArr];
  for (let i = 0; i < itemsToRemoveArr.length; i++) {
    if (output.includes(itemsToRemoveArr[i])) {
      output = output.filter(e => e !== itemsToRemoveArr[i]);
    }
  }
  return output;
};

// Test Cases
assertArraysEqual(
  without([1, 2, 3, 3, 3, 4, 'dog', 'dog', '1', '2', '3', '4', 'cat', 1, 2, 5, 6], [3, 'dog', '3', 5]),
  [1, 2, 4, '1', '2','4', 'cat', 1, 2, 6]
);

assertArraysEqual(
  without(['a', 'b', 1, 2], []),
  ['a', 'b', 1, 2]
);

assertArraysEqual(
  without([], ['a']),
  []
);

assertArraysEqual(
  without(['a', 'a', 'a', 'a'], ['a']),
  []
);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
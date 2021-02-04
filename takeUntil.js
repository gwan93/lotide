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

// The function will return a "slice of the array with elements taken from the
// beginning." It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const result = [];

  for (let elem of array) {
    if (!callback(elem)) {
      result.push(elem);
    } else {
      break;
    }
  }

  return result;
};


// Test cases
assertArraysEqual(
  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),
  [ 1, 2, 5, 7, 2 ]
);

assertArraysEqual(
  takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),
  [ 'I\'ve', 'been', 'to', 'Hollywood' ]
);

assertArraysEqual(
  takeUntil([","], x => x === ','),
  []
);

assertArraysEqual(
  takeUntil(["I've", "been", "to", "Hollywood"], x => x === ','),
  [ 'I\'ve', 'been', 'to', 'Hollywood' ]
);
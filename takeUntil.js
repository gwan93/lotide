// const assertArraysEqual = require('./assertArraysEqual');

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
// assertArraysEqual(
//   takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),
//   [ 1, 2, 5, 7, 2 ]
// );

// assertArraysEqual(
//   takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),
//   [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// );

// assertArraysEqual(
//   takeUntil([","], x => x === ','),
//   []
// );

// assertArraysEqual(
//   takeUntil(["I've", "been", "to", "Hollywood"], x => x === ','),
//   [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// );

module.exports = takeUntil;
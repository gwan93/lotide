const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// console.log('single and double element arrays');
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
// console.log('odd element arrays');
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// console.log('even element arrays');
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// letterPositions('hello');
// console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);

module.exports = letterPositions;
// const assertArraysEqual = require('./assertArraysEqual');

const map = (array,callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases
// assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(["ground", "c", "1234", "@#$"], word => word[0]), ['g', 'c', '1', '@']);
// assertArraysEqual(map(["ground", "ground", "ground", "ground"], word => word[0]), ['g', 'g', 'g', 'g']);
// assertArraysEqual(map([], word => word[0]), []);

module.exports = map;
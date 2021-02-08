// const assertEqual = require('./assertEqual');

const findKeyByValue = (obj, val) => {
  // console.log(Object.keys(obj))
  for (const key of Object.keys(obj)) {
    // console.log('key', key)
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
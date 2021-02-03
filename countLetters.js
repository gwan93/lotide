const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let output = {};
  let noSpaces = str.split(' ').join('');
  
  for (let char of noSpaces) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
};

console.log(countLetters('LHL')); // L twice, H once
console.log(countLetters('oowoomoo'));

let result = countLetters('LHL');
assertEqual(result['L'], 2); // L twice, H once
assertEqual(result['H'], 1); // L twice, H once

result = countLetters('ass1333!@@@@@');
assertEqual(result['a'], 1);
assertEqual(result['s'], 2);
assertEqual(result['1'], 1);
assertEqual(result['3'], 3);
assertEqual(result['!'], 1);
assertEqual(result['@'], 5);
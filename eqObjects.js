const assertEqual = (actual, expected) => {
  if (actual === expected) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) {
    // console.log(key);
    // check if the key's value is an array and compares arrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
      // If both keys are objects, compare them. If they are not equal, then return false
    } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }

    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


// Test cases
console.log('first set of tests');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

console.log('second set of tests: arrays as values');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

console.log('third set of tests: objects as values');
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: { d: { x: 1 }, b: 2 } }, e: 2 }, { a: { y: 0, z: { d: { x: 1 }, b: 2 } }, e: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: { d: { x: 1 }, b: 2 } }, e: 2 }, { a: { y: 0, z: { d: { x: 1 }, b: 2000 } }, e: 900000 })); // => false



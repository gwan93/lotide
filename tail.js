const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual('identical', 'identical');
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(5, 7);

const tail = (arr) => {
  return [...arr].splice(1);
};


// Test Case
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// An array with only one element should yield an empty array for its tail
// const result = tail(["Hello"]);
// console.log(result); // returns [], an empty array
// assertEqual(result.length, 0);


// An empty array should yield an empty array for its tail
// const result = tail([]);
// console.log(result); // returns [], an empty array
// assertEqual(result.length, 0);
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

let result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// An array with only one element should yield an empty array for its tail
result = tail(["Hello"]);
console.log(result); // returns [], an empty array
assertEqual(result.length, 0);


// An empty array should yield an empty array for its tail
result = tail([]);
console.log(result); // returns [], an empty array
assertEqual(result.length, 0);
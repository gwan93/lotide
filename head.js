const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual('identical', 'identical');
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(5, 7);

const head = (arr) => {
  return arr[0];
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['5',6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
// assertEqual(head([]), undefined);
// assertEqual(head(['oneElement']), 'oneElement');
import unique = require("uniq");
const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const datastr = ["1", "2", "2", "3", "4", "5", "5", "5", "6"];
const dataMix = ["1", 2, "2", { "2": 2 }, "3", "4", "5", "5", "5", "6"];
console.log(unique(data));
console.log(unique(datastr));
console.log(unique(dataMix));

// Test with custom compare function:
const customCompare = (a: number, b: number) => (a === b ? 0 : 1);
console.log(unique(data, customCompare)); // Should output: [1, 2, 3, 4, 5, 6]

// Test with a pre-sorted array:
const dataSorted = [1, 2, 2, 3, 4, 5, 6];
console.log(unique(dataSorted, undefined, true)); // Should output: [1, 2, 3, 4, 5, 6]

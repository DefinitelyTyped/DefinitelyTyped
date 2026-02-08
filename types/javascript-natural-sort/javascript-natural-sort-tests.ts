import naturalSort = require("javascript-natural-sort");

// Test basic usage with strings
const strings = ["img12", "img10", "img2", "img1"];
const sortedStrings: string[] = strings.sort(naturalSort);

// Test with numbers
const numbers = [10, 2, 1, 12];
const sortedNumbers: number[] = numbers.sort(naturalSort);

// Test with mixed content
const mixed = ["a10", "a2", "a1"];
mixed.sort(naturalSort);

// Test case-insensitive mode
naturalSort.insensitive = true;
const caseInsensitive = ["B", "a", "C"].sort(naturalSort);

// Reset
naturalSort.insensitive = false;

// Test direct comparison
const result: number = naturalSort("img2", "img10");

// Test with version numbers
const versions = ["1.0.10", "1.0.2", "1.0.1"];
versions.sort(naturalSort);

// Test with dates
const dates = ["2023-01-10", "2023-01-2", "2023-01-1"];
dates.sort(naturalSort);

// Test with hex values
const hex = ["0x10", "0x2", "0x1"];
hex.sort(naturalSort);

import { binarySearch } from 'array-binarysearch.closest';

// Test with object

binarySearch(
  [{ time: new Date(21) }, { time: new Date(42) }, { time: new Date(91) }, { time: new Date(91) }],
  { time: new Date(92) },
  (a, b) => a.time.getTime() - b.time.getTime(),
  null,
  0,
  4,
);

// Test with primitve types
// Tests below are the examples from the projects README

binarySearch([21, 42, 91, 91], 40);
// 1
binarySearch([21, 42, 91, 91], 42, null, null, 2);
// 2
binarySearch([21, 42, 91, 91], 92, null, null, 2, 4);
// 4

binarySearch([21, 42, 91, 91], 40, (a, b) => a === b ? 0 : (a < b ? -1 : 1));
// 1
binarySearch(['G', 'KG', 'KG', 'MG'], 'g', (a, b, i) => a.toLowerCase().localeCompare(b.toLowerCase()), null, 1);
// 1
binarySearch(['G', 'KG', 'KG', 'MG'], 'KG', (a, b, i, arr) => a.localeCompare(b), null, 1, 4);
// 2

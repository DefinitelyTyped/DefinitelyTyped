import binarySearch = require('array-binarysearch.closest');

// Test with object

class Record {
  constructor(
    public time: Date,
  ) {
  }
}

binarySearch(
  [new Record(new Date(21)), new Record(new Date(42)), new Record(new Date(91)), new Record(new Date(91))],
  new Record(new Date(92)),
  (a: Record, b: Record) => a.time.getTime() - b.time.getTime(),
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

binarySearch([21, 42, 91, 91], 40, (a: number, b: number) => a === b ? 0 : (a < b ? -1 : 1));
// 1
binarySearch(['G', 'KG', 'KG', 'MG'], 'g', (a: string, b: string, i: number) => a.toLowerCase().localeCompare(b.toLowerCase()), null, 1);
// 1
binarySearch(['G', 'KG', 'KG', 'MG'], 'KG', (a: string, b: string, i: number, arr: ReadonlyArray<string>) => a.localeCompare(b), null, 1, 4);
// 2

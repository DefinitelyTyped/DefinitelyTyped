import mergeRanges = require("merge-ranges");

// $ExpectType [number, number][]
const numberMerge = mergeRanges([
    [1, 3],
    [5, 7],
    [2, 4],
    [7, 8],
]);

// $ExpectType [Date, Date][]
const dateMerge = mergeRanges([
    [new Date(100), new Date(2000)],
    [new Date(500), new Date(600)],
    [new Date(1000), new Date(1500)],
]);

import StructuredSource = require('structured-source');

const src = new StructuredSource('aaa\u2028aaaa\u2029aaaaa\n');

// $ExpectType: number
src.positionToIndex({ line: 1, column: 2 });
// $ExpectType: { line: number, column: number }
src.indexToPosition(2);
// $ExpectType: { start: { line: number, column: number}, end: { line: number, column: number } }
src.rangeToLocation([0, 2]);
// $ExpectType: [ number, number ]
src.locationToRange({
    start: { line: 1, column: 0 },
    end: { line: 1, column: 2 }
});

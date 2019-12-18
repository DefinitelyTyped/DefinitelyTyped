import RangeParser = require('range-parser');

declare var console: { assert(b: boolean): void };

console.assert(RangeParser(200, `malformed`) === -2);
console.assert(RangeParser(200, `bytes=500-20`) === -1);

const range = RangeParser(1000, `bytes=0-499`);

if (typeof range !== 'number') {
    console.assert(range.type === `bytes`);
    console.assert(range.length === 1);
}

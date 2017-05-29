import * as RangeParser from 'range-parser';

declare var console: { assert(b: boolean): void };

console.assert(RangeParser(200, `malformed`) === RangeParser.Result.invaild);
console.assert(RangeParser(200, `bytes=500-20`) === RangeParser.Result.unsatisifiable);

const range = RangeParser(1000, `bytes=0-499`);

if (typeof range !== 'number') {
    console.assert(range.type === `bytes`);
    console.assert(range.length === 1);
}

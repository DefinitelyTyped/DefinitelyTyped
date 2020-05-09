import { build } from 'node-xlsx';
const data = [
    [1, 2, 3],
    [true, false, null, 'sheetjs'],
    ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
    ['baz', null, 'qux'],
];

const options =  { '!merges': [{ s: { c: 0, r: 0 }, e: { c: 11, r: 0 } }] };

const buffer1 = build([{ name: 'mySheetName1', data }]);
const buffer2 = build([{ name: 'mySheetName2', data }], options);
const buffer3 = build([{ name: 'mySheetName3', data, options}]);

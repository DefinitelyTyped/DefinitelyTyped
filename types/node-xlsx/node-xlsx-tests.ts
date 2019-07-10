import { build } from 'node-xlsx';
const data = [
    [1, 2, 3],
    [true, false, null, 'sheetjs'],
    ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
    ['baz', null, 'qux'],
];
const buffer = build([{ name: 'mySheetName', data }]);

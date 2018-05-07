import natsort = require("natsort");

const someArr = [2, 5, 3, 4, 1, 'a', 'B'];

someArr.sort(natsort());
someArr.sort(natsort({ desc: true }));
someArr.sort(natsort({ insensitive: true }));

// sort with object array
const objArr = [
    { val: 'B' },
    { val: 'a' },
    { val: 'D' },
    { val: 'c' }
];

const sorter = natsort();

objArr.sort((a, b) => {
    return sorter(a.val, b.val);
});

// simple numerics
['10', 9, 2, '1', '4'].sort(natsort());
// ['1',2,'4',9,'10']

// floats
[
    '10.0401',
    10.022,
    10.042,
    '10.021999'
].sort(natsort());
// [
//  '10.021999',
//  10.022,
//  '10.0401',
//  10.042
// ]

// float & decimal notation
[
    '10.04f',
    '10.039F',
    '10.038d',
    '10.037D'
].sort(natsort());
// [
//  '10.037D',
//  '10.038d',
//  '10.039F',
//  '10.04f'
// ]

// scientific notation
[
    '1.528535047e5',
    '1.528535047e7',
    '1.528535047e3'
].sort(natsort());
// [
//  '1.528535047e3',
//  '1.528535047e5',
//  '1.528535047e7'
// ]

// ip addresses
[
    '192.168.0.100',
    '192.168.0.1',
    '192.168.1.1'
].sort(natsort());
// [
//  '192.168.0.1',
//  '192.168.0.100',
//  '192.168.1.1'
// ]

// Filenames
[
    'car.mov',
    '01alpha.sgi',
    '001alpha.sgi',
    'my.string_41299.tif'
].sort(natsort());
// [
//  '001alpha.sgi',
//  '01alpha.sgi',
//  'car.mov',
//  'my.string_41299.tif'
// ]

// dates
[
    '10/12/2008',
    '10/11/2008',
    '10/11/2007',
    '10/12/2007'
].sort(natsort());
// [
//  '10/11/2007',
//  '10/12/2007',
//  '10/11/2008',
//  '10/12/2008'
// ]

// money
[
    '$10002.00',
    '$10001.02',
    '$10001.01'
].sort(natsort());
// [
//  '$10001.01',
//  '$10001.02',
//  '$10002.00'
// ]

// versions
[
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '1.0.9'
].sort(natsort());
// [
//  '1.0.0',
//  '1.0.1',
//  '1.0.2',
//  '1.0.9'
// ]

// movie titles
[
    '1 Title - The Big Lebowski',
    '1 Title - Gattaca',
    '1 Title - Last Picture Show'
].sort(natsort());
// [
//  '1 Title - Gattaca',
//  '1 Title - Last Picture Show',
//  '1 Title - The Big Lebowski'
// ]

// by default - case-sensitive sorting
['a', 'B'].sort(natsort());
// ['B', 'a']

// enable case-insensitive sorting
['a', 'B'].sort(natsort({ insensitive: true }));
// ['a', 'B']

// desc
[4, 2, 3, 5, 1].sort(natsort({ desc: true }));
// [1, 2, 3, 4, 5]

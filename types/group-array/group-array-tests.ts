import groupArray = require("group-array");

const input = [
    { tag: 'one', content: 'A' },
    { tag: 'one', content: 'B' },
    { tag: 'two', content: 'C' },
    { tag: 'two', content: 'D' },
    { tag: 'three', content: 'E' },
    { tag: 'three', content: 'F' }
];

groupArray(input, 'tag'); // $ExpectType object
groupArray(input, ['tag']); // $ExpectType object

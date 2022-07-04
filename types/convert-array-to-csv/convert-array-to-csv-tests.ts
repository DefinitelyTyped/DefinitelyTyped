import { convertArrayToCSV } from 'convert-array-to-csv';

const header = ['number', 'first', 'last', 'handle'];
const dataArrays = [
    [1, 'Mark', 'Otto', '@mdo'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Larry', 'the Bird', '@twitter'],
];

const dataObjects = [
    {
        number: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo',
    },
    {
        number: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat',
    },
    {
        number: 3,
        first: 'Larry',
        last: 'the Bird',
        handle: '@twitter',
    },
];

// $ExpectType string
const csvFromArrayOfObjects = convertArrayToCSV(dataObjects);

// $ExpectType string
const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
    header,
    separator: ';',
});

// When the param is incorrect
// @ts-expect-error
const csvFromString = convertArrayToCSV('1, Mark, Otto, @mdo');

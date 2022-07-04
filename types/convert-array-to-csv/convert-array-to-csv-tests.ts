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

/*
    const csvFromArrayOfObjects  = 'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';
  */
const csvFromArrayOfObjects = convertArrayToCSV(dataObjects);

/*
    const csvFromArrayOfArrays  = 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';
  */
const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
    header,
    separator: ';',
});

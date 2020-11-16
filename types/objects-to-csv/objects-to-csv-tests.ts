import ObjectsToCsv = require('objects-to-csv');

const SAMPLE_ASCII = [
    { code: 'HK', name: 'Hong Kong' },
    { code: 'KLN', name: 'Kowloon' },
    { code: 'NT', name: 'New Territories' },
];

const ascii = new ObjectsToCsv(SAMPLE_ASCII); // $ExpectType ObjectsToCsv
const asciiFile = ascii.toDisk('name'); // $ExpectType Promise<string>
const asciiString = ascii.toString(); // $ExpectType Promise<string>
const convertAscii = ascii.convert(SAMPLE_ASCII); // $ExpectType Promise<string>

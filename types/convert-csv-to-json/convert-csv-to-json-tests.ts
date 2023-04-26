import convertCsvToJson from 'convert-csv-to-json';

const sourceCsvString = `
firstName,age
Someone,18
AnotherOne,25
`.trim();

// $ExpectType any[]
const result = convertCsvToJson
.fieldDelimiter(',')
.csvStringToJson(sourceCsvString);

// $ExpectValue 2
const length = result.length;

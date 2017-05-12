import xlsx = require('xlsx');

const options: xlsx.IParsingOptions = {
    cellDates: true
};

const workbook = xlsx.readFile('test.xlsx', options);
const otherworkbook = xlsx.readFile('test.xlsx', {type: 'file'});

console.log(workbook.Props.Author);

const firstsheet: string = workbook.SheetNames[0];

const firstworksheet = workbook.Sheets[firstsheet];

console.log(firstworksheet["A1"]);

interface tester {
    name: string;
    age: number;
}

const jsonvalues: tester[] = xlsx.utils.sheet_to_json<tester>(firstworksheet);
const csv = xlsx.utils.sheet_to_csv(firstworksheet);
const formulae = xlsx.utils.sheet_to_formulae(firstworksheet);


import xlsx = require('xlsx');

var options:xlsx.IParsingOptions = {
    cellDates:true
};

var workbook = xlsx.readFile('test.xlsx', options);
var otherworkbook = xlsx.readFile('test.xlsx', {type: 'file'});

console.log(workbook.Props.Author);

var firstsheet:string = workbook.SheetNames[0];

var firstworksheet = workbook.Sheets[firstsheet];

console.log(firstworksheet["A1"]);

interface tester {
    name:string;
    age: number;
}

var jsonvalues:tester[] = xlsx.utils.sheet_to_json<tester>(firstworksheet);
var csv = xlsx.utils.sheet_to_csv(firstworksheet);
var formulae = xlsx.utils.sheet_to_formulae(firstworksheet);

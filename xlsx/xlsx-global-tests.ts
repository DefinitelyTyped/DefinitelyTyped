/// <reference path="xlsx.d.ts" />

var options:XLSX.IParsingOptions = {
    cellDates:true
};

var workbook = XLSX.readFile('test.xlsx', options);
var otherworkbook = XLSX.readFile('test.xlsx', {type: 'file'});

console.log(workbook.Props.Author);

var firstsheet:string = workbook.SheetNames[0];

var firstworksheet = workbook.Sheets[firstsheet];

console.log(firstworksheet["A1"]);

interface tester {
    name:string;
    age: number;
}

var jsonvalues:tester[] = XLSX.utils.sheet_to_json<tester>(firstworksheet);
var csv = XLSX.utils.sheet_to_csv(firstworksheet);
var formulae = XLSX.utils.sheet_to_formulae(firstworksheet);

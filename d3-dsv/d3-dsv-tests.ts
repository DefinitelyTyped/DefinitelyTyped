/**
 * Typescript definition tests for d3/d3-dsv module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Dsv from 'd3-dsv';

// ------------------------------------------------------------------------------------------
// Preperatory Steps
// ------------------------------------------------------------------------------------------


let csvTestString: string = '1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
let tsvTestString: string = '1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
let pipedTestString: string = '1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

let csvTestStringWithHeader: string = 'Year,Make,Model,Length\n1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
let tsvTestStringWithHeader: string = 'Year\tMake\tModel\tLength\n1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
let pipedTestStringWithHeader: string = 'Year|Make|Model|Length\n1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

interface ParsedTestObject {
    year: Date;
    make: string;
    model: string;
    length: number;
}

let parseArray: d3Dsv.DSVParsedArray<d3Dsv.DSVRowString>;
let parseMappedArray: d3Dsv.DSVParsedArray<ParsedTestObject>;

let parseRowsArray: Array<Array<string>>;
let parseRowsMappedArray: Array<ParsedTestObject>;


let columns: Array<string>;
let num: number;
let date: Date;
let str: string;

// ------------------------------------------------------------------------------------------
// Test CSV
// ------------------------------------------------------------------------------------------

// csvParse(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseArray = d3Dsv.csvParse(csvTestStringWithHeader);

columns = parseArray.columns;

str = parseArray[0]['Year'];
// date = parseArray[0]['Year']; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = d3Dsv.csvParse(csvTestStringWithHeader, function (rawRow, index, columns) {
    let rr: d3Dsv.DSVRowString = rawRow;
    let i: number = index;
    let c: Array<string> = columns;
    let pr: ParsedTestObject;

    pr = {
        year: new Date(+rr['Year'], 0, 1),
        make: rr['Make'],
        model: rr['Model'],
        length: +rr['Length']
    };

    return pr;

});

columns = parseMappedArray.columns;

date = parseMappedArray[0].year;
str = parseMappedArray[0].make;
str = parseMappedArray[0].model;
num = parseMappedArray[0].length;


// csvParseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = d3Dsv.csvParseRows(csvTestString);


str = parseRowsArray[0][0]; // 'Year' of first row
// date = parseRowsArray[0][0]; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseRowsMappedArray = d3Dsv.csvParseRows(csvTestString, function (rawRow, index) {
    let rr: Array<string> = rawRow;
    let i: number = index;
    let pr: ParsedTestObject;

    pr = {
        year: new Date(+rr[0], 0, 1),
        make: rr[1],
        model: rr[2],
        length: +rr[3]
    };

    return pr;

});

date = parseRowsMappedArray[0].year;
str = parseRowsMappedArray[0].make;
str = parseRowsMappedArray[0].model;
num = parseRowsMappedArray[0].length;

// csvFormat(...) ============================================================================

str = d3Dsv.csvFormat(parseRowsMappedArray);
str = d3Dsv.csvFormat(parseRowsMappedArray, columns);

// csvFormatRows(...) ========================================================================

str = d3Dsv.csvFormatRows(parseRowsMappedArray.map(function(d, i) {
  return [
    d.year.getFullYear().toString(),
    d.make,
    d.model,
    d.length.toString()
  ];
}));

// ------------------------------------------------------------------------------------------
// Test TSV
// ------------------------------------------------------------------------------------------

// tsvParse(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseArray = d3Dsv.tsvParse(tsvTestStringWithHeader);

columns = parseArray.columns;

str = parseArray[0]['Year'];
// date = parseArray[0]['Year']; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = d3Dsv.tsvParse(tsvTestStringWithHeader, function (rawRow, index, columns) {
    let rr: d3Dsv.DSVRowString = rawRow;
    let i: number = index;
    let c: Array<string> = columns;
    let pr: ParsedTestObject;

    pr = {
        year: new Date(+rr['Year'], 0, 1),
        make: rr['Make'],
        model: rr['Model'],
        length: +rr['Length']
    };

    return pr;

});

columns = parseMappedArray.columns;

date = parseMappedArray[0].year;
str = parseMappedArray[0].make;
str = parseMappedArray[0].model;
num = parseMappedArray[0].length;


// tsvParseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = d3Dsv.tsvParseRows(tsvTestString);


str = parseRowsArray[0][0]; // 'Year' of first row
// date = parseRowsArray[0][0]; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseRowsMappedArray = d3Dsv.tsvParseRows(tsvTestString, function (rawRow, index) {
    let rr: Array<string> = rawRow;
    let i: number = index;
    let pr: ParsedTestObject;

    pr = {
        year: new Date(+rr[0], 0, 1),
        make: rr[1],
        model: rr[2],
        length: +rr[3]
    };

    return pr;

});

date = parseRowsMappedArray[0].year;
str = parseRowsMappedArray[0].make;
str = parseRowsMappedArray[0].model;
num = parseRowsMappedArray[0].length;

// tsvFormat(...) ============================================================================

str = d3Dsv.tsvFormat(parseRowsMappedArray);
str = d3Dsv.tsvFormat(parseRowsMappedArray, columns);

// tsvFormatRows(...) ========================================================================

str = d3Dsv.tsvFormatRows(parseRowsMappedArray.map(function(d, i) {
  return [
    d.year.getFullYear().toString(),
    d.make,
    d.model,
    d.length.toString()
  ];
}));

// ------------------------------------------------------------------------------------------
// Test DSV Generalized Parsers and Formatters
// ------------------------------------------------------------------------------------------

// Create custom-delimited Parser/Formatter =================================================

let dsv: d3Dsv.DSV;
dsv = d3Dsv.dsvFormat('|');

// parse(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseArray = dsv.parse(pipedTestStringWithHeader);

columns = parseArray.columns;

str = parseArray[0]['Year'];
// date = parseArray[0]['Year']; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = dsv.parse(pipedTestStringWithHeader, function (rawRow, index, columns) {
    let rr: d3Dsv.DSVRowString = rawRow;
    let i: number = index;
    let c: Array<string> = columns;
    let pr: ParsedTestObject;

    pr = {
        year: new Date(+rr['Year'], 0, 1),
        make: rr['Make'],
        model: rr['Model'],
        length: +rr['Length']
    };

    return pr;

});

columns = parseMappedArray.columns;

date = parseMappedArray[0].year;
str = parseMappedArray[0].make;
str = parseMappedArray[0].model;
num = parseMappedArray[0].length;


// parseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = dsv.parseRows(pipedTestString);


str = parseRowsArray[0][0]; // 'Year' of first row
// date = parseRowsArray[0][0]; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseRowsMappedArray = dsv.parseRows(pipedTestString, function (rawRow, index) {
    let rr: Array<string> = rawRow;
    let i: number = index;
    let pr: ParsedTestObject;

    pr = {
        year: new Date(+rr[0], 0, 1),
        make: rr[1],
        model: rr[2],
        length: +rr[3]
    };

    return pr;

});

date = parseRowsMappedArray[0].year;
str = parseRowsMappedArray[0].make;
str = parseRowsMappedArray[0].model;
num = parseRowsMappedArray[0].length;

// format(...) ============================================================================

str = dsv.format(parseRowsMappedArray);
str = dsv.format(parseRowsMappedArray, columns);

// formatRows(...) ========================================================================

str = dsv.formatRows(parseRowsMappedArray.map(function(d, i) {
  return [
    d.year.getFullYear().toString(),
    d.make,
    d.model,
    d.length.toString()
  ];
}));

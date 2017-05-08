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

const csvTestString: string = '1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
const tsvTestString: string = '1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
const pipedTestString: string = '1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

const csvTestStringWithHeader: string = 'Year,Make,Model,Length\n1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
const tsvTestStringWithHeader: string = 'Year\tMake\tModel\tLength\n1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
const pipedTestStringWithHeader: string = 'Year|Make|Model|Length\n1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

interface ParsedTestObject {
    year: Date;
    make: string;
    model: string;
    length: number;
}

let parseArray: d3Dsv.DSVParsedArray<d3Dsv.DSVRowString>;
let parseMappedArray: d3Dsv.DSVParsedArray<ParsedTestObject>;

let parseRowsArray: string[][];
let parseRowsMappedArray: ParsedTestObject[];

let columns: string[];
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

parseMappedArray = d3Dsv.csvParse(csvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const pr: ParsedTestObject = {
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

parseRowsMappedArray = d3Dsv.csvParseRows(csvTestString, (rawRow, index) => {
    const rr: string[] = rawRow;
    const i: number = index;
    const pr: ParsedTestObject = {
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

str = d3Dsv.csvFormatRows(parseRowsMappedArray.map((d, i) => [
    d.year.getFullYear().toString(),
    d.make,
    d.model,
    d.length.toString()
]));

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

parseMappedArray = d3Dsv.tsvParse(tsvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const pr: ParsedTestObject = {
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

parseRowsMappedArray = d3Dsv.tsvParseRows(tsvTestString, (rawRow, index) => {
    const rr: string[] = rawRow;
    const i: number = index;
    const pr: ParsedTestObject = {
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

str = d3Dsv.tsvFormatRows(parseRowsMappedArray.map((d, i) => [
    d.year.getFullYear().toString(),
    d.make,
    d.model,
    d.length.toString()
]));

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

parseMappedArray = dsv.parse(pipedTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const pr: ParsedTestObject = {
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

parseRowsMappedArray = dsv.parseRows(pipedTestString, (rawRow, index) => {
    const rr: string[] = rawRow;
    const i: number = index;
    const pr: ParsedTestObject = {
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

str = dsv.formatRows(parseRowsMappedArray.map((d, i) => [
    d.year.getFullYear().toString(),
    d.make,
    d.model,
    d.length.toString()
]));

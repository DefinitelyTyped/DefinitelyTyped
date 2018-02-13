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

const csvTestString = '1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
const tsvTestString = '1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
const pipedTestString = '1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

const csvTestStringWithHeader = 'Year,Make,Model,Length\n1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
const tsvTestStringWithHeader = 'Year\tMake\tModel\tLength\n1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
const pipedTestStringWithHeader = 'Year|Make|Model|Length\n1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

interface ParsedTestObject {
    year: Date | null;
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
let dateNull: Date | null;
let str: string;
let strMaybe: string | undefined;

// ------------------------------------------------------------------------------------------
// Test CSV
// ------------------------------------------------------------------------------------------

// csvParse(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseArray = d3Dsv.csvParse(csvTestStringWithHeader);

columns = parseArray.columns;

strMaybe = parseArray[0]['Year'];
// date = parseArray[0]['Year']; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = d3Dsv.csvParse(csvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const pr: ParsedTestObject = {
        year: rr['Year'] ? new Date(+rr['Year']!, 0, 1) : null,
        make: rr['Make'] ? rr['Make']! : "Missing Value",
        model: rr['Model'] ? rr['Model']! : "Missing Value",
        length: ['Length'] ? +rr['Length']! : NaN
    };
    return pr;
});

parseMappedArray = d3Dsv.csvParse(csvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const d: number | null = rr['Year'] ? +rr['Year']! : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr['Make'] ? rr['Make']! : "Missing Value",
                    model: rr['Model'] ? rr['Model']! : "Missing Value",
                    length: ['Length'] ? +rr['Length']! : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

columns = parseMappedArray.columns;

dateNull = parseMappedArray[0].year;
strMaybe = parseMappedArray[0].make;
strMaybe = parseMappedArray[0].model;
num = parseMappedArray[0].length;

// csvParseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = d3Dsv.csvParseRows(csvTestString);

strMaybe = parseRowsArray[0][0]; // 'Year' of first row
// date = parseRowsArray[0][0]; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseRowsMappedArray = d3Dsv.csvParseRows(csvTestString, (rawRow, index) => {
    const rr: string[] = rawRow;
    const i: number = index;
    const d: number | null = rr[0].length ? +rr[0] : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr[1].length ? rr[1] : "Missing Value",
                    model: rr[2].length ? rr[2] : "Missing Value",
                    length: rr[3].length ? +rr[3] : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

dateNull = parseRowsMappedArray[0].year;
strMaybe = parseRowsMappedArray[0].make;
strMaybe = parseRowsMappedArray[0].model;
num = parseRowsMappedArray[0].length;

// csvFormat(...) ============================================================================

str = d3Dsv.csvFormat(parseRowsMappedArray);
str = d3Dsv.csvFormat(parseRowsMappedArray, columns);

// csvFormatRows(...) ========================================================================

str = d3Dsv.csvFormatRows(parseRowsMappedArray.map((d, i) => [
    d.year ? d.year.getFullYear().toString() : '',
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

strMaybe = parseArray[0]['Year'];
// date = parseArray[0]['Year']; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = d3Dsv.tsvParse(tsvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const d: number | null = rr['Year'] ? +rr['Year']! : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr['Make'] ? rr['Make']! : "Missing Value",
                    model: rr['Model'] ? rr['Model']! : "Missing Value",
                    length: ['Length'] ? +rr['Length']! : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

columns = parseMappedArray.columns;

dateNull = parseMappedArray[0].year;
strMaybe = parseMappedArray[0].make;
strMaybe = parseMappedArray[0].model;
num = parseMappedArray[0].length;

// tsvParseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = d3Dsv.tsvParseRows(tsvTestString);

strMaybe = parseRowsArray[0][0]; // 'Year' of first row
// date = parseRowsArray[0][0]; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseRowsMappedArray = d3Dsv.tsvParseRows(tsvTestString, (rawRow, index) => {
    const rr: string[] = rawRow;
    const i: number = index;
    const d: number | null = rr[0].length ? +rr[0] : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr[1].length ? rr[1] : "Missing Value",
                    model: rr[2].length ? rr[2] : "Missing Value",
                    length: rr[3].length ? +rr[3] : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

dateNull = parseRowsMappedArray[0].year;
strMaybe = parseRowsMappedArray[0].make;
strMaybe = parseRowsMappedArray[0].model;
num = parseRowsMappedArray[0].length;

// tsvFormat(...) ============================================================================

str = d3Dsv.tsvFormat(parseRowsMappedArray);
str = d3Dsv.tsvFormat(parseRowsMappedArray, columns);

// tsvFormatRows(...) ========================================================================

str = d3Dsv.tsvFormatRows(parseRowsMappedArray.map((d, i) => [
    d.year ? d.year.getFullYear().toString() : '',
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

strMaybe = parseArray[0]['Year'];
// date = parseArray[0]['Year']; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = dsv.parse(pipedTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const d: number | null = rr['Year'] ? +rr['Year']! : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr['Make'] ? rr['Make']! : "Missing Value",
                    model: rr['Model'] ? rr['Model']! : "Missing Value",
                    length: ['Length'] ? +rr['Length']! : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

columns = parseMappedArray.columns;

dateNull = parseMappedArray[0].year;
strMaybe = parseMappedArray[0].make;
strMaybe = parseMappedArray[0].model;
num = parseMappedArray[0].length;

// parseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = dsv.parseRows(pipedTestString);

strMaybe = parseRowsArray[0][0]; // 'Year' of first row
// date = parseRowsArray[0][0]; // fails, return value is string

// with row mapper ---------------------------------------------------------------------------

parseRowsMappedArray = dsv.parseRows(pipedTestString, (rawRow, index) => {
    const rr: string[] = rawRow;
    const i: number = index;
    const d: number | null = rr[0].length ? +rr[0] : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr[1].length ? rr[1] : "Missing Value",
                    model: rr[2].length ? rr[2] : "Missing Value",
                    length: rr[3].length ? +rr[3] : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

dateNull = parseRowsMappedArray[0].year;
strMaybe = parseRowsMappedArray[0].make;
strMaybe = parseRowsMappedArray[0].model;
num = parseRowsMappedArray[0].length;

// format(...) ============================================================================

str = dsv.format(parseRowsMappedArray);
str = dsv.format(parseRowsMappedArray, columns);

// formatRows(...) ========================================================================

str = dsv.formatRows(parseRowsMappedArray.map((d, i) => [
    d.year ? d.year.getFullYear().toString() : '',
    d.make,
    d.model,
    d.length.toString()
]));

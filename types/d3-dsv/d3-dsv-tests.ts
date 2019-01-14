/**
 * Typescript definition tests for d3/d3-dsv module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */
/* tslint:disable:no-unnecessary-type-assertion */

import * as d3Dsv from 'd3-dsv';

// ------------------------------------------------------------------------------------------
// Preparatory Steps
// ------------------------------------------------------------------------------------------

const csvTestString = '1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38';
const tsvTestString = '1997\tFord\tE350\t2.34\n2000\tMercury\tCougar\t2.38';
const pipedTestString = '1997|Ford|E350|2.34\n2000|Mercury|Cougar|2.38';

const csvTestStringWithHeader = `Year,Make,Model,Length\n${csvTestString}`;
const tsvTestStringWithHeader = `Year\tMake\tModel\tLength\n${tsvTestString}`;
const pipedTestStringWithHeader = `Year|Make|Model|Length\n${pipedTestString}`;

type Headers = "Year" | "Make" | "Model" | "Length";
type ParsedHeaders = "year" | "make" | "model" | "length";

interface ParsedTestObject {
    year: Date | null;
    make: string;
    model: string;
    length: number;
}

let parseRowsArray: string[][];
let parseRowsMappedArray: ParsedTestObject[];
let parsedTestObject: ParsedTestObject;

let num: number;
let str: string;
let strMaybe: string | undefined;

let columns: string[];
let headers: Headers[];
let parsedHeaders: ParsedHeaders[];

// ------------------------------------------------------------------------------------------
// Test Shared Types and Interfaces
// ------------------------------------------------------------------------------------------

declare let row: d3Dsv.DSVRowString;
strMaybe = row.property;

declare let row2: d3Dsv.DSVRowString<Headers>;
strMaybe = row2.Make;
strMaybe = row2.Property; // $ExpectError

declare let raw: d3Dsv.DSVRaw<ParsedTestObject>;
strMaybe = raw.make;
strMaybe = raw.property; // $ExpectError

declare let rowArray: d3Dsv.DSVRowArray;
strMaybe = rowArray[0].property;
columns = rowArray.columns;
num = rowArray.length;

declare let rowArrayHeader: d3Dsv.DSVRowArray<Headers>;
strMaybe = rowArrayHeader[0].Make;
strMaybe = rowArrayHeader[0].Property; // $ExpectError
headers = rowArrayHeader.columns;
num = rowArrayHeader.length;

declare let parseMappedArray: d3Dsv.DSVParsedArray<ParsedTestObject>;
strMaybe = parseMappedArray[0].make;
strMaybe = parseMappedArray[0].property; // $ExpectError
parsedTestObject = parseMappedArray[0];
parsedHeaders = parseMappedArray.columns;
num = parseMappedArray.length;

declare let parseArray: d3Dsv.DSVParsedArray<d3Dsv.DSVRowString>;
strMaybe = parseArray[0].property;
columns = parseArray.columns;
num = parseArray.length;

// ------------------------------------------------------------------------------------------
// Test CSV
// ------------------------------------------------------------------------------------------

// csvParse(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseArray = d3Dsv.csvParse(csvTestStringWithHeader);
rowArrayHeader = d3Dsv.csvParse<Headers>(csvTestStringWithHeader);

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = d3Dsv.csvParse(csvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const d: number | null = rr.Year ? +rr.Year! : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr.Make ? rr.Make! : "Missing Value",
                    model: rr.Model ? rr.Model! : "Missing Value",
                    length: rr.Length ? +rr.Length! : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

parseMappedArray = d3Dsv.csvParse<ParsedTestObject, Headers>(csvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString<Headers> = rawRow;
    const i: number = index;
    const c: Headers[] = columns;
    return parsedTestObject;
});

// csvParseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = d3Dsv.csvParseRows(csvTestString);
strMaybe = parseRowsArray[0][0]; // 'Year' of first row

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

// csvFormat(...) ============================================================================

str = d3Dsv.csvFormat(parseRowsMappedArray);
str = d3Dsv.csvFormat(parseRowsMappedArray, ["year", "length"]);
str = d3Dsv.csvFormat(parseRowsMappedArray, ["year", "unknown"]); // $ExpectError

// csvFormatRows(...) ========================================================================

str = d3Dsv.csvFormatRows(parseRowsMappedArray.map((d) => [
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
rowArrayHeader = d3Dsv.tsvParse<Headers>(csvTestStringWithHeader);

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = d3Dsv.tsvParse(tsvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const d: number | null = rr.Year ? +rr.Year! : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr.Make ? rr.Make! : "Missing Value",
                    model: rr.Model ? rr.Model! : "Missing Value",
                    length: rr.Length ? +rr.Length! : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

parseMappedArray = d3Dsv.tsvParse<ParsedTestObject, Headers>(tsvTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString<Headers> = rawRow;
    const i: number = index;
    const c: Headers[] = columns;
    return parsedTestObject;
});

// tsvParseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = d3Dsv.tsvParseRows(tsvTestString);
strMaybe = parseRowsArray[0][0]; // 'Year' of first row

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

// tsvFormat(...) ============================================================================

str = d3Dsv.tsvFormat(parseRowsMappedArray);
str = d3Dsv.tsvFormat(parseRowsMappedArray, ["year", "length"]);
str = d3Dsv.tsvFormat(parseRowsMappedArray, ["year", "unknown"]); // $ExpectError

// tsvFormatRows(...) ========================================================================

str = d3Dsv.tsvFormatRows(parseRowsMappedArray.map((d) => [
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
rowArrayHeader = dsv.parse<Headers>(csvTestStringWithHeader);

// with row mapper ---------------------------------------------------------------------------

parseMappedArray = dsv.parse(pipedTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString = rawRow;
    const i: number = index;
    const c: string[] = columns;
    const d: number | null = rr.Year ? +rr.Year! : null;
    const pr: ParsedTestObject | null | undefined = d !== null
        ? (
            d > 1997
                ? {
                    year: new Date(d, 0, 1),
                    make: rr.Make ? rr.Make! : "Missing Value",
                    model: rr.Model ? rr.Model! : "Missing Value",
                    length: rr.Length ? +rr.Length! : NaN
                }
                : undefined
        )
        : null;
    return pr;
});

parseMappedArray = dsv.parse<ParsedTestObject, Headers>(pipedTestStringWithHeader, (rawRow, index, columns) => {
    const rr: d3Dsv.DSVRowString<Headers> = rawRow;
    const i: number = index;
    const c: Headers[] = columns;
    return parsedTestObject;
});

// parseRows(...) ============================================================================

// without row mapper -----------------------------------------------------------------------

parseRowsArray = dsv.parseRows(pipedTestString);
strMaybe = parseRowsArray[0][0]; // 'Year' of first row

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

// format(...) ============================================================================

str = dsv.format(parseRowsMappedArray);
str = dsv.format(parseRowsMappedArray, ["year", "length"]);
str = dsv.format(parseRowsMappedArray, ["year", "unknown"]); // $ExpectError

// formatRows(...) ========================================================================

str = dsv.formatRows(parseRowsMappedArray.map((d) => [
    d.year ? d.year.getFullYear().toString() : '',
    d.make,
    d.model,
    d.length.toString()
]));

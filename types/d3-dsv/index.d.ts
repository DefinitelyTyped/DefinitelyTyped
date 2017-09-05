// Type definitions for D3JS d3-dsv module 1.0
// Project: https://github.com/d3/d3-dsv/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ------------------------------------------------------------------------------------------
// Shared Types and Interfaces
// ------------------------------------------------------------------------------------------

export interface DSVRowString {
    [key: string]: string;
}

export interface DSVRowAny {
    [key: string]: any;
}

export interface DSVParsedArray<T> extends Array<T> {
    columns: string[];
}

// ------------------------------------------------------------------------------------------
// CSV Parsers and Formatters
// ------------------------------------------------------------------------------------------

// csvParse(...) ============================================================================

export function csvParse(csvString: string): DSVParsedArray<DSVRowString>;
export function csvParse<ParsedRow extends DSVRowAny>(csvString: string, row: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow): DSVParsedArray<ParsedRow>;

// csvParseRows(...) ========================================================================

export function csvParseRows(csvString: string): string[][];
export function csvParseRows<ParsedRow extends DSVRowAny>(csvString: string, row: (rawRow: string[], index: number) => ParsedRow): ParsedRow[];

// csvFormat(...) ============================================================================

export function csvFormat(rows: DSVRowAny[], columns?: string[]): string;

// csvFormatRows(...) ========================================================================

export function csvFormatRows(rows: string[][]): string;

// ------------------------------------------------------------------------------------------
// TSV Parsers and Formatters
// ------------------------------------------------------------------------------------------

// tsvParse(...) ============================================================================

export function tsvParse(tsvString: string): DSVParsedArray<DSVRowString>;
export function tsvParse<MappedRow extends DSVRowAny>(tsvString: string, row: (rawRow: DSVRowString, index: number, columns: string[]) => MappedRow): DSVParsedArray<MappedRow>;

// tsvParseRows(...) ========================================================================

export function tsvParseRows(tsvString: string): string[][];
export function tsvParseRows<MappedRow extends DSVRowAny>(tsvString: string, row: (rawRow: string[], index: number) => MappedRow): MappedRow[];

// tsvFormat(...) ============================================================================

export function tsvFormat(rows: DSVRowAny[], columns?: string[]): string;

// tsvFormatRows(...) ========================================================================

export function tsvFormatRows(rows: string[][]): string;

// ------------------------------------------------------------------------------------------
// DSV Generalized Parsers and Formatters
// ------------------------------------------------------------------------------------------

export interface DSV {
    parse(dsvString: string): DSVParsedArray<DSVRowString>;
    parse<ParsedRow extends DSVRowAny>(dsvString: string, row: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow): DSVParsedArray<ParsedRow>;
    parseRows(dsvString: string): string[][];
    parseRows<ParsedRow extends DSVRowAny>(dsvString: string, row: (rawRow: string[], index: number) => ParsedRow): ParsedRow[];
    format(rows: DSVRowAny[], columns?: string[]): string;
    formatRows(rows: string[][]): string;
}

export function dsvFormat(delimiter: string): DSV;

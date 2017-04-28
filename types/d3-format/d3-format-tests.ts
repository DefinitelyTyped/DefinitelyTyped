/**
 * Typescript definition tests for d3/d3-format module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Format from 'd3-format';

// ----------------------------------------------------------------------
// Preparatory Steps
// ----------------------------------------------------------------------

let num: number;

let formatFn: (n: number) => string;

let specifier: d3Format.FormatSpecifier;

let localeDef: d3Format.FormatLocaleDefinition;

let localeObj: d3Format.FormatLocaleObject;

// ----------------------------------------------------------------------
// Test Format and FormatPrefix
// ----------------------------------------------------------------------

formatFn = d3Format.format('.0%');

formatFn = d3Format.formatPrefix(',.0', 1e-6);

// ----------------------------------------------------------------------
// Test Format Specifier
// ----------------------------------------------------------------------

specifier = d3Format.formatSpecifier('.0%');

let fill: string = specifier.fill;
let align: '>' | '<' | '^' | '=' = specifier.align;
let sign: '-' | '+' | '(' | ' ' = specifier.sign;
let symbol: '$' | '#' | '' = specifier.symbol;
let zero: boolean = specifier.zero;
let width: number | undefined = specifier.width;
let comma: boolean = specifier.comma;
let precision: number = specifier.precision;
let type: 'e' | 'f' | 'g' | 'r' | 's' | '%' | 'p' | 'b' | 'o' | 'd' | 'x' | 'X' | 'c' | '' | 'n' = specifier.type;

let formatString: string = specifier.toString();

// ----------------------------------------------------------------------
// Test Precision Suggestors
// ----------------------------------------------------------------------

num = d3Format.precisionFixed(0.0005);

num = d3Format.precisionPrefix(0.0005, 1000);

num = d3Format.precisionRound(0.0005, 3000);

// ----------------------------------------------------------------------
// Test Locale Definition
// ----------------------------------------------------------------------

localeDef = {
    decimal: ',',
    thousands: '.',
    grouping: [3],
    currency: ['EUR', '']
};

localeDef = {
  decimal: "\u066b",
  thousands: "\u066c",
  grouping: [3],
  currency: ["", ""],
  numerals : ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"]
};

localeDef = {
  decimal: "\u066b",
  thousands: "\u066c",
  grouping: [3],
  currency: ["", ""],
  percent : "\u202f%"
};

let decimal: string = localeDef.decimal;
let thousands: string = localeDef.thousands;
let grouping: number[] = localeDef.grouping;
let currency: [string, string] = localeDef.currency;
let numerals: string[] | undefined = localeDef.numerals;
let percent: string | undefined = localeDef.percent;

localeObj = d3Format.formatLocale(localeDef);

localeObj = d3Format.formatDefaultLocale(localeDef);

let formatFactory: (specifier: string) => ((n: number) => string) = localeObj.format;
let formatPrefixFactory: (specifier: string, value: number) => ((n: number) => string) = localeObj.formatPrefix;

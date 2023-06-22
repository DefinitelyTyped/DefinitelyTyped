import Papa = require('papaparse');
import { Duplex, Readable } from 'stream';

/**
 * Change global config
 */
Papa.DefaultDelimiter = ',';

/**
 * Parsing
 */
// $ExpectType ParseResult<unknown>
const res = Papa.parse('3,3,3');

res.errors[0].code;

// $ExpectType ParseResult<unknown>
Papa.parse('3,3,3', {
    delimiter: ';',
    comments: false,
    step(results, p) {
        p.abort();
        //  $ExpectType unknown
        results.data;
    },
    dynamicTyping: true,
});

// $ExpectType ParseResult<unknown>
Papa.parse('3,3,3', {
    dynamicTyping: (field: string | number): boolean => /headerName/i.test(field.toString()),
});

// $ExpectType ParseResult<unknown>
Papa.parse('3,3,3', {
    dynamicTyping: { headerName: true },
});

// $ExpectType ParseResult<unknown>
Papa.parse('3,3,3', {
    dynamicTyping: { 5: true },
});

// $ExpectType ParseResult<unknown>
Papa.parse('4,4,4', {
    delimitersToGuess: [';', ','],
});

// $ExpectType ParseResult<unknown>
Papa.parse('4,4,4', {
    delimitersToGuess: [Papa.RECORD_SEP, '|', ',', ';'],
});

// $ExpectType ParseResult<[string, string, string]>
Papa.parse<[string, string, string]>('4;4;4', {
    delimitersToGuess: ['\t', Papa.UNIT_SEP],
});

// $ExpectType void
Papa.parse<[string, string, string]>('4;4;4', {
    delimitersToGuess: ['\t', Papa.UNIT_SEP],
    worker: true,
    complete(results) {
        // $ExpectType ParseResult<[string, string, string]>
        results;
    },
});

const file = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});

// $ExpectType void
Papa.parse(file, {
    transform(value, field) {},
    transformHeader(header, index) {
        return header;
    },
    complete(a, b) {
        // $ExpectType string[] | undefined
        a.meta.fields;
        // $ExpectType File
        b;
    },
});

// $ExpectType void
Papa.parse<[string], File>(file, {
    transform(value, field) {},
    transformHeader(header, index) {
        return header;
    },
    complete(a, b) {
        // $ExpectType ParseResult<[string]>
        a;
        // $ExpectType string[] | undefined
        a.meta.fields;
        // $ExpectType File
        b;
    },
});
// $ExpectType void
Papa.parse<[string]>(file, {
    transform(value, field) {},
    transformHeader(header, index) {
        return header;
    },
    complete(a, b) {
        // $ExpectType ParseResult<[string]>
        a;
        // $ExpectType string[] | undefined
        a.meta.fields;
        // $ExpectType LocalFile
        b;
    },
});

// Async parsing is allowed to specify only step, only complete, or both
Papa.parse<string[]>(file, {
    step(results, parser) {
        // $ExpectType string[]
        results.data;
        // $ExpectType ParseError[]
        results.errors;
        // $ExpectType Parser
        parser;
    },
});

Papa.parse<string[]>(file, {
    complete(results, file) {
        // $ExpectType string[][]
        results.data;
        // $ExpectType ParseError[]
        results.errors;
        // $ExpectType LocalFile
        file;
    },
});

Papa.parse<string[]>(file, {
    step(results, parser) {
        // $ExpectType string[]
        results.data;
        // $ExpectType ParseError[]
        results.errors;
        // $ExpectType Parser
        parser;
    },
    complete(results, file) {
        // $ExpectType string[][]
        results.data;
        // $ExpectType ParseError[]
        results.errors;
        // $ExpectType LocalFile
        file;
    },
});

// $ExpectType void
Papa.parse('/resources/files/normal.csv', {
    download: true,

    complete(a, b) {
        // $ExpectType string[] | undefined
        a.meta.fields;
        // $ExpectType string
        b;
    },
});

// Callback must provided for async parser
// @ts-expect-error
Papa.parse('/resources/files/normal.csv', {
    download: true,
});
// @ts-expect-error
Papa.parse('1,2,3', {
    worker: true,
});
// @ts-expect-error
Papa.parse(file);
// @ts-expect-error
Papa.parse(file, {});

// $ExpectType Duplex
Papa.parse(Papa.NODE_STREAM_INPUT, {});

// $ExpectType Duplex
Papa.parse(Papa.NODE_STREAM_INPUT);

const readable = new Readable();
const rows = ['1,2,3', '4,5,6'];

rows.forEach(r => {
    readable.push(r);
});

const papaStream: Duplex = Papa.parse(Papa.NODE_STREAM_INPUT);

readable.pipe(papaStream);

// generic
Papa.parse<string[]>('a,b,c', {
    step(a) {
        a.data[0].toLowerCase();
    },
});

// `chunk` Works only with local and remote files
// @ts-expect-error
Papa.parse<string[]>('a,b,c', {
    chunk(a) {
        console.log(a);
    },
});

// $ExpectType void
Papa.parse<[string, string]>('/resources/files/normal.csv', {
    download: true,
    chunk(r) {
        // $ExpectType ParseResult<[string, string]>
        r;
    },
    complete(r, file) {
        // $ExpectType ParseResult<[string, string]>
        r;
        // $ExpectType string
        file;
    },
});

declare const dataOrFile: string | File;
// $ExpectType void
Papa.parse<string[]>(dataOrFile, {
    complete(r: Papa.ParseResult<string[]>) {
        // $ExpectType ParseResult<string[]>
        r;
    },
});

declare const urlOrFile: string | File;
// $ExpectType void
Papa.parse<string[]>(urlOrFile, {
    download: true,
    complete(r: Papa.ParseResult<string[]>) {
        // $ExpectType ParseResult<string[]>
        r;
    },
});

Papa.parse<[string, string, string]>('a,b,c', {
    complete(a) {
        // $ExpectType ParseResult<[string, string, string]>
        a;
        a.data[0][0];
        a.data[0][1];
        a.data[0][2];
    },
});

/**
 * Unparsing
 */
Papa.unparse([{ a: 1, b: 1, c: 1 }]);
Papa.unparse([
    [1, 2, 3],
    [4, 5, 6],
]);
Papa.unparse({
    fields: ['3'],
    data: [],
});

Papa.unparse([{ a: 1, b: 1, c: 1 }], {});
Papa.unparse([{ a: 1, b: 1, c: 1 }], { quotes: false });
Papa.unparse([{ a: 1, b: 1, c: 1 }], { quotes: [false, true, true] });
Papa.unparse([{ a: 1, b: 1, c: 1 }], { escapeFormulae: false });
Papa.unparse([{ a: 1, b: 1, c: 1 }], { escapeFormulae: /^[=+\-@\t\r](?![\d.]*$)/ });
Papa.unparse(
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    { delimiter: ',' },
);
Papa.unparse(
    {
        fields: ['3'],
        data: [],
    },
    { newline: '\n' },
);
Papa.unparse(
    {
        fields: ['3'],
        data: [],
    },
    {
        quotes: value => typeof value === 'string',
    },
);

/**
 * Properties
 */
Papa.RECORD_SEP;
Papa.UNIT_SEP;
Papa.BAD_DELIMITERS;

/**
 * Parser
 */
const parser = new Papa.Parser({});
parser.getCharIndex();
parser.abort();
parser.parse('', 0, false);

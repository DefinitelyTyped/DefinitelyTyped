import Papa = require('papaparse');
import { Readable } from 'stream';

/**
 * Parsing
 */
const res = Papa.parse('3,3,3');

res.errors[0].code;

Papa.parse('3,3,3', {
    delimiter: ';',
    comments: false,
    trimHeaders: false,
    step(results, p) {
        p.abort();
        results.data.length;
    },
    dynamicTyping: true,
});

Papa.parse('3,3,3', {
    dynamicTyping: (field: string | number): boolean => /headerName/i.test(field.toString()),
});

Papa.parse('3,3,3', {
    dynamicTyping: { headerName: true },
});

Papa.parse('3,3,3', {
    dynamicTyping: { 5: true },
});

Papa.parse('4,4,4', {
    delimitersToGuess: [';', ','],
});

Papa.parse('4,4,4', {
    delimitersToGuess: [Papa.RECORD_SEP, '|', ',', ';'],
});

Papa.parse('4;4;4', {
    delimitersToGuess: ['\t', Papa.UNIT_SEP],
});

const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });

Papa.parse(file, {
    transform(value, field) {},
    transformHeader(header, index) {
        return header;
    },
    complete(a, b) {
        // $ExpectType string[] | undefined
        a.meta.fields;
        if (b) b.name;
    },
});

// .pipe to make sure it returns a stream
Papa.parse(Papa.NODE_STREAM_INPUT, {}).pipe;

const readable = new Readable();
const rows = ['1,2,3', '4,5,6'];

rows.forEach(r => {
    readable.push(r);
});

const papaStream: NodeJS.ReadWriteStream = Papa.parse(Papa.NODE_STREAM_INPUT);

readable.pipe(papaStream);

// generic
Papa.parse<string>('a,b,c', {
    step(a) {
        a.data[0];
    },
});

Papa.parse<string>('a,b,c', {
    chunk(a) {
        a.data[0];
    },
});

Papa.parse<[string, string, string]>('a,b,c', {
    complete(a) {
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
        downloadRequestBody: true,
        quotes: value => typeof value === 'string',
    },
);

/**
 * Properties
 */
Papa.SCRIPT_PATH;
Papa.LocalChunkSize;
Papa.BAD_DELIMITERS;

/**
 * Parser
 */
const parser = new Papa.Parser({});
parser.getCharIndex();
parser.abort();
parser.parse('', 0, false);

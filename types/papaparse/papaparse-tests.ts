

import Papa = require("papaparse");
import {
    ParseConfig,
    UnparseConfig,
    UnparseObject,
    ParseError,
    ParseMeta,
    ParseResult
} from "papaparse";
import { Readable } from "stream";

/**
 * Parsing
 */
var res = Papa.parse("3,3,3");

res.errors[0].code;

Papa.parse("3,3,3", {
    delimiter: ';',
    comments: false,
    trimHeaders: false,
    step: function (results, p) {
        p.abort();
        results.data.length;
    },
    dynamicTyping: true
});

Papa.parse("3,3,3", {
    dynamicTyping: (field: string | number): boolean => /headerName/i.test(field.toString())
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

var file = new File(null, null, null);

Papa.parse(file, {
    transform: function(value, field) {},
    transformHeader: function(header) {
        return header;
    },
    complete: function (a, b) {
        a.meta.fields;
        b.name;
    },
});

// .pipe to make sure it returns a stream
Papa.parse(Papa.NODE_STREAM_INPUT, {
}).pipe

const readable = new Readable()
const rows = [
    "1,2,3",
    "4,5,6"
]

rows.forEach(r => {
    readable.push(r);
});

const papaStream: NodeJS.ReadWriteStream = Papa.parse(Papa.NODE_STREAM_INPUT);

readable.pipe(papaStream);

/**
 * Unparsing
 */
Papa.unparse([{ a: 1, b: 1, c: 1 }]);
Papa.unparse([[1, 2, 3], [4, 5, 6]]);
Papa.unparse({
    fields: ["3"],
    data: []
});

Papa.unparse([{ a: 1, b: 1, c: 1 }], { quotes: false });
Papa.unparse([{ a: 1, b: 1, c: 1 }], { quotes: [false, true, true] });
Papa.unparse([[1, 2, 3], [4, 5, 6]], { delimiter: "," });
Papa.unparse({
    fields: ["3"],
    data: []
}, { newline: "\n" });


/**
 * Properties
 */
Papa.SCRIPT_PATH;
Papa.LocalChunkSize;

/**
 * Parser
 */
var parser = new Papa.Parser({})
parser.getCharIndex();
parser.abort();
parser.parse("", 0, false);

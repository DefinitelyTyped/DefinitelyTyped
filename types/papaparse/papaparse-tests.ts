

import Papa = require("papaparse");
import {
	ParseConfig,
	UnparseConfig,
	UnparseObject,
	ParseError,
	ParseMeta,
	ParseResult
} from "papaparse";

/**
 * Parsing
 */
var res = Papa.parse("3,3,3");

res.errors[0].code;

Papa.parse("3,3,3", {
	delimiter: ';',
	comments: false,

	step: function (results, p) {
		p.abort();
		results.data.length;
	}
});

var file = new File(null, null, null);

Papa.parse(file, {
	complete: function (a, b) {
		a.meta.fields;
		b.name;
	}
});

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

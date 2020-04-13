
import jsesc = require('jsesc');
import Opts = jsesc.Opts;

// ---- ---- ---- ---- ---- ---- ----

var num: number;
var str: string;
var bool: boolean;
var opts: Opts;
var quotes: 'single' | 'double' | 'backtick';
var numbers: 'binary' | 'octal' | 'decimal' | 'hexadecimal';

// ---- ---- ---- ---- ---- ---- ----

str = jsesc.version;

// ---- ---- ---- ---- ---- ---- ----

opts = {
	quotes: quotes
};
opts = {
	numbers: numbers
}
opts = {
	wrap: bool
};
opts = {
	es6: bool
};
opts = {
	escapeEverything: bool
};
opts = {
	minimal: bool
};
opts = {
	isScriptContext: bool
};
opts = {
	compact: bool
};
opts = {
	indent: str
};
opts = {
	indentLevel: num
};
opts = {
	json: bool
};
opts = {
	lowercaseHex: bool
};
// ---- ---- ---- ---- ---- ---- ----

str = jsesc(str);
str = jsesc(str, opts);

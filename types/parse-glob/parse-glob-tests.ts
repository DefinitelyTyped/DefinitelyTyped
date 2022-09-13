
import parseGlob = require('parse-glob');

var result: parseGlob.Result = parseGlob('a/b/c/**/*.{yml,json}');

var stringValue: string;
var boolValue: boolean;

stringValue = result.base;
stringValue = result.glob;
boolValue   = result.is.braces;
boolValue   = result.is.brackets;
boolValue   = result.is.dotdir;
boolValue   = result.is.dotfile;
boolValue   = result.is.extglob;
boolValue   = result.is.glob;
boolValue   = result.is.globstar;
boolValue   = result.is.negated;
stringValue = result.orig;
stringValue = result.path.basename;
stringValue = result.path.dirname;
stringValue = result.path.ext;
stringValue = result.path.extname;
stringValue = result.path.filename;

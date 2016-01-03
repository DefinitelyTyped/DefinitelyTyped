/// <reference path="./parse-glob.d.ts"/>
import parseGlob = require('parse-glob');

var result = parseGlob('a/b/c/**/*.{yml,json}');

result.base;
result.glob;
result.is.braces;
result.is.brackets;
result.is.dotdir;
result.is.dotfile;
result.is.extglob;
result.is.glob;
result.is.globstar;
result.is.negated;
result.orig;
result.path.basename;
result.path.dirname;
result.path.ext;
result.path.extname;
result.path.filename;

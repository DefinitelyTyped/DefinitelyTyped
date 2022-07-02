import isRegExp = require('is-regex');

declare var any: unknown;

if (isRegExp(any)) {
    any; // $ExpectType RegExp
}

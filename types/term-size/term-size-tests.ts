import termSize = require('term-size');

const size: termSize.TermSize = termSize();
// $ExpectType number
size.columns;
// $ExpectType number
size.rows;

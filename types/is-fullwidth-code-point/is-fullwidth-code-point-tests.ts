import isFullwidthCodePoint = require('is-fullwidth-code-point');

const codePoint = '谢'.codePointAt(0) as number;
isFullwidthCodePoint(codePoint); // $ExpectType boolean

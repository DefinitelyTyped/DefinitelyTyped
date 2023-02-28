import lrcParser = require('lrc-parser');

// $ExpectType LrcData
const result = lrcParser('');

// @ts-expect-error
const wrongResult = lrcParser(0);

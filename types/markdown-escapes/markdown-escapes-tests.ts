import escapes = require('markdown-escapes');
import { Options } from 'markdown-escapes';

escapes.commonmark; // $ExpectType string[]
escapes.default; // $ExpectType string[]
escapes.gfm; // $ExpectType string[]

escapes({}); // $ExpectType string[]
escapes({ gfm: true }); // $ExpectType string[]
escapes({ commonmark: true }); // $ExpectType string[]
const options: Options = {
    commonmark: true,
    gfm: true,
};
escapes(options); // $ExpectType string[]

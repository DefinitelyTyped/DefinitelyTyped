import parseSrcset = require("parse-srcset");

const parsed = parseSrcset("data:,a 1w 1h");
parsed; // $ExpectType ParsedSrcset[];
parsed[0].url; // $ExpectType string;
parsed[0].d; // $ExpectType number | undefined;
parsed[0].w; // $ExpectType number | undefined;
parsed[0].h; // $ExpectType number | undefined;

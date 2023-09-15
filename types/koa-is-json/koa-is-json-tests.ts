/// <reference types="node" />

import isJSON = require("koa-is-json");
import Stream = require("stream");

isJSON(null); // $ExpectType boolean
isJSON(""); // $ExpectType boolean
isJSON(Buffer.from([0x1, 0x2])); // $ExpectType boolean
isJSON(new Stream.Readable()); // $ExpectType boolean

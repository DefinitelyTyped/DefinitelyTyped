// Type definitions for murmurhash-js v1.0.0
// Project: https://github.com/mikolalysenko/murmurhash-js
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import murmur2 = require("./murmurhash2_gc");
import murmur3 = require("./murmurhash3_gc");

declare const murmur: typeof murmur3 & {
    murmur3: typeof murmur3;
    murmur2: typeof murmur2;
};

export = murmur;

import murmur2 = require("./murmurhash2_gc");
import murmur3 = require("./murmurhash3_gc");

declare const murmur: typeof murmur3 & {
    murmur3: typeof murmur3;
    murmur2: typeof murmur2;
};

export = murmur;

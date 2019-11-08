import fastChunkString = require("fast-chunk-string");

// $ExpectType string[]
fastChunkString("AABBCC", { size: 2 });

// $ExpectType string[]
fastChunkString("😀😃😄😁", { size: 2, unicodeAware: false });

// $ExpectType string[]
fastChunkString("😀😃😄😁", { size: 2, unicodeAware: true });

// $ExpectError
fastChunkString("missing options");

// $ExpectError
fastChunkString("missing size", { unicodeAware: false });

// $ExpectError
fastChunkString(null, { size: 2 });

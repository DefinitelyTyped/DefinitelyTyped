import fastChunkString = require("fast-chunk-string");

// $ExpectType string[]
fastChunkString("AABBCC", { size: 2 });

// $ExpectType string[]
fastChunkString("😀😃😄😁", { size: 2, unicodeAware: false });

// $ExpectType string[]
fastChunkString("😀😃😄😁", { size: 2, unicodeAware: true });

// @ts-expect-error
fastChunkString("missing options");

// @ts-expect-error
fastChunkString("missing size", { unicodeAware: false });

// @ts-expect-error
fastChunkString(null, { size: 2 });

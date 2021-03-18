import decode = require("image-decode");

// $ExpectType DecodedImage | null
decode(new Uint8Array(), { type: "image/png" });

// $ExpectType DecodedImage | null
decode(new Uint8Array(), "image/png");

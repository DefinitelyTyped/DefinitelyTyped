import decode = require("image-decode");

// $ExpectType DecodedImage | null
decode(new Uint8Array(), { type: "image/png" });

// $ExpectType DecodedImage | null
decode(new Uint8Array(), "image/jpeg");

// $ExpectType DecodedImage | null
decode(new Uint8Array(), "png");

// $ExpectType DecodedImage | null
decode(new Uint8Array());

// $ExpectType DecodedImage | null
decode("", "image/bmp");

// $ExpectType DecodedImage | null
decode("", { type: "image/bitmap" });

// $ExpectType DecodedImage | null
decode(Buffer.alloc(0), "image/png");

// $ExpectType DecodedImage | null
decode(new ArrayBuffer(0), "image/gif");

// $ExpectType DecodedImage | null
decode(new File([], "image.png"), "image/png");

// $ExpectType DecodedImage | null
decode(new Blob([]), "image/tiff");

// @ts-expect-error
decode();

// @ts-expect-error
decode(123, "image/bitmap");

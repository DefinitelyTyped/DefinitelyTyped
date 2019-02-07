import * as UTIF from "utif";

// $ExpectType IFD[]
const IFDs = UTIF.decode(new ArrayBuffer(64));
// $ExpectType Uint8Array
const rgba = UTIF.toRGBA8(IFDs[0]);

// $ExpectType ArrayBuffer
UTIF.encodeImage(rgba, 8, 8);
// $ExpectType ArrayBuffer
UTIF.encode(IFDs);
// $ExpectType void
UTIF.decodeImages(new ArrayBuffer(64), IFDs);
// $ExpectType void
UTIF.replaceIMG();

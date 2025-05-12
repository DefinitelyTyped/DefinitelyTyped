import isGif from "is-gif";

// arrange
declare const bits: Uint8Array;

isGif(bits); // $ExpectType boolean

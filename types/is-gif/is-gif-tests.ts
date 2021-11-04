import isGif from 'is-gif';

// arrange
declare const bits: Uint8Array;

// $ExpectType boolean
isGif(bits);

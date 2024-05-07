import decodeDXT = require("decode-dxt");

// $ExpectType Uint8Array
decodeDXT(new DataView(new ArrayBuffer(0)), 0, 0);

// $ExpectType Uint8Array
decodeDXT(new DataView(new ArrayBuffer(0)), 0, 0, decodeDXT.dxt3);

// $ExpectType "dxt1"
decodeDXT.dxt1;

// $ExpectType "dxt2"
decodeDXT.dxt2;

// $ExpectType "dxt3"
decodeDXT.dxt3;

// $ExpectType "dxt4"
decodeDXT.dxt4;

// $ExpectType "dxt5"
decodeDXT.dxt5;

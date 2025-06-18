import hex2dec = require("hex2dec");

hex2dec.hexToDec("0xFA"); // $ExpectType string | null
hex2dec.hexToDec("nonsense"); // $ExpectType string | null
hex2dec.decToHex("250"); // $ExpectType string | null
hex2dec.decToHex("250", { prefix: false }); // $ExpectType string | null
hex2dec.decToHex("nonsense"); // $ExpectType string | null

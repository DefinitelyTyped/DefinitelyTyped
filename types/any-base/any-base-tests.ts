import anyBase = require("any-base");

anyBase("0123456789abcdef", "01"); // $ExpectType Converter
anyBase("0123456789abcdef", "01")("ff"); // $ExpectType string

const converter: anyBase.Converter = anyBase("0123456789abcdef", "01");
converter("ff"); // $ExpectType string

anyBase.BIN; // $ExpectType "01"
anyBase.OCT; // $ExpectType "01234567"
anyBase.DEC; // $ExpectType "0123456789"
anyBase.HEX; // $ExpectType "0123456789abcdef"

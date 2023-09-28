import zenginCode = require("zengin-code");

// $ExpectType string
zenginCode["1000"].code;
// $ExpectType string
zenginCode["1000"].name;
// $ExpectType string
zenginCode["1000"].kana;
// $ExpectType string
zenginCode["1000"].hira;
// $ExpectType string
zenginCode["1000"].roma;

// $ExpectType string
zenginCode["1000"].branches["001"].code;
// $ExpectType string
zenginCode["1000"].branches["001"].name;
// $ExpectType string
zenginCode["1000"].branches["001"].kana;
// $ExpectType string
zenginCode["1000"].branches["001"].hira;
// $ExpectType string
zenginCode["1000"].branches["001"].roma;

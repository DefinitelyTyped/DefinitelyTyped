import numberToWords = require("number-to-words");

numberToWords.toOrdinal(21); // $ExpectType string
numberToWords.toOrdinal("21"); // $ExpectType string

numberToWords.toWords(13); // $ExpectType string
numberToWords.toWords("13"); // $ExpectType string

numberToWords.toWordsOrdinal(21); // $ExpectType string
numberToWords.toWordsOrdinal("21"); // $ExpectType string

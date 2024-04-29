import japaneseCharacters = require("japanese-characters");

japaneseCharacters.presentIn("ブートキャンプ"); // $ExpectType boolean

japaneseCharacters.presentIn("some English string"); // $ExpectType boolean

japaneseCharacters.presentIn({}); // $ExpectType false
japaneseCharacters.presentIn([]); // $ExpectType false

japaneseCharacters.hiragana; // $ExpectType string[]
japaneseCharacters.katakana; // $ExpectType string[]

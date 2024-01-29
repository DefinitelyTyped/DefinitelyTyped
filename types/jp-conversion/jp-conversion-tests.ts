import { convert, romanise } from "jp-conversion";

// $ExpectedType { kanji: false, hiragana: string, katakana: string, romaji: string}
convert("a");

// $ExpectedType false
convert("l");

// $ExpectedType false
convert("l");

// $ExpectedType string
romanise("あ");

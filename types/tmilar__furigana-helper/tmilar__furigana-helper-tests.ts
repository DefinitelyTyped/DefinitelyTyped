import { combineOriginalAndKana } from "@tmilar/furigana-helper";

const original = "送り仮名";
const kana = "おくりがな";

// $ExpectType string[][]
const combined = combineOriginalAndKana(original, kana);

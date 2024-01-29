import { getDictionary, getNoMarkupDictionary } from "cleasby-vigfusson-dictionary";

// $ExpectType DictionaryEntry[]
const result = getDictionary();

// $ExpectType DictionaryEntry[]
const result2 = getNoMarkupDictionary();

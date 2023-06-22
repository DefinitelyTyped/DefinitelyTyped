import { getLangNameFromCode, getLangCodeList, languageNameMap } from 'language-name-map';

// $ExpectType { name: string; native: string; dir: "ltr" | "rtl"; } | undefined
getLangNameFromCode('uk');

// $ExpectType { name: string; native: string; dir: "ltr" | "rtl"; } | undefined
getLangNameFromCode('thiscountrydoesntexist');

// $ExpectType string[]
getLangCodeList();

// $ExpectType { [key: string]: { name: string; native: string; dir: 0 | 1; }; }
languageNameMap;

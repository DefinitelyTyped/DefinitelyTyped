// Type definitions for langmap 0.0
// Project: https://github.com/mozilla/language-mapping-list
// Definitions by: Gábor Balogh <https://github.com/grabofus>
//                 Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare const langmap: langmap.LanguageMappingList;

declare namespace langmap {
    interface Language {
        englishName: string;
        nativeName: string;
    }

    interface LanguageMappingList {
        [language: string]: Language;
    }
}

export = langmap;

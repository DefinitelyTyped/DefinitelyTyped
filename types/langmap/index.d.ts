// Type definitions for langmap 0.0
// Project: https://github.com/mozilla/language-mapping-list
// Definitions by: Gábor Balogh <https://github.com/grabofus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Language {
    englishName: string;
    nativeName: string;
}

export interface LanguageMappingList {
    [language: string]: Language;
}

declare const langmap: LanguageMappingList;

export default langmap;

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

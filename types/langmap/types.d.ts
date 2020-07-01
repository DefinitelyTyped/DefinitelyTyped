export interface Language {
    englishName: string;
    nativeName: string;
}

export interface LanguageMappingList {
    [language: string]: Language;
}

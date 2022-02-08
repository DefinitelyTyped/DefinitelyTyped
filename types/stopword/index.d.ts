// Type definitions for stopword 1.0
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace sw;

declare namespace stopword {
    interface Stopword {
        /**
         * Stopword removal
         *
         * @param text Array string of words
         * @param stopwords Array string of your custom stopwords (default: English stopwords | .en)
         */
        removeStopwords: (text: string[], stopwords?: string[]) => string[];
    }

    type LanguageCode =
        | 'af'
        | 'ar'
        | 'bg'
        | 'bn'
        | 'br'
        | 'ca'
        | 'cs'
        | 'da'
        | 'de'
        | 'el'
        | 'en'
        | 'eo'
        | 'es'
        | 'et'
        | 'eu'
        | 'fa'
        | 'fi'
        | 'fr'
        | 'ga'
        | 'gl'
        | 'ha'
        | 'he'
        | 'hi'
        | 'hr'
        | 'hu'
        | 'hy'
        | 'id'
        | 'it'
        | 'ja'
        | 'ko'
        | 'la'
        | 'lgg'
        | 'lggo'
        | 'lv'
        | 'mr'
        | 'my'
        | 'nl'
        | 'no'
        | 'pa'
        | 'pl'
        | 'pt'
        | 'ptbr'
        | 'ro'
        | 'ru'
        | 'sk'
        | 'sl'
        | 'so'
        | 'st'
        | 'sv'
        | 'sw'
        | 'th'
        | 'tr'
        | 'ur'
        | 'vi'
        | 'yo'
        | 'zh'
        | 'zu';
}

declare const stopword: {
    [Language in stopword.LanguageCode]: string[];
} &
    stopword.Stopword;

export = stopword;

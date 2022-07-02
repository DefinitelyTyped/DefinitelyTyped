// Type definitions for stopword 2.0
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
        | 'afr'
        | 'ara'
        | 'ben'
        | 'bre'
        | 'bul'
        | 'cat'
        | 'ces'
        | 'dan'
        | 'deu'
        | 'ell'
        | 'eng'
        | 'epo'
        | 'est'
        | 'eus'
        | 'fas'
        | 'fin'
        | 'fra'
        | 'gle'
        | 'glg'
        | 'guj'
        | 'hau'
        | 'heb'
        | 'hin'
        | 'hrv'
        | 'hun'
        | 'hye'
        | 'ind'
        | 'ita'
        | 'jpn'
        | 'kor'
        | 'kur'
        | 'lat'
        | 'lav'
        | 'lgg'
        | 'lggNd'
        | 'lit'
        | 'mar'
        | 'msa'
        | 'mya'
        | 'nld'
        | 'nob'
        | 'panGu'
        | 'pol'
        | 'por'
        | 'porBr'
        | 'ron'
        | 'rus'
        | 'slk'
        | 'slv'
        | 'som'
        | 'sot'
        | 'spa'
        | 'swa'
        | 'swe'
        | 'tgl'
        | 'tha'
        | 'tur'
        | 'ukr'
        | 'urd'
        | 'vie'
        | 'yor'
        | 'zho'
        | 'zul';
}

declare const stopword: {
    [Language in stopword.LanguageCode]: string[];
} & stopword.Stopword;

export = stopword;

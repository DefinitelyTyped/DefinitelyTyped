// Type definitions for stopword 0.3
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TStopwords = Array<string>;

declare namespace stopword {

    // main API
    export function removeStopwords(text: Array<string>, stopwords?: Array<string>): string;

    // <language code>
    export var af: TStopwords;
    export var ar: TStopwords;
    export var bn: TStopwords;
    export var br: TStopwords;
    export var da: TStopwords;
    export var de: TStopwords;
    export var en: TStopwords;
    export var es: TStopwords;
    export var fa: TStopwords;
    export var fr: TStopwords;
    export var fi: TStopwords;
    export var ha: TStopwords;
    export var he: TStopwords;
    export var hi: TStopwords;
    export var id: TStopwords;
    export var it: TStopwords;
    export var ja: TStopwords;
    export var lgg: TStopwords;
    export var lggo: TStopwords;
    export var my: TStopwords;
    export var nl: TStopwords;
    export var no: TStopwords;
    export var pa: TStopwords;
    export var pl: TStopwords;
    export var pt: TStopwords;
    export var ru: TStopwords;
    export var so: TStopwords;
    export var st: TStopwords;
    export var sv: TStopwords;
    export var sw: TStopwords;
    export var vi: TStopwords;
    export var yo: TStopwords;
    export var zh: TStopwords;
    export var zu: TStopwords;
}

export = stopword;

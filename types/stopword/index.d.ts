// Type definitions for stopword 0.3
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TStopwords = string[];

declare namespace stopword {

    // main API
    function removeStopwords(text: string[], stopwords?: string[]): string;

    // <language code>
    const af: TStopwords;
    const ar: TStopwords;
    const bn: TStopwords;
    const br: TStopwords;
    const da: TStopwords;
    const de: TStopwords;
    const en: TStopwords;
    const es: TStopwords;
    const fa: TStopwords;
    const fr: TStopwords;
    const fi: TStopwords;
    const ha: TStopwords;
    const he: TStopwords;
    const hi: TStopwords;
    const id: TStopwords;
    const it: TStopwords;
    const ja: TStopwords;
    const lgg: TStopwords;
    const lggo: TStopwords;
    const my: TStopwords;
    const nl: TStopwords;
    const no: TStopwords;
    const pa: TStopwords;
    const pl: TStopwords;
    const pt: TStopwords;
    const ru: TStopwords;
    const so: TStopwords;
    const st: TStopwords;
    const sv: TStopwords;
    const sw: TStopwords;
    const vi: TStopwords;
    const yo: TStopwords;
    const zh: TStopwords;
    const zu: TStopwords;
}

export = stopword;

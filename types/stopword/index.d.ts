// Type definitions for stopword 0.3
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Stopword {
    type TStopwords = string[];

     const IStopword: {
      /**
       * Stopword removal
       *
       * @param text Array string of words
       * @param stopwords Array string of your custom stopwords (default: English stopwords | .en)
       */
      removeStopwords(text: string[], stopwords?: string[]): string;

      /**
       * Get array of stopwords according by language code
       * Also can uses for stopwords parameter on removeStopwords
       */
       af: TStopwords; ar: TStopwords; bn: TStopwords; br: TStopwords; da: TStopwords;
       de: TStopwords; en: TStopwords; es: TStopwords; fa: TStopwords; fr: TStopwords;
       fi: TStopwords; ha: TStopwords; he: TStopwords; hi: TStopwords; id: TStopwords;
       it: TStopwords; ja: TStopwords; lgg: TStopwords; lggo: TStopwords; my: TStopwords;
       nl: TStopwords; no: TStopwords; pa: TStopwords; pl: TStopwords; pt: TStopwords;
       ru: TStopwords; so: TStopwords; st: TStopwords; sv: TStopwords; sw: TStopwords;
       vi: TStopwords; yo: TStopwords; zh: TStopwords; zu: TStopwords;
    };
}

export = Stopword.IStopword;

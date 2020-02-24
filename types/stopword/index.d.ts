// Type definitions for stopword 0.3.4
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Stopword {
     const IStopword: {
      /**
       * Stopword removal
       *
       * @param text Array string of words
       * @param stopwords Array string of your custom stopwords (default: English stopwords | .en)
       */
      removeStopwords(text: string[], stopwords?: string[]): string[];

      /**
       * Get array of stopwords according by language code
       * Also can uses for stopwords parameter on removeStopwords
       */
       af: string[]; ar: string[]; bn: string[]; br: string[]; da: string[];
       de: string[]; en: string[]; es: string[]; fa: string[]; fr: string[];
       fi: string[]; ha: string[]; he: string[]; hi: string[]; id: string[];
       it: string[]; ja: string[]; lgg: string[]; lggo: string[]; my: string[];
       nl: string[]; no: string[]; pa: string[]; pl: string[]; pt: string[];
       ru: string[]; so: string[]; st: string[]; sv: string[]; sw: string[];
       vi: string[]; yo: string[]; zh: string[]; zu: string[];
    };
}

export = Stopword.IStopword;

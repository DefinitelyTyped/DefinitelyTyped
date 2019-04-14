// Type definitions for humanize-duration 3.18
// Project: https://github.com/EvanHahn/HumanizeDuration.js
// Definitions by: Rigoberto Molina <https://github.com/RigoTheDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace humanizeDuration;

export = HumanizeDuration;

declare function HumanizeDuration(ms: number, options?: HumanizeDuration.Options): string;

declare namespace HumanizeDuration {
  type LanguageCode = (
    "ar" | "bg" | "ca" | "zh_CN" | "zh_TW" | "hr" | "cs" | "da" |
    "nl" | "en" | "fa" | "fi" | "fr" | "de" | "el" | "hu" | "is" |
    "id" | "it" | "ja" | "ko" | "lo" | "lt" | "ms" | "no" | "pl" |
    "pt" | "ro" | "ru" | "sk" | "es" | "sv" | "tr" | "th" | "uk" |
    "ur" | "vi"
  );
  type Unit = "y" | "mo" | "w" | "d" | "h" | "m" | "s" | "ms";
  interface UnitMeasuresOptions {
    y?: number;
    mo?: number;
    w?: number;
    d?: number;
    h?: number;
    m?: number;
    s?: number;
    ms?: number;
  }

  interface UnitTranslationOptions {
    y?: () => string;
    mo?: () => string;
    w?: () => string;
    d?: () => string;
    h?: () => string;
    m?: () => string;
    s?: () => string;
    ms?: () => string;
  }

  interface Options {
    language?: string;
    fallbacks?: string[];
    delimiter?: string;
    spacer?: string;
    largest?: number;
    units?: Unit[];
    round?: boolean;
    decimal?: string;
    conjunction?: string;
    serialComma?: boolean;
    maxDecimalPoints?: number;
    unitMeasures?: UnitMeasuresOptions;
  }

  interface HumanizerOptions extends Options {
    languages?: {
      [key: string]: UnitTranslationOptions;
    };
  }

  interface Humanizer {
    (ms: number, options?: HumanizeDuration.Options): string;
    languages: {
      [key: string]: UnitTranslationOptions;
    };
  }

  function humanizer(options?: HumanizerOptions): Humanizer;

  function getSupportedLanguages(): LanguageCode[];
}

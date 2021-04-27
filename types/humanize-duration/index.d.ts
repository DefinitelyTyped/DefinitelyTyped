// Type definitions for humanize-duration 3.18
// Project: https://github.com/EvanHahn/HumanizeDuration.js
// Definitions by: Rigoberto Molina <https://github.com/RigoTheDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
    y?: (count?: number) => string;
    mo?: (count?: number) => string;
    w?: (count?: number) => string;
    d?: (count?: number) => string;
    h?: (count?: number) => string;
    m?: (count?: number) => string;
    s?: (count?: number) => string;
    ms?: (count?: number) => string;
  }

  interface Options {
    /**
     * Language for unit display (accepts an ISO 639-1 code from one of the supported languages).
     */
    language?: string;
    /**
     * Fallback languages if the provided language cannot be found (accepts an ISO 639-1 code from one of the supported languages). It works from left to right.
     */
    fallbacks?: string[];
    /**
     * String to display between the previous unit and the next value.
     */
    delimiter?: string;
    /**
     * String to display between each value and unit.
     */
    spacer?: string;
    /**
     * Number representing the maximum number of units to display for the duration.
     */
    largest?: number;
    /**
     * Array of strings to define which units are used to display the duration (if needed).
     */
    units?: Unit[];
    /**
     * Boolean value. Use true to round the smallest unit displayed (can be combined with largest and units).
     */
    round?: boolean;
    /**
     * String to substitute for the decimal point in a decimal fraction.
     */
    decimal?: string;
    /**
     * String to include before the final unit. You can also set serialComma to false to eliminate the final comma.
     */
    conjunction?: string;
    serialComma?: boolean;
    /**
     * Number that defines a maximal decimal points for float values.
     */
    maxDecimalPoints?: number;
    /**
     * Customize the value used to calculate each unit of time.
     */
    unitMeasures?: UnitMeasuresOptions;
  }

  interface HumanizerOptions extends Options {
    languages?: {
      [key: string]: UnitTranslationOptions;
    };
  }

  interface Humanizer {
    (ms: number, options?: Options): string;
    languages: {
      [x: string]: UnitTranslationOptions;
    };
  }

  function humanizer(options?: HumanizerOptions): Humanizer;

  /**
   * This function won't return any new languages you define; it will only return the defaults supported by the library.
   */
  function getSupportedLanguages(): LanguageCode[];
}

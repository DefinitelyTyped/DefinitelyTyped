// Type definitions for humanize-duration v3.18.0
// Project: https://github.com/EvanHahn/HumanizeDuration.js
// Definitions by: Rigoberto Molina <https://github.com/RigoTheDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace humanizeDuration;

export = HumanizeDuration;

declare function HumanizeDuration(ms: number): string;
declare function HumanizeDuration(ms: number, options: HumanizeDuration.Options): string;

declare namespace HumanizeDuration {
  export type LanguageCode = (
    "ar" | "bg" | "ca" | "zh_CN" | "zh_TW" | "hr" | "cs" | "da" |
    "nl" | "en" | "fa" | "fi" | "fr" | "de" | "el" | "hu" | "is" |
    "id" | "it" | "ja" | "ko" | "lo" | "lt" | "ms" | "no" | "pl" |
    "pt" | "ro" | "ru" | "sk" | "es" | "sv" | "tr" | "th" | "uk" |
    "ur" | "vi"
  );
  export type Unit = "y" | "mo" | "w" | "d" | "h" | "m" | "s" | "ms";
  export interface UnitMeasuresOptions {
    y: number;
    mo: number;
    w: number;
    d: number;
    h: number;
    m: number;
    s: number;
    ms: number;
  }

  export interface UnitTranslationOptions {
    y: () => string;
    mo: () => string;
    w: () => string;
    d: () => string;
    h: () => string;
    m: () => string;
    s: () => string;
    ms: () => string;
  }

  export interface Options {
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
    unitMeasures?: Partial<UnitMeasuresOptions>;
  }

  export interface HumanizerOptions extends Options {
    languages?: {
      [key: string]: Partial<UnitTranslationOptions>;
    }
  }

  export interface Humanizer {
    (ms: number, options?: HumanizeDuration.Options): string;
    languages: {
      [key: string]: Partial<UnitTranslationOptions>;
    }
  }

  export function humanizer(options?: HumanizerOptions): Humanizer;

  export function getSupportedLanguages(): LanguageCode[];
}

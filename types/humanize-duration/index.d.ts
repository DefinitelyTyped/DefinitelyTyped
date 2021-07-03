// Type definitions for humanize-duration 3.25
// Project: https://github.com/EvanHahn/HumanizeDuration.js
// Definitions by: Rigoberto Molina <https://github.com/RigoTheDev>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace humanizeDuration;

declare namespace humanizeDuration {
    type LanguageCode =
        | "ar"
        | "bg"
        | "ca"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "es"
        | "et"
        | "fa"
        | "fi"
        | "fo"
        | "fr"
        | "gr"
        | "he"
        | "hi"
        | "hr"
        | "hu"
        | "id"
        | "is"
        | "it"
        | "ja"
        | "ko"
        | "lo"
        | "lt"
        | "lv"
        | "ms"
        | "nl"
        | "no"
        | "pl"
        | "pt"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sv"
        | "th"
        | "tr"
        | "uk"
        | "ur"
        | "vi"
        | "zh_CN"
        | "zh_TW";

    type SupportedLanguage = Exclude<LanguageCode, "gr">;
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
         * @default 'en'
         */
        language?: string;
        /**
         * Fallback languages if the provided language cannot be found (accepts an ISO 639-1 code from one of the supported languages). It works from left to right.
         */
        fallbacks?: string[];
        /**
         * String to display between the previous unit and the next value.
         * @default ','
         */
        delimiter?: string;
        /**
         * String to display between each value and unit.
         * @default " "
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
         * @default false
         */
        round?: boolean;
        /**
         * String to substitute for the decimal point in a decimal fraction.
         */
        decimal?: string;
        /**
         * String to include before the final unit. You can also set serialComma to false to eliminate the final comma.
         * @default ""
         */
        conjunction?: string;
        /**
         * @default true
         */
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
        languages?: Record<string, UnitTranslationOptions>;
    }

    interface Humanizer {
        (ms: number, options?: Options): string;
        humanizer(options?: HumanizerOptions): Humanizer;

        /**
         * This function won't return any new languages you define; it will only return the defaults supported by the library.
         */
        getSupportedLanguages(): SupportedLanguage[];
        languages: Record<string, UnitTranslationOptions>;
    }
}

declare const humanizeDuration: humanizeDuration.Humanizer;

export = humanizeDuration;

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
        y?: number | undefined;
        mo?: number | undefined;
        w?: number | undefined;
        d?: number | undefined;
        h?: number | undefined;
        m?: number | undefined;
        s?: number | undefined;
        ms?: number | undefined;
    }

    interface UnitTranslationOptions {
        y?: ((count?: number) => string) | undefined;
        mo?: ((count?: number) => string) | undefined;
        w?: ((count?: number) => string) | undefined;
        d?: ((count?: number) => string) | undefined;
        h?: ((count?: number) => string) | undefined;
        m?: ((count?: number) => string) | undefined;
        s?: ((count?: number) => string) | undefined;
        ms?: ((count?: number) => string) | undefined;
    }

    interface Options {
        /**
         * Language for unit display (accepts an ISO 639-1 code from one of the supported languages).
         * @default 'en'
         */
        language?: string | undefined;
        /**
         * Fallback languages if the provided language cannot be found (accepts an ISO 639-1 code from one of the supported languages). It works from left to right.
         */
        fallbacks?: string[] | undefined;
        /**
         * String to display between the previous unit and the next value.
         * @default ','
         */
        delimiter?: string | undefined;
        /**
         * String to display between each value and unit.
         * @default " "
         */
        spacer?: string | undefined;
        /**
         * Number representing the maximum number of units to display for the duration.
         */
        largest?: number | undefined;
        /**
         * Array of strings to define which units are used to display the duration (if needed).
         */
        units?: Unit[] | undefined;
        /**
         * Boolean value. Use true to round the smallest unit displayed (can be combined with largest and units).
         * @default false
         */
        round?: boolean | undefined;
        /**
         * String to substitute for the decimal point in a decimal fraction.
         */
        decimal?: string | undefined;
        /**
         * String to include before the final unit. You can also set serialComma to false to eliminate the final comma.
         * @default ""
         */
        conjunction?: string | undefined;
        /**
         * @default true
         */
        serialComma?: boolean | undefined;
        /**
         * Number that defines a maximal decimal points for float values.
         */
        maxDecimalPoints?: number | undefined;
        /**
         * Customize the value used to calculate each unit of time.
         */
        unitMeasures?: UnitMeasuresOptions | undefined;
    }

    interface HumanizerOptions extends Options {
        languages?: Record<string, UnitTranslationOptions> | undefined;
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

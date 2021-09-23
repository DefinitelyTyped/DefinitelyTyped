// Type definitions for Numeral.js 2.0
// Project: https://github.com/adamwdraper/Numeral-js
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 Kenneth Luján <https://github.com/klujanrosas>
//                 Carlos Quiroga <https://github.com/KarlosQ>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace numeral;

/**
 * A javascript library for formatting and manipulating numbers.
 */
declare function numeral(input?: any): numeral.Numeral;

type VERSION = '2.0.6';

declare namespace numeral {
    /** compare numeral object */
    function isNumeral(value: any): boolean;

    const version: VERSION;
    const options: NumeralJSOptions;
    /**
     * Object with all loaded locales
     */
    const locales: NumeralJSLocales;

    /**
     * Object with all loaded formats
     */
    const formats: NumeralJSFormats;

    /**
     * Object with utility functions
     */
    const _: NumeralJSUtils;

    /**
     * This function sets the current locale.  If no arguments are passed in,
     * it will simply return the current global locale key.
     */
    function locale(key?: string): string;

    /**
     * This function provides access to the loaded locale data.  If
     * no arguments are passed in, it will simply return the current
     * global locale object.
     *
     * @param key Locale key, e.g 'es' for a spanish locale definition
     */
    function localeData(key?: string): NumeralJSLocale;

    /**
     * This function resets the configuration to all the defaults
     */
    function reset(): void;

    function zeroFormat(format: string): void;
    function nullFormat(format: string): void;
    function defaultFormat(format: string): void;
    /**
     * Registers a language definition or a custom format definition.
     *
     * @param what Allowed values are: either 'format' or 'locale'
     * @param key The key of the registerd type, e.g. 'de' for a german locale definition
     * @param value The locale definition or the format definitiion
     */
    function register(
        what: RegisterType,
        key: string,
        value: NumeralJSLocale | NumeralJSFormat,
    ): NumeralJSLocale | NumeralJSFormat;

    function validate(value: any, culture: any): boolean;

    const fn: Numeral['prototype'];

    // http://numeraljs.com/#use-it
    class Numeral {
        constructor(input: any, value: number);
        prototype: Numeral;
        clone(): Numeral;
        format(inputString?: string, roundingFunction?: RoundingFunction): string;
        value(): number | null;
        input(): any;
        set(value: any): Numeral;
        add(value: any): Numeral;
        subtract(value: any): Numeral;
        multiply(value: any): Numeral;
        divide(value: any): Numeral;
        difference(value: any): number;
    }

    // http://numeraljs.com/#locales
    interface NumeralJSLocale {
        delimiters: {
            thousands: string;
            decimal: string;
        };
        abbreviations: {
            thousand: string;
            million: string;
            billion: string;
            trillion: string;
        };
        ordinal(num: number): string;
        currency: {
            symbol: string;
        };
    }

    interface NumeralJSLocales {
        [id: string]: NumeralJSLocale;
    }

    interface NumeralJSOptions {
        currentLocale: string;
        zeroFormat: string;
        nullFormat: string;
        defaultFormat: string;
        scalePercentBy100: boolean;
    }

    type RoundingFunction = (value: number) => number;

    // http://numeraljs.com/#custom-formats
    interface NumeralJSFormat {
        regexps: {
            format: RegExp;
            unformat: RegExp;
        };
        format: (value: any, format: string, roundingFunction: RoundingFunction) => string;
        unformat: (value: string) => number;
    }

    interface NumeralJSFormats {
        [id: string]: NumeralJSFormat;
    }

    interface NumeralJSUtils {
        numberToFormat: (value: number, format: string, roundingFunction?: RoundingFunction) => string;
        stringToNumber: (string: string) => number;
    }

    type RegisterType = 'format' | 'locale';
}

export = numeral;

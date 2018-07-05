// Type definitions for ultra-strftime 1.0
// Project: https://github.com/xio4/ultra_strftime
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function strftime(fmt: string, d?: Date, locale?: strftime.Locale, options?: strftime.Options): string;
declare function strftime(fmt: string, locale?: strftime.Locale, options?: strftime.Options): string;

declare namespace strftime {
    type StrftimeFunction = (fmt: string, d?: Date, options?: Options) => string;

    interface LocaleFormats {
        /** equivalent to %m/%d/%y in en_US */
        D: string;
        /** equivalent to %Y-%m-%d in en_US */
        F: string;
        /** equivalent to %H:%M in en_US */
        R: string;
        /** equivalent to %D in en_US */
        X: string;
        /** equivalent to %a %b %d %X %Y %Z in en_US */
        c: string;
        /** equivalent to %I:%M:%S %p in en_US */
        r: string;
        /** equivalent to %H:%M:%S in en_US */
        T: string;
        /** equivalent to %e-%b-%Y in en_US */
        v: string;
        /** equivalent to %T in en_US */
        x: string;
    }

    interface Locale {
        days: string[];
        shortDays: string[];
        months: string[];
        shortMonths: string[];
        AM: string;
        PM: string;
        am: string;
        pm: string;
        formats: LocaleFormats;
    }

    interface Options {
        timezone?: string | number;
        utc?: boolean;
    }

    function strftimeUTC(fmt: string, d?: Date, locale?: Locale): string;
    function strftimeTZ(fmt: string, d: Date, locale: Locale, timezone: number): string;
    function strftimeTZ(fmt: string, d: Date, timezone: number): string;
    function localizedStrftime(locale: Locale): StrftimeFunction;

    function strftime(fmt: string, d?: Date, locale?: Locale, options?: Options): string;
    function strftime(fmt: string, locale?: Locale, options?: Options): string;
}

export = strftime;

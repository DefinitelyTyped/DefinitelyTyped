// Type definitions for locale 0.1
// Project: https://github.com/florrain/locale
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = locale;

declare global {
    namespace Express {
        interface Request {
            locale: string;
            rawLocale: locale.Locale;
        }
    }
}

/**
 * This module exports a function that can be used as Express/Connect
 * middleware. It takes one argument, a list of supported locales, and adds a
 * `locale` property to incoming HTTP requests, reflecting the most appropriate
 * locale determined using the `best` method described below.
 */
declare function locale(
    supported?: string | ReadonlyArray<string | locale.Locale> | locale.Locales,
    def?: string,
): (req: object, res: any, next: () => void) => void;

declare namespace locale {
    class Locale {
        /**
         * The default locale for the environment, as parsed from
         * `process.env.LANG`. This is used as the fallback when the best
         * language is calculated from the intersection of requested and
         * supported locales and supported languages has not default.
         */
        static ['default']: Locale;

        /**
         * returns user-generated input used to construct the Locale. Eg, `en-US`
         */
        code: string;
        /** returns the first 2 letters of the code, lowercased */
        language: string;
        /**
         * returns the second 2 letters of the code if present, uppercased.
         * Returns `undefined` otherwise
         */
        country?: string;
        /**
         * returns the language, followed by a `_` and the country, if the
         * country is present
         */
        normalized: string;

        /**
         * The Locale constructor takes a
         * [language tag](http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10)
         * string consisting of an ISO-639 language abbreviation and optional
         * two-letter ISO-3166 country code, and returns an object with a
         * `language` property containing the former and a `country` property
         * containing the latter.
         */
        constructor(str: string);

        toJSON(): string | null;
        toString(): string | null;
    }

    class Locales {
        /**
         * The Locales constructor takes a string compliant with the
         * [`Accept-Language` HTTP header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4),
         * and returns a list of acceptible locales, optionally sorted in
         * descending order by quality score. Second argument is optional
         * default value used as the fallback when the best language is
         * calculated. Otherwise `locale.Locale["default"]` is used as fallback.
         */
        constructor(str?: string | ReadonlyArray<string | Locale> | Locale | Locales, def?: string);

        /**
         * This method takes the target locale and compares it against the
         * optionally provided list of supported locales, and returns the most
         * appropriate locale based on the quality scores of the target locale.
         * If no exact match exists (i.e. language+country) then it will
         * fallback to `language` if supported, or if the language isn't
         * supported it will return the default locale.
         *
         * @example
         * const supported = new locale.Locales(['en', 'en_US'], 'en');
         * (new locale.Locales('en')).best(supported).toString();     // 'en'
         * (new locale.Locales('en_GB')).best(supported).toString();  // 'en'
         * (new locale.Locales('en_US')).best(supported).toString();  // 'en_US'
         * (new locale.Locales('jp')).best(supported);                // supported.default || locale.Locale["default"]
         */
        best(locales?: Locales): Locale;

        index(): { [normalized: string]: number };

        push(...items: string[]): number;
        sort(compareFn?: (a: string, b: string) => number): this;

        toJSON(): Locale[];

        toString(): string;
    }
}

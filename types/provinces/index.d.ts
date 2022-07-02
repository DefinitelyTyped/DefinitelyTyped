// Type definitions for provinces 1.11
// Project: https://github.com/substack/provinces
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    /**
     * @see {@link https://github.com/substack/provinces#data-format}
     */
    interface Province {
        /**
         * full name of the province or state
         */
        name: string;
        /**
         * country abbreviation
         */
        country: string;
        /**
         * optional 2 or 3 character short name
         */
        short?: string | undefined;
        /**
         * optional array of additional names and abbreviations
         */
        alt?: string[] | undefined;
        /**
         * optional region of a country (for example: "Wales")
         */
        region?: string | undefined;
        /**
         * optional English name of a country (for example: "Beijing")
         */
        english?: string | undefined;
    }
}

/**
 * @see {@link https://github.com/substack/provinces#methods}
 */
declare const provinces: Province[];

export = provinces;

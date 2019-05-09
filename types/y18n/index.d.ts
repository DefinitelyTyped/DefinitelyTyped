// Type definitions for y18n 4.0
// Project: https://github.com/yargs/y18n
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Config {
    /**
     * The locale directory, default ./locales.
     */
    directory: string;
    /**
     * Should newly observed strings be updated in file, default true.
     */
    updateFiles: boolean;
    /**
     * What locale should be used.
     */
    locale: string;
    /**
     * Should fallback to a language-only file (e.g. en.json) be allowed
     * if a file matching the locale does not exist (e.g. en_US.json), default true.
     */
    fallbackToLanguage: boolean;
}

declare class Y18N {
    /**
     * Create an instance of y18n with the config provided
     */
    constructor(config?: Config)

    /**
     * Print a localized string, %s will be replaced with args.
     */
    __(str: string, arg1?: string, arg2?: string, arg3?: string): string;

    /**
     * Print a localized string with appropriate pluralization.
     * If %d is provided in the string, the count will replace this placeholder.
     */
    __n(singularString: string, pluralString: string, count: number, arg1?: string, arg2?: string, arg3?: string): string;

    /**
     * Set the current locale being used.
     */
    setLocale(str: string): void;

    /**
     * What locale is currently being used?
     */
    getLocale(): string;

    /**
     * Update the current locale with the key value pairs in obj.
     */
    updateLocale(obj: object): void;
}

export = Y18N;

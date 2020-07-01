// Type definitions for i18n-node 0.8
// Project: http://github.com/mashpie/i18n-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
//                 FindQ <https://github.com/FindQ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace i18n {
    interface ConfigurationOptions {
        /**
         * Setup some locales - other locales default to en silently
         * @default []
         */
        locales?: string[];

        /**
         * Language fallback map
         * @default {}
         */
        fallbacks?: {
            [locale: string]: string;
        };

        /**
         * Alter a site wide default locale
         * @default "en"
         */
        defaultLocale?: string;

        /**
         * Sets a custom cookie name to parse locale settings from
         * @default null
         */
        cookie?: string;

        /**
         * Query parameter to switch locale (ie. /home?lang=ch)
         * @default null
         */
        queryParameter?: string;

        /**
         * Where to store json files, relative to modules directory
         * @default "./locales"
         */
        directory?: string;

        /**
         * Control mode on directory creation. Setting has no effect on win.
         * @default null
         */
        directoryPermissions?: string;

        /**
         * Watch for changes in json files to reload locale on updates
         * @default false
         */
        autoReload?: boolean;

        /**
         * Whether to write new locale information to disk
         * @default true
         */
        updateFiles?: boolean;

        /**
         * Sync locale information across all files
         * @default false
         */
        syncFiles?: boolean;

        /**
         * What to use as the indentation unit
         * @default "\t"
         */
        indent?: string;

        /**
         * Setting extension of json files (you might want to set this to '.js' according to webtranslateit)
         * @default ".json"
         */
        extension?: string;

        /**
         * Setting prefix of json files name (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
         * @default ""
         */
        prefix?: string;

        /**
         * Enable object notation
         * @default false
         */
        objectNotation?: boolean;

        /**
         * Setting of log level DEBUG
         * @default require("debug")("i18n:debug")
         */
        logDebugFn?: (msg: string) => void;

        /**
         * Setting of log level WARN
         * @default require("debug")("i18n:warn")
         */
        logWarnFn?: (msg: string) => void;

        /**
         * Setting of log level ERROR
         * @default require("debug")("i18n:error")
         */
        logErrorFn?: (msg: string) => void;

        /**
         * object or [obj1, obj2] to bind the i18n api and current locale to
         * @default null
         */
        register?: any;

        /**
         * Hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
         * Note that this will *not* overwrite existing properties with the same name.
         * @default undefined
         */
        api?: {
            [method: string]: string;
        };

        /**
         * Downcase locale when passed on queryParam; e.g. lang=en-US becomes en-us.
         * When set to false, the queryParam value will be used as passed; e.g. lang=en-US remains en-US.
         * @default true
         */
        preserveLegacyCase?: boolean;
    }
    interface TranslateOptions {
        phrase: string;
        locale?: string;
    }
    interface PluralOptions {
        singular: string;
        plural: string;
        count?: number;
        locale?: string;
    }
    interface Replacements {
        [key: string]: string;
    }

    interface LocaleCatalog {
        [key: string]: string;
    }
    interface GlobalCatalog {
        [key: string]: LocaleCatalog;
    }

    interface HashedList {
        [key: string]: string;
    }

    /**
     * Configure current i18n instance
     * @param options - configuration options for i18n
     */
    function configure(options: ConfigurationOptions): void;

    /**
     * Initialize i18n middleware for express
     * @param request - Current express request
     * @param response - Current express response
     * @param next - Callback to continue process
     */
    function init(request: Express.Request, response: Express.Response, next?: () => void): void;

    //#region __()

    /**
     * Translate the given phrase using locale configuration
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @returns The translated phrase
     */
    function __(phraseOrOptions: string | TranslateOptions, ...replace: string[]): string;
    /**
     * Translate the given phrase using locale configuration
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @param replacements - An object containing replacements
     * @returns The translated phrase
     */
    function __(phraseOrOptions: string | TranslateOptions, replacements: Replacements): string;

    //#endregion

    //#region __n()

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param phrase - Short phrase to be translated. All plural options ("one", "few", other", ...) have to be provided by your translation file
     * @param count - The number which allow to select from plural to singular
     * @returns The translated phrase
     */
    function __n(phrase: string, count: number): string;

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param options - Options for plural translate
     * @param [count] - The number which allow to select from plural to singular
     * @returns The translated phrase
     */
    function __n(options: PluralOptions, count?: number): string;
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param singular - The singular phrase to translate if count is <= 1
     * @param plural - The plural phrase to translate if count is > 1
     * @param count - The number which allow to select from plural to singular
     * @returns The translated phrase
     */
    function __n(singular: string, plural: string, count: number | string): string;

    //#endregion

    //#region __mf()

    /**
     * Translate the given phrase using locale configuration and MessageFormat
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @returns The translated phrase
     */
    function __mf(phraseOrOptions: string | TranslateOptions, ...replace: any[]): string;
    /**
     * Translate the given phrase using locale configuration and MessageFormat
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @param replacements - An object containing replacements
     * @returns The translated phrase
     */
    function __mf(phraseOrOptions: string | TranslateOptions, replacements: Replacements): string;

    //#endregion

    //#region __l()

    /**
     * Returns a list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    function __l(phrase: string): string[];

    //#endregion

    //#region __h()

    /**
     * Returns a hashed list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    function __h(phrase: string): HashedList[];

    //#endregion

    //#region Locale

    /**
     * Change the current active locale
     * @param locale - The locale to set as default
     */
    function setLocale(locale: string): void;
    /**
     * Change the current active locale for specified response
     * @param response - The request or response to change locale on
     * @param locale - The locale to set as default
     * @param [inheritance=false] - Disables inheritance if true
     */
    // tslint:disable-next-line:unified-signatures
    function setLocale(requestOrResponse: Express.Request | Express.Response, locale: string, inheritance?: boolean): void;
    /**
     * Change the current active locale for specified response
     * @param objects - The object(s) to change locale on
     * @param locale - The locale to set as default
     * @param [inheritance=false] - Disables inheritance if true
     */
    // tslint:disable-next-line:unified-signatures
    function setLocale(objects: any | any[], locale: string, inheritance?: boolean): void;

    /**
     * Get the current active locale for specified request
     * @param [request] - The request to get locale for
     * @returns The current locale in request
     */
    function getLocale(request?: Express.Request): string;

    /**
     * Get a list with all configured locales
     */
    function getLocales(): string[];

    //#endregion

    //#region Catalog

    /**
     * Get the current global catalog
     * @returns The current global catalog
     */
    function getCatalog(): GlobalCatalog;
    /**
     * Get the catalog for the given locale
     * @param locale - The locale to get catalog for
     * @returns The specified locale catalog
     */
    function getCatalog(locale: string): LocaleCatalog;
    /**
     * Get the current active locale catalog for specified request
     * @param request - The request to get locale catalog for
     * @param [locale] - The locale to get catalog for
     * @returns The current locale catalog for the specified request
     */
    function getCatalog(request: Express.Request, locale?: string): LocaleCatalog;

    //#endregion

    /**
     * Override the current request locale by using the query param (?locale=en)
     * @param [request] - The request to override locale for
     */
    function overrideLocaleFromQuery(request?: Express.Request): void;

    /**
     * Get current i18n-node version
     */
    const version: string;
}

interface i18nAPI {
    locale: string;

    //#region __()

    /**
     * Translate the given phrase using locale configuration
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @returns The translated phrase
     */
    __(phraseOrOptions: string | i18n.TranslateOptions, ...replace: string[]): string;
    /**
     * Translate the given phrase using locale configuration
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @param replacements - An object containing replacements
     * @returns The translated phrase
     */
    __(phraseOrOptions: string | i18n.TranslateOptions, replacements: i18n.Replacements): string;

    //#endregion

    //#region __n()

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param phrase - Short phrase to be translated. All plural options ("one", "few", other", ...) have to be provided by your translation file
     * @param count - The number which allow to select from plural to singular
     * @returns The translated phrase
     */
    __n(phrase: string, count: number): string;

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param options - Options for plural translate
     * @param [count] - The number which allow to select from plural to singular
     * @returns The translated phrase
     */
    __n(options: i18n.PluralOptions, count?: number): string;
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param singular - The singular phrase to translate if count is <= 1
     * @param plural - The plural phrase to translate if count is > 1
     * @param count - The number which allow to select from plural to singular
     * @returns The translated phrase
     */
    __n(singular: string, plural: string, count: number | string): string;

    //#endregion

    //#region __mf()

    /**
     * Translate the given phrase using locale configuration and MessageFormat
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @returns The translated phrase
     */
    __mf(phraseOrOptions: string | i18n.TranslateOptions, ...replace: any[]): string;
    /**
     * Translate the given phrase using locale configuration and MessageFormat
     * @param phraseOrOptions - The phrase to translate or options for translation
     * @param replacements - An object containing replacements
     * @returns The translated phrase
     */
    __mf(phraseOrOptions: string | i18n.TranslateOptions, replacements: i18n.Replacements): string;

    //#endregion

    //#region __l()

    /**
     * Returns a list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    __l(phrase: string): string[];

    //#endregion

    //#region __h()

    /**
     * Returns a hashed list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    __h(phrase: string): i18n.HashedList[];

    //#endregion

    /**
     * Get the current active locale
     * @returns The current locale in request
     */
    getLocale(): string;

    /**
     * Change the current active locale
     * @param locale - The locale to set as default
     */
    setLocale(locale: string): void;

    /**
     * Get the current global catalog
     * @returns The current global catalog
     */
    getCatalog(): i18n.GlobalCatalog;
    /**
     * Get the catalog for the given locale
     * @param locale - The locale to get catalog for
     * @returns The specified locale catalog
     */
    getCatalog(locale?: string): i18n.LocaleCatalog;
}

declare module "i18n" {
    export = i18n;
}

declare namespace Express {
    interface Request extends i18nAPI {
        languages: string[];
        regions: string[];
        language: string;
        region: string;
    }

    interface Response extends i18nAPI {
        locals: i18nAPI;
    }
}

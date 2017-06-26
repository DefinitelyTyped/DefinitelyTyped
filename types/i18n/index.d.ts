// Type definitions for i18n-node 0.8.3
// Project: https://github.com/mashpie/i18n-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>, Spown <https://github.com/Spown> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace i18n {
    export interface ConfigurationOptions {
        /** Setup some locales - other locales default to en silently */
        locales?: string[];

        /** Fall back from one locale to another. I.e. {de: 'en'} */
        fallbacks?: object;

        /** Alter a site wide default locale */
        defaultLocale?: string;

        /**
         * Sets a custom cookie name to parse locale settings from
         * @default null
         */
        cookie?: string;

        /**
         * Query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL
         * @type {string}
         */
        queryParameter? : string;

        /**
         * Where to store json files, relative to modules directory
         * @default "./locales"
         */
        directory?: string;

        /**
         * Controll mode on directory creation - defaults to NULL which defaults to umask of process user. Setting has no effect on win.
         * @type {string}
         */
        directoryPermissions?: string;

        /**
         * Watch for changes in json files to reload locale on updates - defaults to false
         * @type {string}
         * @default false
         */
        autoReload?: string;

        /**
         * whether to write new locale information to disk
         * @default true
         */
        updateFiles?: boolean;

        /**
         * Sync locale information accros all files - defaults to false
         * @type {boolean}
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
         * setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
         * @type {string}
         * @default ""
         */
        prefix?: string;

        /**
         * Enable object notation
         * @default false
         */
        objectNotation?: boolean;

        /**
         * setting of log level DEBUG - default to require('debug')('i18n:debug') 
         * @param {*} msg
         */
        logDebugFn(msg: any): void;

        /**
         * Setting of log level WARN - default to require('debug')('i18n:warn')
         * @param {*} msg
         */
        logWarnFn(msg: any): void;

        // 
        /**
         * Setting of log level ERROR - default to require('debug')('i18n:error')
         * @param {*} msg
         */
        logErrorFn(msg: any): void;
        
        /**
         * object or [obj1, obj2] to bind the i18n api and current locale to - defaults to null
         */
        register?: any;

        /**
         * Hash to specify different aliases for i18n's internal methods to apply on the request/response objects ('__': 't').
         * note that this will *not* overwrite existing properties with the same name
         * @type {object}
         */
        api?: {};

        /**
         * Downcase locale when passed on queryParam; e.g. lang=en-US becomes
         * en-us.  When set to false, the queryParam value will be used as passed;
         * e.g. lang=en-US remains en-US.
         * @type {boolean}
         */
        preserveLegacyCase?: boolean;
    }
    export interface TranslateOptions {
        phrase: string;
        locale?: string;
    }
    export interface PluralOptions {
        singular: string;
        plural: string;
        count?: number;
        locale?: string;
    }
    export interface Replacements {
        [key: string]: string;
    }

    export interface LocaleCatalog {
        [key: string]: string;
    }
    export interface GlobalCatalog {
        [key: string]: LocaleCatalog;
    }

    /**
     * Configure current i18n instance
     * @param {ConfigurationOptions} options - configuration options for i18n
     */
    function configure(options: ConfigurationOptions): void;

    /**
     * Initialize i18n middleware for express
     * @param {Express.Request} request - Current express request
     * @param {Express.Response} response - Current express response
     * @param {Function} next - Callback to continue process
     */
    function init(request: Express.Request, response: Express.Response, next?: Function): void;

    //#region __()

    /**
     * Translate the given phrase using locale configuration
     * @param {string} phrase - The phrase to translate
     * @returns {string} The translated phrase
     */
    function __(phrase: string, ...replace: string[]): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {string} phrase - The phrase to translate
     * @param {Object} replacements - An object containing replacements
     * @returns {string} The translated phrase
     */
    function __(phrase: string, replacements: Replacements): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {TranslateOptions} options - Options for translation
     * @returns {string} The translated phrase
     */
    function __(options: TranslateOptions): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {TranslateOptions} options - Options for translation
     * @returns {string} The translated phrase
     */
    function __(options: TranslateOptions, ...replace: string[]): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {TranslateOptions} options - Options for translation
     * @param {Object} replacements - An object containing replacements
     * @returns {string} The translated phrase
     */
    function __(options: TranslateOptions, replacements: Replacements): string;

    //#endregion

    //#region __n()

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {PluralOptions} options - Options for plural translate
     * @returns {string} The translated phrase
     */
    function __n(options: PluralOptions): string;

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {PluralOptions} options - Options for plural translate
     * @param {number} count - The number which allow to select from plural to singular
     * @returns {string} The translated phrase
     */
    function __n(options: PluralOptions, count: number): string;
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {string} singular - The singular pharse to translate if count is <= 1
     * @param {string} plural - The plural pharse to translate if count is > 1
     * @param {number} count - The number which allow to select from plural to singular
     * @returns {string} The translated phrase
     */
    function __n(singular: string, plural: string, count: number): string;
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {string} singular - The singular pharse to translate if count is <= 1
     * @param {string} plural - The plural pharse to translate if count is > 1
     * @param {number} count - The number which allow to select from plural to singular
     * @returns {string} The translated phrase
     */
    function __n(singular: string, plural: string, count: string): string;

    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * @param {string} phrase 
     * @returns {string} 
     */
    function __mf(phrase: string): string;
    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * @param {i18n.TranslateOptions} options 
     * @param {i18n.Replacements} replacements 
     * @returns {string} 
     * @memberof i18nAPI
     */
    function __mf(options: i18n.TranslateOptions, replacements: i18n.Replacements): string;
    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * @param {string} phrase 
     * @param {i18n.Replacements} replacements 
     * @returns {string}
     */
    function __mf(phrase: string, replacements: i18n.Replacements): string;
    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * This signature flavour uses a combination with sprintf:
     * __mf('Hello {name}, how was your %s?', 'test', { name: 'Marcus' }) // --> Hallo Marcus, wie war dein test?
     * @param {string} phrase 
     * @param {string} replace 
     * @param {i18n.Replacements} replacements 
     * @returns {string} 
     */
    function __mf(phrase: string, replace: string, replacements: i18n.Replacements): string;

    /**
     * Returns a list of translations for a given phrase in each language.
     * @param {string} phrase 
     * @returns {string[]}
     */
    function __l(phrase: string): string[];

    /**
     * Returns a hashed list of translations for a given phrase in each language.
     * I.e. [ { de: 'Hallo' }, { en: 'Hello' } ]
     * @param {string} phrase 
     * @returns {object[]} 
     * @memberof i18nAPI
     */
    function __h(phrase: string): object[];
    //#endregion

    //#region Locale

    /**
     * Change the current active locale
     * @param {string} locale - The locale to set as default
     */
    function setLocale(locale: string): void;
    /**
     * Change the current active locale for specified request
     * @param {Express.Request} request - The request to change locale on
     * @param {string} locale - The locale to set as default
     */
    function setLocale(request: Express.Request, locale: string): void;

    /**
     * Get the current active locale
     * @returns {string} The current locale in request
     */
    function getLocale(): string;
    /**
     * Get the current active locale for specified request
     * @param {Express.Request} request - The request to get locale for
     * @returns {string} The current locale in request
     */
    function getLocale(request: Express.Request): string;

    /**
     * Returns a list with all configured locales.
     * @returns {string[]} Array of all locale names
     */
    function getLocales(): string[];

    //#endregion

    //#region Catalog

    /**
     * Get the current global catalog
     * @returns {GlobalCatalog} The current global catalog
     */
    function getCatalog(): GlobalCatalog;
    /**
     * Get the catalog for the given locale
     * @param {string} locale - The locale to get catalog for
     * @returns {LocaleCatalog} The specified locale catalog
     */
    function getCatalog(locale: string): LocaleCatalog;
    /**
     * Get the current active locale catalog for specified request
     * @param {Express.Request} request - The request to get locale catalog for
     * @returns {LocaleCatalog} The current locale catalog for the specified request
     */
    function getCatalog(request: Express.Request): LocaleCatalog;
    /**
     * Get the current locale catalog for specified request and specified locale
     * @param {Express.Request} request - The request to get locale catalog for
     * @param {string} locale - The locale to get catalog for
     * @returns {LocaleCatalog} The specified locale catalog
     */
    function getCatalog(request: Express.Request, locale: string): LocaleCatalog;

    /**
     * Add new locale to the set (undocumented)
     * @param {string} locale
     */
    function addLocale(locale: string): void;

    /**
     * Remove a locale from the set (undocumented)
     * @param {string} locale 
     * @memberof i18nAPI
     */
    function removeLocale(locale: string): void;
    //#endregion

    /**
     * Override the current request locale by using the query param (?locale=en)
     * @param {Express.Request} [request] - The request to override locale for
     */
    function overrideLocaleFromQuery(request?: Express.Request): void;

    /**
     * Get current i18n-node version
     * @member {string}
     */
    var version: string;
}

interface i18nAPI {
    locale: string;

    //#region __()

    /**
     * Translate the given phrase using locale configuration
     * @param {string} phrase - The phrase to translate
     * @returns {string} The translated phrase
     */
    __(phrase: string, ...replace: string[]): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {string} phrase - The phrase to translate
     * @param {Object} replacements - An object containing replacements
     * @returns {string} The translated phrase
     */
    __(phrase: string, replacements: i18n.Replacements): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {TranslateOptions} options - Options for translation
     * @returns {string} The translated phrase
     */
    __(options: i18n.TranslateOptions): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {TranslateOptions} options - Options for translation
     * @returns {string} The translated phrase
     */
    __(options: i18n.TranslateOptions, ...replace: string[]): string;
    /**
     * Translate the given phrase using locale configuration
     * @param {TranslateOptions} options - Options for translation
     * @param {Object} replacements - An object containing replacements
     * @returns {string} The translated phrase
     */
    __(options: i18n.TranslateOptions, replacements: i18n.Replacements): string;

    //#endregion

    //#region __n()

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {PluralOptions} options - Options for plural translate
     * @returns {string} The translated phrase
     */
    __n(options: i18n.PluralOptions): string;

    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {PluralOptions} options - Options for plural translate
     * @param {number} count - The number which allow to select from plural to singular
     * @returns {string} The translated phrase
     */
    __n(options: i18n.PluralOptions, count: number): string;
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {string} singular - The singular pharse to translate if count is <= 1
     * @param {string} plural - The plural pharse to translate if count is > 1
     * @param {number} count - The number which allow to select from plural to singular
     * @returns {string} The translated phrase
     */
    __n(singular: string, plural: string, count: number): string;
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param {string} singular - The singular pharse to translate if count is <= 1
     * @param {string} plural - The plural pharse to translate if count is > 1
     * @param {number} count - The number which allow to select from plural to singular
     * @returns {string} The translated phrase
     */
    __n(singular: string, plural: string, count: string): string;

    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * @param {string} phrase 
     * @returns {string} 
     */
    __mf(phrase: string): string;
    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * @param {i18n.TranslateOptions} options 
     * @param {i18n.Replacements} replacements 
     * @returns {string} 
     * @memberof i18nAPI
     */
    __mf(options: i18n.TranslateOptions, replacements: i18n.Replacements): string;
    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * @param {string} phrase 
     * @param {i18n.Replacements} replacements 
     * @returns {string}
     */
    __mf(phrase: string, replacements: i18n.Replacements): string;
    /**
     * Supports the advanced MessageFormat. i18n takes care of new MessageFormat('en').compile(msg);
     * with the current msg loaded from it's json files and cache that complied fn in memory.
     * This signature flavour uses a combination with sprintf:
     * __mf('Hello {name}, how was your %s?', 'test', { name: 'Marcus' }) // --> Hallo Marcus, wie war dein test?
     * @param {string} phrase 
     * @param {string} replace 
     * @param {i18n.Replacements} replacements 
     * @returns {string} 
     */
    __mf(phrase: string, replace: string, replacements: i18n.Replacements): string;

    /**
     * Returns a list of translations for a given phrase in each language.
     * @param {string} phrase 
     * @returns {string[]}
     */
    __l(phrase: string): string[];

    /**
     * Returns a hashed list of translations for a given phrase in each language.
     * I.e. [ { de: 'Hallo' }, { en: 'Hello' } ]
     * @param {string} phrase 
     * @returns {object[]} 
     * @memberof i18nAPI
     */
    __h(phrase: string): object[];

    //#endregion

    /**
     * Get the current active locale
     * @returns {string} The current locale in request
     */
    getLocale(): string;
    /**
     * Change the current active locale
     * @param {string} locale - The locale to set as default
     */
    setLocale(locale: string): void;

    /**
     * Returns a list with all configured locales.
     * @returns {string[]} Array of all locale names
     */
    getLocales(): string[];

    /**
     * Get the current global catalog
     * @returns {GlobalCatalog} The current global catalog
     */
    getCatalog(): i18n.GlobalCatalog;
    /**
     * Get the catalog for the given locale
     * @param {string} locale - The locale to get catalog for
     * @returns {LocaleCatalog} The specified locale catalog
     */
    getCatalog(locale: string): i18n.LocaleCatalog;

    /**
     * Add new locale to the set (undocumented)
     * @param {string} locale
     */
    addLocale(locale: string): void;

    /**
     * Remove a locale from the set (undocumented)
     * @param {string} locale 
     * @memberof i18nAPI
     */
    removeLocale(locale: string): void;
}

declare module "i18n" {
    export = i18n;
}

declare namespace Express {
    export interface Request extends i18nAPI {
        languages: string[];
        regions: string[];
        language: string;
        region: string;
    }
    export interface Response extends i18nAPI {
        locals: i18nAPI
    }
}

// Type definitions for i18n-node 0.5.0
// Project: https://github.com/mashpie/i18n-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
declare module i18n {
    export interface ConfigurationOptions {
        /** Setup some locales - other locales default to en silently */
        locales?: string[];
        /** Alter a site wide default locale */
        defaultLocale?: string;

        /**
         * Sets a custom cookie name to parse locale settings from
         * @default null
         */
        cookie?: string;
        /**
         * Where to store json files, relative to modules directory
         * @default "./locales"
         */
        directory?: string;

        /** 
         * whether to write new locale information to disk
         * @default true
         */
        updateFiles?: boolean;

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
         * Enable object notation
         * @default false
         */
        objectNotation?: boolean;
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
}

declare module "i18n" {
    export = i18n;
}

declare module Express {
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

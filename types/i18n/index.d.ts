declare namespace i18n {
    interface Response extends i18nAPI {
        locals: Partial<i18nAPI>;
    }

    interface ConfigurationOptions {
        /**
         * Setup some locales - other locales default to en silently
         * @default []
         */
        locales?: string[] | undefined;

        /**
         * Language fallback map
         * @default {}
         */
        fallbacks?: {
            [locale: string]: string;
        } | undefined;

        /**
         * Alter a site wide default locale
         * @default "en"
         */
        defaultLocale?: string | undefined;

        /**
         * Will return translation from defaultLocale in case current locale doesn't provide it
         * @default false
         */
        retryInDefaultLocale?: boolean | undefined;

        /**
         * Sets a custom cookie name to parse locale settings from
         * @default null
         */
        cookie?: string | undefined;

        /**
         * Sets a custom header name to read the language preference from - accept-language header by default
         * @default 'accept-language'
         */
        header?: string | undefined;

        /**
         * Query parameter to switch locale (ie. /home?lang=ch)
         * @default null
         */
        queryParameter?: string | undefined;

        /**
         * Where to store json files, relative to modules directory
         * @default "./locales"
         */
        directory?: string | undefined;

        /**
         * Control mode on directory creation. Setting has no effect on win.
         * @default null
         */
        directoryPermissions?: string | undefined;

        /**
         * Watch for changes in json files to reload locale on updates
         * @default false
         */
        autoReload?: boolean | undefined;

        /**
         * Whether to write new locale information to disk
         * @default true
         */
        updateFiles?: boolean | undefined;

        /**
         * Sync locale information across all files
         * @default false
         */
        syncFiles?: boolean | undefined;

        /**
         * What to use as the indentation unit
         * @default "\t"
         */
        indent?: string | undefined;

        /**
         * Setting extension of json files (you might want to set this to '.js' according to webtranslateit)
         * @default ".json"
         */
        extension?: string | undefined;

        /**
         * Setting prefix of json files name (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
         * @default ""
         */
        prefix?: string | undefined;

        /**
         * Enable object notation
         * @default false
         */
        objectNotation?: boolean | string | undefined;

        /**
         * Setting of log level DEBUG
         * @default require("debug")("i18n:debug")
         */
        logDebugFn?: ((msg: string) => void) | undefined;

        /**
         * Setting of log level WARN
         * @default require("debug")("i18n:warn")
         */
        logWarnFn?: ((msg: string) => void) | undefined;

        /**
         * Setting of log level ERROR
         * @default require("debug")("i18n:error")
         */
        logErrorFn?: ((msg: string) => void) | undefined;

        /**
         * Function to provide missing translations.
         * @since 0.10.0
         */
        missingKeyFn?: ((locale: string, value: string) => string) | undefined;

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
        } | undefined;

        /**
         * Downcase locale when passed on queryParam; e.g. lang=en-US becomes en-us.
         * When set to false, the queryParam value will be used as passed; e.g. lang=en-US remains en-US.
         * @default true
         */
        preserveLegacyCase?: boolean | undefined;

        /**
         * Static translation catalog. Setting this option overrides `locales`.
         *
         * **NOTE**: Enabling `staticCatalog` disables all other fs realated options such as `updateFiles`, `autoReload` and `syncFiles`.
         * @since 0.10.0
         */
        staticCatalog?: GlobalCatalog | undefined;

        /**
         * Use mustache with customTags (https://www.npmjs.com/package/mustache#custom-delimiters) or disable mustache entirely
         */
        mustacheConfig?: {
            /**
             * @default ['{{', '}}']
             */
            tags?: [string, string] | undefined;
            /**
             * @default false
             */
            disable?: boolean | undefined;
        } | undefined;

        /**
         * Parser can be any object that responds to .parse & .stringify
         */
        parser?: ParserOptions | undefined;
    }
    interface ParserOptions {
        parse: (src: string, options?: any) => any;
        stringify: (value: any, options?: any) => string;
    }
    interface TranslateOptions {
        phrase: string;
        locale?: string | undefined;
    }
    interface PluralOptions {
        singular: string;
        plural: string;
        count?: number | undefined;
        locale?: string | undefined;
    }
    interface Replacements {
        [key: string]: string;
    }
    /**
     * This interface represents a plural translation.
     * e.g. { one: "you have 1 friend", other: "you have many friends" }
     */
    interface Plurals {
        [key: string]: string;
    }
    interface LocaleCatalog {
        [key: string]: string | Plurals;
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

    // #region __()

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

    // #endregion

    // #region __n()

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
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param phrase - The phrase to translate or a flattened key path in locale json file
     * @param count - The number which allow to select from plural to singular
     * @param replacements - An object containing replacements
     * @returns The translated phrase
     */
    function __n(phrase: string, count: number | string, replacements: Replacements): string;

    // #endregion

    // #region __mf()

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

    // #endregion

    // #region __l()

    /**
     * Returns a list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    function __l(phrase: string): string[];

    // #endregion

    // #region __h()

    /**
     * Returns a hashed list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    function __h(phrase: string): HashedList[];

    // #endregion

    // #region Locale

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
    function setLocale(
        requestOrResponse: Express.Request | Express.Response,
        locale: string,
        inheritance?: boolean,
    ): void;
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

    function addLocale(locale: string): void;

    function removeLocale(locale: string): void;

    // #endregion

    // #region Catalog

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

    // #endregion

    /**
     * Override the current request locale by using the query param (?locale=en)
     * @param [request] - The request to override locale for
     */
    function overrideLocaleFromQuery(request?: Express.Request): void;

    /**
     * Get current i18n-node version
     */
    const version: string;

    class I18n {
        constructor(options?: ConfigurationOptions);

        configure(options: ConfigurationOptions): void;

        init(request: Express.Request, response: Express.Response, next?: () => void): void;

        __(phraseOrOptions: string | TranslateOptions, ...replace: string[]): string;

        __(phraseOrOptions: string | TranslateOptions, replacements: Replacements): string;

        __n(phrase: string, count: number): string;

        __n(options: PluralOptions, count?: number): string;

        __n(singular: string, plural: string, count: number | string): string;

        __n(phrase: string, count: number | string, replacements: Replacements): string;

        __mf(phraseOrOptions: string | TranslateOptions, ...replace: any[]): string;

        __mf(phraseOrOptions: string | TranslateOptions, replacements: Replacements): string;

        __l(phrase: string): string[];

        __h(phrase: string): HashedList[];

        setLocale(locale: string): void;

        // tslint:disable-next-line:unified-signatures
        setLocale(requestOrResponse: Express.Request | Express.Response, locale: string, inheritance?: boolean): void;

        // tslint:disable-next-line:unified-signatures
        setLocale(objects: any | any[], locale: string, inheritance?: boolean): void;

        getLocale(request?: Express.Request): string;

        getLocales(): string[];

        addLocale(locale: string): void;

        removeLocale(locale: string): void;

        getCatalog(): GlobalCatalog;

        getCatalog(locale: string): LocaleCatalog;

        getCatalog(request: Express.Request, locale?: string): LocaleCatalog;

        overrideLocaleFromQuery(request?: Express.Request): void;

        version: string;
    }
}

interface i18nAPI {
    locale: string;

    // #region __()

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

    // #endregion

    // #region __n()

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
    /**
     * Translate with plural condition the given phrase and count using locale configuration
     * @param phrase - The phrase to translate or a flattened key path in locale json file
     * @param count - The number which allow to select from plural to singular
     * @param replacements - An object containing replacements
     * @returns The translated phrase
     */
    __n(phrase: string, count: number | string, replacements: i18n.Replacements): string;

    // #endregion

    // #region __mf()

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

    // #endregion

    // #region __l()

    /**
     * Returns a list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    __l(phrase: string): string[];

    // #endregion

    // #region __h()

    /**
     * Returns a hashed list of translations for a given phrase in each language.
     * @param phrase - The phrase to get translations in each language
     * @returns The phrase in each language
     */
    __h(phrase: string): i18n.HashedList[];

    // #endregion

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
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Request extends i18nAPI {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Response extends i18nAPI {
    }
}

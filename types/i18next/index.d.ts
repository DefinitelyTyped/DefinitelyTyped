// Type definitions for i18next 8.4
// Project: http://i18next.com
// Definitions by: Michael Ledin <https://github.com/mxl>
//                 Budi Irawan <https://github.com/deerawan>
//                 Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace i18next {
    interface FallbackLngObjList {
        [language: string]: string[];
    }

    type FallbackLng = string | string[] | FallbackLngObjList;

    type FormatFunction = (value: string, format?: string, lng?: string) => string;

    interface InterpolationOptions {
        /**
         *  format function see formatting for details
         * @default noop
         */
        format?: FormatFunction;
        /**
         * 	used to separate format from interpolation value
         * @default ','
         */
        formatSeparator?: string;
        /**
         * 	escape function
         * @default str => str
         */
        escape?(str: string): string;

        /**
         * 	escape passed in values to avoid xss injection
         * @default true
         */
        escapeValue?: boolean;
        /**
         * 	prefix for interpolation
         * @default '{{'
         */
        prefix?: string;
        /**
         * 	suffix for interpolation
         * @default '}}'
         */
        suffix?: string;
        /**
         * 	escaped prefix for interpolation (regexSafe)
         * @default undefined
         */
        prefixEscaped?: string;
        /**
         * 	escaped suffix for interpolation (regexSafe)
         * @default undefined
         */
        suffixEscaped?: string;
        /**
         * 	suffix to unescaped mode
         * @default undefined
         */
        unescapeSuffix?: string;
        /**
         * 	prefix to unescaped mode
         * @default '-'
         */
        unescapePrefix?: string;
        /**
         * prefix for nesting
         * @default '$t('
         */
        nestingPrefix?: string;
        /**
         * 	suffix for nesting
         * @default ')'
         */
        nestingSuffix?: string;
        /**
         * 	escaped prefix for nesting (regexSafe)
         * @default undefined
         */
        nestingPrefixEscaped?: string;
        /**
         * 	escaped suffix for nesting (regexSafe)
         * @default undefined
         */
        nestingSuffixEscaped?: string;
        /**
         * 	global variables to use in interpolation replacements
         * @default undefined
         */
        defaultVariables?: any;
    }

    interface ReactOptions {
        /**
         * set to true if you like to wait for loaded in every translated hoc
         * @default false
         */
        wait?: boolean;
        /**
         * set it to fallback to let passed namespaces to translated hoc act as fallbacks
         * @default 'default'
         */
        nsMode?: 'default' | 'fallback';
        /**
         * set it to the default parent element created by the Trans component.
         * @default 'div'
         */
        defaultTransParent?: string;
        /**
         * set which events trigger a rerender, can be set to false or string of events
         * @default 'languageChanged loaded'
         */
        bindI18n?: string | false;
        /**
         * set which events on store trigger a rerender, can be set to false or string of events
         * @default 'added removed'
         */
        bindStore?: string | false;
    }

    interface InitOptions {
        /**
         * logs info level to console output. Helps finding issues with loading not working.
         * @default false
         */
        debug?: boolean;

        /**
         * resources to initialize with (if not using loading or not appending using addResourceBundle)
         * @default undefined
         */
        resources?: Resource;

        /**
         * language to use (overrides language detection)
         * @default undefined
         */
        lng?: string;

        /**
         * language to use if translations in user language are not available.
         * @default 'dev'
         */
        fallbackLng?: false | FallbackLng;

        /**
         * 	array of allowed languages
         * @default false
         */
        whitelist?: false | string[];

        /**
         * if true will pass eg. en-US if finding en in whitelist
         * @default false
         */
        nonExplicitWhitelist?: boolean;

        /**
         * language codes to lookup, given set language is
         * 'en-US': 'all' --> ['en-US', 'en', 'dev'],
         * 'currentOnly' --> 'en-US',
         * 'languageOnly' --> 'en'
         * @default 'all'
         */
        load?: "all" | "currentOnly" | "languageOnly";

        /**
         * array of languages to preload. Important on serverside to assert translations are loaded before rendering views.
         * @default false
         */
        preload?: false | string[];

        /**
         * language will be lowercased eg. en-US --> en-us
         * @default false
         */
        lowerCaseLng?: boolean;

        /**
         * string or array of namespaces to load
         * @default 'translation'
         */
        ns?: string | string[];

        /**
         * default namespace used if not passed to translation function
         * @default 'translation'
         */
        defaultNS?: string;

        /**
         * string or array of namespaces to lookup key if not found in given namespace.
         * @default false
         */
        fallbackNS?: false | string | string[];

        /**
         * calls save missing key function on backend if key not found
         * @default false
         */
        saveMissing?: boolean;

        /**
         * @default 'fallback'
         */
        saveMissingTo?: "current" | "all" | "fallback";

        /**
         * Used for custom missing key handling (needs saveMissing set to true!)
         * @default false
         */
        missingKeyHandler?: false | ((lng: string, ns: string, key: string, fallbackValue: string) => void);

        /**
         * receives a key that was not found in `t()` and returns a value, that will be returned by `t()`
         * @default noop
         */
        parseMissingKeyHandler?(key: string): any;

        /**
         * appends namespace to missing key
         * @default false
         */
        appendNamespaceToMissingKey?: boolean;

        /**
         * will use 'plural' as suffix for languages only having 1 plural form, setting it to false will suffix all with numbers
         * @default true
         */
        simplifyPluralSuffix?: boolean;

        /**
         * string or array of postProcessors to apply per default
         * @default false
         */
        postProcess?: false | string | string[];

        /**
         * allows null values as valid translation
         * @default true
         */
        returnNull?: boolean;

        /**
         * allows empty string as valid translation
         * @default true
         */
        returnEmptyString?: boolean;

        /**
         * allows objects as valid translation result
         * @default false
         */
        returnObjects?: boolean;

        /**
         * Gets called if object was passed in as key but returnObjects was set to false
         * @default noop
         */
        returnedObjectHandler?(key: string, value: string, options: any): void;

        /**
         * char, eg. '\n' that arrays will be joined by
         * @default false
         */
        joinArrays?: false | string;

        /**
         * default: sets defaultValue
         * @default args => ({ defaultValue: args[1] })
         */
        overloadTranslationOptionHandler?(args: string[]): TranslationOptions;

        /**
         * @see https://www.i18next.com/interpolation.html
         */
        interpolation?: InterpolationOptions;

        /**
         * options for language detection - check documentation of plugin
         * @default undefined
         */
        detection?: object;

        /**
         * options for backend - check documentation of plugin
         * @default undefined
         */
        backend?: object;

        /**
         * options for cache layer - check documentation of plugin
         * @default undefined
         */
        cache?: object;

        /**
         * options for react - check documentation of plugin
         * @default undefined
         */
        react?: ReactOptions;

        /**
         * triggers resource loading in init function inside a setTimeout (default async behaviour).
         * Set it to false if your backend loads resources sync - that way calling i18next.t after
         * init is possible without relaying on the init callback.
         * @default true
         */
        initImmediate?: boolean;

        /**
         * char to separate keys
         * @default '.'
         */
        keySeparator?: false | string;

        /**
         * char to split namespace from key
         * @default ':'
         */
        nsSeparator?: false | string;

        /**
         * char to split plural from key
         * @default '_'
         */
        pluralSeparator?: string;

        /**
         * char to split context from key
         * @default '_'
         */
        contextSeparator?: string;

        /**
         * prefixes the namespace to the returned key when using cimode
         * @default false
         */
        appendNamespaceToCIMode?: boolean;

        /**
         * Compatibility JSON version
         */
        compatibilityJSON?: string;
    }

    // Add an indexer to assure that interpolation arguments can be passed
    type TranslationOptions<TCustomOptions extends object = object> = TranslationOptionsBase & TCustomOptions & { [key: string]: any };

    interface TranslationOptionsBase {
        /**
         * defaultValue to return if a translation was not found
         */
        defaultValue?: any;
        /**
         * count value used for plurals
         */
        count?: number;
        /**
         * used for contexts (eg. male\female)
         */
        context?: any;
        /**
         * object with vars for interpolation - or put them directly in options
         */
        replace?: any;
        /**
         * override language to use
         */
        lng?: string;
        /**
         * override languages to use
         */
        lngs?: string[];
        /**
         * override language to lookup key if not found see fallbacks for details
         */
        fallbackLng?: FallbackLng;
        /**
         * override namespaces (string or array)
         */
        ns?: string | string[];
        /**
         * override char to separate keys
         */
        keySeparator?: string;
        /**
         * override char to split namespace from key
         */
        nsSeparator?: string;
        /**
         * accessing an object not a translation string (can be set globally too)
         */
        returnObjects?: boolean;
        /**
         * char, eg. '\n' that arrays will be joined by (can be set globally too)
         */
        joinArrays?: string;
        /**
         * string or array of postProcessors to apply see interval plurals as a sample
         */
        postProcess?: string | string[];
        /**
         * override interpolation options
         */
        interpolation?: InterpolationOptions;
    }

    type Callback = (error: any, t: TranslationFunction) => void;

    type TranslationFunction<TResult = any, TValues extends object = object, TKeys extends string = string> =
        (key: TKeys | TKeys[], options?: TranslationOptions<TValues>) => TResult;

    interface Resource {
        [language: string]: ResourceLanguage;
    }

    interface ResourceLanguage {
        [namespace: string]: ResourceKey;
    }

    interface ResourceKey {
        [key: string]: any;
    }

    interface i18n {
        /**
         * The default export of the i18next module is an i18next instance ready to be initialized by calling init.
         * You can create additional instances using the createInstance function.
         *
         * @param options - Initial options.
         * @param callback - will be called after all translations were loaded or with an error when failed (in case of using a backend).
         */
        init(options: InitOptions, callback?: Callback): i18n;
        init(callback?: Callback): i18n;

        loadResources(callback?: (err: any) => void): void;

        /**
         * The use function is there to load additional plugins to i18next.
         * For available module see the plugins page and don't forget to read the documentation of the plugin.
         */
        use(module: any): i18n;

        /**
         * Please have a look at the translation functions like interpolation, formatting and plurals for more details on using it.
         */
        t: TranslationFunction;

        /**
         * Uses the same resolve functionality as the t function and returns true if a key exists.
         */
        exists: TranslationFunction<boolean>;

        /**
         * Returns a t function that defaults to given language or namespace.
         * Both params could be arrays of languages or namespaces and will be treated as fallbacks in that case.
         * On the returned function you can like in the t function override the languages or namespaces by passing them in options or by prepending namespace.
         */
        getFixedT(lng: string | string[], ns?: string | string[]): TranslationFunction;
        getFixedT(lng: null, ns: string | string[]): TranslationFunction;

        /**
         * Changes the language. The callback will be called as soon translations were loaded or an error occurs while loading.
         * HINT: For easy testing - setting lng to 'cimode' will set t function to always return the key.
         */
        changeLanguage(lng: string, callback?: Callback): void;

        /**
         * Is set to the current detected or set language.
         * If you need the primary used language depending on your configuration (whilelist, load) you will prefer using i18next.languages[0].
         */
        language: string;

        /**
         * Is set to an array of language-codes that will be used it order to lookup the translation value.
         */
        languages: string[];

        /**
         * Loads additional namespaces not defined in init options.
         */
        loadNamespaces(ns: string | string[], callback: Callback): void;

        /**
         * Loads additional languages not defined in init options (preload).
         */
        loadLanguages(lngs: string | string[], callback: Callback): void;

        /**
         * Reloads resources on given state. Optionally you can pass an array of languages and namespaces as params if you don't want to reload all.
         */
        reloadResources(lngs?: string[], ns?: string[]): void;
        reloadResources(lngs: null, ns: string[]): void;

        /**
         * Changes the default namespace.
         */
        setDefaultNamespace(ns: string): void;

        /**
         * Returns rtl or ltr depending on languages read direction.
         */
        dir(lng?: string): "ltr" | "rtl";

        /**
         * Exposes interpolation.format function added on init.
         */
        format: FormatFunction;

        /**
         * Will return a new i18next instance.
         * Please read the options page for details on configuration options.
         * Providing a callback will automatically call init.
         * The callback will be called after all translations were loaded or with an error when failed (in case of using a backend).
         */
        createInstance(options?: InitOptions, callback?: Callback): i18n;

        /**
         * Creates a clone of the current instance. Shares store, plugins and initial configuration.
         * Can be used to create an instance sharing storage but being independent on set language or namespaces.
         */
        cloneInstance(options?: InitOptions, callback?: Callback): i18n;

        /**
         * Gets fired after initialization.
         */
        on(event: "initialized", callback: (options: InitOptions) => void): void;

        /**
         * Gets fired on loaded resources.
         */
        on(event: "loaded", callback: (loaded: boolean) => void): void;

        /**
         * Gets fired if loading resources failed.
         */
        on(event: "failedLoading", callback: (lng: string, ns: string, msg: string) => void): void;

        /**
         * Gets fired on accessing a key not existing.
         */
        on(event: "missingKey", callback: (lngs: string[], namespace: string, key: string, res: string) => void): void;

        /**
         * Gets fired when resources got added or removed.
         */
        on(event: "added" | "removed", callback: (lng: string, ns: string) => void): void;

        /**
         * Gets fired when changeLanguage got called.
         */
        on(event: "languageChanged", callback: (lng: string) => void): void;

        /**
         * Event listener
         */
        on(event: string, listener: (...args: any[]) => void): void;

        /**
         * Remove event listener
         */
        off(event: string, listener: (...args: any[]) => void): void;

        /**
         * Gets one value by given key.
         */
        getResource(lng: string, ns: string, key: string, options?: { keySeparator?: string }): any;

        /**
         * Adds one key/value.
         */
        addResource(lng: string, ns: string, key: string, value: string, options?: { keySeparator?: string, silent?: boolean }): void;

        /**
         * Adds multiple key/values.
         */
        addResources(lng: string, ns: string, resources: any): void;

        /**
         * Adds a complete bundle.
         * Setting deep param to true will extend existing translations in that file.
         * Setting overwrite to true it will overwrite existing translations in that file.
         */
        addResourceBundle(lng: string, ns: string, resources: any, deep?: boolean, overwrite?: boolean): void;

        /**
         * Checks if a resource bundle exists.
         */
        hasResourceBundle(lng: string, ns: string): boolean;

        /**
         * Returns a resource bundle.
         */
        getResourceBundle(lng: string, ns: string): any;

        /**
         * Removes an existing bundle.
         */
        removeResourceBundle(lng: string, ns: string): void;

        /**
         * Current options
         */
        options: InitOptions;

        /**
         * Is initialized
         */
        isInitialized: boolean;
    }
}

declare const i18next: i18next.i18n;
export = i18next;

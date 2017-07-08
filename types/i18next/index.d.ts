// Type definitions for i18next v8.4.2
// Project: http://i18next.com
// Definitions by: Michael Ledin <https://github.com/mxl>, Budi Irawan <https://github.com/deerawan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Sources: https://github.com/i18next/i18next/

declare namespace i18n {
    interface ResourceStore {
        [language: string]: ResourceStoreLanguage;
    }

    interface ResourceStoreLanguage {
        [namespace: string]: ResourceStoreKey;
    }

    interface ResourceStoreKey {
        [key: string]: any;
    }

    interface FallbackLngObjList {
        [language: string]: string[]
    }

    type FallbackLng = string | string[] | FallbackLngObjList;

    type FormatFunction = (value: any, format: string, lng: string) => string;

    interface InterpolationOptions {
        format?: FormatFunction;
        formatSeparator?: string;
        escape?: (str: string) => string;
        escapeValue?: boolean;
        prefix?: string;
        suffix?: string;
        prefixEscaped?: string;
        suffixEscaped?: string;
        unescapeSuffix?: string;
        unescapePrefix?: string;
        nestingPrefix?: string;
        nestingSuffix?: string;
        nestingPrefixEscaped?: string;
        nestedSuffixEscaped?: string;
        defaultVariables?: any;
    }

    interface TranslationOptions {
        defaultValue?: string;
        count?: number;
        context?: any;
        replace?: any;
        lng?: string;
        lngs?: string[];
        fallbackLng?: FallbackLng;
        ns?: string | string[];
        keySeparator?: string;
        nsSeparator?: string;
        returnObjects?: boolean;
        joinArrays?: string;
        postProcess?: string | any[];
        interpolation?: InterpolationOptions;
        //add an indexer to assure that interpolation arguments can be passed
        [x: string]: any;
    }

    interface Options {
        debug?: boolean;
        resources?: ResourceStore;
        lng?: string;
        fallbackLng?: FallbackLng;
        ns?: string | string[];
        defaultNS?: string;
        fallbackNS?: string | string[];
        whitelist?: string[];
        lowerCaseLng?: boolean;
        load?: string
        preload?: string[];
        keySeparator?: string | false;
        nsSeparator?: string | false;
        pluralSeparator?: string;
        contextSeparator?: string;
        saveMissing?: boolean;
        saveMissingTo?: string;
        missingKeyHandler?: (lng: string, ns: string, key: string, fallbackValue: string) => void;
        parseMissingKeyHandler?: (key: string) => void;
        appendNamespaceToMissingKey?: boolean;
        postProcess?: string | any[];
        returnNull?: boolean;
        returnEmptyString?: boolean;
        returnObjects?: boolean;
        returnedObjectHandler?: (key: string, value: string, options: any) => void;
        joinArrays?: string;
        overloadTranslationOptionHandler?: (args: any[]) => TranslationOptions;
        interpolation?: InterpolationOptions;
        detection?: any;
        backend?: any;
        cache?: any;
    }

    // init options for react-i18next
    interface ReactOptions {
      wait?: boolean;
    }

    type TranslationFunction = (key: string, options?: TranslationOptions) => string;
    type LoadCallback = (error: any, t: TranslationFunction) => void;

    interface I18n {
        // api
        init(options?: Options & ReactOptions, callback?: LoadCallback): I18n;
        use(module: any): I18n;
        t(key: string, options?: TranslationOptions): string | any | any[];
        exists(key: string, options?: TranslationOptions): boolean;
        getFixedT(lng?: string, ns?: string | string[]): TranslationFunction;
        changeLanguage(lng: string, callback?: LoadCallback): void;
        language: string;
        languages: string[];
        loadNamespaces(ns: string[], callback?: LoadCallback): void;
        loadLanguages(lngs: string[], callback?: LoadCallback): void;
        reloadResources(lng?: string[], ns?: string[]): void;
        setDefaultNamespace(ns: string): void;
        dir(lng?: string): string;
        format: FormatFunction;  // introduced in v8.4.0;
        // instance creation
        createInstance(options?: Options, callback?: LoadCallback): I18n;
        cloneInstance(options?: Options, callback?: LoadCallback): I18n;
        // events
        on(event: string, listener: () => void): void;
        on(initialized: 'initialized', listener: (options: i18n.Options) => void): void;
        on(loaded: 'loaded', listener: (loaded: any) => void): void;
        on(failedLoading: 'failedLoading', listener: (lng: string, ns: string, msg: string) => void): void;
        on(missingKey: 'missingKey', listener: (lngs: any, namespace: string, key: string, res: any) => void): void;
        on(added: 'added', listener: (lng: string, ns: string) => void): void;
        on(removed: 'removed', listener: (lng: string, ns: string) => void): void;
        on(languageChanged: 'languageChanged', listener: (lng: string) => void): void;
        off(event: string, listener: () => void): void;
        // resource handling
        getResource(lng: string, ns: string, key: string, options?: {
            keySeparator?: string,
        }): ResourceStore;
        addResource(lng: string, ns: string, key: string, value: string, options?: {
            keySeparator?: string,
            silent?: boolean,
        }): void;
        addResources(lng: string, ns: string, resources: ResourceStore): void;
        addResourceBundle(lng: string, ns: string, resources: ResourceStore, deep: boolean, overwrite: boolean): void;
        hasResourceBundle(lng: string, ns: string): boolean;
        getResourceBundle(lng: string, ns: string): ResourceStore;
        removeResourceBundle(lng: string, ns: string): void;

        options: Options;
    }
}

declare var i18n: i18n.I18n;

export = i18n;

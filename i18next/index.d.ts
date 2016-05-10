// Type definitions for i18next v2.3.4
// Project: http://i18next.com
// Definitions by: Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Sources: https://github.com/i18next/i18next/


declare namespace I18next {
    interface ResourceStore {
        [language: string]: ResourceStoreLanguage;
    }

    interface ResourceStoreLanguage {
        [namespace: string]: ResourceStoreKey;
    }

    interface ResourceStoreKey {
        [key: string]: any;
    }

    interface InterpolationOptions {
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
        lng?:string;
        lngs?:string[];
        fallbackLng?:string;
        ns?:string|string[];
        keySeparator?:string;
        nsSeparator?:string;
        returnObjects?:boolean;
        joinArrays?:string;
        postProcess?:string|any[];
        interpolation?: InterpolationOptions;
    }

    interface Options {
        debug?: boolean;
        resources?: ResourceStore;
        lng?: string;
        fallbackLng?: string;
        ns?: string|string[];
        defaultNS?: string;
        fallbackNS?: string|string[];
        whitelist?:string[];
        lowerCaseLng?: boolean;
        load?: string
        preload?: string[];
        keySeparator?: string;
        nsSeparator?: string;
        pluralSeparator?: string;
        contextSeparator?: string;
        saveMissing?: boolean;
        saveMissingTo?: string;
        missingKeyHandler?: (lng:string, ns:string, key:string, fallbackValue:string) => void;
        parseMissingKeyHandler?: (key:string) => void;
        appendNamespaceToMissingKey?: boolean;
        postProcess?: string|any[];
        returnNull?: boolean;
        returnEmptyString?: boolean;
        returnObjects?: boolean;
        returnedObjectHandler?: (key:string, value:string, options:any) => void;
        joinArrays?: string;
        overloadTranslationOptionHandler?: (args:any[]) => TranslationOptions;
        interpolation?: InterpolationOptions;
        detection?: any;
        backend?: any;
        cache?: any;
    }

    type TranslationFunction = (key:string, options?:TranslationOptions) => string;

    class I18n {
        constructor(options?:Options, callback?:(err:any, t:TranslationFunction) => void);

        init(options?:Options, callback?:(err:any, t:TranslationFunction) => void):I18n;

        loadResources(callback?:(err:any) => void):void;

        use(module:any):I18n;

        changeLanguage(lng:string, callback?:(err:any, t:TranslationFunction) => void):void;

        getFixedT(lng?:string, ns?:string|string[]):TranslationFunction;

        t(key:string, options?:TranslationOptions):string|any|Array<any>;

        exists():boolean;

        setDefaultNamespace(ns:string):void;

        loadNamespaces(ns:string[], callback?:() => void):void;

        loadLanguages(lngs:string[], callback?:()=>void):void;

        dir(lng?:string):string;

        createInstance(options?:Options, callback?:(err:any, t:TranslationFunction) => void):I18n;

        cloneInstance(options?:Options, callback?:(err:any, t:TranslationFunction) => void):I18n;
    }
}

declare module 'i18next' {
    var i18n:I18next.I18n;

    export = i18n;
}

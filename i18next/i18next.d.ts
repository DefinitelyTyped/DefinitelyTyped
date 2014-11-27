// Type definitions for i18next v1.5.10
// Project: http://i18next.com
// Definitions by: Maarten Docter <https://github.com/mdocter>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Sources: https://github.com/jamuhl/i18next/

/// <reference path="../jquery/jquery.d.ts" />

interface IResourceStore {
    [language: string]: IResourceStoreLanguage;
}
interface IResourceStoreLanguage {
    [namespace: string]: IResourceStoreKey;
}
interface IResourceStoreKey {
    [key: string]: any;
}

interface I18nextOptions {
    lng?: string;                           // Default value: undefined
    load?: string;                          // Default value: 'all'
    preload?: string[];                     // Default value: []
    lowerCaseLng?: boolean;                    // Default value: false
    returnObjectTrees?: boolean;               // Default value: false
    fallbackLng?: string;                   // Default value: 'dev'
    detectLngQS?: string;                   // Default value: 'setLng'
    ns?: any;                               // Default value: 'translation' (string), can also be an object
    nsseparator?: string;                   // Default value: '::'
    keyseparator?: string;                  // Default value: '.'
    selectorAttr?: string;                  // Default value: 'data-i18n'
    debug?: boolean;                           // Default value: false

    resGetPath?: string;                    // Default value: 'locales/__lng__/__ns__.json'
    resPostPath?: string;                   // Default value: 'locales/add/__lng__/__ns__'

    getAsync?: boolean;                        // Default value: true
    postAsync?: boolean;                       // Default value: true

    resStore?: IResourceStore;              // Default value: undefined
    useLocalStorage?: boolean;                 // Default value: false
    localStorageExpirationTime?: number;    // Default value: 7 * 24 * 60 * 60 * 1000 (in ms default one week)

    dynamicLoad?: boolean;                     // Default value: false
    sendMissing?: boolean;                     // Default value: false
    sendMissingTo?: string;                 // Default value: 'fallback'. Other options are: current | all
    sendType?: string;                      // Default value: 'POST'

    interpolationPrefix?: string;           // Default value: '__'
    interpolationSuffix?: string;           // Default value: '__'
    reusePrefix?: string;                   // Default value: '$t('
    reuseSuffix?: string;                   // Default value: ')'
    pluralSuffix?: string;                  // Default value: '_plural'
    pluralNotFound?: string;                // Default value: ['plural_not_found' Math.random()].join( '' )
    contextNotFound?: string;               // Default value: ['context_not_found' Math.random()].join( '' )

    setJqueryExt?: boolean;                    // Default value: true
    defaultValueFromContent?: boolean;         // Default value: true
    useDataAttrOptions?: boolean;              // Default value: false
    cookieExpirationTime?: number;          // Default value: undefined
    useCookie?: boolean;                       // Default value: true
    cookieName?: string;                    // Default value: 'i18next'

    postProcess?: string;                   // Default value: undefined
}

interface I18nextStatic {

    addPostProcessor(name: string, fn: (value: any, key: string, options: any) => string): void;
    detectLanguage(): string;
    functions: {
        extend(target: any, ...objs: any[]): Object;
        extend(deep: boolean, target: any, ...objs: any[]): Object;
        each(collection: any, callback: (indexInArray: any, valueOfElement: any) => any): any;
        ajax(settings: JQueryAjaxSettings): JQueryXHR;
        ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;
        cookie: {
            create: (name: string, value: string, minutes: number) => void;
            read: (name: string) => string;
            remove: (name: string) => void;
        };
        detectLanguage(): string;
        log(message: string): void;
        toLanguages(language: string): string[];
        regexEscape(str: string): string;
    };
    init(callback?: (t: (key: string, options?: any) => string) => void ): JQueryDeferred<any>;
    init(options?: I18nextOptions, callback?: (t: (key: string, options?: any) => string) => void ): JQueryDeferred<any>;
    lng(): string;
    loadNamespace(namespace: string, callback?: () => void ): void;
    loadNamespaces(namespaces: string[], callback?: () => void ): void;
    pluralExtensions: {
        addRule(language: string, obj: {
            name: string;
            numbers: number[];
            plurals: (n: number) => number;
        }): void;
        get (language: string, count: number): number;
        rules: any;
        setCurrentLng: (language: string) => void;
    };
    preload(language: string, callback?: (t: (key: string, options?: any) => string) => void ): void;
    preload(languages: string[], callback?: (t: (key: string, options?: any) => string) => void ): void;
    setDefaultNamespace(namespace: string): void;
    setLng(language: string, callback?: (t: (key: string, options?: any) => string) => void ): void;
    sync: {
        load: (languages: string[], options: I18nextOptions, callback: (err: Error, store: IResourceStore) => void ) => void;
        postMissing: (language: string, namespace: string, key: string, defaultValue: any, languages: string[]) => void;
    };
    t(key: string, options?: any): string;
    translate(key: string, options?: any): string;
    exists(key: string, options?: any): boolean;
}

// jQuery extensions
interface JQueryStatic {
    i18n: I18nextStatic;
    t: (key: string, options?: any) => string;
}

interface JQuery {
    /*  Note: options are same options as used by the translate function. Alternatively by
        setting init option or translation option 'useDataAttrOptions = true' the Options
        for translation will be read and cached in the elements data-i18n-options attribute.
    */
    i18n: (options?: I18nextOptions) => void;
}

declare var i18n: I18nextStatic;

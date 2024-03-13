/// <reference types="react" />
/// <reference types="node" />

// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "meteor/universe:i18n" {
    import { OutgoingHttpHeaders } from "http";

    namespace i18n {
        // component functions
        function createComponent(
            translator?: Translator,
            locale?: string,
            reactjs?: React.ReactInstance,
            type?: any,
        ): new() => React.Component<ReactComponentProps>;

        // translator functions
        function createTranslator(namespace: string, options?: TranslaterOptions): Translator;
        function createReactiveTranslator(namespace: string, locale: string): new() => React.Component;

        // translation setter / getter functions
        function addTranslation(locale: string, namespace: string, translation: string): void;
        // tslint:disable-next-line unified-signatures
        function addTranslation(locale: string, namespace: string, key: string, translation: string): void;
        function addTranslations(locale: string, translationsMap: {}): void;
        function addTranslations(locale: string, namespace: string, translationsMap: {}): void;
        function getTranslation(key: string, params?: GetTranslationParams): string;
        function getTranslation(namespace: string, key: string, params: GetTranslationParams): string;
        function getTranslation(...key: string[]): string;
        function __(key: string, params?: GetTranslationParams): string;
        function __(namespace: string, key: string, params: GetTranslationParams): string;
        function __(...key: string[]): string;
        function getTranslations(namespace: string, locale?: string): string[];

        // options
        let options: Readonly<i18nOptions>;
        function setOptions(options: Partial<i18nOptions>): void;

        // number operations
        function parseNumber(number: string, locale?: string): string;

        // locale setter / getter
        function setLocale(locale: string, params?: LocateParams): Promise<void>;
        function setLocaleOnConnection(locale: string, connectionId?: number): void;
        function getLocale(): string;
        function loadLocale(locale: string, params?: LoadLocaleParams): void;

        // executes function in the locale context,
        // it means that every default locale used inside a called function will be set to a passed locale
        // keep in mind that locale must be loaded first (if it is not bundled)
        function runWithLocale<T>(locale: string, func: () => T): T;

        // language getters
        let _locales: Readonly<{ [locale: string]: Readonly<i18nLocaleEntry> }>;
        function getLanguages(type?: "code" | "name" | "nativeNames"): string[];
        function getLanguageName(locale?: string): string;
        function getLanguageNativeName(locale?: string): string;

        // currency symbols
        function getCurrencySymbol(locale?: string): string | undefined;
        function getCurrencyCodes(locale?: string): string[];

        // others
        function isRTL(locale?: string): boolean;
        function getAllKeysForLocale(locale?: string, excactlyThis?: boolean): string[];
        function normalize(locale: string): string | undefined;

        // events
        function onChangeLocale(callback: (locale: string) => void): void;
        function offChangeLocale(callback: (locale: string) => void): void;
    }

    interface ReactComponentProps {
        _locale?: string | undefined;
        _tagType?: string | undefined;
        _namespace?: string | undefined;
        _props?: React.HTMLAttributes<React.Component> | undefined;
        _translateProps?: string[] | undefined;
        _containerType?: string | undefined;
    }

    type i18nLocaleEntry = [
        string, // code
        string, // name
        string, // localName
        boolean, // isRTL
        string, // numberTypographic
        number, // decimal
        string, // currency
        [number] | [number, number], // groupNumberBY
    ];

    interface i18nOptions {
        defaultLocale: string;
        open: string;
        close: string;
        purify?: (() => void) | undefined;
        hideMissing: boolean;
        hostUrl: string;
        translationsHeaders?: OutgoingHttpHeaders | undefined;
        sameLocaleOnServerConnection: boolean;
    }

    interface GetTranslationParams {
        _locale?: string | undefined;
        _namespace?: string | undefined;
        [key: string]: any;
    }

    interface TranslaterOptions {
        _locale?: string | undefined;
        _purify?: boolean | undefined;
    }

    interface LoadLocaleParams {
        fresh?: boolean | undefined;
        async?: boolean | undefined;
        silent?: boolean | undefined;
        host?: string | undefined;
        pathOnHost?: string | undefined;
    }

    interface LocateParams {
        noDownload?: boolean | undefined;
        silent?: boolean | undefined;
        async?: boolean | undefined;
        fresh?: boolean | undefined;
    }

    type Translator = (...args: any[]) => string;
}

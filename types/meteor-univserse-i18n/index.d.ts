// Type definitions for https://github.com/vazco/meteor-universe-i18n 1.14
// Project: meteor-universe-i18n
// Definitions by: Mathias Scherer <https://github.com/mathewmeconry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />
/// <reference types="node" />

// tslint:disable-next-line no-single-declare-module
declare module "meteor/universe:i18n" {
    import { OutgoingHttpHeaders } from "http";

    namespace i18n {
        // component functions
        function createComponent(translator?: Translator, locale?: string, reactjs?: React.ReactInstance, type?: any): new () => React.Component<ReactComponentProps>;

        // translator functions
        function createTranslator(namespace: string, options?: TranslaterOptions): Translator;
        function createReactiveTranslator(namespace: string, locale: string): new () => React.Component;

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

        // options setter
        function setOptions(options: i18nOptions): void;

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
        function runWithLocale(locale: string, func: (...keys: any[]) => void): void;

        // language getters
        function getLanguages(type?: 'code' | 'name' | 'nativeNames'): string[];
        function getLanguageName(locale?: string): string;
        function getLanguageNativeName(locale?: string): string;

        // currency symbols
        function getCurrencySymbol(locale?: string): string | undefined;
        function getCurrencyCodes(locale?: string): string[];

        // others
        function isRTL(locale?: string): boolean;
        function getAllKeysForLocale(locale?: string, excactlyThis?: boolean): string[];

        // events
        function onChangeLocale(callback: (locale: string) => void): void;
    }

    interface ReactComponentProps {
        _locale?: string;
        _tagType?: string;
        _namespace?: string;
        _props?: React.HTMLAttributes<React.Component>;
        _translateProps?: string[];
        _containerType?: string;
    }

    interface i18nOptions {
        defaultLocale?: string;
        open?: string;
        close?: string;
        purify?: () => void;
        hideMissing?: boolean;
        hostUrl?: string;
        translationsHeaders?: OutgoingHttpHeaders;
        sameLocaleOnServerConnection?: boolean;
    }

    interface GetTranslationParams {
        _locale?: string;
        _namespace?: string;
        [key: string]: any;
    }

    interface TranslaterOptions {
        _locale?: string;
        _purify?: boolean;
    }

    interface LoadLocaleParams {
        fresh?: boolean;
        async?: boolean;
        silent?: boolean;
        host?: string;
        pathOnHost?: string;
    }

    interface LocateParams {
        noDownload?: boolean;
        silent?: boolean;
        async?: boolean;
        fresh?: boolean;
    }

    type Translator = (...args: any[]) => string;
}

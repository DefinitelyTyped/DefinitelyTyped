// Type definitions for meteor/universe:i18n v1.14.0
// Project: meteor-universe-i18n
// Definitions by: Mathias Scherer <https://github.com/mathewmeconry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />
/// <reference types="node" />

declare module "meteor/universe:i18n" {
    import { OutgoingHttpHeaders } from "http"

    export default class i18n {
        // component functions
        public static createComponent(): new () => React.Component<ReactComponentProps>
        public static createComponent(translator: Translator): new () => React.Component<ReactComponentProps>
        public static createComponent(translator: Translator, locale: string): new () => React.Component<ReactComponentProps>
        public static createComponent(translator: Translator, locale: string, reactjs: React.ReactInstance): new () => React.Component<ReactComponentProps>
        public static createComponent(translator: Translator, locale: string, reactjs: React.ReactInstance, type: any): new () => React.Component<ReactComponentProps>

        // translator functions
        public static createTranslator(namespace: string): Translator
        public static createTranslator(namespace: string, options: TranslaterOptions): Translator
        public static createReactiveTranslator(namespace: string, locale: string): new () => React.Component

        // translation setter / getter functions
        public static addTranslation(locale: string, namespace: string, translation: string): void
        public static addTranslation(locale: string, namespace: string, key: string, translation: string): void
        public static addTranslations(locale: string, translationsMap: {}): void
        public static addTranslations(locale: string, namespace: string, translationsMap: {}): void
        public static getTranslation(key: string): string
        public static getTranslation(key: string, params: GetTranslationParams): string
        public static getTranslation(namespace: string, key: string, params: GetTranslationParams): string
        public static getTranslation(...key: string[]): string
        public static __(key: string): string
        public static __(key: string, params: GetTranslationParams): string
        public static __(namespace: string, key: string, params: GetTranslationParams): string
        public static __(...key: string[]): string
        public static getTranslations(namespace: string): string[]
        public static getTranslations(namespace: string, locale: string): string[]

        // options setter
        public static setOptions(options: i18nOptions): void


        // number operations
        public static parseNumber(number: string): string
        public static parseNumber(number: string, locale: string): string

        // locale setter / getter
        public static setLocale(locale: string): Promise<void>
        public static setLocale(locale: string, params: LocateParams): Promise<void>
        public static setLocaleOnConnection(locale: string): void
        public static setLocaleOnConnection(locale: string, connectionId: number): void
        public static getLocale(): string
        public static loadLocale(locale: string): void
        public static loadLocale(locale: string, params: LoadLocaleParams): void
        public static runWithLocale(locale: string, func: Function): void

        // language getters
        public static getLanguages(): string[]
        public static getLanguages(type: 'code' | 'name' | 'nativeNames'): string[]
        public static getLanguageName(): string
        public static getLanguageName(locale: string): string
        public static getLanguageNativeName(): string
        public static getLanguageNativeName(locale: string): string

        // currency symbols
        public static getCurrencySymbol(): string | undefined
        public static getCurrencySymbol(locale: string): string | undefined
        public static getCurrencyCodes(): Array<string>
        public static getCurrencyCodes(locale: string): Array<string>

        // others
        public static isRTL(): boolean
        public static isRTL(locale: string): boolean
        public static getAllKeysForLocale(): Array<string>
        public static getAllKeysForLocale(locale: string): Array<string>
        public static getAllKeysForLocale(locale: string, excactlyThis: boolean): Array<string>

        // events
        public static onChangeLocale(callback: (locale: string) => void): void
    }

    interface ReactComponentProps {
        _locale?: string,
        _tagType?: string,
        _namespace?: string,
        _props?: React.HTMLAttributes<React.Component>,
        _translateProps?: string[],
        _containerType?: string
    }

    interface i18nOptions {
        defaultLocale?: string,
        open?: string,
        close?: string,
        purify?: Function,
        hideMissing?: boolean,
        hostUrl?: string,
        translationsHeaders?: OutgoingHttpHeaders,
        sameLocaleOnServerConnection?: boolean
    }

    interface GetTranslationParams {
        _locale?: string,
        _namespace?: string,
        [key: string]: any,
    }

    interface TranslaterOptions {
        _locale?: string,
        _purify?: boolean
    }

    interface LoadLocaleParams {
        fresh?: boolean,
        async?: boolean,
        silent?: boolean,
        host?: string,
        pathOnHost?: string
    }

    interface LocateParams {
        noDownload?: boolean,
        silent?: boolean,
        async?: boolean,
        fresh?: boolean
    }

    interface Translator {
        (...args: any[]): string
    }
}
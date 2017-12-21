// Type definitions for vue-i18n 6.1
// Project: https://github.com/kazupon/vue-i18n
// Definitions by: Kombu <https://github.com/aicest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Vue, { PluginFunction } from 'vue';

declare namespace VueI18n {
    type Path = string;
    type Locale = string;
    type Values = any[] | { [key: string]: any };
    type Choice = number;
    type LocaleMessage = string | LocaleMessageObject | LocaleMessageArray;
    interface LocaleMessageObject { [key: string]: LocaleMessage; }
    interface LocaleMessageArray { [index: number]: LocaleMessage; }
    interface LocaleMessages { [key: string]: LocaleMessageObject; }
    type TranslateResult = string | LocaleMessageArray;

    interface Formatter {
        format(message: string, values: Values): string;
    }

    type MissingHandler = (locale: Locale, key: Path, vm?: Vue) => void;

    // tslint:disable-next-line:interface-name
    interface I18nOptions {
        locale?: Locale;
        fallbackLocale?: Locale;
        messages?: LocaleMessages;
        formatter?: Formatter;
        missing?: MissingHandler;
        fallbackRoot?: boolean;
        sync?: boolean;
        silentTranslationWarn?: boolean;
    }
}

declare class VueI18n {
    constructor(options?: VueI18n.I18nOptions)

    readonly messages: VueI18n.LocaleMessages;

    locale: VueI18n.Locale;
    fallbackLocale: VueI18n.Locale;
    missing: VueI18n.MissingHandler;
    formatter: VueI18n.Formatter;
    silentTranslationWarn: boolean;

    t(key: VueI18n.Path, values?: VueI18n.Values): VueI18n.TranslateResult;
    t(key: VueI18n.Path, locale: VueI18n.Locale, values?: VueI18n.Values): VueI18n.TranslateResult;
    tc(key: VueI18n.Path, choice?: VueI18n.Choice, values?: VueI18n.Values): string;
    tc(key: VueI18n.Path, choice: VueI18n.Choice, locale: VueI18n.Locale, values?: VueI18n.Values): string;
    te(key: VueI18n.Path, locale?: VueI18n.Locale): boolean;

    getLocaleMessage(locale: VueI18n.Locale): VueI18n.LocaleMessageObject;
    setLocaleMessage(locale: VueI18n.Locale, message: VueI18n.LocaleMessageObject): void;
    mergeLocaleMessage(locale: VueI18n.Locale, message: VueI18n.LocaleMessageObject): void;

    static install: PluginFunction<never>;
    static version: string;
}

declare module 'vue/types/vue' {
    interface Vue {
        readonly $i18n: VueI18n;
        $t: typeof VueI18n.prototype.t;
        $tc: typeof VueI18n.prototype.tc;
        $te: typeof VueI18n.prototype.te;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        i18n?: VueI18n;
    }
}

export = VueI18n;

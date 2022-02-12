// Type definitions for gettext.js 1.0
// Project: https://github.com/guillaumepotier/gettext.js
// Definitions by: Julien Crouzet <https://github.com/jucrouzet>
//                 Florian Schwingenschlögl <https://github.com/FlorianSchwingenschloegl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace i18n {
    type PluralForm = (n: number) => number;

    type Optionull<T> = T | null | undefined;

    interface GettextOptions {
        domain?: string | undefined;
        locale?: string | undefined;
        plural_func?: PluralForm | undefined;
        ctxt_delimiter?: string | undefined;
    }

    interface JsonDataHeader {
        language: string;
        "plural-forms": string;
    }

    interface JsonDataMessages {
        [key: string]: string | string[] | JsonDataHeader;
    }

    interface JsonData extends JsonDataMessages {
        "": JsonDataHeader;
    }

    interface Gettext {
        setMessages(domain: string, locale: string, messages: JsonDataMessages, plural_forms?: PluralForm): Gettext;
        loadJSON(jsonData: JsonData, domain?: string): Gettext;
        setLocale(locale: string): Gettext;
        getLocale(): string;
        textdomain(domain?: string): Gettext | string;

        gettext(msgid: string, ...args: any[]): string;
        ngettext(msgid: string, msgid_plural: string, n: number, ...args: any[]): string;
        pgettext(msgctxt: string, msgid: string, ...args: any[]): string;
        dcnpgettext(domain: Optionull<string>, msgctxt: Optionull<string>, msgid: string, msgid_plural: Optionull<string>, n: Optionull<number>, ...args: any[]): string;
        __(msgid: string, ...args: any[]): string;
        _n(msgid: string, msgid_plural: string, n: number, ...args: any[]): string;
        _p(msgctxt: string, msgid: string, ...args: any[]): string;

        strfmt(fmt: string, ...args: any[]): string;
        expand_locale(locale: string): string[];
    }
}

declare function i18n(options?: i18n.GettextOptions): i18n.Gettext;

export = i18n;

// Type definitions for node-gettext 2.0
// Project: http://github.com/alexanderwallin/node-gettext
// Definitions by: Sameer K.C. <https://github.com/sameercaresu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
export = GetText;
declare class GetText {
    constructor(options?: { debug: boolean; });
    addTranslations(locale: string, domain: string, translations: object): void;
    dgettext(domain: string, msgid: string): string;
    dngettext(domain: string, msgid: string, msgidPlural: string, count: number): string;
    dnpgettext(domain: string, msgctxt: string, msgid: string, msgidPlural: string, count: number): string;
    dpgettext(domain: string, msgctxt: string, msgid: string): string;
    emit(eventName: string, eventData: any): void;
    getComment(domain: string, msgctxt: string, msgid: string): object | boolean;
    gettext(msgid: string): string;
    ngettext(msgid: string, msgidPlural: string, count: number): string;
    npgettext(msgctxt: string, msgid: string, msgidPlural: string, count: number): string;
    off(eventName: 'error', callback: (error: string) => void): void;
    on(eventName: 'error', callback: (error: string) => void): void;
    pgettext(msgctxt: string, msgid: string): string;
    setLocale(locale: string): void;
    setTextDomain(domain: string): void;
    static getLanguageCode(locale: string): string;
    textdomain(domain: string): void;
    warn(message: string): void;
}

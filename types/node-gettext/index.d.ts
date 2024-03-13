export = GetText;
declare class GetText {
    static getLanguageCode(locale: string): string;
    readonly locale: string;
    readonly domain: string;
    constructor(options?: { debug?: boolean | undefined; sourceLocale?: string | undefined });
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
    off(eventName: "error", callback: (error: Error) => void): void;
    on(eventName: "error", callback: (error: Error) => void): void;
    pgettext(msgctxt: string, msgid: string): string;
    setLocale(locale: string): void;
    setTextDomain(domain: string): void;
    textdomain(domain: string): void;
    warn(message: string): void;
}

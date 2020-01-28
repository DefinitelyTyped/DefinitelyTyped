// Type definitions for gettext.js 0.8
// Project: https://github.com/guillaumepotier/gettext.js
// Definitions by: Julien Crouzet <https://github.com/jucrouzet>
//                 Florian Schwingenschlögl <https://github.com/FlorianSchwingenschloegl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type PluralForm = (n: number) => number;

export type GettextStatic = (options?: GettextOptions) => Gettext;

export interface GettextOptions {
  domain?: string;
  locale?: string;
  plural_func?: PluralForm;
  ctxt_delimiter?: string;
}

export interface JsonDataHeader {
  language: string;
  "plural-forms": string;
}

export interface JsonDataMessages {
  [key: string]: string | string[] | JsonDataHeader;
}

export interface JsonData extends JsonDataMessages {
  "": JsonDataHeader;
}

export interface Gettext {
  setMessages(domain: string, locale: string, messages: JsonDataMessages, plural_forms?: PluralForm): Gettext;
  loadJSON(jsonData: JsonData, domain?: string): Gettext;
  setLocale(locale: string): Gettext;
  getLocale(): string;
  textdomain(domain?: string): Gettext | string;
  gettext(msgid: string, ...args: any[]): string;
  ngettext(msgid: string, msgid_plural: string, n: number, ...args: any[]): string;
  pgettext(msgctxt: string, msgid: string, ...args: any[]): string;
  dcnpgettext(domain: string, msgctxt: string, msgid: string, msgid_plural: string, n: number, ...args: any[]): string;
  __(msgid: string, ...args: any[]): string;
  _n(msgid: string, msgid_plural: string, n: number, ...args: any[]): string;
  _p(msgctxt: string, msgid: string, ...args: any[]): string;
}

export const i18n: GettextStatic;

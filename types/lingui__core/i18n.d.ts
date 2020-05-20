import { SelectProps, PluralProps } from "./select";

// In flowtype, MessageOptions is declared as exact type
export interface MessageOptions {
    defaults?: string;
    formats?: object;
}

export interface MessageDescriptor {
    id: string;
    defaults?: string;
    values?: object;
    formats?: object;
}

export interface LanguageData {
    plurals?: (n: number, pluralType?: "cardinal" | "ordinal") => string;
}

export interface Messages {
    [key: string]: string | ((context: (name: string, type?: string, format?: any) => string) => (string | string[]));
}

export interface Catalog {
    messages: Messages;
    languageData?: LanguageData;
}

export interface Catalogs {
    [key: string]: Catalog;
}

export interface setupI18nProps {
    language?: string;
    catalogs?: Catalogs;
    development?: object;
    locales?: string[];
    missing?: string | ((language: string, id: string) => string);
}

export class I18n {
    t(strings: TemplateStringsArray, ...values: any[]): string;

    t(id: string): (strings: TemplateStringsArray, ...values: any[]) => string;

    select(config: SelectProps): string;

    select(id: string, config: SelectProps): string;

    plural(config: PluralProps): string;

    plural(id: string, config: PluralProps): string;

    selectOrdinal(config: PluralProps): string;

    selectOrdinal(id: string, config: PluralProps): string;

    constructor();

    availableLanguages: string[];
    language: string;
    messages: Messages;
    languageData: LanguageData;

    load(catalogs: Catalogs): void;

    activate(language: string): void;

    use(language: string): I18n;

    _(id: string, values?: object, messageOptions?: MessageOptions): string;
    _(id: MessageDescriptor): string;

    pluralForm(n: number, pluralType?: "cardinal" | "ordinal"): string;
}

export function setupI18n(params?: setupI18nProps): I18n;

export const i18n: I18n;

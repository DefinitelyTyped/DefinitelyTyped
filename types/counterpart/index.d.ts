// Type definitions for counterpart 0.18
// Project: https://github.com/martinandert/counterpart
// Definitions by: santiagodoldan <https://github.com/santiagodoldan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type NotFoundHandler = (locale: string, key: string, fallback: string, scope: string) => void;
type LocaleChangeHandler = (newLocale: string, oldLocale: string) => void;

interface Counterpart {
    (key: string|string[], options?: object): string;
    translate(key: string|string[], options?: object): string;

    setSeparator(value: string): string;
    onTranslationNotFound(callback: NotFoundHandler): void;
    offTranslationNotFound(callback: NotFoundHandler): void;
    setMissingEntryGenerator(callback: (value: string) => void): void;
    getLocale(): string;
    setLocale(value: string): string;
    onLocaleChange(callback: LocaleChangeHandler): void;
    offLocaleChange(callback: LocaleChangeHandler): void;
    setFallbackLocale(value: string|string[]): void;
    registerTranslations(locale: string, data: object): void;
    registerInterpolations(data: object): void;
    setKeyTransformer(callback: (value: string, options: object) => string): string;
    localize(date: Date, options: object): string;
    Instance: Counterpart;
    Translator: Counterpart;
}

declare var counterpart: Counterpart;

export = counterpart;

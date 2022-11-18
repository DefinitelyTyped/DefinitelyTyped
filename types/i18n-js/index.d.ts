// Type definitions for i18n-js 3.8
// Project: https://github.com/fnando/i18n-js
// Definitions by: Yuya Tanaka <https://github.com/ypresto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// eslint-disable-next-line export-just-namespace
export = I18n;
export as namespace I18n;

declare namespace I18n {
    type Scope = string | string[];

    let defaultLocale: string;
    let locale: string;
    let defaultSeparator: string;
    let placeholder: RegExp;
    let fallbacks: boolean | string | { [locale: string]: string | string[] };
    let missingBehaviour: "message" | "guess";
    let missingTranslationPrefix: string;

    // tslint:disable-next-line prefer-declare-function
    let getFullScope: (scope: string | ReadonlyArray<string>, options?: TranslateOptions) => string;
    // tslint:disable-next-line prefer-declare-function
    let missingTranslation: (scope: string, options?: TranslateOptions) => string | null | undefined;
    // tslint:disable-next-line prefer-declare-function
    let missingPlaceholder: (placeholder: string, message: string, options?: InterpolateOptions) => string | null | undefined;
    // tslint:disable-next-line prefer-declare-function
    let nullPlaceholder: (placeholder: string, message: string, options?: InterpolateOptions) => string | null | undefined;

    let translations: { [locale: string]: object };
    let locales: { [key: string]: string | string[] | ((locale: string) => string | string[]), get: (locale: string) => string[] };
    let pluralization: { [locale: string]: (count: number) => string[] };

    function reset(): void;

    function currentLocale(): string;

    interface InterpolateOptions {
        [key: string]: any; // interpolation
    }

    type Message = string | object | ((scope: Scope) => string | object);

    interface TranslateOptions extends InterpolateOptions {
        scope?: Scope | undefined;
        message?: string | undefined;
        defaults?: Array<{ message: Message } | { scope: Scope }> | undefined;
        defaultValue?: Message | undefined;
    }
    function translate(scope: Scope, options?: TranslateOptions): string;
    function t(scope: Scope, options?: TranslateOptions): string;

    function localize(scope: "currency" | "number" | "percentage", value: number, options?: InterpolateOptions): string;
    function localize(scope: Scope, value: string | number | Date, options?: InterpolateOptions): string;
    function l(scope: "currency" | "number" | "percentage", value: number, options?: InterpolateOptions): string;
    function l(scope: Scope, value: string | number | Date, options?: InterpolateOptions): string;

    interface ToNumberOptions {
        precision?: number | undefined;
        separator?: string | undefined;
        delimiter?: string | undefined;
        strip_insignificant_zeros?: boolean | undefined;
    }
    function toNumber(num: number, options?: ToNumberOptions): string;

    type ToPercentageOptions = ToNumberOptions;
    function toPercentage(num: number, options?: ToPercentageOptions): string;

    interface ToCurrencyOptions extends ToNumberOptions {
        format?: string | undefined;
        unit?: string | undefined;
        sign_first?: boolean | undefined;
    }
    function toCurrency(num: number, options?: ToCurrencyOptions): string;

    function toTime(scope: Scope, value: string | number | Date): string;

    interface ToHumanSizeOptions extends ToNumberOptions {
        format?: string | undefined;
        scope?: Scope | undefined;
    }
    function toHumanSize(num: number, options?: ToHumanSizeOptions): string;

    function strftime(date: Date, format: string): string;
}

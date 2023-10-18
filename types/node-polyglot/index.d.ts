declare namespace Polyglot {
    interface InterpolationOptions {
        smart_count?: number | { length: number } | undefined;
        _?: string | undefined;

        [interpolationKey: string]: any;
    }

    interface InterpolationTokenOptions {
        prefix?: string | undefined;
        suffix?: string | undefined;
    }

    interface PluralRules {
        pluralTypes: { [lang: string]: (n: number) => number };
        pluralTypeToLanguages: { [lang: string]: string[] };
    }

    interface PolyglotOptions {
        phrases?: any;
        locale?: string | undefined;
        allowMissing?: boolean | undefined;
        onMissingKey?: ((key: string, options: Polyglot.InterpolationOptions, locale: string) => string) | undefined;
        warn?: ((message: string) => void) | undefined;
        interpolation?: InterpolationTokenOptions | undefined;
        pluralRules?: PluralRules | undefined;
    }

    function transformPhrase(phrase: string, options?: number | Polyglot.InterpolationOptions, locale?: string): string;
}

declare class Polyglot {
    constructor(options?: Polyglot.PolyglotOptions);

    extend(phrases: any, prefix?: string): void;

    t(phrase: string, options?: number | Polyglot.InterpolationOptions): string;

    clear(): void;

    replace(phrases: any): void;

    locale(locale?: string): string;

    has(phrase: string): boolean;

    unset(phrases: any, prefix?: string): void;
}

export = Polyglot;

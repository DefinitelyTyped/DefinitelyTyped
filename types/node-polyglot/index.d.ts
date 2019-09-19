// Type definitions for node-polyglot v0.4.4
// Project: https://github.com/airbnb/polyglot.js
// Definitions by: Tim Jackson-Kiely <https://github.com/timjk>
//                 Liam Ross <https://github.com/liamross>
//                 Michael Mok <https://github.com/pmmmwh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Polyglot {
    interface InterpolationOptions {
        smart_count?: number | { length: number };
        _?: string;

        [interpolationKey: string]: any;
    }

    interface InterpolationTokenOptions {
        prefix?: string;
        suffix?: string;
    }

    interface PolyglotOptions {
        phrases?: any;
        locale?: string;
        allowMissing?: boolean;
        onMissingKey?: (key: string, options?: Polyglot.InterpolationOptions, locale?: string) => string;
        warn?: (message: string) => void;
        interpolation?: InterpolationTokenOptions;
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

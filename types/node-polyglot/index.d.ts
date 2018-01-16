// Type definitions for node-polyglot v0.4.1
// Project: https://github.com/airbnb/polyglot.js
// Definitions by: Tim Jackson-Kiely <https://github.com/timjk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace Polyglot {
    interface InterpolationOptions {
        smart_count?: number | { length: number };
        _?: string;

        [interpolationKey: string]: any;
    }

    interface PolyglotOptions {
        phrases?: any;
        locale?: string;
        allowMissing?: boolean;
        onMissingKey?: (key: string, options?: Polyglot.InterpolationOptions, locale?: string) => string;
    }
}

declare class Polyglot {
    constructor(options?: Polyglot.PolyglotOptions);

    extend(phrases: any): void;

    t(phrase: string): string;

    t(phrase: string, smartCount: number): string;

    t(phrase: string, interpolationOptions: Polyglot.InterpolationOptions): string;

    clear(): void;

    replace(phrases: any): void;

    locale(): string;

    locale(locale: string): void;
}

export = Polyglot;

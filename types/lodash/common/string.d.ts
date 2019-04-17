import _ = require("../index");
declare module "../index" {
    interface Stat {
        camelCase(string?: string): string;
    }
    interface Imp<TValue> {
        camelCase(): string;
    }
    interface Exp<TValue> {
        camelCase(): Exp<string>;
    }

    interface Stat {
        capitalize(string?: string): string;
    }
    interface Imp<TValue> {
        capitalize(): string;
    }
    interface Exp<TValue> {
        capitalize(): Exp<string>;
    }

    interface Stat {
        deburr(string?: string): string;
    }
    interface Imp<TValue> {
        deburr(): string;
    }
    interface Exp<TValue> {
        deburr(): Exp<string>;
    }

    interface Stat {
        endsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface Imp<TValue> {
        endsWith(target?: string, position?: number): boolean;
    }
    interface Exp<TValue> {
        endsWith(target?: string, position?: number): Exp<boolean>;
    }

    interface Stat {
        escape(string?: string): string;
    }
    interface Imp<TValue> {
        escape(): string;
    }
    interface Exp<TValue> {
        escape(): Exp<string>;
    }

    interface Stat {
        escapeRegExp(string?: string): string;
    }
    interface Imp<TValue> {
        escapeRegExp(): string;
    }
    interface Exp<TValue> {
        escapeRegExp(): Exp<string>;
    }

    interface Stat {
        kebabCase(string?: string): string;
    }
    interface Imp<TValue> {
        kebabCase(): string;
    }
    interface Exp<TValue> {
        kebabCase(): Exp<string>;
    }

    interface Stat {
        lowerCase(string?: string): string;
    }
    interface Imp<TValue> {
        lowerCase(): string;
    }
    interface Exp<TValue> {
        lowerCase(): Exp<string>;
    }

    interface Stat {
        lowerFirst(string?: string): string;
    }
    interface Imp<TValue> {
        lowerFirst(): string;
    }
    interface Exp<TValue> {
        lowerFirst(): Exp<string>;
    }

    interface Stat {
        pad(string?: string, length?: number, chars?: string): string;
    }
    interface Imp<TValue> {
        pad(length?: number, chars?: string): string;
    }
    interface Exp<TValue> {
        pad(length?: number, chars?: string): Exp<string>;
    }

    interface Stat {
        padEnd(string?: string, length?: number, chars?: string): string;
    }
    interface Imp<TValue> {
        padEnd(length?: number, chars?: string): string;
    }
    interface Exp<TValue> {
        padEnd(length?: number, chars?: string): Exp<string>;
    }

    interface Stat {
        padStart(string?: string, length?: number, chars?: string): string;
    }
    interface Imp<TValue> {
        padStart(length?: number, chars?: string): string;
    }
    interface Exp<TValue> {
        padStart(length?: number, chars?: string): Exp<string>;
    }

    interface Stat {
        parseInt(string: string, radix?: number): number;
    }
    interface Imp<TValue> {
        parseInt(radix?: number): number;
    }
    interface Exp<TValue> {
        parseInt(radix?: number): Exp<number>;
    }

    interface Stat {
        repeat(string?: string, n?: number): string;
    }
    interface Imp<TValue> {
        repeat(n?: number): string;
    }
    interface Exp<TValue> {
        repeat(n?: number): Exp<string>;
    }
    type ReplaceFunction = (match: string, ...args: any[]) => string;

    interface Stat {
        replace(string: string, pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
    }
    interface Imp<TValue> {
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        replace(replacement: ReplaceFunction | string): string;
    }
    interface Exp<TValue> {
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): Exp<string>;
        replace(replacement: ReplaceFunction | string): Exp<string>;
    }

    interface Stat {
        snakeCase(string?: string): string;
    }
    interface Imp<TValue> {
        snakeCase(): string;
    }
    interface Exp<TValue> {
        snakeCase(): Exp<string>;
    }

    interface Stat {
        split(string: string, separator?: RegExp | string, limit?: number): string[];
        split(string: string, index: string | number, guard: object): string[];
    }
    interface Imp<TValue> {
        split(separator?: RegExp | string, limit?: number): Imp<string[]>;
    }
    interface Exp<TValue> {
        split(separator?: RegExp | string, limit?: number): Exp<string[]>;
    }

    interface Stat {
        startCase(string?: string): string;
    }
    interface Imp<TValue> {
        startCase(): string;
    }
    interface Exp<TValue> {
        startCase(): Exp<string>;
    }

    interface Stat {
        startsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface Imp<TValue> {
        startsWith(target?: string, position?: number): boolean;
    }
    interface Exp<TValue> {
        startsWith(target?: string, position?: number): Exp<boolean>;
    }

    interface TemplateOptions extends TemplateSettings {
        sourceURL?: string;
    }
    interface TemplateExecutor {
        (data?: object): string;
        source: string;
    }
    interface Stat {
        template(string?: string, options?: TemplateOptions): TemplateExecutor;
    }
    interface Imp<TValue> {
        template(options?: TemplateOptions): TemplateExecutor;
    }
    interface Exp<TValue> {
        template(options?: TemplateOptions): Exp<TemplateExecutor>;
    }

    interface Stat {
        toLower(string?: string): string;
    }
    interface Imp<TValue> {
        toLower(): string;
    }
    interface Exp<TValue> {
        toLower(): Exp<string>;
    }

    interface Stat {
        toUpper(string?: string): string;
    }
    interface Imp<TValue> {
        toUpper(): string;
    }
    interface Exp<TValue> {
        toUpper(): Exp<string>;
    }

    interface Stat {
        trim(string?: string, chars?: string): string;
        trim(string: string, index: string | number, guard: object): string;
    }
    interface Imp<TValue> {
        trim(chars?: string): string;
    }
    interface Exp<TValue> {
        trim(chars?: string): Exp<string>;
    }

    interface Stat {
        trimEnd(string?: string, chars?: string): string;
        trimEnd(string: string, index: string | number, guard: object): string;
    }
    interface Imp<TValue> {
        trimEnd(chars?: string): string;
    }
    interface Exp<TValue> {
        trimEnd(chars?: string): Exp<string>;
    }

    interface Stat {
        trimStart(string?: string, chars?: string): string;
        trimStart(string: string, index: string | number, guard: object): string;
    }
    interface Imp<TValue> {
        trimStart(chars?: string): string;
    }
    interface Exp<TValue> {
        trimStart(chars?: string): Exp<string>;
    }

    interface TruncateOptions {
        length?: number;
        omission?: string;
        separator?: string | RegExp;
    }
    interface Stat {
        truncate(string?: string, options?: TruncateOptions): string;
    }
    interface Imp<TValue> {
        truncate(options?: TruncateOptions): string;
    }
    interface Exp<TValue> {
        truncate(options?: TruncateOptions): Exp<string>;
    }

    interface Stat {
        unescape(string?: string): string;
    }
    interface Imp<TValue> {
        unescape(): string;
    }
    interface Exp<TValue> {
        unescape(): Exp<string>;
    }

    interface Stat {
        upperCase(string?: string): string;
    }
    interface Imp<TValue> {
        upperCase(): string;
    }
    interface Exp<TValue> {
        upperCase(): Exp<string>;
    }

    interface Stat {
        upperFirst(string?: string): string;
    }
    interface Imp<TValue> {
        upperFirst(): string;
    }
    interface Exp<TValue> {
        upperFirst(): Exp<string>;
    }

    interface Stat {
        words(string?: string, pattern?: string | RegExp): string[];
        words(string: string, index: string | number, guard: object): string[];
    }
    interface Imp<TValue> {
        words(pattern?: string | RegExp): string[];
    }
    interface Exp<TValue> {
        words(pattern?: string | RegExp): Exp<string[]>;
    }
}

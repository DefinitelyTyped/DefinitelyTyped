import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        camelCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        camelCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        camelCase(): ExpS;
    }

    interface LoDashStatic {
        capitalize(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        capitalize(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        capitalize(): ExpS;
    }

    interface LoDashStatic {
        deburr(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        deburr(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        deburr(): ExpS;
    }

    interface LoDashStatic {
        endsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        endsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        endsWith(target?: string, position?: number): ExpU<boolean>;
    }

    interface LoDashStatic {
        escape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        escape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        escape(): ExpS;
    }

    interface LoDashStatic {
        escapeRegExp(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        escapeRegExp(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        escapeRegExp(): ExpS;
    }

    interface LoDashStatic {
        kebabCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        kebabCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        kebabCase(): ExpS;
    }

    interface LoDashStatic {
        lowerCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        lowerCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        lowerCase(): ExpS;
    }

    interface LoDashStatic {
        lowerFirst(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        lowerFirst(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        lowerFirst(): ExpS;
    }

    interface LoDashStatic {
        pad(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        pad(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        pad(length?: number, chars?: string): ExpS;
    }

    interface LoDashStatic {
        padEnd(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        padEnd(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        padEnd(length?: number, chars?: string): ExpS;
    }

    interface LoDashStatic {
        padStart(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        padStart(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        padStart(length?: number, chars?: string): ExpS;
    }

    interface LoDashStatic {
        parseInt(string: string, radix?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        parseInt(radix?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        parseInt(radix?: number): ExpU<number>;
    }

    interface LoDashStatic {
        repeat(string?: string, n?: number): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        repeat(n?: number): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        repeat(n?: number): ExpS;
    }
    type ReplaceFunction = (match: string, ...args: any[]) => string;

    interface LoDashStatic {
        replace(string: string, pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        replace(replacement: ReplaceFunction | string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): ExpS;
        replace(replacement: ReplaceFunction | string): ExpS;
    }

    interface LoDashStatic {
        snakeCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        snakeCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        snakeCase(): ExpS;
    }

    interface LoDashStatic {
        split(string: string, separator?: RegExp | string, limit?: number): string[];
        split(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        split(separator?: RegExp | string, limit?: number): ImpL<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        split(separator?: RegExp | string, limit?: number): ExpL<string>;
    }

    interface LoDashStatic {
        startCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        startCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        startCase(): ExpS;
    }

    interface LoDashStatic {
        startsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        startsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        startsWith(target?: string, position?: number): ExpU<boolean>;
    }

    interface TemplateOptions extends TemplateSettings {
        sourceURL?: string;
    }
    interface TemplateExecutor {
        (data?: object): string;
        source: string;
    }
    interface LoDashStatic {
        template(string?: string, options?: TemplateOptions): TemplateExecutor;
    }
    interface LoDashImplicitWrapper<TValue> {
        template(options?: TemplateOptions): TemplateExecutor;
    }
    interface LoDashExplicitWrapper<TValue> {
        template(options?: TemplateOptions): ExpF<TemplateExecutor>;
    }

    interface LoDashStatic {
        toLower(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        toLower(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        toLower(): ExpS;
    }

    interface LoDashStatic {
        toUpper(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        toUpper(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        toUpper(): ExpS;
    }

    interface LoDashStatic {
        trim(string?: string, chars?: string): string;
        trim(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        trim(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        trim(chars?: string): ExpS;
    }

    interface LoDashStatic {
        trimEnd(string?: string, chars?: string): string;
        trimEnd(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        trimEnd(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        trimEnd(chars?: string): ExpS;
    }

    interface LoDashStatic {
        trimStart(string?: string, chars?: string): string;
        trimStart(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        trimStart(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        trimStart(chars?: string): ExpS;
    }

    interface TruncateOptions {
        length?: number;
        omission?: string;
        separator?: string | RegExp;
    }
    interface LoDashStatic {
        truncate(string?: string, options?: TruncateOptions): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        truncate(options?: TruncateOptions): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        truncate(options?: TruncateOptions): ExpS;
    }

    interface LoDashStatic {
        unescape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        unescape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        unescape(): ExpS;
    }

    interface LoDashStatic {
        upperCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        upperCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        upperCase(): ExpS;
    }

    interface LoDashStatic {
        upperFirst(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        upperFirst(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        upperFirst(): ExpS;
    }

    interface LoDashStatic {
        words(string?: string, pattern?: string | RegExp): string[];
        words(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        words(pattern?: string | RegExp): string[];
    }
    interface LoDashExplicitWrapper<TValue> {
        words(pattern?: string | RegExp): ExpL<string>;
    }
}

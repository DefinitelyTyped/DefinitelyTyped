import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        camelCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        camelCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        camelCase(): StringChain;
    }

    interface LoDashStatic {
        capitalize(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        capitalize(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        capitalize(): StringChain;
    }

    interface LoDashStatic {
        deburr(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        deburr(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        deburr(): StringChain;
    }

    interface LoDashStatic {
        endsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        endsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        endsWith(target?: string, position?: number): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        escape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        escape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        escape(): StringChain;
    }

    interface LoDashStatic {
        escapeRegExp(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        escapeRegExp(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        escapeRegExp(): StringChain;
    }

    interface LoDashStatic {
        kebabCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        kebabCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        kebabCase(): StringChain;
    }

    interface LoDashStatic {
        lowerCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        lowerCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        lowerCase(): StringChain;
    }

    interface LoDashStatic {
        lowerFirst(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        lowerFirst(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        lowerFirst(): StringChain;
    }

    interface LoDashStatic {
        pad(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        pad(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        pad(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        padEnd(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        padEnd(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        padEnd(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        padStart(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        padStart(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        padStart(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        parseInt(string: string, radix?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        parseInt(radix?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        parseInt(radix?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        repeat(string?: string, n?: number): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        repeat(n?: number): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        repeat(n?: number): StringChain;
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
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): StringChain;
        replace(replacement: ReplaceFunction | string): StringChain;
    }

    interface LoDashStatic {
        snakeCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        snakeCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        snakeCase(): StringChain;
    }

    interface LoDashStatic {
        split(string: string, separator?: RegExp | string, limit?: number): string[];
        split(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        split(separator?: RegExp | string, limit?: number): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        split(separator?: RegExp | string, limit?: number): CollectionChain<string>;
    }

    interface LoDashStatic {
        startCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        startCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        startCase(): StringChain;
    }

    interface LoDashStatic {
        startsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        startsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        startsWith(target?: string, position?: number): PrimitiveChain<boolean>;
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
        template(options?: TemplateOptions): FunctionChain<TemplateExecutor>;
    }

    interface LoDashStatic {
        toLower(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        toLower(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        toLower(): StringChain;
    }

    interface LoDashStatic {
        toUpper(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        toUpper(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        toUpper(): StringChain;
    }

    interface LoDashStatic {
        trim(string?: string, chars?: string): string;
        trim(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        trim(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        trim(chars?: string): StringChain;
    }

    interface LoDashStatic {
        trimEnd(string?: string, chars?: string): string;
        trimEnd(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        trimEnd(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        trimEnd(chars?: string): StringChain;
    }

    interface LoDashStatic {
        trimStart(string?: string, chars?: string): string;
        trimStart(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        trimStart(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        trimStart(chars?: string): StringChain;
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
        truncate(options?: TruncateOptions): StringChain;
    }

    interface LoDashStatic {
        unescape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        unescape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        unescape(): StringChain;
    }

    interface LoDashStatic {
        upperCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        upperCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        upperCase(): StringChain;
    }

    interface LoDashStatic {
        upperFirst(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        upperFirst(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        upperFirst(): StringChain;
    }

    interface LoDashStatic {
        words(string?: string, pattern?: string | RegExp): string[];
        words(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        words(pattern?: string | RegExp): string[];
    }
    interface LoDashExplicitWrapper<TValue> {
        words(pattern?: string | RegExp): CollectionChain<string>;
    }
}

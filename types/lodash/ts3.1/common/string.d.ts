import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.camelCase
         */
        camelCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.capitalize
         */
        capitalize(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.deburr
         */
        deburr(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.endsWith
         */
        endsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(target?: string, position?: number): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.escape
         */
        escape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escape
         */
        escape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.escape
         */
        escape(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.kebabCase
         */
        kebabCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.lowerCase
         */
        lowerCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.pad
         */
        pad(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.padEnd
         */
        padEnd(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.padStart
         */
        padStart(string?: string, length?: number, chars?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(length?: number, chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(length?: number, chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.parseInt
         */
        parseInt(string: string, radix?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.repeat
         */
        repeat(string?: string, n?: number): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): StringChain;
    }
    type ReplaceFunction = (match: string, ...args: any[]) => string;

    interface LoDashStatic {
        /**
         * @see _.replace
         */
        replace(string: string, pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        /**
         * @see _.replace
         */
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string;
        /**
         * @see _.replace
         */
        replace(replacement: ReplaceFunction | string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(pattern: RegExp | string, replacement: ReplaceFunction | string): StringChain;
        /**
         * @see _.replace
         */
        replace(replacement: ReplaceFunction | string): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.snakeCase
         */
        snakeCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.split
         */
        split(string: string, separator?: RegExp | string, limit?: number): string[];
        /**
         * @see _.split
         */
        split(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(separator?: RegExp | string, limit?: number): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(separator?: RegExp | string, limit?: number): CollectionChain<string>;
    }

    interface LoDashStatic {
        /**
         * @see _.startCase
         */
        startCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.startsWith
         */
        startsWith(string?: string, target?: string, position?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(target?: string, position?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(target?: string, position?: number): PrimitiveChain<boolean>;
    }

    interface TemplateOptions extends TemplateSettings {
        /**
         * @see _.sourceURL
         */
        sourceURL?: string;
    }
    interface TemplateExecutor {
        (data?: object): string;
        /**
         * @see _.source
         */
        source: string;
    }
    interface LoDashStatic {
        /**
         * @see _.template
         */
        template(string?: string, options?: TemplateOptions): TemplateExecutor;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): TemplateExecutor;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): FunctionChain<TemplateExecutor>;
    }

    interface LoDashStatic {
        /**
         * @see _.toLower
         */
        toLower(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.toUpper
         */
        toUpper(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.trim
         */
        trim(string?: string, chars?: string): string;
        /**
         * @see _.trim
         */
        trim(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trim
         */
        trim(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trim
         */
        trim(chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.trimEnd
         */
        trimEnd(string?: string, chars?: string): string;
        /**
         * @see _.trimEnd
         */
        trimEnd(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.trimStart
         */
        trimStart(string?: string, chars?: string): string;
        /**
         * @see _.trimStart
         */
        trimStart(string: string, index: string | number, guard: object): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): StringChain;
    }

    interface TruncateOptions {
        /**
         * @see _.length
         */
        length?: number;
        /**
         * @see _.omission
         */
        omission?: string;
        /**
         * @see _.separator
         */
        separator?: string | RegExp;
    }
    interface LoDashStatic {
        /**
         * @see _.truncate
         */
        truncate(string?: string, options?: TruncateOptions): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.unescape
         */
        unescape(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.upperCase
         */
        upperCase(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.upperFirst
         */
        upperFirst(string?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.words
         */
        words(string?: string, pattern?: string | RegExp): string[];
        /**
         * @see _.words
         */
        words(string: string, index: string | number, guard: object): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string | RegExp): string[];
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string | RegExp): CollectionChain<string>;
    }
}

// Type definitions for Voca 1.4
// Project: https://vocajs.com/
// Definitions by: Pine Mizune <https://github.com/pine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var v: v.VocaStatic;

export = v;
export as namespace v;

declare namespace v {
    type CountPredicate = (character: string, index: number, str: string) => boolean;
    type ReplacementFunction = (match?: string, ...groups: string[]) => string;

    interface WordWrapOptions {
        width?: number | undefined;
        newLine?: string | undefined;
        indent?: string | undefined;
        cut?: boolean | undefined;
    }

    interface VocaStatic {
        // Case
        camelCase(subject?: string): string;
        capitalize(subject?: string, restToLower?: boolean): string;
        decapitalize(subject?: string): string;
        kebabCase(subject?: string): string;
        lowerCase(subject?: string): string;
        snakeCase(subject?: string): string;
        swapCase(subject?: string): string;
        titleCase(subject?: string, ignoreWords?: string[]): string;
        upperCase(subject?: string): string;

        // Chain
        (subject: any): Chain;
        chain<T>(subject: T): ExplicitChain<T>;

        // Chop
        charAt(subject?: string, position?: number): string;
        codePointAt(subject?: string, position?: number): string;
        first(subject?: string, length?: number): string;
        graphemeAt(subject?: string, position?: number): string;
        last(subject?: string, length?: number): string;
        prune(subject?: string, length?: number, end?: string): string;
        slice(subject?: string, start?: number, end?: number): string;
        substr(subject?: string, start?: number, length?: number): string;
        substring(subject?: string, start?: number, end?: number): string;
        truncate(subject?: string, length?: number, end?: string): string;

        // Count
        count(subject?: string): number;
        countGraphemes(subject?: string): number;
        countSubstrings(subject?: string, substring?: string): number;
        countWhere(subject?: string, predicate?: CountPredicate, context?: any): number;
        countWords(subject?: string, pattern?: string | RegExp, flags?: string): number;

        // Escape
        escapeHtml(subject?: string): string;
        escapeRegExp(subject?: string): string;
        unescapeHtml(subject?: string): string;

        // Format
        sprintf(format?: string, ...replacements: any[]): string;
        vprintf(format?: string, ...replacements: any[]): string;

        // Index
        indexOf(subject?: string, search?: string, fromIndex?: number): number;
        lastIndexOf(subject?: string, search?: string, fromIndex?: number): number;
        search(subject?: string, pattern?: string | RegExp, fromIndex?: number): number;

        // Manipulate
        insert(subject?: string, toInsert?: string, position?: number): string;
        latinise(subject?: string): string;
        pad(subject?: string, length?: number, pad?: string): string;
        padLeft(subject?: string, length?: number, pad?: string): string;
        padRight(subject?: string, length?: number, pad?: string): string;
        repeat(subject?: string, times?: number): string;
        replace(subject?: string, pattern?: string | RegExp, replacement?: string | ReplacementFunction): string;
        replaceAll(subject?: string, pattern?: string | RegExp, replacement?: string | ReplacementFunction): string;
        reverse(subject?: string): string;
        reverseGrapheme(subject?: string): string;
        slugify(subject?: string): string;
        splice(subject?: string, start?: number, deleteCount?: number, toAdd?: string): string;
        tr(subject?: string, from?: string, to?: string): string;
        tr(subject?: string, from?: { [key: string]: string }): string;
        trim(subject?: string, whitespace?: string): string;
        trimLeft(subject?: string, whitespace?: string): string;
        trimRight(subject?: string, whitespace?: string): string;
        wordWrap(subject?: string, options?: WordWrapOptions): string;

        // Query
        endsWith(subject?: string, end?: string, position?: number): boolean;
        includes(subject?: string, search?: string, position?: number): boolean;
        isAlpha(subject?: string): boolean;
        isAlphaDigit(subject?: string): boolean;
        isBlank(subject?: string): boolean;
        isDigit(subject?: string): boolean;
        isEmpty(subject?: string): boolean;
        isLowerCase(subject?: string): boolean;
        isNumeric(subject?: string): boolean;
        isString(subject?: any): boolean;
        isUpperCase(subject?: string): boolean;
        matches(subject?: string, pattern?: string | RegExp, flags?: string): boolean;
        startsWith(subject?: string, start?: string, position?: number): boolean;

        // Split
        chars(subject?: string): string[];
        codePoints(subject?: string): number[];
        graphemes(subject?: string): string[];
        split(subject?: string, separator?: string | RegExp, limit?: number): string[];
        words(subject?: string, pattern?: string | RegExp, flag?: string): string[];

        // Strip
        stripBom(subject?: string): string;
        stripTags(subject?: string, allowbleTags?: string | string[], replacement?: string): string;

        // Util
        noConflict(): VocaStatic;
        version: string;
    }

    interface Chain {
        // Case
        camelCase(): Chain;
        capitalize(restToLoweropt?: boolean): Chain;
        decapitalize(): Chain;
        kebabCase(): Chain;
        lowerCase(): Chain;
        snakeCase(): Chain;
        swapCase(): Chain;
        titleCase(ignoreWordsopt?: string[]): Chain;
        upperCase(): Chain;

        // Chain
        value(): string;
        chain(): ExplicitChain<string>;

        // Chop
        charAt(position?: number): Chain;
        codePointAt(position?: number): Chain;
        first(length?: number): Chain;
        graphemeAt(position?: number): Chain;
        last(length?: number): Chain;
        prune(length?: number, end?: string): Chain;
        slice(start?: number, end?: number): Chain;
        substr(start?: number, length?: number): Chain;
        substring(start?: number, end?: number): Chain;
        truncate(length?: number, end?: string): Chain;

        // Count
        count(): number;
        countGraphemes(): number;
        countSubstrings(substring?: string): number;
        countWhere(predicate?: CountPredicate, context?: any): number;
        countWords(pattern?: string | RegExp, flags?: string): number;

        // Escape
        escapeHtml(): Chain;
        escapeRegExp(): Chain;
        unescapeHtml(): Chain;

        // Format
        sprintf(...replacements: any[]): Chain;
        vprintf(...replacements: any[]): Chain;

        // Index
        indexOf(search?: string, fromIndex?: number): number;
        lastIndexOf(search?: string, fromIndex?: number): number;
        search(pattern?: string | RegExp, fromIndex?: number): number;

        // Multipulate
        insert(toInsert?: string, position?: number): Chain;
        latinise(): Chain;
        pad(length?: number, pad?: string): Chain;
        padLeft(length?: number, pad?: string): Chain;
        padRight(length?: number, pad?: string): Chain;
        repeat(times?: number): Chain;
        replace(pattern?: string | RegExp, replacement?: string | ReplacementFunction): Chain;
        replaceAll(pattern?: string | RegExp, replacement?: string | ReplacementFunction): Chain;
        reverse(): Chain;
        reverseGrapheme(): Chain;
        slugify(): Chain;
        splice(start?: number, deleteCount?: number, toAdd?: string): Chain;
        tr(from?: string, to?: string): Chain;
        tr(from?: { [key: string]: string }): Chain;
        trim(whitespace?: string): Chain;
        trimLeft(whitespace?: string): Chain;
        trimRight(whitespace?: string): Chain;
        wordWrap(options?: WordWrapOptions): Chain;

        // Query
        endsWith(end?: string, position?: number): boolean;
        includes(search?: string, position?: number): boolean;
        isAlpha(): boolean;
        isAlphaDigit(): boolean;
        isBlank(): boolean;
        isDigit(): boolean;
        isEmpty(): boolean;
        isLowerCase(): boolean;
        isNumeric(): boolean;
        isString(): boolean;
        isUpperCase(): boolean;
        matches(pattern?: string | RegExp, flags?: string): boolean;
        startsWith(start?: string, position?: number): boolean;

        // Split
        chars(): string[];
        codePoints(): number[];
        graphemes(): string[];
        split(separator?: string | RegExp, limit?: number): string[];
        words(pattern?: string | RegExp, flag?: string): string[];

        // Strip
        stripBom(): Chain;
        stripTags(allowbleTags?: string | string[], replacement?: string): Chain;
    }

    interface ExplicitChain<T> {
        // Case
        camelCase(): ExplicitChain<string>;
        capitalize(restToLoweropt?: boolean): ExplicitChain<string>;
        decapitalize(): ExplicitChain<string>;
        kebabCase(): ExplicitChain<string>;
        lowerCase(): ExplicitChain<string>;
        snakeCase(): ExplicitChain<string>;
        swapCase(): ExplicitChain<string>;
        titleCase(ignoreWordsopt?: string[]): ExplicitChain<string>;
        upperCase(): ExplicitChain<string>;

        // Chain
        value(): T;
        thru<U>(changer: (subjects: T) => U): ExplicitChain<U>;

        // Chop
        charAt(position?: number): ExplicitChain<string>;
        codePointAt(position?: number): ExplicitChain<string>;
        first(length?: number): ExplicitChain<string>;
        graphemeAt(position?: number): ExplicitChain<string>;
        last(length?: number): ExplicitChain<string>;
        prune(length?: number, end?: string): ExplicitChain<string>;
        slice(start?: number, end?: number): ExplicitChain<string>;
        substr(start?: number, length?: number): ExplicitChain<string>;
        substring(start?: number, end?: number): ExplicitChain<string>;
        truncate(length?: number, end?: string): ExplicitChain<string>;

        // Count
        count(): ExplicitChain<number>;
        countGraphemes(): ExplicitChain<number>;
        countSubstrings(substring?: string): ExplicitChain<number>;
        countWhere(predicate?: CountPredicate, context?: any): ExplicitChain<number>;
        countWords(pattern?: string | RegExp, flags?: string): ExplicitChain<number>;

        // Escape
        escapeHtml(): ExplicitChain<string>;
        escapeRegExp(): ExplicitChain<string>;
        unescapeHtml(): ExplicitChain<string>;

        // Format
        sprintf(...replacements: any[]): ExplicitChain<string>;
        vprintf(...replacements: any[]): ExplicitChain<string>;

        // Index
        indexOf(search?: string, fromIndex?: number): ExplicitChain<number>;
        lastIndexOf(search?: string, fromIndex?: number): ExplicitChain<number>;
        search(pattern?: string | RegExp, fromIndex?: number): ExplicitChain<number>;

        // Multipulate
        insert(toInsert?: string, position?: number): ExplicitChain<string>;
        latinise(): ExplicitChain<string>;
        pad(length?: number, pad?: string): ExplicitChain<string>;
        padLeft(length?: number, pad?: string): ExplicitChain<string>;
        padRight(length?: number, pad?: string): ExplicitChain<string>;
        repeat(times?: number): ExplicitChain<string>;
        replace(pattern?: string | RegExp, replacement?: string | ReplacementFunction): ExplicitChain<string>;
        replaceAll(pattern?: string | RegExp, replacement?: string | ReplacementFunction): ExplicitChain<string>;
        reverse(): ExplicitChain<string>;
        reverseGrapheme(): ExplicitChain<string>;
        slugify(): ExplicitChain<string>;
        splice(start?: number, deleteCount?: number, toAdd?: string): ExplicitChain<string>;
        tr(from?: string, to?: string): ExplicitChain<string>;
        tr(from?: { [key: string]: string }): ExplicitChain<string>;
        trim(whitespace?: string): ExplicitChain<string>;
        trimLeft(whitespace?: string): ExplicitChain<string>;
        trimRight(whitespace?: string): ExplicitChain<string>;
        wordWrap(options?: WordWrapOptions): ExplicitChain<string>;

        // Query
        endsWith(end?: string, position?: number): ExplicitChain<boolean>;
        includes(search?: string, position?: number): ExplicitChain<boolean>;
        isAlpha(): ExplicitChain<boolean>;
        isAlphaDigit(): ExplicitChain<boolean>;
        isBlank(): ExplicitChain<boolean>;
        isDigit(): ExplicitChain<boolean>;
        isEmpty(): ExplicitChain<boolean>;
        isLowerCase(): ExplicitChain<boolean>;
        isNumeric(): ExplicitChain<boolean>;
        isString(): ExplicitChain<boolean>;
        isUpperCase(): ExplicitChain<boolean>;
        matches(pattern?: string | RegExp, flags?: string): ExplicitChain<boolean>;
        startsWith(start?: string, position?: number): ExplicitChain<boolean>;

        // Split
        chars(): ExplicitChain<string[]>;
        codePoints(): ExplicitChain<number[]>;
        graphemes(): ExplicitChain<string[]>;
        split(separator?: string | RegExp, limit?: number): ExplicitChain<string[]>;
        words(pattern?: string | RegExp, flag?: string): ExplicitChain<string[]>;

        // Strip
        stripBom(): ExplicitChain<string>;
        stripTags(allowbleTags?: string | string[], replacement?: string): ExplicitChain<string>;
    }
}

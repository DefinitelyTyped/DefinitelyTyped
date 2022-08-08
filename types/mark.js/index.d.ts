// Type definitions for mark.js 8.11
// Project: https://markjs.io/
// Definitions by: Soner Köksal <https://github.com/renjfk>
//                 Lucian Buzzo <https://github.com/LucianBuzzo>
//                 Joao Lourenco <https://github.com/blackstarzes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace Mark {
    type MarkAccuracy = 'partially' | 'complementary' | 'exactly';

    interface MarkAccuracyObject {
        value: MarkAccuracy;
        limiters?: string[] | undefined;
    }

    interface MarkOptions {
        element?: string | undefined;
        className?: string | undefined;
        exclude?: string[] | undefined;
        separateWordSearch?: boolean | undefined;
        accuracy?: MarkAccuracy | MarkAccuracyObject | undefined;
        diacritics?: boolean | undefined;
        synonyms?: { [index: string]: string } | undefined;
        iframes?: boolean | undefined;
        iframesTimeout?: number | undefined;
        acrossElements?: boolean | undefined;
        caseSensitive?: boolean | undefined;
        ignoreJoiners?: boolean | undefined;
        ignorePunctuation?: string[] | undefined;
        wildcards?: 'disabled' | 'enabled' | 'withSpaces' | undefined;

        each?(element: Element): void;

        filter?(
            textNode: Text,
            term: string,
            marksSoFar: number,
            marksTotal: number
        ): boolean;

        noMatch?(term: string): void;

        done?(marksTotal: number): void;

        debug?: boolean | undefined;
        log?: object | undefined;
    }

    interface MarkRegExpOptions {
        element?: string | undefined;
        className?: string | undefined;
        exclude?: string[] | undefined;
        iframes?: boolean | undefined;
        iframesTimeout?: number | undefined;
        acrossElements?: boolean | undefined;
        ignoreGroups?: number | undefined;
        each?(element: Element): void;
        filter?(
            textNode: Text,
            term: string,
            marksSoFar: number,
            marksTotal: number
        ): boolean;
        noMatch?(term: string): void;
        done?(marksTotal: number): void;
        debug?: boolean | undefined;
        log?: object | undefined;
    }

    interface MarkRangesOptions {
        element?: string | undefined;
        className?: string | undefined;
        exclude?: string[] | undefined;
        iframes?: boolean | undefined;
        iframesTimeout?: number | undefined;
        each?(element: Element, range: Range): void;
        filter?(
            textNode: Text,
            term: string,
            marksSoFar: number,
            marksTotal: number
        ): boolean;
        noMatch?(term: string): void;
        done?(marksTotal: number): void;
        debug?: boolean | undefined;
        log?: object | undefined;
    }

    interface UnmarkOptions {
        element?: string | undefined;
        className?: string | undefined;
        exclude?: string[] | undefined;
        iframes?: boolean | undefined;
        iframesTimeout?: number | undefined;

        done?(marksTotal: number): void;

        debug?: boolean | undefined;
        log?: object | undefined;
    }

    interface Range {
        start: number;
        length: number;
    }
}

declare class Mark {
    constructor(
        context: string | HTMLElement | ReadonlyArray<HTMLElement> | NodeList
    );

    /**
     * highlight custom search terms.
     * @param keyword The keyword to be marked. Can also be an array with multiple keywords.
     * Note that keywords will be escaped. If you need to mark unescaped keywords (e.g. containing a pattern),
     * have a look at the `markRegExp()`
     * @param options Optional options
     */
    mark(
        keyword: string | ReadonlyArray<string>,
        options?: Mark.MarkOptions
    ): void;

    /**
     * highlight custom regular expressions.
     * @param regexp The regular expression to be marked. Example: /Lor[^]?m/gmi.
     * Note that groups will be ignored and mark.js will always find all matches, regardless of the g flag.
     * @param options Optional options
     */
    markRegExp(regexp: RegExp, options?: Mark.MarkRegExpOptions): void;

    /**
     * A method to mark ranges with a start position and length. They will be applied
     * to text nodes in the specified context.
     * @param ranges An array of objects with a start and length property.
     * Note that the start positions must be specified including whitespace characters.
     * @param options Optional options
     */
    markRanges(
        ranges: ReadonlyArray<Mark.Range>,
        options?: Mark.MarkRangesOptions
    ): void;

    /**
     * A method to remove highlights created by mark.js.
     * @param options Optional options
     */
    unmark(options?: Mark.MarkOptions): void;
}

export = Mark;

/* augment JQuery */
declare global {
    interface JQuery {
        mark(
            term: string | ReadonlyArray<string>,
            options?: Mark.MarkOptions
        ): void;

        unmark(options?: Mark.UnmarkOptions): void;
    }

    interface JQueryStatic {
        mark(
            term: string | ReadonlyArray<string>,
            options?: Mark.MarkOptions
        ): void;

        unmark(options?: Mark.UnmarkOptions): void;
    }
}

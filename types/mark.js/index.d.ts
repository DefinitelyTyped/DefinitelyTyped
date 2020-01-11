// Type definitions for mark.js 8.11
// Project: https://markjs.io/
// Definitions by: Soner Köksal <https://github.com/renjfk>
//                 Roman Hotsiy <https://github.com/RomanGotsiy>
//                 Lucian Buzzo <https://github.com/LucianBuzzo>
//                 Joao Lourenco <https://github.com/blackstarzes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace Mark {
    type MarkAccuracy = 'partially' | 'complementary' | 'exactly';

    interface MarkAccuracyObject {
        value: MarkAccuracy;
        limiters?: string[];
    }

    interface MarkOptions {
        element?: string;
        className?: string;
        exclude?: string[];
        separateWordSearch?: boolean;
        accuracy?: MarkAccuracy | MarkAccuracyObject;
        diacritics?: boolean;
        synonyms?: { [index: string]: string };
        iframes?: boolean;
        iframesTimeout?: number;
        acrossElements?: boolean;
        caseSensitive?: boolean;
        ignoreJoiners?: boolean;
        ignorePunctuation?: string[];
        wildcards?: 'disabled' | 'enabled' | 'withSpaces';

        each?(element: Element): void;

        filter?(
            textNode: Element,
            term: string,
            marksSoFar: number,
            marksTotal: number
        ): boolean;

        noMatch?(term: string): void;

        done?(marksTotal: number): void;

        debug?: boolean;
        log?: object;
    }

    interface MarkRegExpOptions {
        element?: string;
        className?: string;
        exclude?: string[];
        iframes?: boolean;
        iframesTimeout?: number;
        acrossElements?: boolean;
        ignoreGroups?: number;
        each?(element: Element): void;
        filter?(
            textNode: Element,
            term: string,
            marksSoFar: number,
            marksTotal: number
        ): boolean;
        noMatch?(term: string): void;
        done?(marksTotal: number): void;
        debug?: boolean;
        log?: object;
    }

    interface MarkRangesOptions {
        element?: string;
        className?: string;
        exclude?: string[];
        iframes?: boolean;
        iframesTimeout?: number;
        each?(element: Element, range: Range): void;
        filter?(
            textNode: Element,
            term: string,
            marksSoFar: number,
            marksTotal: number
        ): boolean;
        noMatch?(term: string): void;
        done?(marksTotal: number): void;
        debug?: boolean;
        log?: object;
    }

    interface UnmarkOptions {
        element?: string;
        className?: string;
        exclude?: string[];
        iframes?: boolean;
        iframesTimeout?: number;

        done?(marksTotal: number): void;

        debug?: boolean;
        log?: object;
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

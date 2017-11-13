// Type definitions for mark.js 8.11
// Project: https://markjs.io/
// Definitions by: Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

type MarkAccuracy = "partially" | "complementary" | "exactly";

interface MarkOptions {
    element?: string;
    className?: string;
    exclude?: string[];
    separateWordSearch?: boolean;
    accuracy?: MarkAccuracy | { value: MarkAccuracy };
    diacritics?: boolean;
    synonyms?: { [index: string]: string };
    iframes?: boolean;
    iframesTimeout?: number;
    acrossElements?: boolean;
    caseSensitive?: boolean;
    ignoreJoiners?: boolean;
    wildcards?: "disabled" | "enabled" | "withSpaces";

    each?(element: Element): void;

    filter?(textNode: Element, term: string, marksSoFar: number, marksTotal: number): boolean;

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

interface JQuery {
    mark(term: string, options?: MarkOptions): void;

    unmark(options?: UnmarkOptions): void;
}

interface JQueryStatic {
    mark(term: string, options?: MarkOptions): void;

    unmark(options?: UnmarkOptions): void;
}

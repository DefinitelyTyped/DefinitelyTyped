// Type definitions for non-npm package mozilla-readability 0.1
// Project: https://github.com/mozilla/readability
// Definitions by: Charles Vandevoorde <https://github.com/charlesvdv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = Readability;

declare class Readability {
    constructor(doc: Document, options?: Readability.Options);

    parse(): Readability.ParseResult;
    isProbablyReaderable(helperIsVisible?: (node: any) => boolean): boolean;
}

declare namespace Readability {
    interface Options {
        debug?: boolean;
        maxElemsToParse?: number;
        nbTopCandidates?: number;
        wordThreshold?: number;
        classesToPreserve?: string[];
    }

    interface ParseResult {
        title: string;
        byline: string;
        dir: string;
        content: string;
        textContent: string;
        length: number;
        excerpt: string;
    }
}

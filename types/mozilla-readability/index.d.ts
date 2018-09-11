// Type definitions for mozilla-readability 0.1
// Project: https://github.com/mozilla/readability
// Definitions by: Charles Vandevoorde <https://github.com/charlesvdv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = Readability;

declare class Readability {
    constructor(uri: Readability.Uri, doc: Document, options?: Readability.Options);

    parse(): Readability.ParseResult;
    isProbablyReaderable(helperIsVisible?: (node: any) => boolean): boolean;
}

declare namespace Readability {
    interface Uri {
        spec: string;
        host: string;
        prePath: string;
        scheme: string;
        pathBase: string;
    }

    interface Options {
        debug?: boolean;
        maxElemsToParse?: number;
        nbTopCandidates?: number;
        wordThreshold?: number;
        classesToPreserve?: string[];
    }

    interface ParseResult {
        uri: Uri;
        title: string;
        byline: string;
        dir: string;
        content: string;
        textContent: string;
        length: number;
        excerpt: string;
    }
}

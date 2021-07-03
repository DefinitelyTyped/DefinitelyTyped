// Type definitions for extract-domain 2.3
// Project: https://github.com/bjarneo/extract-domain
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Performant domain name extraction. No regex or array magic.
 * This package will also remove the sub domain.
 */
declare function extractDomain(url: string, opts?: extractDomain.Options): string;
declare function extractDomain(urls: string[], options?: extractDomain.Options): string[];

declare namespace extractDomain {
    interface Options {
        tld?: boolean;
    }
}

export as namespace extractDomain;
export = extractDomain;

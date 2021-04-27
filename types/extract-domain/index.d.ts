// Type definitions for extract-domain 2.2
// Project: https://github.com/bjarneo/extract-domain
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Performant domain name extraction. No regex or array magic.
 * This package will also remove the sub domain.
 */
declare function extractDomain(url: string): string;
declare function extractDomain(urls: string[]): string[];

export as namespace extractDomain;
export = extractDomain;

/**
 * Performant domain name extraction. No regex or array magic.
 * This package will also remove the sub domain.
 */
declare function extractDomain(url: string, opts?: extractDomain.Options): string;
declare function extractDomain(urls: string[], options?: extractDomain.Options): string[];

declare namespace extractDomain {
    interface Options {
        tld?: boolean | undefined;
    }
}

export as namespace extractDomain;
export = extractDomain;

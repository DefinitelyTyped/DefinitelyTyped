// Type definitions for effective-domain-name-parser 0.0
// Project: https://github.com/dontcallmedom/node-domain-name-parser#readme
// Definitions by: David Reed <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ParsedDomain {
    tld: string;
    sld: string;
    subdomain: string;
}

export function parse(name: string): ParsedDomain;

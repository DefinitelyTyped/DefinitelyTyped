export interface ParsedDomain {
    tld: string;
    sld: string;
    subdomain: string;
}

export function parse(name: string): ParsedDomain;

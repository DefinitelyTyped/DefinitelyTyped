export as namespace psl;

export function parse(domain: string): ParsedDomain | ParseError;

export function get(domain: null | undefined): null;
export function get(domain: string): string | null;

export function isValid(domain: string): boolean;

export interface ParsedDomain {
    tld: string | null;
    sld: string | null;
    domain: string | null;
    subdomain: string | null;
    listed: boolean;
    input: string;
    error: undefined;
}

export interface ParseError {
    input: string;
    error: {
        code:
            | "DOMAIN_TOO_SHORT"
            | "DOMAIN_TOO_LONG"
            | "LABEL_STARTS_WITH_DASH"
            | "LABEL_ENDS_WITH_DASH"
            | "LABEL_TOO_LONG"
            | "LABEL_TOO_SHORT"
            | "LABEL_INVALID_CHARS";
        message: string;
    };
}

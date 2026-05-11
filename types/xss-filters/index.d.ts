interface XSSFilters {
    inHTMLComment(s: string): string;
    inHTMLData(s: string): string;
    inDoubleQuotedAttr(s: string): string;
    inSingleQuotedAttr(s: string): string;
    inUnQuotedAttr(s: string): string;
    uriInHTMLComment(s: string): string;
    uriInHTMLData(s: string): string;
    uriInDoubleQuotedAttr(s: string): string;
    uriInSingleQuotedAttr(s: string): string;
    uriInUnQuotedAttr(s: string): string;
    uriPathInHTMLComment(s: string): string;
    uriPathInHTMLData(s: string): string;
    uriPathInDoubleQuotedAttr(s: string): string;
    uriPathInSingleQuotedAttr(s: string): string;
    uriPathInUnQuotedAttr(s: string): string;
    uriQueryInHTMLComment(s: string): string;
    uriQueryInHTMLData(s: string): string;
    uriQueryInDoubleQuotedAttr(s: string): string;
    uriQueryInSingleQuotedAttr(s: string): string;
    uriQueryInUnQuotedAttr(s: string): string;
    uriComponentInHTMLComment(s: string): string;
    uriComponentInHTMLData(s: string): string;
    uriComponentInDoubleQuotedAttr(s: string): string;
    uriComponentInSingleQuotedAttr(s: string): string;
    uriComponentInUnQuotedAttr(s: string): string;
    uriFragmentInHTMLComment(s: string): string;
    uriFragmentInHTMLData(s: string): string;
    uriFragmentInDoubleQuotedAttr(s: string): string;
    uriFragmentInSingleQuotedAttr(s: string): string;
    uriFragmentInUnQuotedAttr(s: string): string;
}

declare var xssFilters: XSSFilters;

declare module "xss-filters" {
    export = xssFilters;
}

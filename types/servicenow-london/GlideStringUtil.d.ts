declare const GlideStringUtil: {
    dotToUnderBar(sourceString: string): string;
    escapeAllQuotes(sourceString: string): string;
    escapeForHomePage(sourceString: string): string;
    escapeHTML(htmlString: string): string;
    escapeNonPrintable(sourceString: string): string;
    escapeQueryTermSeparator(sourceString: string): string;
    escapeTicks(sourceString: string): string;
    getHTMLValue(sourceString: string): string;
    getNumeric(sourceString: string): string;
    isBase64(sourceString: string): boolean;
    isEligibleSysID(sourceString: string): boolean;
    newLinesToBreaks(sourceString: string): string;
    normalizeWhitespace(sourceString: string): string;
    unescapeHTML(htmlString: string): string;
};

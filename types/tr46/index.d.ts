/**
 * Converts a string of Unicode symbols to a case-folded Punycode string of ASCII symbols.
 */
export function toASCII(domainName: string, options?: ToASCIIOptions): string;

/**
 * Converts a case-folded Punycode string of ASCII symbols to a string of Unicode symbols.
 */
export function toUnicode(domainName: string, options?: Options): string;

export interface Options {
    /**
     * When set to `true`, any bi-directional text within the input will be checked for validation.
     * @default false
     */
    checkBidi?: boolean | undefined;
    /**
     * When set to `true`, the positions of any hyphen characters within the input will be checked for validation.
     * @default false
     */
    checkHyphens?: boolean | undefined;
    /**
     * When set to `true`, any word joiner characters within the input will be checked for validation.
     * @default false
     */
    checkJoiners?: boolean | undefined;
    /**
     * When set to `true`, input will be validated according to [STD3 Rules](http://unicode.org/reports/tr46/#STD3_Rules).
     * @default false
     */
    useSTD3ASCIIRules?: boolean | undefined;
    /**
     * When set to `true`, the length of each DNS label within the input will be checked for validation.
     * @default false
     */
    verifyDNSLength?: boolean | undefined;
}

export interface ToASCIIOptions extends Options {
    /**
     * When set to `"transitional"`, symbols within the input will be validated according to the older
     * IDNA2003 protocol. When set to `"nontransitional"`, the current IDNA2008 protocol will be used.
     * @default 'nontransitional'
     */
    processingOption?: ProcessingOption | undefined;
}

export type ProcessingOption = "nontransitional" | "transitional";

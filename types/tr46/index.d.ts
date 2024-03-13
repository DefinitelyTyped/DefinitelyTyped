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
     * When set to `true`, invalid Punycode strings within the input will be allowed.
     * @default false
     */
    ignoreInvalidPunycode?: boolean | undefined;
    /**
     * When set to `true`, uses transitional (compatibility) processing of the deviation characters.
     * @default false
     */
    transitionalProcessing?: boolean | undefined;
    /**
     * When set to `true`, input will be validated according to [STD3 Rules](http://unicode.org/reports/tr46/#STD3_Rules).
     * @default false
     */
    useSTD3ASCIIRules?: boolean | undefined;
}

export interface ToASCIIOptions extends Options {
    /**
     * When set to `true`, the length of each DNS label within the input will be checked for validation.
     * @default false
     */
    verifyDNSLength?: boolean | undefined;
}

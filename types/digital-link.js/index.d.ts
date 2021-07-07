// Type definitions for digital-link.js 1.2
// Project: https://github.com/evrythng/digital-link.js#readme
// Definitions by: Eoin O'Brien <https://github.com/eoin-obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Construct a DigitalLink either from object params, a string, or built using
 * the available setters.
 *
 * @param input - Optional input construction object or string.
 * @returns The DigitalLink instance with populated data.
 */
export function DigitalLink(input?: DigitalLinkInput | string): DigitalLink;

export const Utils: {
    /**
     * Individual parser rules that can be run with `testRule()`.
     */
    Rules: Record<RuleName, string>;

    /**
     * Test a single parser rule for a given value, such as a GTIN.
     * Available rules are found in `Rules` object of this library.
     *
     * @param rule - A rule from the `Rules` object.
     * @param value - The value to validate.
     * @returns true if the value passes against the rule.
     */
    testRule(rule: string, value: string): boolean;

    /**
     * Generate the stats HTML fragment provided by apglib.
     *
     * @param inputStr - The input URL to generate parser stats for.
     * @returns HTML string representing the stats of the validation.
     */
    generateStatsHtml(inputStr: string): string;

    /**
     * Generate the trace HTML fragment provided by apglib.
     *
     * @param inputStr - The input URL to generate parser trace for.
     * @returns HTML string representing the trace steps of the validation.
     */
    generateTraceHtml(inputStr: string): string;

    /**
     * Generate the complete HTML fragment provided by apglib for parsing results.
     *
     * @param inputStr - The input URL to generate parser results for.
     * @returns HTML string representing the results of the validation.
     */
    generateResultsHtml(inputStr: string): string;

    /**
     * Use GS1DigitalLinkToolkit to compress a URI string.
     *
     * @param uri - The URI to compress.
     * @param [useOptimisations] - Set to false to disable optimisations.
     * @param [compressOtherKeyValuePairs] - Set to false to disable compression of other
     *                                                 key-value pairs.
     * @returns The equivalent compressed URI.
     */
    compressWebUri(uri: string, useOptimisations?: boolean, compressOtherKeyValuePairs?: boolean): string;

    /**
     * Use GS1DigitalLinkToolkit to decompress a URI string.
     *
     * @param uri - The URI to decompress.
     * @param [useShortText] - Set to true to use short AI names, eg. 'gtin' instead of '01'.
     * @returns The equivalent decompressed URI.
     */
    decompressWebUri(uri: string): string;

    /**
     * Detect whether a string is a compressed URI or not.
     * The GS1DigitalLinkToolkit returns one of three strings based on if the input looks compressed:
     *   "uncompressed GS1 Digital Link"
     *   "partially compressed GS1 Digital Link"
     *   "fully compressed GS1 Digital Link"
     *
     * Note: this function includes the result's validity, meaning only valid compressed URIs,
     * are supported. Since we cannot compress invalid URIs, this is acceptable.
     *
     * @param uri - The URI.
     * @returns true if the URI is valid and looks compressed, false otherwise.
     */
    isCompressedWebUri(uri: string): boolean;

    /**
     * Returns the index of the identifier code in the segment list passed as a parameter
     * If the url is https://example.com/some/01/other/path/info/01/01234567890128/21/12345?example=true
     * segment will be [some,01,other,path,info,01,01234567890128,21,12345]
     * And it will return 5. (the second '01' is the identifier code)
     *
     * @param segments - The list of the url path element
     * @returns the position of the indentifier in the array (-1 if it there is not any identifier).
     */
    getIdentifierCodeIndex(segments: ReadonlyArray<string>): number;

    /**
     * if the domain has a custom path (ex : https://example.com/path/) it returns the domain without the custom path
     * (ex : https://example.com/)
     * Otherwise, it returns the parameter
     *
     * @param webUriString - The Web URI string (you can get it with dl.toWebUriString())
     * @param domain - The domain of the Digital Link (ex : https://example.com/with/custom/path/ or
     * https://example.com/)
     */
    removeCustomPath(webUriString: string, domain: string): string;
};

export interface DigitalLink {
    /**
     * Set the domain of the Digital Link
     *
     * @param value - The domain
     * @returns the dl instance
     */
    setDomain(value: string): this;

    /**
     * Set the identifier of the Digital Link
     *
     * @param key - The identifier code
     * @param value - The identifier value
     * @returns the dl instance
     */
    setIdentifier(key: string, value: string): this;

    /**
     * Set a key qualifier of the Digital Link
     *
     * @param key - The key qualifier code
     * @param value - The key qualifier value
     * @returns the dl instance
     */
    setKeyQualifier(key: string, value: string): this;

    /**
     * Set an attribute of the Digital Link
     *
     * @param key - The attribute code
     * @param value - The attribute value
     * @returns the dl instance
     */
    setAttribute(key: string, value: string): this;

    /**
     * Setter for the field sortKeyQualifiers
     * If you set it to true, the key qualifiers will be sorted automatically following the grammar
     * Otherwise, they won't
     *
     * @param value
     * @returns the dl instance
     */
    setSortKeyQualifiers(value: boolean): this;

    /**
     * Setter for the field keyQualifiersOrder
     *
     * @param value - The list containing all the key qualifiers in the desired order
     * @returns the dl instance
     */
    setKeyQualifiersOrder(value: string[]): this;

    getDomain(): string;
    getIdentifier(): Record<string, string>;
    getKeyQualifier(key: string): string | undefined;
    getKeyQualifiers(): Record<string, string>;
    getAttribute(key: string): string | undefined;
    getAttributes(): Record<string, string>;
    getKeyQualifiersOrder(): string[];
    getSortKeyQualifiers(): boolean;

    toWebUriString(): string;
    toCompressedWebUriString(): string;
    toJsonString(): string;
    isValid(): boolean;
    getValidationTrace(): ValidationTrace;
}

export interface ValidationTrace {
    trace: Array<{ rule: string; match: string; remainder: string }>;
    success: boolean;
}

export interface DigitalLinkInput {
    domain: string;
    identifier: Record<string, string>;
    keyQualifiers?: Record<string, string>;
    attributes?: Record<string, string>;
    keyQualifiersOrder?: string[];
    sortKeyQualifiers?: boolean;
}

export type RuleName =
    | "gtin"
    | "itip"
    | "gmn"
    | "cpid"
    | "shipTo"
    | "billTo"
    | "purchasedFrom"
    | "shipFor"
    | "gln"
    | "partyGln"
    | "payTo"
    | "glnProd"
    | "gsrnp"
    | "gsrn"
    | "gcn"
    | "sscc"
    | "gdti"
    | "ginc"
    | "gsin"
    | "grai"
    | "giai"
    | "cpv"
    | "lot"
    | "ser"
    | "cpsn"
    | "glnx"
    | "refno"
    | "srin"
    | "extensionParameter"
    | "customGS1webURI"
    | "canonicalGS1webURI";

/** Library for creating, verifying, and representing/transferring GS1 Digital Links. */
export as namespace digitalLinkJs;

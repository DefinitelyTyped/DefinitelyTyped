// Type definitions for pixl-xml 1.0
// Project: https://github.com/jhuckaby/pixl-xml
// Definitions by: Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Options that can be passed to parse function
 */
export interface PixlParseOptions {
    preserveAttributes?: boolean;
    lowerCase?: boolean;
    preserveDocumentNode?: boolean;
    preserveWhitespace?: boolean;
    forceArrays?: boolean;
}

/**
 * Parser class can be used for a more object oriented style API
 */
export class Parser <OutputJsonInterface> {
    constructor(xml: string, options?: PixlParseOptions)

    attribsKey: string;
    dataKey: string;
    documentNodeName: string;
    piNodeList: string[];
    dtdNodeList: string[];
    errors: any[];

    /**
     * The XML input that was provided to the constructor
     */
    text: string;

    /**
     * The resulting JSON from the parse operation
     */
    tree: OutputJsonInterface;

    /**
     * Returns the parsed XML tree. This tree is mutable and can be modified
     * as necessary.
     */
    getTree(): OutputJsonInterface;

    /**
     * Returns an XML string with formatting determined by the params provided
     * @param indentCharacter
     * @param eol
     */
    compose(indentCharacter?: string, eol?: string): string;
}

/**
 * Encode the three standard XML entities, ampersand (&), left-angle-bracket
 * (<) and right-angle-bracket (>), into their XML-safe counterparts.
 * @param xml
 */
export function encodeEntities(xml: string): string;

/**
 * Similar to encodeEntities, but it also includes encoding for single-quotes
 * (') and double-quotes ("). It is used for encoding an XML string for
 * composing into an attribute value.
 * @param xml
 */
export function encodeAttribEntities(xml: string): string;

/**
 * This function decodes all the standard XML entities back into their
 * original characters. This includes ampersand (&), left-angle-bracket (<),
 * right-angle-bracket (>), single-quote (') and double-quote (").
 * @param xml
 */
export function decodeEntities(xml: string): string;

/**
 * This function will wrap anything passed to it into an array and return the
 * array, unless the item passed is already an array, in which case it is
 * simply returned verbatim.
 * @param input
 */
export function alwaysArray<T>(input: T|T[]): T[];

/**
 * This function returns all the hash keys as an array. Useful for sorting and
 * then iterating over the sorted list.
 * @param input
 */
export function hashKeysToArray(input: object): string[];

/**
 * This function returns true if the provided argument is a hash (object),
 * false otherwise.
 * @param input
 */
export function isaHash(input: any): boolean;

/**
 * This function returns true if the provided argument is an array
 * (or is array-like), false otherwise.
 * @param input
 */
export function isaArray(input: any): boolean;

/**
 * This function returns the number of keys in the specified hash.
 * @param hash
 */
export function numKeys(hash: object): number;

/**
 * This function returns the first key of the hash when iterating over it.
 * Note that hash keys are stored in an undefined order.
 * @param hash
 */
export function firstKey(hash: object): string;

/**
 * Parse an XML string into a JSON Object.
 * Throws if a parsing error occurs.
 *
 * @example
 *
 *      pixl.parse(xmlstring) as SomeInterface
 *
 * @param xml
 */
export function parse(xml: string, options?: PixlParseOptions): {};

/**
 * Composes XML Objects back to a string. Pass in your pre-parsed XML object,
 * and an outer wrapper element name. It helps if you parsed the original XML
 * using the preserveAttributes option for this, as it will honor the _Attribs
 * sub-objects and convert them back into real XML attributes.
 * @param doc
 * @param outerElName
 * @param indentSize
 * @param indentCharacter
 * @param eolCharacter
 * @param preserveOrder
 */
export function stringify(doc: object, outerElName?: string, indentSize?: number, indentCharacter?: string, eolCharacter?: string, preserveOrder?: boolean): string;

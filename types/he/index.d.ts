// Type definitions for he v1.2
// Project: https://github.com/mathiasbynens/he
// Definitions by: Simon Edwards <https://github.com/sedwards2009>
//                 Robin Tregaskis <https://github.com/lokidokicoki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// he - "HTML Entities" - A high quality pair of HTML encode and decode functions.

export as namespace he;

export var version: string;

export interface EncodeOptions {
    /**
    * The default value for the useNamedReferences option is false. This
    * means that encode() will not use any named character references
    * (e.g. &copy;) in the output — hexadecimal escapes (e.g. &#xA9;) will
    * be used instead. Set it to true to enable the use of named references.
    */
    useNamedReferences?: boolean | undefined;

    /**
     * The default value for the decimal option is false. If the option is
     * enabled, encode will generally use decimal escapes (e.g. &#169;)
     * rather than hexadecimal escapes (e.g. &#xA9;). Beside of this
     * replacement, the basic behavior remains the same when combined with
     * other options. For example: if both options useNamedReferences and
     * decimal are enabled, named references (e.g. &copy;) are used over
     * decimal escapes. HTML entities without a named reference are encoded
     * using decimal escapes.
     */
    decimal?: boolean | undefined;

    /**
    * The default value for the encodeEverything option is false. This means
    * that encode() will not use any character references for printable ASCII
    * symbols that don’t need escaping. Set it to true to encode every symbol
    * in the input string. When set to true, this option takes precedence over
    * allowUnsafeSymbols (i.e. setting the latter to true in such a case has
      * no effect).
    */
    encodeEverything?: boolean | undefined;

    /**
     * The default value for the strict option is false. This means that
     * encode() will encode any HTML text content you feed it, even if it
     * contains any symbols that cause parse errors. To throw an error when such
     * invalid HTML is encountered, set the strict option to true. This option
     * makes it possible to use he as part of HTML parsers and HTML validators.
     */
    strict?: boolean | undefined;

    /**
    * The default value for the allowUnsafeSymbols option is false. This means
    * that characters that are unsafe for use in HTML content (&, <, >, ", ',
    * and `) will be encoded. When set to true, only non-ASCII characters will
    * be encoded. If the encodeEverything option is set to true, this option
    * will be ignored.
    */
    allowUnsafeSymbols?: boolean | undefined;
}

export interface Encode {
    /**
    * Encode a string of text
    *
    * This function takes a string of text and encodes (by default) any symbols
    * that aren’t printable ASCII symbols and &, <, >, ", ', and `, replacing
    * them with character references.
    *
    * As long as the input string contains allowed code points only, the return
    * value of this function is always valid HTML. Any (invalid) code points
    * that cannot be represented using a character reference in the input are
    * not encoded.
    */
    (text: string, options?: EncodeOptions): string;

    options: EncodeOptions;
}
export var encode: Encode;

export interface DecodeOptions {
    /**
     * The default value for the isAttributeValue option is false. This means
     * that decode() will decode the string as if it were used in a text
     * context in an HTML document. HTML has different rules for parsing
     * character references in attribute values — set this option to true to
     * treat the input string as if it were used as an attribute value.
     */
    isAttributeValue?: boolean | undefined;

    /**
     * The default value for the strict option is false. This means that
     * decode() will decode any HTML text content you feed it, even if it
     * contains any entities that cause parse errors. To throw an error when
     * such invalid HTML is encountered, set the strict option to true. This
     * option makes it possible to use he as part of HTML parsers and HTML
     * validators.
     */
    strict?: boolean | undefined;
}

export interface Decode {
    /**
     * Decode a string of HTML text
     *
     * This function takes a string of HTML and decodes any named and numerical
     * character references in it using the algorithm described in section
     * 12.2.4.69 of the HTML spec.
     */
    (html: string, options?: DecodeOptions): string;

    options: DecodeOptions;
}
export var decode: Decode;

/**
 * Escape XML entities
 *
 * This function takes a string of text and escapes it for use in text
 * contexts in XML or HTML documents. Only the following characters are
 * escaped: &, <, >, ", ', and `.
 */
export function escape(text: string): string;

export var unescape: Decode;

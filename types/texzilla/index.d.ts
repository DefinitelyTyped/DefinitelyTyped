// Type definitions for texzilla 0.9
// Project: https://github.com/fred-wang/TeXZilla/
// Definitions by: Michal Grňo <https://github.com/m93a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Sets TeXZilla's DOMParser to the `parser` object. Note that TeXZilla tries to automatically initialize
 * its DOMParser to `new DOMParser()` and otherwise create a dummy instance throwing exception when used.
 * @param parser - the DOMParser object
 * @see https://w3c.github.io/DOM-Parsing/#the-domparser-interface
 */
export function setDOMParser(parser: DOMParser): void;

/**
 * Sets TeXZilla's XMLSerializer to the `serializer` object. Note that TeXZilla tries to automatically
 * initialize its XMLSerializer to `new XMLSerializer()` and otherwise create a dummy instance throwing
 * exception when used.
 * @param serializer - the XMLSerializer object
 * @see https://w3c.github.io/DOM-Parsing/#the-xmlserializer-interface
 */
export function setXMLSerializer(serializer: XMLSerializer): void;

/**
 * Enables or disables TeXZilla's safe mode. By default safe mode is disabled but if you enable it,
 * MathML features like href or maction that are known to be usable for XSS injections will be ignored.
 * @param enabled - pass `true` if you don't trust the LaTeX source string to be safe
 */
export function setSafeMode(enabled: boolean): void;

/**
 * Enables or disables itex identifier mode. By default this is disabled but if you enable it,
 * a sequence of basic latin letters (a, b, ... z, A, B, C, ..., Z) such as `$pin$` will generate
 * a single MathML token `<mi>pin</mi>`. Other letters e.g. Greek or Arabic will still be treated
 * as individual tokens.
 * @param enabled - pass `true` to treat groups of latin letters as words
 */
export function setItexIdentifierMode(enabled: boolean): void;

/**
 * Returns the TeX source attached to `el` via a semantics annotation or null if none is found.
 * This requires to have a DOMParser instance available and the corresponding DOM API to handle trees.
 * @see setDOMParser
 * @param el - either a string or a MathML DOM element
 */
export function getTeXSource(el: string | Element): string | null;

/**
 * Converts a TeX string into a MathML source and returns the corresponding string.
 * @param str - TeX string
 * @param displayMode - indicates whether the MathML output should be in display mode
 * @param rightToLeft - indicates whether the MathML output should be in RTL direction
 * @param throwOnError - indicates whether TeXZilla should throw an exception when parsing fails
 */
export function toMathMLString(str: string, displayMode?: boolean, rightToLeft?: boolean, throwOnError?: boolean): string;

/**
 * Converts a TeX string into a MathML source and returns a MathML DOM element.
 * This requires to have a DOMParser instance supporting the `application/xml` type.
 * @see setDOMParser
 * @param str - TeX string
 * @param displayMode - indicates whether the MathML output should be in display mode
 * @param rightToLeft - indicates whether the MathML output should be in RTL direction
 * @param throwOnError - indicates whether TeXZilla should throw an exception when parsing fails
 */
export function toMathML(str: string, displayMode?: boolean, rightToLeft?: boolean, throwOnError?: boolean): Element;

/**
 * This function first converts a TeX string into a display MathML element which
 * is temporarily inserted into a HTML document. The MathML element is then measured
 * and moved from the HTML document to a SVG document. This SVG document is in turn
 * serialized as a base64 string which is finally used as the `src` attribute value
 * of an `<img>` element. The function returns that `<img>` element.
 * This requires to have DOMParser and XMLSerializer instances available as well as
 * the corresponding DOM Level 1 API and will likely only work in a browser.
 * @see setDOMParser
 * @see setXMLSerializer
 * @see https://github.com/fred-wang/TeXZilla/wiki/Public-API#texzillatoimage
 * @param str - TeX string
 * @param rightToLeft - indicates the directionality of the MathML element
 * @param roundToPowerOfTwo - indicates whether the size of the images should be rounded to a power of two and is useful for use in a WebGL context
 * @param size - indicates the font-size in pixels of the MathML element and defaults to 64px
 * @param document - indicates the host HTML document to use for the measuring step and defaults to window.document
 */
export function toImage(str: string, rightToLeft?: boolean, roundToPowerOfTwo?: boolean, size?: number, document?: Document): HTMLImageElement;

/**
 * Applies the stream filter to `str` and returns the output string.
 * @param str - the filtered string
 * @param throwOnError - indicates whether TeXZilla should throw an exception when parsing fails
 */
export function filterString(str: string, throwOnError?: boolean): string;

/**
 * Applies the stream filter to each text node inside descendant elements of `el`.
 * This requires to have a DOMParser instance available as well as the corresponding DOM Level 1 API.
 * @see setDOMParser
 * @param el - the filtered element
 * @param throwOnError - indicates whether TeXZilla should throw an exception when parsing fails
 */
export function filterElement(el: Element, throwOnError?: boolean): void;

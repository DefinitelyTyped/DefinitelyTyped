// Type definitions for html_codesniffer 2.5
// Project: http://squizlabs.github.io/HTML_CodeSniffer/
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace HTMLCS;

export const ERROR = 1;

export const NOTICE = 3;

export const WARNING = 2;

/**
 * Adds a message.
 *
 * @param type The type of the message.
 * @param element The element that the message is related to.
 * @param msg  The message string.
 * @param code Unique code for the message.
 * @param [data] Extra data to store for the message.
 */
export function addMessage(type: number, element: Element, msg: string, code: string, data?: MessageData): void;

/**
 * Returns all the messages for the last run.
 *
 * Return a copy of the array so the class variable doesn't get modified by
 * future modification (eg. splicing).
 */
export function getMessages(): Message[];

/**
 * Gets a translation for a text value.
 *
 * @param text The text to get the translation for.
 */
export function getTranslation(text: string): string;

export interface Message {
    type: number;
    element: Element;
    msg: string;
    code: string;
    data?: MessageData;
}

/**
 * Returns true if the content passed appears to be from a full document.
 *
 * With string content, we consider a full document as the presence of <html>,
 * or <head> + <body> elements. For an element, only the 'html' element (the
 * document element) is accepted.
 *
 * @param content An HTML string or a DOM node object.
 */
export function isFullDoc(content: string | Element): boolean;

/**
 * The current language to use.
 */
export const lang: string;

/**
 * Loads the specified standard and its sniffs.
 *
 * @param standard The name of the standard to load.
 * @param callback The function to call once the standard is loaded.
 */
export function loadStandard(standard: string, callback: Callback, failCallback?: FailCallback): void;

/**
 * Loads the specified standard and run the sniffs.
 *
 * @param standard  The name of the standard to load.
 * @param content  An HTML string or a DOM node object.
 * @param callback  The function that will be called when the testing is completed.
 * @param failCallback The fail callback which will be called if the standard load has failed.
 * @param language  The language to use for text output.
 */
export function process(
    standard: string,
    content: string | Element,
    callback: Callback,
    failCallback?: FailCallback,
    language?: string,
): void;

/**
 * Runs the sniffs for the loaded standard.
 *
 * @param callback The function to call once all sniffs are completed.
 * @param content An HTML string or a DOM node object.
 */
export function run(callback: Callback, content: string | Node): string;

export interface MessageData {
    [key: string]: unknown;
}

export type Callback = () => void;

export type FailCallback = () => void;

export namespace Util {
    /**
     * Trim off excess spaces on either side.
     *
     * @param string The string with potentially extraneous whitespace.
     */
    function trim(string: string): string;

    /**
     * Returns true if the string is "empty" according to WCAG standards.
     *
     * We can test for whether the string is entirely composed of whitespace, but
     * WCAG standards explicitly state that non-breaking spaces (&nbsp;, &#160;)
     * are not considered "empty". So we need this function to filter out that
     * situation.
     *
     * @param string The potentially empty string.
     */
    function isStringEmpty(string: string): boolean;

    /**
     * Get the document type being tested.
     *
     * Possible values: html5, xhtml5, xhtml11, xhtml10, html401, html40
     * ... or empty string if it couldn't work out the doctype.
     *
     * This will only give the thumbs-up to the "strict" doctypes.
     *
     * @param document The document being tested.
     */
    function getDocumentType(document: Document): DocumentType;

    /**
     * Get the window object relating to the passed element.
     *
     * @param element The element (or document) to pass.
     */
    function getElementWindow(element: Element | Document): Window;

    /**
     * Returns true if the element has a valid aria label.
     *
     * @param element The element we are checking.
     */
    function hasValidAriaLabel(element: Element): boolean;

    /**
     * Return the appropriate computed style object for an element.
     *
     * It's accessed in different ways depending on whether it's IE or not.
     *
     * @param element An element with style.
     */
    function style(element: Element, pseudo?: string | null): CSSStyleDeclaration;

    /**
     * Return true if an element is hidden visually.
     *
     * If the computed style of an element cannot be determined for some reason,
     * it is presumed it is NOT hidden.
     *
     * @param element The element that is hiding, or not.
     */
    function isVisuallyHidden(element: Element): boolean;

    /**
     * Returns true if the element is deliberately hidden from Accessibility APIs using ARIA hidden.
     *
     * Not: This is separate to isAccessibilityHidden() due to a need to check specifically for aria hidden.
     *
     * @param element The element to check.
     */
    function isAriaHidden(element: Element): boolean;

    /**
     * Returns true if the element is deliberately hidden from Accessibility APIs.
     *
     * @param element The element to check.
     */
    function isAccessibilityHidden(element: Element): boolean;

    /**
     * Returns TRUE if the element is able to be focused .
     *
     * @param element DOM Node to test.
     */
    function isFocusable(element: Element): boolean;

    /**
     * Returns TRUE if the element is able to be focused by keyboard tabbing.
     *
     * @param element DOM Node to test.
     */
    function isKeyboardTabbable(element: Element): boolean;

    /**
     * Returns TRUE if the element is able to be accessed via the keyboard.
     *
     * @param element DOM Node to test.
     */
    function isKeyboardNavigable(element: Element): boolean;

    /**
     * Return true if an element is disabled.
     *
     * If the computed style of an element cannot be determined for some reason,
     * it is presumed it is NOT hidden.
     *
     * @param element The element that is hiding, or not.
     */
    function isDisabled(element: Element): boolean;

    /**
     * Return true if an element is in a document.
     *
     * @param element The element that is in a doc, or not.
     */
    function isInDocument(element: Element): boolean;

    /**
     * Returns all elements that are visible to the accessibility API.
     *
     * @param element The parent element to search.
     * @param selector Optional selector to pass to
     */
    function getAllElements(element: Element, selector: string): ArrayLike<Element>;

    /**
     * Returns true if the passed child is contained by the passed parent.
     *
     * Uses either the IE contains() method or the W3C compareDocumentPosition()
     * method, as appropriate.
     *
     * @param parent The parent element or document.
     * @param child The child.
     */
    function contains(parent: Element | Document, child: Element | DocumentType): boolean;

    /**
     * Returns true if the table passed is a layout table.
     *
     * If the passed table contains headings - through the use of the th
     * element - HTML_CodeSniffer will assume it is a data table. This is in line
     * with most other online checkers.
     *
     * @param table The table to check.
     */
    function isLayoutTable(table: Element): boolean;

    /**
     * Calculate the contrast ratio between two colours.
     *
     * Colours should be in rgb() or 3/6-digit hex format; order does not matter
     * (ie. it doesn't matter which is the lighter and which is the darker).
     * Values should be in the range [1.0, 21.0]... a ratio of 1.0 means "they're
     * exactly the same contrast", 21.0 means it's white-on-black or v.v.
     * Formula as per WCAG 2.0 definitions.
     *
     * @param colour1 The first colour to compare.
     * @param colour2 The second colour to compare.
     */
    function contrastRatio(colour1: string, colour2: string): number;

    /**
     * Calculate relative luminescence for a colour in the sRGB colour profile.
     *
     * Supports rgb() and hex colours. rgba() also supported but the alpha
     * channel is currently ignored.
     * Hex colours can have an optional "#" at the front, which is stripped.
     * Relative luminescence formula is defined in the definitions of WCAG 2.0.
     * It can be either three or six hex digits, as per CSS conventions.
     * It should return a value in the range [0.0, 1.0].
     *
     * @param colour The colour to calculate from.
     */
    function relativeLum(colour: string): number;

    /**
     * Convert a colour string to a structure with red/green/blue/alpha elements.
     *
     * Supports rgb() and hex colours (3, 4, 6 or 8 hex digits, optional "#").
     * Each red/green/blue element is in the range [0.0, 1.0].
     *
     * @param colour The colour to convert.
     */
    function colourStrToRGB(colour: string): Colour;

    /**
     * Convert an RGB colour structure to a hex colour.
     *
     * The red/green/blue colour elements should be on a [0.0, 1.0] scale.
     * Colours that can be converted into a three Hex-digit string will be
     * converted as such (eg. rgb(34,34,34) => #222). Others will be converted
     * to a six-digit string (eg. rgb(48,48,48) => #303030).
     *
     * @param colour Structure with "red", "green" and "blue" elements.
     */
    function RGBtoColourStr(colou: Colour): string;

    /**
     * Convert an RGB colour into hue-saturation-value.
     *
     * This is used for calculations changing the colour (for colour contrast
     * purposes) to ensure that the hue is maintained.
     * The parameter accepts either a string (hex or rgb() format) or a
     * red/green/blue structure.
     * The returned structure has hue, saturation, and value components: the
     * latter two are in the range [0.0, 1.0]; hue is in degrees,
     * range [0.0, 360.0).
     * If there is no saturation then hue is technically undefined.
     *
     * @param colour A colour to convert.
     */
    function sRGBtoHSV(colour: string | Colour): HsvColour;

    /**
     * Convert a hue-saturation-value structure into an RGB structure.
     *
     * The hue element should be a degree value in the region of [0.0, 360.0).
     * The saturation and value elements should be in the range [0.0, 1.0].
     * Use RGBtoColourStr to convert back into a hex colour.
     *
     * @param hsvColour A HSV structure to convert.
     */
    function HSVtosRGB(hsvColour: HsvColour): Colour;

    /**
     * Gets the text contents of an element.
     *
     * @param element The element being inspected.
     * @param [includeAlt=true] Include alt text from images.
     * @returns The text contents.
     */
    function getElementTextContent(element: Element, includeAlt?: boolean): string;

    /**
     * Find a parent node matching a selector.
     *
     * @param node  Node to search from.
     * @param selector The selector to search.
     */
    function findParentNode(node: Node, selector: string): Node | null;

    /**
     * Iterate parent nodes of an element.
     *
     * @param node Node to search from.
     * @param cb Callback function providing each parent node.
     */
    function eachParentNode(node: Node, cb: (parent: Node) => void): void;

    /**
     * Returns TRUE if the provided node name is not a valid phrasing node.
     *
     * @param nodeName The node name to test.
     */
    function isPhrasingNode(nodeName: string): boolean;

    /**
     * Test for the correct headers attributes on table cell elements.
     *
     * Return value contains the following elements:
     * - required (Boolean): Whether header association at all is required.
     * - used (Boolean):  Whether headers attribute has been used on at least
     *  one table data (td) cell.
     * - allowScope (Boolean): Whether scope is allowed to satisfy the association
     *  requirement (ie. max one row/one column).
     * - correct (Boolean): Whether headers have been correctly used.
     * - missingThId (Array): Array of th elements without IDs.
     * - missingTd (Array): Array of elements without headers attribute.
     * - wrongHeaders (Array): Array of elements where headers attr is incorrect.
     *  Each is a structure with following keys: element,
     *  expected [headers attr], actual [headers attr].
     *
     * @param element Table element to test upon.
     */
    function testTableHeaders(element: Node): TestTableHeadersResult;

    /**
     * Return expected cell headers from a table.
     *
     * Returns null if not a table.
     *
     * Returns an array of objects with two properties:
     * - cell (Object) - the TD element referred to,
     * - headers (String) - the normalised list of expected headers.
     *
     * Cells are returned in DOM order. This may mean cells in a tfoot (which
     * normally precedes tbody if used) would come before tbody cells.
     *
     * If there are missing IDs on relevant table header (th) elements, this
     * method won't complain about it - it will just return them as empty. Its
     * job is to take the IDs it can get, not to complain about it (see, eg. the
     * test in WCAG2's sniff 1_3_1). If there are no headers for a cell, it
     * won't be included.
     *
     * @param table The table to test.
     */
    function getCellHeaders(table: Element): CellHeaderInfo[];

    /**
     * Get the previous sibling element.
     *
     * This is a substitute for previousSibling where there are text, comment and
     * other nodes between elements.
     *
     * If tagName is null, immediate is ignored and effectively defaults to true: the
     * previous element will be returned regardless of what it is.
     *
     * @param element Element to start from.
     * @param [tagName=null] Only match this tag. If null, match any. Not case-sensitive.
     * @param [immediate=false] Only match if the tag in tagName is the immediately preceding non-whitespace node.
     */
    function getPreviousSiblingElement(element: Node, tagName?: string, immediate?: boolean): ChildNode | null;

    /**
     * Get the next sibling element.
     *
     * This is a substitute for nextSibling where there are text, comment and
     * other nodes between elements.
     *
     * If tagName is null, immediate is ignored and effectively defaults to true: the
     * next element will be returned regardless of what it is.
     *
     * @param element Element to start from.
     * @param [tagName=null]  Only match this tag. If null, match any. Not case-sensitive.
     * @param [immediate=false] Only match if the tag in tagName is the immediately following non-whitespace node.
     */
    function getNextSiblingElement(element: Node, tagName?: string, immediate?: boolean): ChildNode | null;

    /**
     * Get the text content of a DOM node.
     *
     * @param element Element to process.
     */
    function getTextContent(element: Node): string;

    /**
     * Get the accessible name.
     *
     * @param element Element to process.
     * @param top Scoped container element.
     */
    function getAccessibleName(element: Node, top: Node): string;

    interface Colour {
        red: number;
        green: number;
        blue: number;
        alpha: number;
    }

    interface HsvColour {
        hue: number;
        saturation: number;
        value: number;
    }

    interface TestTableHeadersResult {
        /** Whether header association at all is required. */
        required: boolean;
        /** Whether headers attribute has been used on at least one table data (td) cell. */
        used: boolean;
        /** Whether scope is allowed to satisfy the association requirement (ie. max one row/one column). */
        allowScope: boolean;
        /** Whether headers have been correctly used. */
        correct: boolean;
        /** Array of th elements without IDs. */
        missingThId: Element[];
        /** Array of elements without headers attribute. */
        missingTd: Element[];
        /** Array of elements where headers attr is incorrect. */
        wrongHeaders: HeaderInfo[];
    }

    interface HeaderInfo {
        element: Element;
        expected: string;
        actual: string;
    }

    interface CellHeaderInfo {
        cell: Element;
        headers: string;
    }

    type DocumentType = 'html5' | 'xhtml5' | 'xhtml11' | 'xhtml10' | 'html401' | 'html40' | '';
}

// Type definitions for xml-zero-lexer 2.1
// Project: https://github.com/holloway/xml-zero.js/tree/master/packages/xml-zero-lexer
// Definitions by: 宁倬 <https://github.com/943297456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const NodeTypes: {
    /**
     * unofficial
     *
     * Most XML parsers ignore this but because I'm parsing it I may as well include it.
     * At least it lets you know if there were multiple declarations.
     *
     * Also inserting it here makes Object.keys(NodeTypes) array indexes line up with values!
     * E.g. Object.keys(NodeTypes)[0] === NodeTypes.XML_DECLARATION
     * (Strictly speaking map keys are unordered but in practice they are, and we don't rely on it)
     */
    XML_DECLARATION: 0;
    ELEMENT_NODE: 1;
    ATTRIBUTE_NODE: 2;
    /**
     * Note that these can include entities which should be resolved before display
     */
    TEXT_NODE: 3;
    CDATA_SECTION_NODE: 4;
    /**
     * Not used
     *
     * After a lot of thought I've decided that entities shouldn't be resolved in the Lexer,
     *
     * Instead entities are just ignored and are stored as-is as part of the node because:
     * (1) We only support entities that resolve to characters, we don't support crufty
     *     complicated entities that insert elements, so there's no actual structural need to
     *     do it.
     * (2) It simplifies the code and data structures, and it shrinks data structure memory usage.
     *     E.g. Text doesn't need to switch between TEXT_NODE and ENTITY_REFERENCE_NODE.
     * (3) They can be resolved later using a utility function. E.g. have a .textContent() on
     *     nodes that resolves it. This approach would probably result in less memory use.
     * (4) It's slightly against style of zero-copy because we'd need to make new strings
     *     to resolve the entities. Not a difficult job but again it's unnecessary memory use.
     *
     * So I've decided that's not the job of this lexer.
     */
    ENTITY_REFERENCE_NODE: 5;
    /**
     * Only supported as <!ENTITY ...> outside of <!DOCTYPE ...>
     * E.g. <!DOCTYPE [ <!ENTITY> ]> will just be a string inside DOCTYPE and not an ENTITY_NODE.
     */
    ENTITY_NODE: 6;
    PROCESSING_INSTRUCTION_NODE: 7;
    COMMENT_NODE: 8;
    /**
     * Not used. Root elements are just elements.
     */
    DOCUMENT_NODE: 9;
    DOCUMENT_TYPE_NODE: 10;
    /**
     * Don't support this either
     */
    DOCUMENT_FRAGMENT_NODE: 11;
    NOTATION_NODE: 12;
    /**
     * unofficial
     */
    CLOSE_ELEMENT: 13;
    /**
     * unofficial
     */
    JSX_ATTRIBUTE: 14;
    /**
     * unofficial
     */
    JSX: 15;
};

export const NodeTypeKeys: [
    "XML_DECLARATION",
    "ELEMENT_NODE",
    "ATTRIBUTE_NODE",
    "TEXT_NODE",
    "CDATA_SECTION_NODE",
    "ENTITY_REFERENCE_NODE",
    "ENTITY_NODE",
    "PROCESSING_INSTRUCTION_NODE",
    "COMMENT_NODE",
    "DOCUMENT_NODE",
    "DOCUMENT_TYPE_NODE",
    "DOCUMENT_FRAGMENT_NODE",
    "NOTATION_NODE",
    "CLOSE_ELEMENT",
    "JSX_ATTRIBUTE",
    "JSX"
];

declare namespace Lexx {
    interface Options {
        /**
         * @default ["script", "style"]
         */
        blackholes?: string[];
        /**
         * @default false
         */
        jsx?: boolean;
        /**
         * @default false
         */
        html?: boolean;
    }

    /**
     * @example
     * [NodeTypes.ELEMENT_NODE, 1, 2]
     * [NodeTypes.TEXT_NODE, 3, 20]
     * [NodeTypes.CLOSE_ELEMENT]
     */
    type Token = number[];
}

declare function Lexx(xml: string, options?: Lexx.Options): Lexx.Token[];

export default Lexx;

export function onQuestionElement(xml: string, i: number, inElement: boolean): [number, boolean, Lexx.Token];
export function onAttribute(xml: string, i: number, inElement: boolean): [number, boolean, Lexx.Token];
export function onEndTag(xml: string, i: number): [number, boolean];
export function onClose(xml: string, i: number, inElement: boolean): [number, boolean, Lexx.Token];
export function onElement(xml: string, i: number, inElement: boolean): [number, boolean, Lexx.Token];
export function onExclamation(xml: string, i: number, inElement: boolean): [number, boolean, Lexx.Token];
export function onShorthandCDATA(xml: string, i: number, inElement: boolean): [number, boolean, Lexx.Token];
export function onText(xml: string, i: number, jsx?: boolean): [number, boolean, Lexx.Token];
export function onBlackhole(xml: string, i: number, inElement: boolean, untilToken: Lexx.Token): [number, boolean, Lexx.Token];

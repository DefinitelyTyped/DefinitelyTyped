// Type definitions for commonmark.js 0.22.1
// Project: https://github.com/jgm/commonmark.js
// Definitions by: Nico Jansen <https://github.com/nicojs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module commonmark {

    export interface NodeWalkingStep {
        /**
         * a boolean, which is true when we enter a Node from a parent or sibling, and false when we reenter it from a child
         */
        entering: boolean;
        /**
         * The node belonging to this step
         */
        node: Node;
    }

    export interface NodeWalker {
        /**
         * Returns an object with properties entering and node. Returns null when we have finished walking the tree.
         */
        next(): NodeWalkingStep;
        /**
         * Resets the iterator to resume at the specified node and setting for entering. (Normally this isn't needed unless you do destructive updates to the Node tree.)
         */
        resumeAt(node: Node, entering?: boolean): void;
    }

    export interface Position extends Array<Array<number>> {
    }

    export interface ListData {
        type?: string,
        tight?: boolean,
        delimiter?: string,
        bulletChar?: string
    }

    export class Node {
        constructor(nodeType: string, sourcepos?: Position);
        isContainer: boolean;
        
        /**
         * (read-only): one of Text, Softbreak, Hardbreak, Emph, Strong, Html, Link, Image, Code, Document, Paragraph, BlockQuote, Item, List, Heading, CodeBlock, HtmlBlock ThematicBreak.
         */
        type: string;
        /**
         * (read-only): a Node or null.
         */
        firstChild: Node;
        /**
         * (read-only): a Node or null.
         */
        lastChild: Node;
        /**
         * (read-only): a Node or null.
         */
        next: Node;
        /**
         * (read-only): a Node or null.
         */
        prev: Node;
        /**
         * (read-only): a Node or null.
         */
        parent: Node;
        /**
         * (read-only): an Array with the following form: [[startline, startcolumn], [endline, endcolumn]]
         */
        sourcepos: Position;
        /**
         *  the literal String content of the node or null.
         */
        literal: string;
        /**
         * link or image destination (String) or null.
         */
        destination: string;
        /**
         *  link or image title (String) or null.
         */
        title: string;
        /**
         * fenced code block info string (String) or null.
         */
        info: string;
        /**
         * heading level (Number).
         */
        level: number;
        /**
         * either Bullet or Ordered (or undefined).
         */
        listType: string;
        /**
         * true if list is tight
         */
        listTight: boolean;
        /**
         * a Number, the starting number of an ordered list.
         */
        listStart: number;
        /**
         * a String, either ) or . for an ordered list.
         */
        listDelimiter: string;
        /**
         * used only for CustomBlock or CustomInline.
         */
        onEnter: string;
        /**
         * used only for CustomBlock or CustomInline.
         */
        onExit: string;
        /**
         * Append a Node child to the end of the Node's children.
         */
        appendChild(child: Node): void;
        /**
         *  Prepend a Node child to the beginning of the Node's children.
         */
        prependChild(child: Node): void;
        /**
         *  Remove the Node from the tree, severing its links with siblings and parents, and closing up gaps as needed.
         */
        unlink(): void;
        /**
         * Insert a Node sibling after the Node.
         */
        insertAfter(sibling: Node): void;
        /**
         * Insert a Node sibling before the Node.
         */
        insertBefore(sibling: Node): void;
        /**
         * Returns a NodeWalker that can be used to iterate through the Node tree rooted in the Node
         */
        walker(): NodeWalker;
        /**
         * Setting the backing object of listType, listTight, listStat and listDelimiter directly. 
         * Not needed unless creating list nodes directly. Should be fixed from v>0.22.1
         * https://github.com/jgm/commonmark.js/issues/74
         */
        _listData: ListData;
    }

    /**
     * Instead of converting Markdown directly to HTML, as most converters do, commonmark.js parses Markdown to an AST (abstract syntax tree), and then renders this AST as HTML. 
     * This opens up the possibility of manipulating the AST between parsing and rendering. For example, one could transform emphasis into ALL CAPS.
     */
    export class Parser {
        /**
         * Constructs a new Parser
         */
        constructor(options?: ParserOptions);
        parse(input: string): Node;
    }

    export interface ParserOptions {
        /**
         *  if true, straight quotes will be made curly, -- will be changed to an en dash, --- will be changed to an em dash, and ... will be changed to ellipses.
         */
        smart?: boolean;
        time?: boolean;
    }

    export interface HtmlRenderingOptions extends XmlRenderingOptions {
        /**
         *  if true, raw HTML will not be passed through to HTML output (it will be replaced by comments), and potentially unsafe URLs in links and images (those beginning with javascript:, vbscript:, file:, and with a few exceptions data:) will be replaced with empty strings.
         */
        safe?: boolean;
        /**
         *  if true, straight quotes will be made curly, -- will be changed to an en dash, --- will be changed to an em dash, and ... will be changed to ellipses.
         */
        smart?: boolean;
        /**
         *  if true, source position information for block-level elements will be rendered in the data-sourcepos attribute (for HTML) or the sourcepos attribute (for XML).
         */
        sourcepos?: boolean;
    }

    export class HtmlRenderer {
        constructor(options?: HtmlRenderingOptions)
        render(root: Node): string;
        /**
         * Let's you override the softbreak properties of a renderer. So, to make soft breaks render as hard breaks in HTML:
         * writer.softbreak = "<br />";
         */
        softbreak: string;
        /**
         * Override the function that will be used to escape (sanitize) the html output. Return value is used to add to the html output
         * @param input the input to escape
         * @param isAttributeValue indicates wheter or not the input value will be used as value of an html attribute. 
         */
        escape: (input: string, isAttributeValue: boolean) => string;
    }

    export interface XmlRenderingOptions {
        time?: boolean;
        sourcepos?: boolean;
    }

    export class XmlRenderer {
        constructor(options?: XmlRenderingOptions)
        render(root: Node): string;
    }

}

declare module 'commonmark' {
    export = commonmark;
}
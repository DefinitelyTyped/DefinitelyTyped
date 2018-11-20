// Type definitions for parse5-htmlparser2-tree-adapter 5.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as parse5 from "parse5";

declare namespace treeAdapter {
    /**
     * htmlparser2 tree adapter Node interface.
     */
    interface Node {
        /**
         * The type of the node. E.g. {@link Document} will have `type` equal to 'root'`.
         */
        type: string;
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible node {@link type}.
         */
        nodeType: number;
        /**
         * Parent node.
         */
        parent: ParentNode;
        /**
         * Same as {@link parent}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        parentNode: ParentNode;
        /**
         * Previous sibling.
         */
        prev: Node;
        /**
         * Same as {@link prev}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        previousSibling: Node;
        /**
         * Next sibling.
         */
        next: Node;
        /**
         * Same as {@link next}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        nextSibling: Node;
    }

    /**
     * htmlparser2 tree adapter ParentNode interface.
     */
    interface ParentNode extends Node {
        /**
         * Child nodes.
         */
        children: Node[];
        /**
         * Same as {@link children}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        childNodes: Node[];
        /**
         * First child of the node.
         */
        firstChild: Node;
        /**
         * Last child of the node.
         */
        lastChild: Node;
    }

    /**
     * htmlparser2 tree adapter DocumentType interface.
     */
    interface DocumentType extends Node {
        /**
         * The type of the node.
         */
        type: "directive";
        /**
         * Node name.
         */
        name: "!doctype";
        /**
         * Serialized doctype {@link name}, {@link publicId} and {@link systemId}.
         */
        data: string;
        /**
         * Document type name.
         */
        "x-name": string;
        /**
         * Document type public identifier.
         */
        "x-publicId": string;
        /**
         * Document type system identifier.
         */
        "x-systemId": string;
    }

    /**
     * htmlparser2 tree adapter Document interface.
     */
    interface Document extends ParentNode {
        /**
         * The type of the node.
         */
        type: "root";
        /**
         * The name of the node.
         */
        name: "root";
        /**
         * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
         */
        "x-mode": parse5.DocumentMode;
    }

    /**
     * htmlparser2 tree adapter DocumentFragment interface.
     */
    interface DocumentFragment extends ParentNode {
        /**
         * The type of the node.
         */
        type: "root";
        /**
         * The name of the node.
         */
        name: "root";
    }

    /**
     * htmlparser2 tree adapter Element interface.
     */
    interface Element extends ParentNode {
        /**
         * The name of the node. Equals to element {@link tagName}.
         */
        name: string;
        /**
         * Element tag name.
         */
        tagName: string;
        /**
         * Element namespace.
         */
        namespace: string;
        /**
         * Element attributes.
         */
        attribs: { [name: string]: string };
        /**
         * Element attribute namespaces.
         */
        "x-attribsNamespace": { [name: string]: string };
        /**
         * Element attribute namespace-related prefixes.
         */
        "x-attribsPrefix": { [name: string]: string };
        /**
         * Element source code location info. Available if location info is enabled via ParserOptions.
         */
        sourceCodeLocation?: parse5.ElementLocation;
    }

    /**
     * htmlparser2 tree adapter CommentNode interface.
     */
    interface CommentNode extends Node {
        /**
         * The name of the node.
         */
        name: "comment";
        /**
         * Comment text.
         */
        data: string;
        /**
         * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        nodeValue: string;
        /**
         * Comment source code location info. Available if location info is enabled via ParserOptions.
         */
        sourceCodeLocation?: parse5.Location;
    }

    /**
     * htmlparser2 tree adapter TextNode interface.
     */
    interface TextNode extends Node {
        /**
         * The name of the node.
         */
        name: "text";
        /**
         * Text content.
         */
        data: string;
        /**
         * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        nodeValue: string;
        /**
         * Comment source code location info. Available if location info is enabled via ParserOptions.
         */
        sourceCodeLocation?: parse5.Location;
    }
}

declare const treeAdapter: parse5.TreeAdapter;
export = treeAdapter;

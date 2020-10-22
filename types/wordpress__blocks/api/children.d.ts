import { ReactChild } from 'react';

declare namespace children {
    /**
     * Given two or more block nodes, returns a new block node representing a
     * concatenation of its values.
     *
     * @param blockNodes - Block nodes to concatenate.
     */
    function concat(...blockNodes: ReactChild[]): ReactChild[];

    /**
     * Given an iterable set of DOM nodes, returns equivalent block children.
     * Ignores any non-element/text nodes included in set.
     *
     * @param domNodes - list of DOM nodes to convert.
     */
    function fromDOM(domNodes: ArrayLike<Node>): ReactChild[];

    /**
     * Given block children, returns an array of block nodes.
     *
     * @param children - Block children object to convert.
     */
    function getChildrenArray(children: ReactChild[]): ReactChild[];

    /**
     * Given a selector, returns an hpq matcher generating a WPBlockChildren value
     * matching the selector result.
     *
     * @param selector - DOM selector.
     */
    function matcher(selector: string): (domNode: Node & ParentNode) => ReactChild[];

    /**
     * Given a block node, returns its HTML string representation.
     *
     * @param children - Block node(s) to convert to string.
     */
    function toHTML(children: ReactChild[]): string;
}

export default children;

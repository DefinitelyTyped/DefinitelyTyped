import { ReactElement } from "react";

declare namespace children {
    /**
     * Given two or more block nodes, returns a new block node representing a
     * concatenation of its values.
     *
     * @param blockNodes - Block nodes to concatenate.
     *
     * @deprecated since 11.17.0. Use the html source instead.
     */
    function concat(...blockNodes: Array<ReactElement | number | string>): React.ReactElement | number | string[];

    /**
     * Given an iterable set of DOM nodes, returns equivalent block children.
     * Ignores any non-element/text nodes included in set.
     *
     * @param domNodes - list of DOM nodes to convert.
     *
     * @deprecated since 11.17.0. Use the html source instead.
     */
    function fromDOM(domNodes: ArrayLike<Node>): Array<ReactElement | number | string>;

    /**
     * Given block children, returns an array of block nodes.
     *
     * @param children - Block children object to convert.
     *
     * @deprecated since 11.17.0. Use the html source instead.
     */
    function getChildrenArray(children: ReactElement | number | string[]): React.ReactElement | number | string[];

    /**
     * Given a selector, returns an hpq matcher generating a WPBlockChildren value
     * matching the selector result.
     *
     * @param selector - DOM selector.
     *
     * @deprecated since 11.17.0. Use the html source instead.
     */
    function matcher(selector: string): (domNode: Node & ParentNode) => Array<React.ReactElement | number | string>;

    /**
     * Given a block node, returns its HTML string representation.
     *
     * @param children - Block node(s) to convert to string.
     *
     * @deprecated since 11.17.0. Use the html source instead.
     */
    function toHTML(children: React.ReactElement | number | string[]): string;
}

export default children;

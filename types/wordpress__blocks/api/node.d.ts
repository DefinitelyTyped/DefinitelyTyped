import { ReactChild, ReactElement } from 'react';

import children from './children';

/**
 * Object of utility functions used in managing block attribute values of
 * source `node`.
 *
 * @see https://github.com/WordPress/gutenberg/pull/10439
 *
 * @deprecated since 4.0. The `node` source should not be used, and can be
 *             replaced by the `html` source.
 */
declare namespace node {
    /**
     * Given a DOM Element or Text node, returns an equivalent block node. Throws
     * if passed any node type other than element or text.
     *
     * @throws {TypeError} If non-element/text node is passed.
     *
     * @param domNode - DOM node to convert.
     */
    function fromDOM(domNode: Node): JSX.Element;

    /**
     * Given a single node and a node type (e.g. `'br'`), returns `true` if the node
     * corresponds to that type, `false` otherwise.
     *
     * @param node - Block node to test
     * @param type - Node to type to test against.
     */
    function isNodeOfType(node: JSX.Element, type: ReactElement['type']): boolean;

    /**
     * Given a selector, returns an hpq matcher generating a WPBlockNode value
     * matching the selector result.
     */
    const matcher: typeof children.matcher;

    /**
     * Given a block node, returns its HTML string representation.
     *
     * @param node - Block node to convert to string.
     */
    function toHTML(node: ReactChild): string;
}

export default node;

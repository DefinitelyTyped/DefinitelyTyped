// Type definitions for xpath v0.0.7
// Project: https://github.com/goto100/xpath
// Definitions by: Andrew Bradley <https://github.com/cspotcode/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Some documentation prose is copied from the XPath documentation at https://developer.mozilla.org.

declare module 'xpath' {
      
    // select1 can return any of: `Node`, `boolean`, `string`, `number`.
    // select and selectWithResolver can return any of the above return types or `Array<Node>`.
    // For this reason, their return types are `any`.
  
    interface SelectFn {
        /**
         * Evaluate an XPath expression against a DOM node.  Returns the result as one of the following:
         * * Array<Node>
         * * Node
         * * boolean
         * * number
         * * string
         * @param xpathText
         * @param contextNode
         * @param single If true and the evaluation result is one or more Nodes, will return only the first Node instead of an Array<Node>
         */
        (xpathText: string, contextNode: Node, single?: boolean): any;
    }

    var select: SelectFn;

    /**
     * Evaluate an xpath expression against a DOM node, returning the first result only.
     * Equivalent to `select(xpathText, contextNode, true)`
     * @param xpathText
     * @param contextNode
     */
    function select1(xpathText: string, contextNode: Node): any;

    /**
     * Evaluate an XPath expression against a DOM node using a given namespace resolver.  Returns the result as one of the following:
     * * Array<Node>
     * * Node
     * * boolean
     * * number
     * * string
     * @param xpathText
     * @param contextNode
     * @param resolver
     * @param single If true and the evaluation result is one or more Nodes, will return only the first Node instead of an Array<Node>
     */
    function selectWithResolver(xpathText: string, contextNode: Node, resolver: XPathNSResolver, single?: boolean): any;

    /**
     * Evaluate an xpath expression against a DOM.
     * @param xpathText xpath expression as a string.
     * @param contextNode xpath expression is evaluated relative to this DOM node.
     * @param resolver XML namespace resolver
     * @param resultType
     * @param result If non-null, xpath *may* reuse this XPathResult object instead of creating a new one.  However, it is not required to do so.
     * @return XPathResult object containing the result of the expression.
     */
    function evaluate(xpathText: string, contextNode: Node, resolver: XPathNSResolver, resultType: number, result?: XPathResult): XPathResult;

    /**
     * Creates a `select` function that uses the given namespace prefix to URI mappings when evaluating queries.
     * @param namespaceMappings an object mapping namespace prefixes to namespace URIs.  Each key is a prefix; each value is a URI.
     * @return a function with the same signature as `xpath.select`
     */
    function useNamespaces(namespaceMappings: NamespaceMap): typeof select;
    interface NamespaceMap {
        [namespacePrefix: string]: string;
    }

    /**
     * Compile an XPath expression into an XPathExpression which can be (repeatedly) evaluated against a DOM.
     * @param xpathText XPath expression as a string
     * @param namespaceURLMapper Namespace resolver
     * @return compiled expression
     */
    function createExpression(xpathText: string, namespaceURLMapper: XPathNSResolver): XPathExpression;

    /**
     * Create an XPathNSResolver that resolves based on the information available in the context of a DOM node.
     * @param node
     */
    function createNSResolver(node: Node): XPathNSResolver;

    /**
     * Result of evaluating an XPathExpression.
     */
    class XPathResult {
        /**
         * A result set containing whatever type naturally results from evaluation of the expression. Note that if the result is a node-set then UNORDERED_NODE_ITERATOR_TYPE is always the resulting type.
         */
        static ANY_TYPE: number;
        /**
         * A result containing a single number. This is useful for example, in an XPath expression using the count() function.
         */
        static NUMBER_TYPE: number;
        /**
         * A result containing a single string.
         */
        static STRING_TYPE: number;
        /**
         * A result containing a single boolean value. This is useful for example, in an XPath expression using the not() function.
         */
        static BOOLEAN_TYPE: number;
        /**
         * A result node-set containing all the nodes matching the expression. The nodes may not necessarily be in the same order that they appear in the document.
         */
        static UNORDERED_NODE_ITERATOR_TYPE: number;
        /**
         * A result node-set containing all the nodes matching the expression. The nodes in the result set are in the same order that they appear in the document.
         */
        static ORDERED_NODE_ITERATOR_TYPE: number;
        /**
         * A result node-set containing snapshots of all the nodes matching the expression. The nodes may not necessarily be in the same order that they appear in the document.
         */
        static UNORDERED_NODE_SNAPSHOT_TYPE: number;
        /**
         * A result node-set containing snapshots of all the nodes matching the expression. The nodes in the result set are in the same order that they appear in the document.
         */
        static ORDERED_NODE_SNAPSHOT_TYPE: number;
        /**
         * A result node-set containing any single node that matches the expression. The node is not necessarily the first node in the document that matches the expression.
         */
        static ANY_UNORDERED_NODE_TYPE: number;
        /**
         * A result node-set containing the first node in the document that matches the expression.
         */
        static FIRST_ORDERED_NODE_TYPE: number;

        /**
         * Type of this result.  It is one of the enumerated result types.
         */
        resultType: number;

        /**
         * Returns the next node in this result, if this result is one of the _ITERATOR_ result types.
         */
        iterateNext(): Node;

        /**
         * returns the result node for a given index, if this result is one of the _SNAPSHOT_ result types.
         * @param index
         */
        snapshotItem(index: number): Node;

        /**
         * Number of nodes in this result, if this result is one of the _SNAPSHOT_ result types.
         */
        snapshotLength: number;

        /**
         * Value of this result, if it is a BOOLEAN_TYPE result.
         */
        booleanValue: boolean;
        /**
         * Value of this result, if it is a NUMBER_TYPE result.
         */
        numberValue: number;
        /**
         * Value of this result, if it is a STRING_TYPE result.
         */
        stringValue: string;
        
        /**
         * Value of this result, if it is a FIRST_ORDERED_NODE_TYPE result.
         */
        singleNodeValue: Node;
    }

    /**
     * A compiled XPath expression, ready to be (repeatedly) evaluated against a DOM node.
     */
    interface XPathExpression {
        /**
         * evaluate this expression against a DOM node.
         * @param contextNode
         * @param resultType
         * @param result
         */
        evaluate(contextNode: Node, resultType: number, result?: XPathResult): XPathResult;
    }

    /**
     * Object that can resolve XML namespace prefixes to namespace URIs.
     */
    interface XPathNSResolver {
        /**
         * Given an XML namespace prefix, returns the corresponding XML namespace URI.
         * @param prefix XML namespace prefix
         * @return XML namespace URI
         */
        lookupNamespaceURI(prefix: string): string;
    }
}

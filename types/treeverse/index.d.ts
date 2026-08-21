// Note for Typescript < 4.7: Does not work because it can not infer `Value`.

// Notes:
// - All comments are taken from the library's home page.
//   Only the transformation into 'JSDoc' has been made.
// - As written in the library's home page, any functions in the options can be Promises.
//   Using a Promise turns `breadth` and `depth` into Promises too.
//   To keep types inferred from usage and remain usable with some ESLint rules (such as: `@typescript-eslint/no-floating-promises`),
//   it has been decided to allow Promises on the functions only if `getChildren`, which is required, is also one.

export interface BreadthOptions<Node, Value, Children extends Node[] | Promise<Node[]>> {
    /**
     * Filter out child nodes from the traversal.
     * Note that this filters the entire branch of the tree, not just that one node.
     * That is, children of filtered nodes are not traversed either.
     *
     * Note that filtering a node _also_ filters all of its children.
     *
     * @param node The node to filter
     * @returns true if the node should be visited, false otherwise
     */
    filter?: (node: Node) => Children extends Promise<any> ? Promise<boolean> | boolean : boolean;
    /**
     * Get an array of child nodes to process
     *
     * @param node The original node
     * @param nodeResult The result of `visit(node)`
     * @returns an array of child nodes in the tree, if any exist
     */
    getChildren: (node: Node, value: Value) => Children;
    /**
     * The initial node where the traversal begins
     */
    tree: Node;
    /**
     * Called when this node is encountered in the traversal
     *
     * @param node The original node
     * @returns Aa mapped value, or nothing to just leave it as-is
     */
    visit?: (node: Node) => Children extends Promise<any> ? Promise<Value> | Value : Value;
}

export interface DepthOptions<Node, Value, Children extends Node[] | Promise<Node[]>>
    extends BreadthOptions<Node, Value, Children>
{
    /**
     * Called as we ascend back to the root of the tree.
     *
     * If the tree is acyclic, then leave() will have been called on all of them.
     * If it has cycles, then the children may not have been left yet.
     *
     * @param node The value of the original node
     * @param children is an array of child node visit results. If the graph is cyclic, then some children may have been visited but not left.
     * @returns A reduced value, or nothing to leave it as is
     */
    leave?: (node: Value, children: Value[]) => Children extends Promise<any> ? Promise<Value> | Value : Value;
}

/**
 * Perform a depth-first traversal.
 * That is, walk down into child nodes before traversing siblings.
 *
 * @param options for the depth-first traversal
 * @returns The result of leave, or visit if no leave function provided
 */
export function depth<Node, Value, Children extends Node[] | Promise<Node[]>>(
    options: DepthOptions<Node, Value, Children>,
): Children extends Promise<any> ? Promise<Value> : Value;

/**
 * Perform a breadth-first traversal.
 * That is, walk across node siblings before traversing node children.
 *
 * @param options for the breadth-first traversal
 * @returns The result of the top-level node.
 */
export function breadth<Node, Value, Children extends Node[] | Promise<Node[]>>(
    options: BreadthOptions<Node, Value, Children>,
): Children extends Promise<any> ? Promise<Value> : Value;

export interface Node {
    type: string;
    value?: string | undefined;
    val?: string | undefined;
    nodes?: Node[] | undefined;
    parent?: Node | undefined;
    [key: string]: any;
}

export interface State {
    inside: { [type: string]: Node[] };
    [key: string]: any;
}

/**
 * Returns true if the given value is a node.
 */
export function isNode(node: any): node is Node;

/**
 * Returns true if the given node's type matches the given type.
 */
export function isType(node: Node, type: string | RegExp | string[]): boolean;

/**
 * Returns true if node.nodes contains a node matching the given type.
 */
export function hasType(node: Node, type: string | RegExp | string[]): boolean;

/**
 * Returns true if node is an "*.open" type.
 */
export function isOpen(node: Node): boolean;

/**
 * Returns true if node is a "*.close" type.
 */
export function isClose(node: Node): boolean;

/**
 * Returns true if node is a block with open and close nodes.
 */
export function isBlock(node: Node): boolean;

/**
 * Returns the node.value or node.val.
 */
export function value(node: Node): string | undefined;

/**
 * Returns true if node has no content.
 */
export function isEmpty(node: Node, fn?: (node: Node) => boolean): boolean;

/**
 * Appends an empty string to the output.
 */
export function noop(node: Node): void;

/**
 * Appends node.value to compiler output.
 */
export function identity(node: Node): void;

/**
 * Returns a function that appends the specified value to the output.
 */
export function append(value: string): (node: Node) => void;

/**
 * Converts a node to an empty text node.
 */
export function toNoop(node: Node, nodes?: Node[]): void;

/**
 * Recursively visit node and children with a callback.
 */
export function visit(node: Node, fn: (node: Node) => any): Node;

/**
 * Map visitor function over node.nodes array.
 */
export function mapVisit(node: Node, fn: (node: Node) => any): void;

/**
 * Returns the first node of the given type.
 */
export function firstOfType(nodes: Node[], type: string | string[]): Node | undefined;

/**
 * Find a node by index or type.
 */
export function findNode(nodes: Node[], type: string | number): Node | undefined;

/**
 * Get the last child node.
 */
export function lastNode(node: Node): Node | undefined;

/**
 * Get the nth-to-last element from an array.
 */
export function last(arr: any[], n?: number): any;

/**
 * Add an "*.open" node to the beginning.
 */
export function addOpen(
    node: Node,
    Node: new(type: string, value?: string) => Node,
    value?: string,
    filter?: (node: Node) => boolean,
): void;

/**
 * Add a "*.close" node to the end.
 */
export function addClose(
    node: Node,
    Node: new(type: string, value?: string) => Node,
    value?: string,
    filter?: (node: Node) => boolean,
): void;

/**
 * Wrap node with open and close nodes.
 */
export function wrapNodes(
    node: Node,
    Node: new(type: string, value?: string) => Node,
    filter?: (node: Node) => boolean,
): void;

/**
 * Append a child node and set the parent reference.
 */
export function pushNode(parent: Node, node: Node): void;

/**
 * Prepend a child node and set the parent reference.
 */
export function unshiftNode(parent: Node, node: Node): void;

/**
 * Remove the last child node.
 */
export function popNode(node: Node): Node | undefined;

/**
 * Remove the first child node.
 */
export function shiftNode(node: Node): Node | undefined;

/**
 * Remove a specified child node.
 */
export function removeNode(parent: Node, node: Node): Node | undefined;

/**
 * Returns true if child exists in node.nodes.
 */
export function hasNode(node: Node, child: Node): boolean;

/**
 * Returns true if node has an "*.open" child node.
 */
export function hasOpen(node: Node): boolean;

/**
 * Returns true if node has a "*.close" child node.
 */
export function hasClose(node: Node): boolean;

/**
 * Returns true if node has both open and close child nodes.
 */
export function hasOpenAndClose(node: Node): boolean;

/**
 * Push a node onto state.inside stack.
 */
export function addType(state: State, node: Node): void;

/**
 * Pop a node from state.inside stack.
 */
export function removeType(state: State, node: Node): void;

/**
 * Returns true if state.inside[type] stack has entries.
 */
export function isInsideType(state: State, type: string): boolean;

/**
 * Returns true if node is inside the given type.
 */
export function isInside(state: State, node: Node, type: string): boolean;

/**
 * Convert a value to an array.
 */
export function arrayify(value: any): any[];

/**
 * Join array values with commas.
 */
export function stringify(value: string | string[]): string;

/**
 * Trim a string or return empty string.
 */
export function trim(str: string): string;

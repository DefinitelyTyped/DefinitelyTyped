import { AST, Node, Property, PropType, PropValue, TreeNode } from "idyll-compiler";

/**
 * appends a single node to the AST
 */
export function appendNode(ast: AST, node: Node): AST;
/**
 * appends multiple nodes to the AST
 */
export function appendNodes(ast: AST, nodes: AST): AST;
/**
 * creates a node
 */
export function createNode(
    name: string,
    props: Record<string, PropValue | PropValue[1]>,
    children: Node[],
): TreeNode;
/**
 * gets all children of the node if there is any
 * returns an empty array if there is no child
 */
export function getChildren(node: Node): Node[];
/**
 * executes func against every node
 */
export function walkNodes(ast: AST | null, func: (n: Node) => void): void;
/**
 * deeply walks the AST tree and returns all the nodes that satisfies the
 * given filter
 */
export function findNodes(ast: AST, filter: (n: Node) => boolean): Node[];
/**
 * visits each child of the node and modifies them using the modifier
 */
export function modifyChildren(node: Node, modifier: (n: Node) => void): Node;
/**
 * get all nodes by name
 */
export function getNodesByName(ast: AST, name: string): Node[];
/**
 * filters and returns the same node where all children
 * satisfy the given filter
 */
export function filterChildren(
    node: Node,
    filter: (child: Node) => boolean,
): Node;

/**
 * filters every node in the AST and returns a new AST whose nodes
 * satisfy the given filter
 */
export function filterNodes(ast: AST, filter: (node: Node) => boolean): AST;

/**
 * applies the modifier against node whose name is the given name
 * Returns a new ast with the modified nodes
 *
 * Names are case-insensitive
 */
export function modifyNodesByName(
    ast: AST,
    name: string,
    modifier: (node: Node) => void,
): AST;

/**
 * gets the node's property value
 *
 * returns null if node is a string node
 */
export function getProperty(node: Node, key: string): PropValue | null;

/**
 * returns all node's properties
 *
 * returns empty array if node is a string node
 */
export function getProperties(node: Node): Property[];

/**
 * returns all properties having the given property's type
 */
export function getPropertiesByType(node: Node, type: PropType): Property[];

export function prependNode(ast: AST, node: Node): AST;
export function prependNodes(ast: AST, nodes: Node[]): AST;

/**
 * returns a new AST with nodes having the given name
 *
 * Names are case-insensitive
 */
export function removeNodesByName(ast: AST, name: string): AST;

/**
 * sets the property of the node
 *
 * if value is an array, the property's  type is assumed to be included in it
 * otherwise, "value" will be the property's type, and parameter value
 * is the property's value
 */
export function setProperty(
    node: Node,
    key: string,
    value: PropValue | PropValue[1],
): Node;

/**
 * sets the properties of the node
 *
 * also see setProperty()
 */
export function setProperties(
    node: Node,
    properties: Record<string, PropValue | PropValue[1]>,
): Node;

/**
 * removes the node's property which has the given key
 */
export function removeProperty(node: Node, key: string): Node;

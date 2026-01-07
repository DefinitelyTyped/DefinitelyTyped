import AttributeNode from "../core/AttributeNode.js";
import Node from "../core/Node.js";
import VarNode from "../core/VarNode.js";

export const normalGeometry: AttributeNode;

export const normalLocal: VarNode;

export const normalFlat: VarNode;

export const normalViewGeometry: VarNode;

export const normalWorldGeometry: VarNode;

export const normalView: VarNode;

export const normalWorld: VarNode;

export const clearcoatNormalView: VarNode;

export const transformNormal: (normal: Node, matrix?: Node) => Node;

export const transformNormalToView: (normal: Node) => Node;

/**
 * @deprecated since r178. Use `normalView` instead.
 */
export const transformedNormalView: VarNode;

/**
 * @deprecated since r178. Use `normalWorld` instead.
 */
export const transformedNormalWorld: VarNode;

/**
 * @deprecated since r178. Use `clearcoatNormalView` instead.
 */
export const transformedClearcoatNormalView: VarNode;

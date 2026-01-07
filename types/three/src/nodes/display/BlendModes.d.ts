import Node from "../core/Node.js";

export const blendBurn: (base: Node, blend: Node) => Node;

export const blendDodge: (base: Node, blend: Node) => Node;

export const blendScreen: (base: Node, blend: Node) => Node;

export const blendOverlay: (base: Node, blend: Node) => Node;

export const blendColor: (base: Node, blend: Node) => Node;

export const premultiplyAlpha: (color: Node) => Node;

export const unpremultiplyAlpha: (color: Node) => Node;

/**
 * @deprecated
 */
export const burn: (base: Node, blend: Node) => Node;

/**
 * @deprecated
 */
export const dodge: (base: Node, blend: Node) => Node;

/**
 * @deprecated
 */
export const screen: (base: Node, blend: Node) => Node;

/**
 * @deprecated
 */
export const overlay: (base: Node, blend: Node) => Node;

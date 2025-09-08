import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const blendBurn: (base: Node, blend: Node) => ShaderNodeObject<Node>;

export const blendDodge: (base: Node, blend: Node) => ShaderNodeObject<Node>;

export const blendScreen: (base: Node, blend: Node) => ShaderNodeObject<Node>;

export const blendOverlay: (base: Node, blend: Node) => ShaderNodeObject<Node>;

export const blendColor: (base: Node, blend: Node) => ShaderNodeObject<Node>;

export const premultiplyAlpha: (color: Node) => ShaderNodeObject<Node>;

export const unpremultiplyAlpha: (color: Node) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const burn: (base: Node, blend: Node) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const dodge: (base: Node, blend: Node) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const screen: (base: Node, blend: Node) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const overlay: (base: Node, blend: Node) => ShaderNodeObject<Node>;

import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const blendBurn: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const blendDodge: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const blendScreen: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const blendOverlay: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const blendColor: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const premult: (color: NodeRepresentation) => ShaderNodeObject<Node>;

export const unpremult: (color: NodeRepresentation) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const burn: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const dodge: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const screen: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export const overlay: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

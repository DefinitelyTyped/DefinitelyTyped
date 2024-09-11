import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const burn: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const dodge: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const screen: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

export const overlay: (base: NodeRepresentation, blend: NodeRepresentation) => ShaderNodeObject<Node>;

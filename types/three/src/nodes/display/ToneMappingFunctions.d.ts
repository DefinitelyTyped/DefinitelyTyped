import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const linearToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const reinhardToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const cineonToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const acesFilmicToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const agxToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const neutralToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

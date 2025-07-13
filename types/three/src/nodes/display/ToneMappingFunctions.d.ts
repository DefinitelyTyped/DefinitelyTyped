import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const linearToneMapping: (color: Node, exposure: Node) => ShaderNodeObject<Node>;

export const reinhardToneMapping: (color: Node, exposure: Node) => ShaderNodeObject<Node>;

export const cineonToneMapping: (color: Node, exposure: Node) => ShaderNodeObject<Node>;

export const acesFilmicToneMapping: (color: Node, exposure: Node) => ShaderNodeObject<Node>;

export const agxToneMapping: (color: Node, exposure: Node) => ShaderNodeObject<Node>;

export const neutralToneMapping: (color: Node, exposure: Node) => ShaderNodeObject<Node>;

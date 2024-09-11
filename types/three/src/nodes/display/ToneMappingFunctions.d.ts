import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const LinearToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const ReinhardToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const CineonToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const ACESFilmicToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const AgXToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

export const NeutralToneMapping: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>;

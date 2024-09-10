import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const tri: (x: NodeRepresentation) => ShaderNodeObject<Node>;

export const tri3: (p: NodeRepresentation) => ShaderNodeObject<Node>;

export const triNoise3D: (
    p_immutable: NodeRepresentation,
    spd: NodeRepresentation,
    time: NodeRepresentation,
) => ShaderNodeObject<Node>;

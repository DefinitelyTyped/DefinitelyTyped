import OperatorNode from "../math/OperatorNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const rotateUV: (
    uv: NodeRepresentation,
    rotation: NodeRepresentation,
    center?: NodeRepresentation,
) => ShaderNodeObject<OperatorNode>;

export const spherizeUV: (
    uv: NodeRepresentation,
    strength: NodeRepresentation,
    center?: NodeRepresentation,
) => ShaderNodeObject<OperatorNode>;

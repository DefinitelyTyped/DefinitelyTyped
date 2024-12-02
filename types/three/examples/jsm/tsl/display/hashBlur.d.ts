import { Node, NodeRepresentation, ShaderNodeObject } from "three/tsl";

export const hashBlur: (
    textureNode: NodeRepresentation,
    bluramount?: NodeRepresentation,
    repeats?: NodeRepresentation,
) => ShaderNodeObject<Node>;

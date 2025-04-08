import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const hashBlur: (
    textureNode: NodeRepresentation,
    bluramount?: NodeRepresentation,
    repeats?: NodeRepresentation,
) => ShaderNodeObject<Node>;

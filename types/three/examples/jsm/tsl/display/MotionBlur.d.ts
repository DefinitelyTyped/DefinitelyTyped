import { Node, NodeRepresentation, ShaderNodeObject } from "three/tsl";

export const motionBlur: (
    inputNode: NodeRepresentation,
    velocity: NodeRepresentation,
    numSamples?: NodeRepresentation,
) => ShaderNodeObject<Node>;

import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const motionBlur: (
    inputNode: NodeRepresentation,
    velocity: NodeRepresentation,
    numSamples?: NodeRepresentation,
) => ShaderNodeObject<Node>;

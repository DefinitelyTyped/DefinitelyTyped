import { ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const motionBlur: (
    inputNode: Node,
    velocity: Node,
    numSamples?: Node,
) => ShaderNodeObject<Node>;

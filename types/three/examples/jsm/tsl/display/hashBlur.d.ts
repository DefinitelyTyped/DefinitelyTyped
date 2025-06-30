import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

interface HashBlurOptions {
    repeats?: NodeRepresentation | undefined;
    mask?: NodeRepresentation | null | undefined;
    premultipliedAlpha?: boolean | undefined;
}

export const hashBlur: (
    textureNode: NodeRepresentation,
    bluramount?: NodeRepresentation,
    options?: HashBlurOptions,
) => ShaderNodeObject<Node>;

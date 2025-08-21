import { ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

interface HashBlurOptions {
    repeats?: Node | undefined;
    mask?: Node | null | undefined;
    premultipliedAlpha?: boolean | undefined;
}

export const hashBlur: (
    textureNode: Node,
    bluramount?: Node | number,
    options?: HashBlurOptions,
) => ShaderNodeObject<Node>;

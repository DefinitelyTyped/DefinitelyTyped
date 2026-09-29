import { Node } from "three/webgpu";

interface HashBlurOptions {
    repeats?: Node | number | undefined;
    premultipliedAlpha?: boolean | undefined;
}

export const hashBlur: (
    textureNode: Node,
    bluramount?: Node | number,
    options?: HashBlurOptions,
) => Node<"vec4">;

import { Node } from "three/webgpu";

interface HashBlurOptions {
    size?: Node | undefined;
    mask?: Node | null | undefined;
    premultipliedAlpha?: boolean | undefined;
}

export const hashBlur: (
    textureNode: Node,
    bluramount?: Node | number,
    options?: HashBlurOptions,
) => Node<"vec4">;

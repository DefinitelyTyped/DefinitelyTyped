import { FramebufferTexture } from "../../../../src/Three.js";
import TextureNode from "../accessors/TextureNode.js";
import { NodeUpdateType } from "../core/constants.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ViewportTextureNode extends TextureNode {
    generateMipmaps: boolean;

    readonly isOutputTextureNode: true;

    updateBeforeType: NodeUpdateType;

    constructor(uvNode?: Node, levelNode?: Node | null, framebufferTexture?: FramebufferTexture | null);
}

export const viewportTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
    framebufferTexture?: FramebufferTexture | null,
) => ShaderNodeObject<ViewportTextureNode>;
export const viewportMipTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
    framebufferTexture?: FramebufferTexture | null,
) => ShaderNodeObject<Node>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        viewportTexture: typeof viewportTexture;
        viewportMipTexture: typeof viewportMipTexture;
    }
}

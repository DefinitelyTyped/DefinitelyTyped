import { FramebufferTexture } from "../../textures/FramebufferTexture.js";
import TextureNode from "../accessors/TextureNode.js";
import { NodeUpdateType } from "../core/constants.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ViewportTextureNode extends TextureNode {
    generateMipmaps: boolean;

    readonly isOutputTextureNode: true;

    updateBeforeType: NodeUpdateType;

    constructor(uvNode?: Node, levelNode?: Node | null, framebufferTexture?: FramebufferTexture | null);
}

export default ViewportTextureNode;

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

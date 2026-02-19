import { RenderTarget } from "../../core/RenderTarget.js";
import { FramebufferTexture } from "../../textures/FramebufferTexture.js";
import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import { NodeUpdateType } from "../core/constants.js";
import Node from "../core/Node.js";

declare class ViewportTextureNode extends TextureNode {
    generateMipmaps: boolean;

    readonly isOutputTextureNode: true;

    updateBeforeType: NodeUpdateType;

    constructor(uvNode?: Node, levelNode?: Node | null, framebufferTexture?: FramebufferTexture | null);

    getTextureForReference(reference?: RenderTarget | null): Texture;
}

export default ViewportTextureNode;

export const viewportTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
    framebufferTexture?: FramebufferTexture | null,
) => ViewportTextureNode;
export const viewportMipTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
    framebufferTexture?: FramebufferTexture | null,
) => Node;

export const viewportOpaqueMipTexture: (uv?: Node, level?: Node | null) => Node;

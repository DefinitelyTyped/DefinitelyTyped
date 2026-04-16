import { RenderTarget } from "../../core/RenderTarget.js";
import CanvasTarget from "../../renderers/common/CanvasTarget.js";
import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import { NodeUpdateType } from "../core/constants.js";
import Node from "../core/Node.js";

declare class ViewportTextureNode extends TextureNode {
    generateMipmaps: boolean;

    readonly isOutputTextureNode: true;

    updateBeforeType: NodeUpdateType;

    constructor(uvNode?: Node, levelNode?: Node | null, framebufferTexture?: Texture | null);

    getTextureForReference(reference?: RenderTarget | CanvasTarget | null): Texture;
}

export default ViewportTextureNode;

export const viewportTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
    framebufferTexture?: Texture | null,
) => ViewportTextureNode;
export const viewportMipTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
    framebufferTexture?: Texture | null,
) => Node;

export const viewportOpaqueMipTexture: (uv?: Node, level?: Node | null) => Node;

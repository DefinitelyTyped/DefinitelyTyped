import { FramebufferTexture } from "../../textures/FramebufferTexture.js";
import Node from "../core/Node.js";
import ViewportTextureNode from "./ViewportTextureNode.js";

declare class ViewportSharedTextureNode extends ViewportTextureNode {
    constructor(uvNode?: Node, levelNode?: Node | null);

    getTextureForReference(): FramebufferTexture;
}

export default ViewportSharedTextureNode;

export const viewportSharedTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
) => ViewportSharedTextureNode;

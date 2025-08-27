import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ViewportTextureNode from "./ViewportTextureNode.js";

declare class ViewportSharedTextureNode extends ViewportTextureNode {
    constructor(uvNode?: Node, levelNode?: Node | null);
}

export default ViewportSharedTextureNode;

export const viewportSharedTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
) => ShaderNodeObject<ViewportSharedTextureNode>;

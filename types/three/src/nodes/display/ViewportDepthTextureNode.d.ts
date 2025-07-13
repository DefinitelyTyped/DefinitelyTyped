import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ViewportTextureNode from "./ViewportTextureNode.js";

declare class ViewportDepthTextureNode extends ViewportTextureNode {
    constructor(uvNode?: Node, levelNode?: Node | null);
}

export default ViewportDepthTextureNode;

export const viewportDepthTexture: (
    uvNode?: Node,
    levelNode?: Node,
) => ShaderNodeObject<ViewportDepthTextureNode>;

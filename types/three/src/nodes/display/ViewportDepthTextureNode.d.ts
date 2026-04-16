import { DepthTexture } from "../../textures/DepthTexture.js";
import Node from "../core/Node.js";
import ViewportTextureNode from "./ViewportTextureNode.js";

declare class ViewportDepthTextureNode extends ViewportTextureNode {
    constructor(uvNode?: Node, levelNode?: Node | null, depthTexture?: DepthTexture | null);
}

export default ViewportDepthTextureNode;

export const viewportDepthTexture: (
    uvNode?: Node,
    levelNode?: Node,
) => ViewportDepthTextureNode;

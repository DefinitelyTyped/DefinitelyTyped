import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import ViewportTextureNode from "./ViewportTextureNode.js";

export default class ViewportSharedTextureNode extends ViewportTextureNode {
    constructor(uvNode?: Node, levelNode?: Node | null);
}

export const viewportSharedTexture: (
    uvNode?: Node,
    levelNode?: Node | null,
) => ShaderNodeObject<ViewportSharedTextureNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        viewportSharedTexture: typeof viewportSharedTexture;
    }
}

import ContextNode from "../core/ContextNode.js";
import LightingModel, { LightingModelIndirectInput } from "../core/LightingModel.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class LightingContextNode extends ContextNode {
    lightingModelNode: LightingModel | null;
    backdropNode: Node | null;
    backdropAlphaNode: Node | null;

    constructor(
        node: Node,
        lightingModel?: LightingModel | null,
        backdropNode?: Node | null,
        backdropAlphaNode?: Node | null,
    );

    getContext(): LightingModelIndirectInput;
}

export const lightingContext: (node: Node, lightingModelNode?: LightingModel) => ShaderNodeObject<LightingContextNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        lightingContext: typeof lightingContext;
    }
}

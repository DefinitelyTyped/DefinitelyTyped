import ContextNode from "../core/ContextNode.js";
import LightingModel, { LightingModelIndirectInput } from "../core/LightingModel.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

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

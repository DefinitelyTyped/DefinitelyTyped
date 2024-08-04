import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type ClippingNodeScope = typeof ClippingNode.ALPHA_TO_COVERAGE | typeof ClippingNode.DEFAULT;

export default class ClippingNode extends Node {
    scope: ClippingNodeScope;

    constructor(scope?: ClippingNodeScope);

    static ALPHA_TO_COVERAGE: "alphaToCoverage";
    static DEFAULT: "default";
}

export const clipping: () => ShaderNodeObject<ClippingNode>;
export const clippingAlpha: () => ShaderNodeObject<ClippingNode>;

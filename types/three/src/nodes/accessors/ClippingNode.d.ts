import { Plane } from "../../math/Plane.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type ClippingNodeScope = typeof ClippingNode.ALPHA_TO_COVERAGE | typeof ClippingNode.DEFAULT;

export default class ClippingNode extends Node {
    scope: ClippingNodeScope;

    hardwareClipping?: boolean;

    constructor(scope?: ClippingNodeScope);

    static ALPHA_TO_COVERAGE: "alphaToCoverage";
    static DEFAULT: "default";
    static HARDWARE: "hardware";
}

export const clipping: () => ShaderNodeObject<ClippingNode>;
export const clippingAlpha: () => ShaderNodeObject<ClippingNode>;
export const hardwareClipping: () => ShaderNodeObject<ClippingNode>;

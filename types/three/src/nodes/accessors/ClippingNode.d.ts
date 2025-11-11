import Node from "../core/Node.js";

export type ClippingNodeScope = typeof ClippingNode.ALPHA_TO_COVERAGE | typeof ClippingNode.DEFAULT;

export default class ClippingNode extends Node {
    scope: ClippingNodeScope;

    hardwareClipping?: boolean;

    constructor(scope?: ClippingNodeScope);

    static ALPHA_TO_COVERAGE: "alphaToCoverage";
    static DEFAULT: "default";
    static HARDWARE: "hardware";
}

export const clipping: () => ClippingNode;
export const clippingAlpha: () => ClippingNode;
export const hardwareClipping: () => ClippingNode;

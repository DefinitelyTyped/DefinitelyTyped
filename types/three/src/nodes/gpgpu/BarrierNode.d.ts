import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class BarrierNode extends Node {
    scope: string;

    constructor(scope: string);
}

export const workgroupBarrier: () => ShaderNodeObject<Node>;
export const storageBarrier: () => ShaderNodeObject<Node>;
export const textureBarrier: () => ShaderNodeObject<Node>;

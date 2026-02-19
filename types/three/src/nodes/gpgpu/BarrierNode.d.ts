import Node from "../core/Node.js";

declare class BarrierNode extends Node {
    scope: string;

    constructor(scope: string);
}

export default BarrierNode;

export const workgroupBarrier: () => Node;
export const storageBarrier: () => Node;
export const textureBarrier: () => Node;

import { BatchedMesh } from "../../objects/BatchedMesh.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class BatchNode extends Node {
    batchMesh: BatchedMesh;

    batchingIdNode: Node | null;

    constructor(batchMesh: BatchedMesh);
}

export const batch: (batchMesh: BatchedMesh) => ShaderNodeObject<BatchNode>;

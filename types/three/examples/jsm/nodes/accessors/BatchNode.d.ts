import { BatchedMesh } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class BatchNode extends Node {
    batchMesh: BatchedMesh;

    instanceColorNode: Node | null;
    batchingIdNode: Node | null;

    constructor(batchMesh: BatchedMesh);
}

export const batch: (batchMesh: BatchedMesh) => ShaderNodeObject<BatchNode>;

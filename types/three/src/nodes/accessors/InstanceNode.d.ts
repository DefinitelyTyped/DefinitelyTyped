import { InstancedMesh } from "../../objects/InstancedMesh.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class InstanceNode extends Node {
    instanceMesh: InstancedMesh;
    instanceMatrixNode: Node | null;
    instanceColorNode: Node | null;

    constructor(instanceMesh: InstancedMesh);
}

export const instance: (instanceMesh: InstancedMesh) => ShaderNodeObject<InstanceNode>;

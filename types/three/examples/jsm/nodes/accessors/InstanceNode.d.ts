import { InstancedMesh } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class InstanceNode extends Node {
    instanceMesh: InstancedMesh;
    instanceMatrixNode: Node;

    constructor(instanceMesh: InstancedMesh);
}

export const instance: (instanceMesh: InstancedMesh) => ShaderNodeObject<InstanceNode>;

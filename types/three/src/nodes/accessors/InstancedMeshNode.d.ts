import { InstancedMesh } from "../../objects/InstancedMesh.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import InstanceNode from "./InstanceNode.js";

declare class InstancedMeshNode extends InstanceNode {
    constructor(instanceMesh: InstancedMesh);
}

export default InstancedMeshNode;

export const instancedMesh: (instancedMesh: InstancedMesh) => ShaderNodeObject<InstancedMeshNode>;

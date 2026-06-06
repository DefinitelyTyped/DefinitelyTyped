import { InstancedMesh } from "../../objects/InstancedMesh.js";
import InstanceNode from "./InstanceNode.js";

declare class InstancedMeshNode extends InstanceNode {
    constructor(instanceMesh: InstancedMesh);
}

export default InstancedMeshNode;

export const instancedMesh: (instancedMesh: InstancedMesh) => InstancedMeshNode;

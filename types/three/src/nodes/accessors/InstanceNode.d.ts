import { InstancedBufferAttribute } from "../../core/InstancedBufferAttribute.js";
import { InstancedMesh } from "../../objects/InstancedMesh.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class InstanceNode extends Node {
    count: number;
    instanceMatrix: InstancedBufferAttribute;
    instanceColor: InstancedBufferAttribute | null;

    instanceMatrixNode: Node | null;
    instanceColorNode: Node | null;

    constructor(
        count: number,
        instanceMatrix: InstancedBufferAttribute,
        instanceColor: InstancedBufferAttribute | null,
    );
}

export const instance: (
    count: number,
    instanceMatrix: InstancedBufferAttribute,
    instanceColor: InstancedBufferAttribute | null,
) => ShaderNodeObject<InstanceNode>;

import { InstancedBufferAttribute } from "../../core/InstancedBufferAttribute.js";
import StorageInstancedBufferAttribute from "../../renderers/common/StorageInstancedBufferAttribute.js";
import Node from "../core/Node.js";

export default class InstanceNode extends Node {
    count: number;
    instanceMatrix: InstancedBufferAttribute | StorageInstancedBufferAttribute;
    instanceColor: InstancedBufferAttribute | StorageInstancedBufferAttribute | null;

    instanceMatrixNode: Node | null;
    instanceColorNode: Node | null;

    constructor(
        count: number,
        instanceMatrix: InstancedBufferAttribute | StorageInstancedBufferAttribute,
        instanceColor?: InstancedBufferAttribute | StorageInstancedBufferAttribute | null,
    );
}

export const instance: (
    count: number,
    instanceMatrix: InstancedBufferAttribute | StorageInstancedBufferAttribute,
    instanceColor?: InstancedBufferAttribute | StorageInstancedBufferAttribute | null,
) => InstanceNode;

import { InstancedBufferAttribute } from "../../core/InstancedBufferAttribute.js";
import Node from "../core/Node.js";

export default class InstanceNode extends Node {
    count: number;
    instanceMatrix: InstancedBufferAttribute;
    instanceColor: InstancedBufferAttribute | null;

    instanceMatrixNode: Node | null;
    instanceColorNode: Node | null;

    constructor(
        count: number,
        instanceMatrix: InstancedBufferAttribute,
        instanceColor?: InstancedBufferAttribute | null,
    );
}

export const instance: (
    count: number,
    instanceMatrix: InstancedBufferAttribute,
    instanceColor?: InstancedBufferAttribute | null,
) => InstanceNode;

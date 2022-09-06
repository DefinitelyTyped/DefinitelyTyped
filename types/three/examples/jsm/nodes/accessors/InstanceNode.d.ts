import { InstancedMesh } from '../../../../src/Three';
import Node from '../core/Node';

export default class InstanceNode extends Node {
    instanceMesh: InstancedMesh;
    instanceMatrixNode: Node;

    constructor(instanceMesh: InstancedMesh);
}

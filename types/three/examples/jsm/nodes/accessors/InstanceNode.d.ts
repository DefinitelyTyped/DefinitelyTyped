import { InstancedMesh } from '../../../../src/Three.js';
import Node from '../core/Node.js';

export default class InstanceNode extends Node {
    instanceMesh: InstancedMesh;
    instanceMatrixNode: Node;

    constructor(instanceMesh: InstancedMesh);
}

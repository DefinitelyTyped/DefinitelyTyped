import { SkinnedMesh } from '../../../../src/Three.js';
import Node from '../core/Node.js';

export default class SkinningNode extends Node {
    skinIndexNode: Node;
    skinWeightNode: Node;

    bindMatrixNode: Node;
    bindMatrixInverseNode: Node;
    boneMatricesNode: Node;

    constructor(skinnedMesh: SkinnedMesh);
}

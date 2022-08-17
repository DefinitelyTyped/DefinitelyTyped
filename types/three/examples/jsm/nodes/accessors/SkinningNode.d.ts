import { SkinnedMesh } from '../../../../src/Three';
import Node from '../core/Node';

export default class SkinningNode extends Node {
    skinIndexNode: Node;
    skinWeightNode: Node;

    bindMatrixNode: Node;
    bindMatrixInverseNode: Node;
    boneMatricesNode: Node;

    constructor(skinnedMesh: SkinnedMesh);
}

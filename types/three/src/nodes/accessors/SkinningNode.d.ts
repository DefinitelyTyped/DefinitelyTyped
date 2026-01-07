import { SkinnedMesh } from "../../objects/SkinnedMesh.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

export default class SkinningNode extends Node {
    skinnedMesh: SkinnedMesh;

    skinIndexNode: Node;
    skinWeightNode: Node;

    bindMatrixNode: Node;
    bindMatrixInverseNode: Node;
    boneMatricesNode: Node;
    positionNode: Node;
    toPositionNode: Node;
    previousBoneMatricesNode: Node | null;

    constructor(skinnedMesh: SkinnedMesh);

    getSkinnedPosition(boneMatrices?: Node, position?: Node): Node;

    getSkinnedNormal(boneMatrices?: Node, normal?: Node): Node;

    getPreviousSkinnedPosition(builder: NodeBuilder): Node;

    needsPreviousBoneMatrices(builder: NodeBuilder): boolean;
}

export const skinning: (skinnedMesh: SkinnedMesh) => SkinningNode;
export const computeSkinning: (skinnedMesh: SkinnedMesh, toPosition?: Node | null) => SkinningNode;

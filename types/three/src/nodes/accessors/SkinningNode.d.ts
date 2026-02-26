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

    getSkinnedNormalAndTangent(
        boneMatrices?: Node,
        normal?: Node,
        tangent?: Node,
    ): { skinNormal: Node; skinTangent: Node };

    getPreviousSkinnedPosition(builder: NodeBuilder): Node;
}

export const skinning: (skinnedMesh: SkinnedMesh) => SkinningNode;
export const computeSkinning: (skinnedMesh: SkinnedMesh, toPosition?: Node | null) => SkinningNode;

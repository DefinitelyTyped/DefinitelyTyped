import { SkinnedMesh } from "../../objects/SkinnedMesh.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class SkinningNode extends Node {
    skinnedMesh: SkinnedMesh;
    useReference: boolean;

    skinIndexNode: Node;
    skinWeightNode: Node;

    bindMatrixNode: Node;
    bindMatrixInverseNode: Node;
    boneMatricesNode: Node;
    previousBoneMatricesNode: Node | null;

    constructor(skinnedMesh: SkinnedMesh, useReference?: boolean);

    getSkinnedPosition(boneMatrices?: Node, position?: Node): ShaderNodeObject<Node>;

    getSkinnedNormal(boneMatrices?: Node, normal?: Node): ShaderNodeObject<Node>;

    getPreviousSkinnedPosition(builder: NodeBuilder): ShaderNodeObject<Node>;

    needsPreviousBoneMatrices(builder: NodeBuilder): boolean;
}

export const skinning: (skinnedMesh: SkinnedMesh) => ShaderNodeObject<SkinningNode>;
export const skinningReference: (skinnedMesh: SkinnedMesh) => ShaderNodeObject<SkinningNode>;

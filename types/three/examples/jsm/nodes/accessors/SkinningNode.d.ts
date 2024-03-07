import { SkinnedMesh } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class SkinningNode extends Node {
    skinnedMesh: SkinnedMesh;
    useReference: boolean;

    skinIndexNode: Node;
    skinWeightNode: Node;

    bindMatrixNode: Node;
    bindMatrixInverseNode: Node;
    boneMatricesNode: Node;

    constructor(skinnedMesh: SkinnedMesh, useReference?: boolean);
}

export const skinning: (skinnedMesh: SkinnedMesh) => ShaderNodeObject<SkinningNode>;
export const skinningReference: (skinnedMesh: SkinnedMesh) => ShaderNodeObject<SkinningNode>;

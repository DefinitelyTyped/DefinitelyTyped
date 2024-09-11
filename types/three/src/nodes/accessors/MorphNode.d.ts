import { Mesh } from "../../objects/Mesh.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class MorphNode extends Node {
    mesh: Mesh;
    morphBaseInfluence: UniformNode<number>;

    constructor(mesh: Mesh);
}

export default MorphNode;

export const morphReference: (mesh: Mesh) => ShaderNodeObject<MorphNode>;

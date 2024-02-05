import { ShaderMaterialParameters } from "../../../../src/Three.js";
import Node from "../core/Node.js";
import NodeMaterial from "./NodeMaterial.js";

export default class MeshPhongNodeMaterial extends NodeMaterial {
    readonly isMeshPhongNodeMaterial: true;

    shininessNode: Node | null;
    specularNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
}

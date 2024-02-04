import { ShaderMaterialParameters } from "../../../../src/Three.js";
import NodeMaterial from "./NodeMaterial.js";

export default class MeshBasicNodeMaterial extends NodeMaterial {
    readonly isMeshBasicNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}

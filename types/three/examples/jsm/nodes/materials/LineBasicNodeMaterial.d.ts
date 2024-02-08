import { ShaderMaterialParameters } from "../../../../src/Three.js";
import NodeMaterial from "./NodeMaterial.js";

export default class LineBasicNodeMaterial extends NodeMaterial {
    readonly isLineBasicNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}

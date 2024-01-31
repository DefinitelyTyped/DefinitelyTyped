import { ShaderMaterialParameters } from "../../../../src/Three.js";
import { Node } from "../Nodes.js";
import NodeMaterial from "./NodeMaterial.js";

export default class PointsNodeMaterial extends NodeMaterial {
    readonly isPointsNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}

import Node from "../../nodes/core/Node.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export default class VolumeNodeMaterial extends NodeMaterial {
    lights: boolean;
    readonly isVolumeNodeMaterial: true;
    testNode: Node | null;

    constructor(parameters?: NodeMaterialParameters);
}

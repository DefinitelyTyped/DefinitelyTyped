import InputNode from "../../nodes/core/InputNode.js";
import Node from "../../nodes/core/Node.js";
import MeshPhysicalNodeMaterial, { MeshPhysicalNodeMaterialParameters } from "./MeshPhysicalNodeMaterial.js";

export default class MeshSSSNodeMaterial extends MeshPhysicalNodeMaterial {
    thicknessColorNode: Node | null;
    thicknessDistortionNode: InputNode<number>;
    thicknessAmbientNode: InputNode<number>;
    thicknessAttenuationNode: InputNode<number>;
    thicknessPowerNode: InputNode<number>;
    thicknessScaleNode: InputNode<number>;

    constructor(parameters?: MeshPhysicalNodeMaterialParameters);

    get useSSS(): boolean;
}

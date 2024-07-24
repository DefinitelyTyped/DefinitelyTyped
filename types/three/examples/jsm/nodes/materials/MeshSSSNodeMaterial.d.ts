import ConstNode from "../core/ConstNode.js";
import Node from "../core/Node.js";
import MeshPhysicalNodeMaterial, { MeshPhysicalNodeMaterialParameters } from "./MeshPhysicalNodeMaterial.js";

export default class MeshSSSNodeMaterial extends MeshPhysicalNodeMaterial {
    thicknessColorNode: Node | null;
    thicknessDistortionNode: ConstNode<number>;
    thicknessAmbientNode: ConstNode<number>;
    thicknessAttenuationNode: ConstNode<number>;
    thicknessPowerNode: ConstNode<number>;
    thicknessScaleNode: ConstNode<number>;

    constructor(parameters?: MeshPhysicalNodeMaterialParameters);

    get useSSS(): boolean;
}

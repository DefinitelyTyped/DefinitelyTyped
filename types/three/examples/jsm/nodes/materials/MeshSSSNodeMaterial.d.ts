import ConstNode from "../core/ConstNode.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import MeshPhysicalNodeMaterial, { MeshPhysicalNodeMaterialParameters } from "./MeshPhysicalNodeMaterial.js";

export default class MeshSSSNodeMaterial extends MeshPhysicalNodeMaterial {
    thicknessColorNode: ShaderNodeObject<Node> | null;
    thicknessDistortionNode: ShaderNodeObject<ConstNode<number>>;
    thicknessAmbientNode: ShaderNodeObject<ConstNode<number>>;
    thicknessAttenuationNode: ShaderNodeObject<ConstNode<number>>;
    thicknessPowerNode: ShaderNodeObject<ConstNode<number>>;
    thicknessScaleNode: ShaderNodeObject<ConstNode<number>>;

    constructor(parameters?: MeshPhysicalNodeMaterialParameters);

    get useSSS(): boolean;
}

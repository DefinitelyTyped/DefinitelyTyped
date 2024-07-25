import LightingModel from "../core/LightingModel.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ShadowMaskModel extends LightingModel {
    shadowNode: ShaderNodeObject<VarNode>;

    constructor();
}

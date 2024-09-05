import LightingModel from "../core/LightingModel.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class ShadowMaskModel extends LightingModel {
    shadowNode: ShaderNodeObject<VarNode>;

    constructor();
}

import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ShadowNode extends Node {
    constructor(light: Light, shadow: LightShadow);
}

export default ShadowNode;

export const shadow: (light: Light, shadow: LightShadow) => ShaderNodeObject<ShadowNode>;

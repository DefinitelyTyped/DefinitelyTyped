import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ShadowBaseNode extends Node {
    light: Light;

    readonly isShadowBasedNode: true;

    constructor(light: Light);
}

export const shadowPositionWorld: ShaderNodeObject<Node>;

export default ShadowBaseNode;

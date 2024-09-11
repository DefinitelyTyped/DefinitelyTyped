import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type LightNodeScope = typeof LightNode.TARGET_DIRECTION;

declare class LightNode extends Node {
    scope: LightNodeScope;
    light: Light;

    constructor(scope?: LightNodeScope, light?: Light | null);

    static TARGET_DIRECTION: "targetDirection";
}

export default LightNode;

export const lightTargetDirection: (light?: Light | null) => ShaderNodeObject<LightNode>;

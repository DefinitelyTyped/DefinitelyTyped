import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import ShadowBaseNode from "./ShadowBaseNode.js";

declare class ShadowNode extends ShadowBaseNode {
    constructor(light: Light, shadow: LightShadow | null);
}

export default ShadowNode;

export const shadow: (light: Light, shadow?: LightShadow) => ShadowNode;

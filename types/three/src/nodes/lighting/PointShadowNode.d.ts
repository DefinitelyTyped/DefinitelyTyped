import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import Node from "../core/Node.js";
import ShadowNode from "./ShadowNode.js";

export const BasicPointShadowFilter: (params: {
    depthTexture: Node;
    bd3D: Node;
    dp: Node;
}) => Node;

export const PointShadowFilter: (params: {
    depthTexture: Node;
    bd3D: Node;
    dp: Node;
    shadow: Node;
}) => Node;

declare class PointShadowNode extends ShadowNode {
    constructor(light: Light, shadow: LightShadow | null);
}

export default PointShadowNode;

export const pointShadow: (light: Light, shadow?: LightShadow | null) => PointShadowNode;

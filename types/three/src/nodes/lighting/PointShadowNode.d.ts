import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import Node from "../core/Node.js";
import ShadowNode from "./ShadowNode.js";

export const cubeToUV: (pos: Node, texelSizeY: Node) => Node;

export const BasicPointShadowFilter: (
    depthTexture: Node,
    bd3D: Node,
    dp: Node,
    texelSize: Node,
) => Node;

export const PointShadowFilter: (
    depthTexture: Node,
    bd3D: Node,
    dp: Node,
    texelSize: Node,
    shadow: Node,
) => Node;

declare class PointShadowNode extends ShadowNode {
    constructor(light: Light, shadow: LightShadow | null);
}

export default PointShadowNode;

export const pointShadow: (light: Light, shadow?: LightShadow | null) => PointShadowNode;

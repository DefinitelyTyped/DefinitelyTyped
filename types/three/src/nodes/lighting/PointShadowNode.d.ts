import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import ShadowNode from "./ShadowNode.js";

export const cubeToUV: (pos: NodeRepresentation, texelSizeY: NodeRepresentation) => ShaderNodeObject<Node>;

export const BasicPointShadowFilter: (
    depthTexture: NodeRepresentation,
    bd3D: NodeRepresentation,
    dp: NodeRepresentation,
    texelSize: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const PointShadowFilter: (
    depthTexture: NodeRepresentation,
    bd3D: NodeRepresentation,
    dp: NodeRepresentation,
    texelSize: NodeRepresentation,
    shadow: NodeRepresentation,
) => ShaderNodeObject<Node>;

declare class PointShadowNode extends ShadowNode {
    constructor(light: Light, shadow: LightShadow | null);
}

export default PointShadowNode;

export const pointShadow: (light: Light, shadow?: LightShadow | null) => ShaderNodeObject<PointShadowNode>;

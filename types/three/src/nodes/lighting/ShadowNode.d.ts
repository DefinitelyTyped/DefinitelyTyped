import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import ShadowBaseNode from "./ShadowBaseNode.js";

export const BasicShadowFilter: (
    depthTexture: NodeRepresentation,
    shadowCoord: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const PCFShadowFilter: (
    depthTexture: NodeRepresentation,
    shadowCoord: NodeRepresentation,
    shadow: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const PCFSoftShadowFilter: (
    depthTexture: NodeRepresentation,
    shadowCoord: NodeRepresentation,
    shadow: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const VSMShadowFilter: (
    depthTexture: NodeRepresentation,
    shadowCoord: NodeRepresentation,
) => ShaderNodeObject<Node>;

declare class ShadowNode extends ShadowBaseNode {
    constructor(light: Light, shadow: LightShadow | null);
}

export default ShadowNode;

export const shadow: (light: Light, shadow?: LightShadow) => ShaderNodeObject<ShadowNode>;
export const shadows: ShaderNodeObject<Node>;

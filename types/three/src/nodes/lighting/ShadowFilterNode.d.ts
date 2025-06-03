import { Light } from "../../lights/Light.js";
import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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

export const getShadowMaterial: (light: Light) => NodeMaterial;

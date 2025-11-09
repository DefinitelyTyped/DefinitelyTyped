import { Light } from "../../lights/Light.js";
import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const BasicShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
) => ShaderNodeObject<Node>;

export const PCFShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
    shadow: Node,
) => ShaderNodeObject<Node>;

export const PCFSoftShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
    shadow: Node,
) => ShaderNodeObject<Node>;

export const VSMShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
) => ShaderNodeObject<Node>;

export const getShadowMaterial: (light: Light) => NodeMaterial;

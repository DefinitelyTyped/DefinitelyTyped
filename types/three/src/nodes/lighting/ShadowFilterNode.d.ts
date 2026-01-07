import { Light } from "../../lights/Light.js";
import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import Node from "../core/Node.js";

export const BasicShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
) => Node;

export const PCFShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
    shadow: Node,
) => Node;

export const PCFSoftShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
    shadow: Node,
) => Node;

export const VSMShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
) => Node;

export const getShadowMaterial: (light: Light) => NodeMaterial;

export const disposeShadowMaterial: (light: Light) => void;

import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const getDirection: (uv_immutable: Node, face: Node) => ShaderNodeObject<Node>;

export const textureCubeUV: (
    envMap: Node,
    sampleDir_immutable: Node,
    roughness_immutable: Node,
    CUBEUV_TEXEL_WIDTH: Node,
    CUBEUV_TEXEL_HEIGHT: Node,
    CUBEUV_MAX_MIP: Node,
) => ShaderNodeObject<Node>;

export const blur: (
    n: Node,
    latitudinal: Node,
    poleAxis: Node,
    outputDirection: Node,
    weights: Node,
    samples: Node,
    dTheta: Node,
    mipInt: Node,
    envMap: Node,
    CUBEUV_TEXEL_WIDTH: Node,
    CUBEUV_TEXEL_HEIGHT: Node,
    CUBEUV_MAX_MIP: Node,
) => ShaderNodeObject<Node>;

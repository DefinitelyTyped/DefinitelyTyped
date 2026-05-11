import Node from "../core/Node.js";

export const getDirection: (uv_immutable: Node, face: Node) => Node;

export const textureCubeUV: (
    envMap: Node,
    sampleDir_immutable: Node,
    roughness_immutable: Node,
    CUBEUV_TEXEL_WIDTH: Node,
    CUBEUV_TEXEL_HEIGHT: Node,
    CUBEUV_MAX_MIP: Node,
) => Node;

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
) => Node;

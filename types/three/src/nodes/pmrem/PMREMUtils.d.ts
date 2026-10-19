import Node from "../core/Node.js";

export const textureCubeUV: (
    envMap: Node,
    sampleDir_immutable: Node,
    roughness_immutable: Node,
    CUBEUV_TEXEL_WIDTH: Node,
    CUBEUV_TEXEL_HEIGHT: Node,
    CUBEUV_MAX_MIP: Node,
) => Node;

export const sphericalGaussianBlur: (
    SAMPLES: Node,
    sigma: Node,
    outputDirection: Node,
    mipInt: Node,
    envMap: Node,
    CUBEUV_TEXEL_WIDTH: Node,
    CUBEUV_TEXEL_HEIGHT: Node,
    CUBEUV_MAX_MIP: Node,
) => Node;

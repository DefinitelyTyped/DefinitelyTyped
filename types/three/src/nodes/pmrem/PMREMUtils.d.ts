import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const getDirection: (uv_immutable: NodeRepresentation, face: NodeRepresentation) => ShaderNodeObject<Node>;

export const textureCubeUV: (
    envMap: NodeRepresentation,
    sampleDir_immutable: NodeRepresentation,
    roughness_immutable: NodeRepresentation,
    CUBEUV_TEXEL_WIDTH: NodeRepresentation,
    CUBEUV_TEXEL_HEIGHT: NodeRepresentation,
    CUBEUV_MAX_MIP: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const blur: (
    n: NodeRepresentation,
    latitudinal: NodeRepresentation,
    poleAxis: NodeRepresentation,
    outputDirection: NodeRepresentation,
    weights: NodeRepresentation,
    samples: NodeRepresentation,
    dTheta: NodeRepresentation,
    mipInt: NodeRepresentation,
    envMap: NodeRepresentation,
    CUBEUV_TEXEL_WIDTH: NodeRepresentation,
    CUBEUV_TEXEL_HEIGHT: NodeRepresentation,
    CUBEUV_MAX_MIP: NodeRepresentation,
) => ShaderNodeObject<Node>;

import Node from "../core/Node.js";

export const roughnessToMip: (roughness: Node | number, maxLod: Node | number) => Node<"float">;

export const sphericalGaussianBlur: (params: {
    SAMPLES: Node | number;
    sigma: Node;
    direction: Node;
    envMap: Node;
}) => Node<"vec4">;

export const ggxConvolution: (params: {
    roughness: Node;
    lodBias: Node;
    envMap: Node;
    direction: Node;
    GGX_SAMPLES: Node | number;
}) => Node<"vec4">;

export const ggxIntegration: (params: {
    roughness: Node;
    sourceLod: Node;
    sourceSize: Node;
    envMap: Node;
    direction: Node;
}) => Node<"vec4">;

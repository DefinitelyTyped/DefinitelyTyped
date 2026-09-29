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

export const VSMShadowFilter: (
    depthTexture: Node,
    shadowCoord: Node,
) => Node;

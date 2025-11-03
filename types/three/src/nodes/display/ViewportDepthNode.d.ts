import Node from "../core/Node.js";

declare class ViewportDepthNode extends Node {
    scope: ViewportDepthNodeScope;
    valueNode: Node;

    readonly isViewportDepthNode: true;

    constructor(scope: ViewportDepthNodeScope, valueNode?: Node | null);

    static DEPTH_BASE: "depthBase";
    static DEPTH: "depth";
    static LINEAR_DEPTH: "linearDepth";
}

export type ViewportDepthNodeScope =
    | typeof ViewportDepthNode.DEPTH_BASE
    | typeof ViewportDepthNode.DEPTH
    | typeof ViewportDepthNode.LINEAR_DEPTH;

export default ViewportDepthNode;

export const viewZToOrthographicDepth: (viewZ: Node, near: Node, far: Node) => Node;

export const orthographicDepthToViewZ: (depth: Node, near: Node, far: Node) => Node;

export const viewZToPerspectiveDepth: (viewZ: Node, near: Node, far: Node) => Node;

export const perspectiveDepthToViewZ: (depth: Node, near: Node, far: Node) => Node;

export const viewZToLogarithmicDepth: (viewZ: Node, near: Node, far: Node) => Node;

export const logarithmicDepthToViewZ: (depth: Node, near: Node, far: Node) => Node;

export const depth: ViewportDepthNode;
export const linearDepth: (valueNode?: Node | null) => ViewportDepthNode;
export const viewportLinearDepth: ViewportDepthNode;

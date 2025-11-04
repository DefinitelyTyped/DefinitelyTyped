import Node from "../core/Node.js";

export type ScreenNodeScope =
    | typeof ScreenNode.COORDINATE
    | typeof ScreenNode.VIEWPORT
    | typeof ScreenNode.SIZE
    | typeof ScreenNode.UV
    | typeof ScreenNode.DPR;

declare class ScreenNode extends Node {
    scope: ScreenNodeScope;

    readonly isViewportNode: true;

    constructor(scope: ScreenNodeScope);

    static COORDINATE: "coordinate";
    static VIEWPORT: "viewport";
    static SIZE: "size";
    static UV: "uv";
    static DPR: "dpr";
}

export default ScreenNode;

// Screen

export const screenDPR: ScreenNode;
export const screenUV: ScreenNode;
export const screenSize: ScreenNode;
export const screenCoordinate: ScreenNode;

// Viewport

export const viewport: ScreenNode;
export const viewportSize: Node;
export const viewportCoordinate: Node;
export const viewportUV: Node;

// Deprecated

/**
 * @deprecated "viewportResolution" is deprecated. Use "screenSize" instead.
 */
export const viewportResolution: ScreenNode;

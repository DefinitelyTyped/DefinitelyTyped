import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type ScreenNodeScope =
    | typeof ScreenNode.COORDINATE
    | typeof ScreenNode.VIEWPORT
    | typeof ScreenNode.SIZE
    | typeof ScreenNode.UV;

declare class ScreenNode extends Node {
    scope: ScreenNodeScope;

    readonly isViewportNode: true;

    constructor(scope: ScreenNodeScope);

    static COORDINATE: "coordinate";
    static VIEWPORT: "viewport";
    static SIZE: "size";
    static UV: "uv";
}

export default ScreenNode;

// Screen

export const screenUV: ShaderNodeObject<ScreenNode>;
export const screenSize: ShaderNodeObject<ScreenNode>;
export const screenCoordinate: ShaderNodeObject<ScreenNode>;

// Viewport

export const viewport: ShaderNodeObject<ScreenNode>;
export const viewportSize: ShaderNodeObject<Node>;
export const viewportCoordinate: ShaderNodeObject<Node>;
export const viewportUV: ShaderNodeObject<Node>;

// Deprecated

/**
 * @deprecated "viewportResolution" is deprecated. Use "screenSize" instead.
 */
export const viewportResolution: ShaderNodeObject<ScreenNode>;

/**
 * @deprecated "viewportTopLeft" is deprecated. Use "viewportUV" instead.
 */
export const viewportTopLeft: ShaderNodeObject<ScreenNode>;

/**
 * @deprecated "viewportBottomLeft" is deprecated. Use "viewportUV.flipY()" instead.
 */
export const viewportBottomLeft: ShaderNodeObject<ScreenNode>;

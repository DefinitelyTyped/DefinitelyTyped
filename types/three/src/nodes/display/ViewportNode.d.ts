import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type ViewportNodeScope =
    | typeof ViewportNode.COORDINATE
    | typeof ViewportNode.RESOLUTION
    | typeof ViewportNode.VIEWPORT
    | typeof ViewportNode.UV;

declare class ViewportNode extends Node {
    scope: ViewportNodeScope;

    readonly isViewportNode: true;

    constructor(scope: ViewportNodeScope);

    static COORDINATE: "coordinate";
    static RESOLUTION: "resolution";
    static VIEWPORT: "viewport";
    static UV: "uv";
}

export default ViewportNode;

export const viewportCoordinate: ShaderNodeObject<ViewportNode>;
export const viewportResolution: ShaderNodeObject<ViewportNode>;
export const viewport: ShaderNodeObject<ViewportNode>;
export const viewportUV: ShaderNodeObject<ViewportNode>;

/**
 * @deprecated "viewportTopLeft" is deprecated. Use "viewportUV" instead.
 */
export const viewportTopLeft: ShaderNodeObject<ViewportNode>;

/**
 * @deprecated "viewportBottomLeft" is deprecated. Use "viewportUV.flipY()" instead.
 */
export const viewportBottomLeft: ShaderNodeObject<ViewportNode>;

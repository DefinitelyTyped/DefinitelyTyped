import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ViewportDepthNode extends Node {
    scope: ViewportDepthNodeScope;
    valueNode: Node;

    readonly isViewportDepthNode: true;

    constructor(scope: ViewportDepthNodeScope, valueNode?: Node | null);

    static DEPTH: "depth";
    static DEPTH_TEXTURE: "depthTexture";
    static DEPTH_PIXEL: "depthPixel";
}

export type ViewportDepthNodeScope =
    | typeof ViewportDepthNode.DEPTH
    | typeof ViewportDepthNode.DEPTH_TEXTURE
    | typeof ViewportDepthNode.DEPTH_PIXEL;

export const viewZToOrthographicDepth: (viewZ: Node, near: Node, far: Node) => Node;

export const orthographicDepthToViewZ: (depth: Node, near: Node, far: Node) => Node;

export const viewZToPerspectiveDepth: (viewZ: Node, near: Node, far: Node) => Node;

export const perspectiveDepthToViewZ: (depth: Node, near: Node, far: Node) => Node;

export const depth: ShaderNodeObject<ViewportDepthNode>;
export const depthTexture: (valueNode?: Node | null) => ShaderNodeObject<ViewportDepthNode>;
export const depthPixel: ShaderNodeObject<ViewportDepthNode>;

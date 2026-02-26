import Node from "../core/Node.js";

export type ScreenNodeScope =
    | typeof ScreenNode.COORDINATE
    | typeof ScreenNode.VIEWPORT
    | typeof ScreenNode.SIZE
    | typeof ScreenNode.UV
    | typeof ScreenNode.DPR;

interface ScreenNodeInterface {
    scope: ScreenNodeScope;

    readonly isViewportNode: true;
}

declare const ScreenNode: {
    new(scope: typeof ScreenNode.COORDINATE): ScreenNode<"vec2">;
    new(scope: typeof ScreenNode.VIEWPORT): ScreenNode<"vec4">;
    new(scope: typeof ScreenNode.SIZE): ScreenNode<"vec2">;
    new(scope: typeof ScreenNode.UV): ScreenNode<"vec2">;
    new(scope: typeof ScreenNode.DPR): ScreenNode<"float">;

    COORDINATE: "coordinate";
    VIEWPORT: "viewport";
    SIZE: "size";
    UV: "uv";
    DPR: "dpr";
};

type ScreenNode<TValue> = Node<TValue> & ScreenNodeInterface;

export default ScreenNode;

// Screen

export const screenDPR: ScreenNode<"float">;
export const screenUV: ScreenNode<"vec2">;
export const screenSize: ScreenNode<"vec2">;
export const screenCoordinate: ScreenNode<"vec2">;

// Viewport

export const viewport: ScreenNode<"vec4">;
export const viewportSize: Node<"vec2">;
export const viewportCoordinate: Node<"vec2">;
export const viewportUV: Node<"vec2">;

// Deprecated

/**
 * @deprecated "viewportResolution" is deprecated. Use "screenSize" instead.
 */
export const viewportResolution: Node<"vec2">;

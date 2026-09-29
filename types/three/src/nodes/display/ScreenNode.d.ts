import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

export type ScreenNodeScope =
    | typeof ScreenNode.COORDINATE
    | typeof ScreenNode.VIEWPORT
    | typeof ScreenNode.SIZE
    | typeof ScreenNode.UV;

interface ScreenNodeInterface {
    scope: ScreenNodeScope;

    readonly isViewportNode: true;
}

declare const ScreenNode: {
    new(scope: typeof ScreenNode.COORDINATE): ScreenNode<"vec2">;
    new(scope: typeof ScreenNode.VIEWPORT): ScreenNode<"vec4">;
    new(scope: typeof ScreenNode.SIZE): ScreenNode<"vec2">;
    new(scope: typeof ScreenNode.UV): ScreenNode<"vec2">;

    COORDINATE: "coordinate";
    VIEWPORT: "viewport";
    SIZE: "size";
    UV: "uv";
};

type ScreenNode<TValue> = Node<TValue> & ScreenNodeInterface;

export default ScreenNode;

// Screen

export const screenDPR: UniformNode<"float", number>;
export const screenUV: ScreenNode<"vec2">;
export const screenSize: ScreenNode<"vec2">;
export const screenCoordinate: ScreenNode<"vec2">;

// Viewport

export const viewport: ScreenNode<"vec4">;
export const viewportSize: Node<"vec2">;
export const viewportCoordinate: Node<"vec2">;
export const viewportUV: Node<"vec2">;

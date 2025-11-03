import { LightsNode, Node } from "three/webgpu";

export const circleIntersectsAABB: (
    circleCenter: Node,
    radius: Node,
    minBounds: Node,
    maxBounds: Node,
) => Node;

declare class TiledLightsNode extends LightsNode {
    constructor(maxLights?: number, tileSize?: number);

    updateLightsTexture(): void;

    getBlock(block?: number): Node;

    setSize(width: number, height: number): this;
}

export default TiledLightsNode;

export const tiledLights: (maxLights?: number, tileSize?: number) => TiledLightsNode;

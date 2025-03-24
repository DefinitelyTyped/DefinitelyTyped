import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { LightsNode, Node } from "three/webgpu";

export const circleIntersectsAABB: (
    circleCenter: NodeRepresentation,
    radius: NodeRepresentation,
    minBounds: NodeRepresentation,
    maxBounds: NodeRepresentation,
) => ShaderNodeObject<Node>;

declare class TiledLightsNode extends LightsNode {
    constructor(maxLights?: number, tileSize?: number);

    updateLightsTexture(): void;

    getBlock(block?: number): ShaderNodeObject<Node>;

    setSize(width: number, height: number): this;
}

export default TiledLightsNode;

export const tiledLights: (maxLights?: number, tileSize?: number) => ShaderNodeObject<TiledLightsNode>;

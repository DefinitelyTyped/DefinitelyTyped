import { Camera, Node, TempNode, TextureNode } from "three/webgpu";

declare class TRAANode extends TempNode {
    readonly isTRAANode: true;

    beautyNode: TextureNode;
    depthNode: TextureNode;
    velocityNode: TextureNode;
    camera: Camera;

    depthThreshold: number;
    edgeDepthDiff: number;
    maxVelocityLength: number;
    useSubpixelCorrection: boolean;

    constructor(beautyNode: TextureNode, depthNode: TextureNode, velocityNode: TextureNode, camera: Camera);
}

export default TRAANode;

export const traa: (
    beautyNode: Node,
    depthNode: TextureNode,
    velocityNode: TextureNode,
    camera: Camera,
) => TRAANode;

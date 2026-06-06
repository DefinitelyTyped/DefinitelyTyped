import { Camera, TempNode, TextureNode } from "three/webgpu";

declare class TAAUNode extends TempNode<"vec4"> {
    readonly isTAAUNode: boolean;

    beautyNode: TextureNode;
    depthNode: TextureNode;
    velocityNode: TextureNode;
    camera: Camera;

    depthThreshold: number;
    edgeDepthDiff: number;
    maxVelocityLength: number;
    currentFrameWeight: number;

    constructor(beautyNode: TextureNode, depthNode: TextureNode, velocityNode: TextureNode, camera: Camera);

    getTextureNode(): TextureNode;
    setSize(outputWidth: number, outputHeight: number): void;
    setViewOffset(inputWidth: number, inputHeight: number): void;
    clearViewOffset(): void;
}

export default TAAUNode;

export const taau: (
    beautyNode: TextureNode,
    depthNode: TextureNode,
    velocityNode: TextureNode,
    camera: Camera,
) => TAAUNode;

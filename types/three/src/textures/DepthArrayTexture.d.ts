import { DepthTexture } from "./DepthTexture.js";

declare class DepthArrayTexture extends DepthTexture {
    readonly isDepthArrayTexture: true;
    layerUpdates: Set<number>;

    constructor(width?: number, height?: number, depth?: number);

    addLayerUpdate(layerIndex: number): void;

    clearLayerUpdates(): void;
}

export { DepthArrayTexture };

import { Light, ShadowBaseNode } from "three/webgpu";

export interface TileShadeNodeConfig {
    tilesX?: number | undefined;
    tilesY?: number | undefined;
    resolution?: { width: number; height: number };
    debug?: boolean | undefined;
}

declare class TileShadowNode extends ShadowBaseNode {
    constructor(light: Light, options?: TileShadeNodeConfig);
}

export { TileShadowNode };

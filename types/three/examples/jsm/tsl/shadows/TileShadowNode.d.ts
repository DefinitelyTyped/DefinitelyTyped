import { Light, ShadowBaseNode, TextureDataType } from "three/webgpu";

export interface TileShadeNodeConfig {
    tilesX?: number | undefined;
    tilesY?: number | undefined;
    resolution?: { width: number; height: number };
    depthType?: TextureDataType | undefined;
    debug?: boolean | undefined;
}

declare class TileShadowNode extends ShadowBaseNode {
    constructor(light: Light, options?: TileShadeNodeConfig);
}

export { TileShadowNode };

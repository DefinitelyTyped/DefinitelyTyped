import Layer, { LayerOptions } from "./Layer";

// TODO: Missing properties

export interface ElevationLayerOptions extends LayerOptions {
    noDataValue?: number;
    clampValues?: {
        min?: number;
        max?: number;
    };
    scale?: number;
    useColorTextureElevation?: boolean;
    colorTextureElevationMinZ?: number;
    colorTextureElevationMaxZ?: number;
}

declare class ElevationLayer extends Layer {
    constructor(id: string, config?: ElevationLayerOptions);

    readonly isElevationLayer: boolean;

    noDataValue?: number;
    scale: number;

    // setupRasterNode(node: TileMesh): RasterElevationTile; TODO in doc
}

export default ElevationLayer;

// RasterElevationTile
// id: boolean
// opacity: boolean
// visible: boolean
// useRgbaTextureElevation: boolean
// useColorTextureElevation: boolean
// bias: number
// mode: MODE
// noDataValue: number;
// zmin: number
// zmax: number
// scale: number

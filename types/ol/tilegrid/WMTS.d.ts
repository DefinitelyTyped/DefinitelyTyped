import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { Size } from 'ol/size';
import TileGrid from 'ol/tilegrid/TileGrid';
export function createFromCapabilitiesMatrixSet(matrixSet: { [key: string]: any }, opt_extent?: Extent, opt_matrixLimits?: { [key: string]: any }[]): WMTSTileGrid;
export interface Options {
    extent?: Extent;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[];
    tileSize?: number | Size;
    tileSizes?: Size[];
    widths?: number[];
}
export default class WMTSTileGrid extends TileGrid {
    constructor(options: Options);
    getMatrixId(z: number): string;
    getMatrixIds(): string[];
}

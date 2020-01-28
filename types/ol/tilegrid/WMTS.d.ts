import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import { Size } from '../size';
import TileGrid from './TileGrid';

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
export function createFromCapabilitiesMatrixSet(
    matrixSet: any,
    opt_extent?: Extent,
    opt_matrixLimits?: object[],
): WMTSTileGrid;

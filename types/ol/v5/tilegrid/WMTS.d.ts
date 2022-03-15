import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import { Size } from '../size';
import TileGrid from './TileGrid';

export interface Options {
    extent?: Extent | undefined;
    origin?: Coordinate | undefined;
    origins?: Coordinate[] | undefined;
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[] | undefined;
    tileSize?: number | Size | undefined;
    tileSizes?: Size[] | undefined;
    widths?: number[] | undefined;
}
export default class WMTSTileGrid extends TileGrid {
    constructor(options: Options);
    getMatrixId(z: number): string;
    getMatrixIds(): string[];
}
export function createFromCapabilitiesMatrixSet(matrixSet: any, opt_extent?: Extent, opt_matrixLimits?: object[]): WMTSTileGrid;

import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import Units from 'ol/proj/Units';
import TileGrid from 'ol/tilegrid/TileGrid';
export interface Options {
    code: string;
    units?: Units | string;
    extent?: Extent;
    axisOrientation?: string;
    global?: boolean;
    metersPerUnit?: number;
    worldExtent?: Extent;
    getPointResolution?: ((param0: number, param1: Coordinate) => number);
}
export default class Projection {
    constructor(options: Options);
    getUnits(): Units;
    canWrapX(): boolean;
    getCode(): string;
    getDefaultTileGrid(): TileGrid;
    getExtent(): Extent;
    getMetersPerUnit(): number;
    getPointResolutionFunc(): ((param0: number, param1: Coordinate) => number);
    getAxisOrientation(): string;
    getWorldExtent(): Extent;
    isGlobal(): boolean;
    setDefaultTileGrid(tileGrid: TileGrid): void;
    setExtent(extent: Extent): void;
    setGetPointResolution(func: ((param0: number, param1: Coordinate) => number)): void;
    setGlobal(global: boolean): void;
    setWorldExtent(worldExtent: Extent): void;
}

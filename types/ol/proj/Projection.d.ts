import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import TileGrid from '../tilegrid/TileGrid';
import Units from './Units';

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
    canWrapX(): boolean;
    getAxisOrientation(): string;
    getCode(): string;
    getDefaultTileGrid(): TileGrid;
    getExtent(): Extent;
    getMetersPerUnit(): number;
    getPointResolutionFunc(): ((param0: number, param1: Coordinate) => number);
    getUnits(): Units;
    getWorldExtent(): Extent;
    isGlobal(): boolean;
    setDefaultTileGrid(tileGrid: TileGrid): void;
    setExtent(extent: Extent): void;
    setGetPointResolution(func: ((param0: number, param1: Coordinate) => number)): void;
    setGlobal(global: boolean): void;
    setWorldExtent(worldExtent: Extent): void;
}

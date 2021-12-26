import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import TileGrid from '../tilegrid/TileGrid';
import Units from './Units';

export interface Options {
    code: string;
    units?: Units | string | undefined;
    extent?: Extent | undefined;
    axisOrientation?: string | undefined;
    global?: boolean | undefined;
    metersPerUnit?: number | undefined;
    worldExtent?: Extent | undefined;
    getPointResolution?: ((p0: number, p1: Coordinate) => number) | undefined;
}
export default class Projection {
    constructor(options: Options);
    canWrapX(): boolean;
    getAxisOrientation(): string;
    getCode(): string;
    getDefaultTileGrid(): TileGrid;
    getExtent(): Extent;
    getMetersPerUnit(): number | undefined;
    getPointResolutionFunc(): (p0: number, p1: Coordinate) => number | undefined;
    getUnits(): Units;
    getWorldExtent(): Extent;
    isGlobal(): boolean;
    setDefaultTileGrid(tileGrid: TileGrid): void;
    setExtent(extent: Extent): void;
    setGetPointResolution(func: (p0: number, p1: Coordinate) => number): void;
    setGlobal(global: boolean): void;
    setWorldExtent(worldExtent: Extent): void;
}

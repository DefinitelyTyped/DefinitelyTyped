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
    getPointResolution?: (p0: number, p1: Coordinate) => number;
}
export default class Projection {
    constructor(options: Options);
    canWrapX(): boolean;
    /**
     * Get the axis orientation of this projection.
     * Example values are:
     * enu - the default easting, northing, elevation.
     * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
     *     or south orientated transverse mercator.
     * wnu - westing, northing, up - some planetary coordinate systems have
     *     "west positive" coordinate systems
     */
    getAxisOrientation(): string;
    /**
     * Get the code for this projection, e.g. 'EPSG:4326'.
     */
    getCode(): string;
    getDefaultTileGrid(): TileGrid;
    /**
     * Get the validity extent for this projection.
     */
    getExtent(): Extent;
    /**
     * Get the amount of meters per unit of this projection.  If the projection is
     * not configured with metersPerUnit or a units identifier, the return is
     * undefined.
     */
    getMetersPerUnit(): number | undefined;
    /**
     * Get the custom point resolution function for this projection (if set).
     */
    getPointResolutionFunc(): (p0: number, p1: Coordinate) => number | undefined;
    /**
     * Get the units of this projection.
     */
    getUnits(): Units;
    /**
     * Get the world extent for this projection.
     */
    getWorldExtent(): Extent;
    /**
     * Is this projection a global projection which spans the whole world?
     */
    isGlobal(): boolean;
    setDefaultTileGrid(tileGrid: TileGrid): void;
    /**
     * Set the validity extent for this projection.
     */
    setExtent(extent: Extent): void;
    /**
     * Set the getPointResolution function (see {@link module:ol/proj~getPointResolution}
     * for this projection.
     */
    setGetPointResolution(func: (p0: number, p1: Coordinate) => number): void;
    /**
     * Set if the projection is a global projection which spans the whole world
     */
    setGlobal(global: boolean): void;
    /**
     * Set the world extent for this projection.
     */
    setWorldExtent(worldExtent: Extent): void;
}

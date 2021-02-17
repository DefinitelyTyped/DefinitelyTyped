import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import Projection from '../proj/Projection';
import Tile from '../Tile';
import { TileCoord } from '../tilecoord';
import TileState from '../TileState';
import TileSource from './Tile';
import { Config } from './TileJSON';

export interface Options {
    preemptive?: boolean;
    jsonp?: boolean;
    tileJSON?: Config;
    url?: string;
}
export interface UTFGridJSON {
    grid: string[];
    keys: string[];
    data?: { [key: string]: object };
}
export class CustomTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        src: string,
        extent: Extent,
        preemptive: boolean,
        jsonp: boolean,
    );
    /**
     * Calls the callback (synchronously by default) with the available data
     * for given coordinate (or null if not yet loaded).
     */
    forDataAtCoordinate(coordinate: Coordinate, callback: (p0: any) => void, opt_request?: boolean): void;
    /**
     * Synchronously returns data at given coordinate (if available).
     */
    getData(coordinate: Coordinate): any;
    /**
     * Get the image element for this tile.
     */
    getImage(): HTMLImageElement;
    /**
     * Return the key to be used for all tiles in the source.
     */
    getKey(): string;
    load(): void;
}
export default class UTFGrid extends TileSource {
    constructor(options: Options);
    protected handleTileJSONError(): void;
    /**
     * TODO: very similar to ol/source/TileJSON#handleTileJSONResponse
     */
    protected handleTileJSONResponse(tileJSON: Config): void;
    /**
     * Calls the callback (synchronously by default) with the available data
     * for given coordinate and resolution (or null if not yet loaded or
     * in case of an error).
     */
    forDataAtCoordinateAndResolution(
        coordinate: Coordinate,
        resolution: number,
        callback: (p0: any) => void,
        opt_request?: boolean,
    ): void;
    /**
     * Return the template from TileJSON.
     */
    getTemplate(): string | undefined;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): CustomTile;
    /**
     * Marks a tile coord as being used, without triggering a load.
     */
    useTile(z: number, x: number, y: number): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}

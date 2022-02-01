import { ObjectEvent } from '../Object';
import Tile from '../Tile';
import TileState from '../TileState';
import { NearestDirectionFunction } from '../array';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Projection from '../proj/Projection';
import { TileCoord } from '../tilecoord';
import TileSource from './Tile';
import { Config } from './TileJSON';

export type TUTFGridBaseEventTypes = 'change' | 'error';
export type TUTFGridObjectEventTypes = 'propertychange';
export interface Options {
    preemptive?: boolean | undefined;
    jsonp?: boolean | undefined;
    tileJSON?: Config | undefined;
    url?: string | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export interface UTFGridJSON {
    grid: string[];
    keys: string[];
    data?: Record<string, object> | undefined;
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
    on(type: TUTFGridBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TUTFGridBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TUTFGridBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TUTFGridBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TUTFGridBaseEventTypes | TUTFGridBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TUTFGridObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TUTFGridObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TUTFGridObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TUTFGridObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TUTFGridObjectEventTypes | TUTFGridObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}

import ImageTile from '../ImageTile';
import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';
import WMSServerType from './WMSServerType';

export type TTileWMSBaseEventTypes = 'change' | 'error';
export type TTileWMSObjectEventTypes = 'propertychange';
export type TTileWMSTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    params: Record<string, any>;
    gutter?: number | undefined;
    hidpi?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileClass?: typeof ImageTile | undefined;
    tileGrid?: TileGrid | undefined;
    serverType?: WMSServerType | string | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    url?: string | undefined;
    urls?: string[] | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class TileWMS extends TileImage {
    constructor(opt_options?: Options);
    /**
     * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
     * projection. Return undefined if the GetFeatureInfo URL cannot be
     * constructed.
     */
    getFeatureInfoUrl(
        coordinate: Coordinate,
        resolution: number,
        projection: ProjectionLike,
        params: any,
    ): string | undefined;
    getGutter(): number;
    /**
     * Return the GetLegendGraphic URL, optionally optimized for the passed
     * resolution and possibly including any passed specific parameters. Returns
     * undefined if the GetLegendGraphic URL cannot be constructed.
     */
    getLegendUrl(resolution?: number, params?: any): string | undefined;
    /**
     * Get the user-provided params, i.e. those passed to the constructor through
     * the "params" option, and possibly updated using the updateParams method.
     */
    getParams(): any;
    /**
     * Get the tile pixel ratio for this source.
     */
    getTilePixelRatio(pixelRatio: number): number;
    /**
     * Update the user-provided params.
     */
    updateParams(params: any): void;
    on(type: TTileWMSBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileWMSBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileWMSBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileWMSBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileWMSBaseEventTypes | TTileWMSBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTileWMSObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileWMSObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileWMSObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileWMSObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TTileWMSObjectEventTypes | TTileWMSObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TTileWMSTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TTileWMSTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TTileWMSTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TTileWMSTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TTileWMSTileSourceEventTypes | TTileWMSTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}

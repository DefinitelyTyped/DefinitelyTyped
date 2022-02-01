import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { TileCoord } from '../tilecoord';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

export type TBingMapsBaseEventTypes = 'change' | 'error';
export type TBingMapsObjectEventTypes = 'propertychange';
export type TBingMapsTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface BingMapsImageryMetadataResponse {
    statusCode: number;
    statusDescription: string;
    authenticationResultCode: string;
    resourceSets: ResourceSet[];
}
export interface CoverageArea {
    zoomMin: number;
    zoomMax: number;
    bbox: number[];
}
export interface ImageryProvider {
    coverageAreas: CoverageArea[];
    attribution?: string | undefined;
}
export interface Options {
    cacheSize?: number | undefined;
    hidpi?: boolean | undefined;
    culture?: string | undefined;
    key: string;
    imagerySet: string;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    maxZoom?: number | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export interface Resource {
    imageHeight: number;
    imageWidth: number;
    zoomMin: number;
    zoomMax: number;
    imageUrl: string;
    imageUrlSubdomains: string[];
    imageryProviders?: ImageryProvider[] | undefined;
}
export interface ResourceSet {
    resources: Resource[];
}
export default class BingMaps extends TileImage {
    constructor(options: Options);
    /**
     * Get the api key used for this source.
     */
    getApiKey(): string;
    /**
     * Get the imagery set associated with this source.
     */
    getImagerySet(): string;
    handleImageryMetadataResponse(response: BingMapsImageryMetadataResponse): void;
    on(type: TBingMapsBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TBingMapsBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TBingMapsBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TBingMapsBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TBingMapsBaseEventTypes | TBingMapsBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TBingMapsObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TBingMapsObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TBingMapsObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TBingMapsObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TBingMapsObjectEventTypes | TBingMapsObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TBingMapsTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TBingMapsTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TBingMapsTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TBingMapsTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TBingMapsTileSourceEventTypes | TBingMapsTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
export function quadKey(tileCoord: TileCoord): string;

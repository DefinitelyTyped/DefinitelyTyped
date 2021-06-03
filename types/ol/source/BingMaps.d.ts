import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { TileCoord } from '../tilecoord';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

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
    attribution?: string;
}
export interface Options {
    cacheSize?: number;
    hidpi?: boolean;
    culture?: string;
    key: string;
    imagerySet: string;
    imageSmoothing?: boolean;
    maxZoom?: number;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    wrapX?: boolean;
    transition?: number;
}
export interface Resource {
    imageHeight: number;
    imageWidth: number;
    zoomMin: number;
    zoomMax: number;
    imageUrl: string;
    imageUrlSubdomains: string[];
    imageryProviders?: ImageryProvider[];
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
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
export function quadKey(tileCoord: TileCoord): string;

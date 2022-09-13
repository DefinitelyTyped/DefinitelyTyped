import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
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
    attribution?: string | undefined;
}
export interface Options {
    cacheSize?: number | undefined;
    hidpi?: boolean | undefined;
    culture?: string | undefined;
    key: string;
    imagerySet: string;
    maxZoom?: number | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
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
    getApiKey(): string;
    getImagerySet(): string;
    handleImageryMetadataResponse(response: BingMapsImageryMetadataResponse): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
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

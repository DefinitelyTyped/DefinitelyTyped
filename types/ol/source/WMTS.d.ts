import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import ImageTile from '../ImageTile';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import { LoadFunction, UrlFunction } from '../Tile';
import WMTSTileGrid from '../tilegrid/WMTS';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';
import WMTSRequestEncoding from './WMTSRequestEncoding';

export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    imageSmoothing?: boolean;
    tileGrid: WMTSTileGrid;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    requestEncoding?: WMTSRequestEncoding | string;
    layer: string;
    style: string;
    tileClass?: ImageTile;
    tilePixelRatio?: number;
    format?: string;
    version?: string;
    matrixSet: string;
    dimensions?: any;
    url?: string;
    tileLoadFunction?: LoadFunction;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
}
export default class WMTS extends TileImage {
    constructor(options: Options);
    createFromWMTSTemplate(template: string): UrlFunction;
    /**
     * Get the dimensions, i.e. those passed to the constructor through the
     * "dimensions" option, and possibly updated using the updateDimensions
     * method.
     */
    getDimensions(): any;
    /**
     * Return the image format of the WMTS source.
     */
    getFormat(): string;
    /**
     * Return the layer of the WMTS source.
     */
    getLayer(): string;
    /**
     * Return the matrix set of the WMTS source.
     */
    getMatrixSet(): string;
    /**
     * Return the request encoding, either "KVP" or "REST".
     */
    getRequestEncoding(): WMTSRequestEncoding;
    /**
     * Return the style of the WMTS source.
     */
    getStyle(): string;
    /**
     * Return the version of the WMTS source.
     */
    getVersion(): string;
    /**
     * Set the URLs to use for requests.
     * URLs may contain OGC conform URL Template Variables: {TileMatrix}, {TileRow}, {TileCol}.
     */
    setUrls(urls: string[]): void;
    /**
     * Update the dimensions.
     */
    updateDimensions(dimensions: any): void;
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
/**
 * Generate source options from a capabilities object.
 */
export function optionsFromCapabilities(wmtsCap: any, config: any): Options;

import Extent from "../Core/Geographic/Extent";

// export const supportedFetchers: Map<string, (url: string, options?: RequestInit) => Promise<unknown>>;
// export const supportedParsers: Map<string, any>;

export interface InformationsData {
    crs: string;
    isInverted: boolean;
}

export interface ParsingOptions {
    in: any;
    out: any;
} // TODO

// TODO: same type as openlayers
type AttributionLike = any; /* string | string[]; */

export interface SourceOptions {
    crs?: string;
    url: string;
    format?: string;
    fetcher?: (...params: any) => any; // TODO (Maybe templating)
    parser?: (...params: any) => any; // TODO (Maybe templating)
    networkOptions?: RequestInit & { crossOrigin: string };
    attribution?: AttributionLike;
    extent?: Extent;
}

declare abstract class Source implements InformationsData {
    constructor(source: SourceOptions); // TODO: Only url is mandatory, maybe crs ???

    readonly isSource: true;
    readonly uid: number;

    crs: string;
    isInverted: boolean;
    url: string;
    format: string;
    fetcher: (...params: any) => any; // TODO (Maybe templating)
    parser: (...params: any) => any; // TODO (Maybe templating)
    networkOptions: RequestInit & { crossOrigin: string };
    attribution: AttributionLike;
    whenReady: Promise<any>; // TODO: Does not seem to be consistent in itowns
    extent: Extent;

    // handlingError(err: Error): void; // TODO: Check type
    abstract urlFromExtent(extent: Extent): string;
    // requestToKey(extent: Extent): any[]; // TODO: Always tuple type ??? See inherited
    // TODO: Templating, check type, etc...
    loadData(extent: Extent, out: any): any;
    // TODO: Add type for options, only options.out.crs defined
    onLayerAdded(options: object): void;
    // TODO: Add type for options, only options.unusedCrs defined
    onLayerRemoved(options?: any): void;
    abstract extentInsideLimit(extent: Extent, zoom: number): boolean;
}

export default Source;

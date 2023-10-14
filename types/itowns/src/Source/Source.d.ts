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

export interface SourceOptions {
    crs?: string;
    url: string;
    format?: string;
    fetcher?: any; // TODO (Maybe templating)
    parser?: any; // TODO (Maybe templating)
    networkOptions?: RequestInit & { crossOrigin: string };
    attribution?: unknown;
    extent?: Extent;
}

declare abstract class Source implements InformationsData {
    constructor(source: SourceOptions); // TODO: Only url is mandatory, maybe crs ???

    readonly isSource: boolean;
    readonly isVectorSource: boolean;

    isInverted: boolean;
    uid: number;
    url: string;
    format: string;
    fetcher: any; // TODO (Maybe templating)
    networkOptions: RequestInit;
    crs: string;
    attribution: any;
    extent: Extent;
    parser: any; // TODO (Maybe templating)

    abstract extentInsideLimit(extent: Extent, zoom: number): boolean;
    // TODO: Templating, check type, etc...
    loadData(extent: Extent, out: any): any;
    // TODO: Add type for options, only options.out.crs defined
    onLayerAdded(options: object): void;
    // TODO: Add type for options, only options.unusedCrs defined
    onLayerRemoved(options?: any): void;
    abstract urlFromExtent(extent: Extent): string;

    whenReady: Promise<any>; // TODO: Does not seem to be consistent in itowns
    // handlingError(err: Error): void; // TODO: Check type
    // requestToKey(extent: Extent): any[]; // TODO: Always tuple type ??? See inherited
}

export default Source;

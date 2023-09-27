import Source, { SourceOptions } from "./Source";

export interface WFSSourceOptions extends SourceOptions {
    // Mandatory: url, typeName, crs
    url: string;
    typeName: string;
    crs: string;
    version?: string;
    zoom?: { min: number; max: number };
    vendorSpecific?: Record<string, string>;
}

declare class WFSSource extends Source {
    constructor(source: WFSSourceOptions);

    readonly isWFSSource: boolean;
    typeName: string;
    version: string;
    zoom: { min: number; max: number };
    vendorSpecific?: Record<string, string>;

    urlFromExtent(extent: any): string;
    extentInsideLimit(extent: any): any;
}
export default WFSSource;

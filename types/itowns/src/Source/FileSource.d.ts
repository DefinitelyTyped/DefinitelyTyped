import { Extent } from "../Main";
import Source, { SourceOptions } from "./Source";

export interface FileSourceOptions extends SourceOptions {
    crs: string;
    fetchedData: any;
    features: any;
}
// fetchedData: T | fetcher(string, InitRequest): T | features: T

declare class FileSource extends Source {
    isFileSource: boolean;
    fetchedData: any; // T
    whenReady: any; // Promise<T>
    zoom: {
        min: number;
        max: number;
    };

    extentInsideLimit(extent: Extent, zoom: number): boolean;
    urlFromExtent(extent: Extent): string;
}

export default FileSource;

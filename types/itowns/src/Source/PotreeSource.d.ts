import Extent from "../Core/Geographic/Extent";
import Source, { SourceOptions } from "./Source";

export interface PotreeSourceOptions extends SourceOptions {
    file: string;
}

// TODO: Use ParsingOptions template?
interface ParsingOptions {
    in: {
        pointAttributes: "LAS" | "LAZ" | string[];
    };
}

declare class PotreeSource extends Source {
    constructor(source: PotreeSourceOptions);

    file: string;
    extensionOctree: string;
    pointAttributes: "LAS" | "LAZ" | string[];
    baseurl: string;
    extension: "cin" | "bin";

    // TODO: Maybe templating on Source
    fetcher: (url: string, options?: RequestInit) => Promise<ArrayBuffer>;
    // TODO: Maybe templating on Source
    parse: (buffer: ArrayBuffer, options: ParsingOptions) => Promise<THREE.BufferGeometry>;
    // TODO: Maybe templating on Source on whenReady promise
    whenReady: Promise<any>;

    extentInsideLimit(extent: Extent, zoom: number): boolean;
    urlFromExtent(extent: Extent): string;
}

export default PotreeSource;

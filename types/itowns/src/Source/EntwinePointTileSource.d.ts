import Extent from "../Core/Geographic/Extent";
import Source, { SourceOptions } from "./Source";

interface EntwinePointTileSourceOptions extends SourceOptions {
    colorDepth?: 8 | 16 | "auto";
}

interface ParsingOptionsLAS {
    in?: {
        colorDepth?: 8 | 16 | "auto";
    };
    out?: {
        skip?: number;
    };
}

interface ParsingOptionsBin {
    in?: {
        pointAttributes?: string[];
    };
}

type ParsingOptions = ParsingOptionsLAS | ParsingOptionsBin;

declare class EntwinePointTileSource extends Source {
    constructor(config: EntwinePointTileSourceOptions);

    readonly isEntwinePointTileSource: boolean;

    colorDepth?: 8 | 16 | "auto";
    extension: "laz" | "bin";
    spacing: number;
    boundsConforming: [number, number, number, number, number, number];
    span: number;

    // TODO: Maybe templating on Source
    fetcher: (url: string, options?: RequestInit) => Promise<ArrayBuffer>;
    // TODO: Maybe templating on Source
    parse: (buffer: ArrayBuffer, options: ParsingOptions) => Promise<THREE.BufferGeometry>;
    // TODO: Maybe templating on Source on whenReady promise
    whenReady: Promise<EntwinePointTileSource>;

    extentInsideLimit(extent: Extent, zoom: number): boolean;
    urlFromExtent(extent: Extent): string;
}

export default EntwinePointTileSource;

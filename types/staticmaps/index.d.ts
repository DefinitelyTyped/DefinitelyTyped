// Type definitions for staticmaps 1.1
// Project: https://github.com/StephanGeorg/staticmaps#readme
// Definitions by: Olivier Kamers <https://github.com/olivierkamers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { JpegOptions, OutputOptions, PngOptions, WebpOptions } from 'sharp';

declare class StaticMaps {
    constructor(options: StaticMapsOptions);

    addLine: (options: AddLineOptions) => void;
    addPolygon: (options: AddPolygonOptions) => void;
    addMarker: (options: AddMarkerOptions) => void;
    addText: (options: AddTextOptions) => void;
    render: (center?: ReadonlyArray<number>, zoom?: number) => Promise<void>;
    image: StaticMapsImage;
}

declare class StaticMapsImage {
    constructor();

    image: Buffer;
    save: (fileName?: string, outputOptions?: OutputOptions | PngOptions | JpegOptions | WebpOptions) => Promise<void>;
    buffer: (mime?: string, outputOptions?: OutputOptions | PngOptions | JpegOptions | WebpOptions) => Promise<Buffer>;
}

export interface StaticMapsOptions {
    width: number;
    height: number;
    paddingX?: number;
    paddingY?: number;
    tileUrl?: string;
    tileSize?: number;
    tileRequestTimeout?: number;
    tileRequestHeader?: object;
    maxZoom?: number;
    reverseY?: boolean;
}

export interface AddMarkerOptions {
    coord: [number, number];
    img: string;
    height: number;
    width: number;
    offsetX?: number;
    offsetY?: number;
}

export interface AddLineOptions {
    coords: ReadonlyArray<[number, number]>;
    color?: string;
    width?: number;
}

export interface AddPolygonOptions extends AddLineOptions {
    fill?: string;
}

export interface AddTextOptions {
    coord: [number, number];
    text: string;
    font?: string;
    size?: number;
    color?: string;
    width?: number;
    fill?: string;
}

export default StaticMaps;

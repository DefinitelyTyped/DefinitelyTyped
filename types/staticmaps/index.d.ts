// Type definitions for staticmaps 1.12
// Project: https://github.com/StephanGeorg/staticmaps#readme
// Definitions by: Olivier Kamers <https://github.com/olivierkamers>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { FitEnum, JpegOptions, OutputOptions, PngOptions, WebpOptions } from 'sharp';

declare class StaticMaps {
    constructor(options: StaticMaps.StaticMapsOptions);

    addLine: (options: StaticMaps.AddLineOptions) => void;
    addPolygon: (options: StaticMaps.AddPolygonOptions) => void;
    addMultiPolygon: (options: StaticMaps.AddMultiPolygonOptions) => void;
    addMarker: (options: StaticMaps.AddMarkerOptions) => void;
    addText: (options: StaticMaps.AddTextOptions) => void;
    addCircle: (options: StaticMaps.AddCircleOptions) => void;
    render: (center?: ReadonlyArray<number>, zoom?: number) => Promise<void>;
    image: StaticMapsImage;
}

declare class StaticMapsImage {
    image: Buffer;
    save: (fileName?: string, outputOptions?: OutputOptions | PngOptions | JpegOptions | WebpOptions) => Promise<void>;
    buffer: (mime?: string, outputOptions?: OutputOptions | PngOptions | JpegOptions | WebpOptions) => Promise<Buffer>;
}

declare namespace StaticMaps {
    type ZoomLevel =
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22
        | 23;

    interface StaticMapsOptions {
        width: number;
        height: number;
        paddingX?: number | undefined;
        paddingY?: number | undefined;
        tileUrl?: string | undefined;
        tileSize?: number | undefined;
        /**
         * Subdomains of tile server
         * @default []
         */
        tileSubdomains?: string[] | undefined;
        tileLayers?: LayerConfig[] | undefined;
        tileRequestTimeout?: number | undefined;
        tileRequestHeader?: object | undefined;
        /**
         * Limit concurrent connections to the tiles server
         * @default 2
         */
        tileRequestLimit?: number | undefined;
        /**
         * Defines the range of zoom levels to try
         */
        zoomRange?:
            | {
                  min?: ZoomLevel | undefined;
                  max?: ZoomLevel | undefined;
              }
            | undefined;
        /** @deprecated Use zoomRange.max instead: */
        maxZoom?: number | undefined;
        reverseY?: boolean | undefined;
    }

    type ResizeMode = keyof FitEnum;

    interface AddMarkerOptions {
        coord: [number, number];
        img: string;
        height: number;
        width: number;
        drawHeight?: number | undefined;
        drawWidth?: number | undefined;
        resizeMode?: ResizeMode | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
    }

    interface AddLineOptions {
        coords: ReadonlyArray<[number, number]>;
        color?: string | undefined;
        width?: number | undefined;
    }

    interface AddPolygonOptions extends AddLineOptions {
        fill?: string | undefined;
    }

    interface AddMultiPolygonOptions {
        coords: ReadonlyArray<Array<[number, number]>>;
        color?: string | undefined;
        width?: number | undefined;
        fill?: string | undefined;
    }

    interface AddTextOptions {
        /**
         * Anchor of the text
         * @default 'start'
         */
        anchor?: TextAnchor | undefined;
        coord: [number, number];
        text: string;
        font?: string | undefined;
        size?: number | undefined;
        color?: string | undefined;
        width?: number | undefined;
        fill?: string | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
    }

    type TextAnchor = 'start' | 'middle' | 'end';

    interface AddCircleOptions {
        coord: [number, number];
        radius: number;
        /**
         * Stroke color of the circle
         * @default '#000000BB'
         */
        color?: string | undefined;
        /**
         * Stroke width of circle
         * @default 3
         */
        width?: number | undefined;
        /**
         * Fill color of the circle
         * @default '#AA0000BB'
         */
        fill?: string | undefined;
    }

    interface LayerConfig {
        tileUrl: string;
        tileSubdomains?: string[] | undefined;
    }
}

export = StaticMaps;

// Type definitions for croppie 2.5
// Project: https://github.com/Foliotek/Croppie
// Definitions by: Connor Peet <https://github.com/connor4312>
//                 dklmuc <https://github.com/dklmuc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Croppie {
    constructor(container: HTMLElement, options?: CroppieOptions);

    bind(options: {
        url: string,
        points?: number[],
        orientation?: number,
        zoom?: number,
        useCanvas?: boolean,
    }): Promise<void>;

    result(options: ResultOptions & { type: 'base64' }): Promise<string>;
    result(options: ResultOptions & { type: 'html' }): Promise<HTMLElement>;
    result(options: ResultOptions & { type: 'blob' }): Promise<Blob>;
    result(options: ResultOptions & { type: 'canvas' }): Promise<HTMLCanvasElement>;
    result(options?: ResultOptions): Promise<HTMLCanvasElement>;

    rotate(degrees: 90 | 180 | 270 | -90 | -180 | -270): void;

    setZoom(zoom: number): void;

    destroy(): void;
}

type CropType = 'square' | 'circle';

type Format = 'jpeg' | 'png' | 'webp';

type Type = 'canvas' | 'base64' | 'html' | 'blob' | 'rawcanvas';

interface ResultOptions {
    type?: Type;
    size?: 'viewport' | 'original' | { width: number, height: number };
    format?: Format;
    quality?: number;
    circle?: boolean;
}

interface CroppieOptions {
    boundary?: { width: number, height: number };
    customClass?: string;
    enableExif?: boolean;
    enableOrientation?: boolean;
    enableZoom?: boolean;
    enforceBoundary?: boolean;
    mouseWheelZoom?: boolean;
    showZoomer?: boolean;
    viewport?: { width: number, height: number, type?: CropType };
}

export = Croppie;

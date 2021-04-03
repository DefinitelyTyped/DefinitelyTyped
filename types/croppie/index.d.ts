// Type definitions for croppie 2.6
// Project: https://github.com/Foliotek/Croppie
// Definitions by: Connor Peet <https://github.com/connor4312>
//                 dklmuc <https://github.com/dklmuc>
//                 Sarun Intaralawan <https://github.com/sarunint>
//                 Knut Erik Helgesen <https://github.com/knuthelgesen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Croppie;

export = Croppie;

declare class Croppie {
    constructor(container: HTMLElement, options?: Croppie.CroppieOptions);

    bind(options: {
        url: string,
        points?: number[],
        orientation?: number,
        zoom?: number,
        useCanvas?: boolean,
    }): Promise<void>;

    result(options: Croppie.ResultOptions & { type: 'base64' | 'canvas' }): Promise<string>;
    result(options: Croppie.ResultOptions & { type: 'html' }): Promise<HTMLElement>;
    result(options: Croppie.ResultOptions & { type: 'blob' }): Promise<Blob>;
    result(options: Croppie.ResultOptions & { type: 'rawcanvas' }): Promise<HTMLCanvasElement>;
    result(options?: Croppie.ResultOptions): Promise<HTMLCanvasElement>;

    get(): Croppie.CropData;

    rotate(degrees: 90 | 180 | 270 | -90 | -180 | -270): void;

    setZoom(zoom: number): void;

    destroy(): void;
}

declare namespace Croppie {
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
        enableResize?: boolean;
        /** @default 1.5 */
        maxZoom?: number;
        /** @default 0 */
        minZoom?: number;
        mouseWheelZoom?: boolean | 'ctrl';
        showZoomer?: boolean;
        viewport?: { width: number, height: number, type?: CropType };
    }

    interface CropData {
        points?: number[];
        orientation?: number;
        zoom?: number;
    }
}

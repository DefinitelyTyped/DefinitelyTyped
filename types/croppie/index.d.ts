export as namespace Croppie;

export = Croppie;

declare class Croppie {
    constructor(container: HTMLElement, options?: Croppie.CroppieOptions);

    bind(options: {
        url: string;
        points?: number[] | undefined;
        orientation?: number | undefined;
        zoom?: number | undefined;
        useCanvas?: boolean | undefined;
    }): Promise<void>;

    result(options: Croppie.ResultOptions & { type: "base64" | "canvas" }): Promise<string>;
    result(options: Croppie.ResultOptions & { type: "html" }): Promise<HTMLElement>;
    result(options: Croppie.ResultOptions & { type: "blob" }): Promise<Blob>;
    result(options: Croppie.ResultOptions & { type: "rawcanvas" }): Promise<HTMLCanvasElement>;
    result(options?: Croppie.ResultOptions): Promise<HTMLCanvasElement>;

    get(): Croppie.CropData;

    rotate(degrees: 90 | 180 | 270 | -90 | -180 | -270): void;

    setZoom(zoom: number): void;

    destroy(): void;
}

declare namespace Croppie {
    type CropType = "square" | "circle";

    type Format = "jpeg" | "png" | "webp";

    type Type = "canvas" | "base64" | "html" | "blob" | "rawcanvas";

    interface ResultOptions {
        type?: Type | undefined;
        size?: "viewport" | "original" | { width: number; height: number } | undefined;
        format?: Format | undefined;
        quality?: number | undefined;
        circle?: boolean | undefined;
    }

    interface CroppieOptions {
        boundary?: { width: number; height: number } | undefined;
        customClass?: string | undefined;
        enableExif?: boolean | undefined;
        enableOrientation?: boolean | undefined;
        enableZoom?: boolean | undefined;
        enforceBoundary?: boolean | undefined;
        enableResize?: boolean | undefined;
        /** @default 1.5 */
        maxZoom?: number | undefined;
        /** @default 0 */
        minZoom?: number | undefined;
        mouseWheelZoom?: boolean | "ctrl" | undefined;
        showZoomer?: boolean | undefined;
        viewport?: { width: number; height: number; type?: CropType | undefined } | undefined;
    }

    interface CropData {
        points?: number[] | undefined;
        orientation?: number | undefined;
        zoom?: number | undefined;
    }
}

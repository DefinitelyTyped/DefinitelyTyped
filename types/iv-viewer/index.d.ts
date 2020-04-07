// Type definitions for iv-viewer 2.0
// Project: https://github.com/s-yadav/iv-viewer#readme
// Definitions by: Robert Wettstädt <https://github.com/robert-wettstaedt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

interface Options {
    zoomValue?: number;
    snapView?: boolean;
    maxZoom?: number;
    refreshOnResize?: boolean;
    zoomOnMouseWheel?: boolean;
}

declare class ImageViewer {
    constructor(element: Element | null, options?: Options);
    destroy(): void;
    hideSnapView(): void;
    load(imageSrc: string, hiResImageSrc?: string): void;
    refresh(): void;
    resetZoom(animate?: boolean): void;
    showSnapView(noTimeout?: boolean): void;
    zoom(perc: number, point?: { x: number; y: number }): void;
}

declare namespace ImageViewer {
    class FullScreenViewer extends ImageViewer {
        constructor(options?: Options);
        hide: () => void;
        show: (imageSrc: string, hiResImageSrc?: string) => void;
    }

    export { ImageViewer, FullScreenViewer };
}

export = ImageViewer;

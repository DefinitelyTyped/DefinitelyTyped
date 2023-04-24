// Type definitions for animated_gif 1.0
// Project: https://github.com/sole/Animated_GIF#readme
// Definitions by: yyzclyang <https://github.com/yyzclyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Animated_GIF {
    type DitheringMethod = 'bayer' | 'floyd' | 'closest';

    interface options {
        width?: number;
        height?: number;
        sampleInterval?: number;
        numWorkers?: number;
        dithering?: DitheringMethod;
        palette?: number[];
    }
}

declare class Animated_GIF {
    constructor(options?: Animated_GIF.options);

    setSize(width: number, height: number): void;
    setDelay(delay: number): void;
    setRepeat(repeat: number | null): void;

    addFrame(element: CanvasImageSource): void;
    addFrameImageData(imageData: ImageData): void;

    onRenderProgress(callback: (percent: number) => void): void;
    isRendering(): boolean;
    getBase64GIF(callback: (gifBase64: string) => void): void;
    getBlobGIF(callback: (blob: Blob) => void): void;
    destroy(): void;
}

export = Animated_GIF;

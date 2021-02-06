// Type definitions for gif.js 0.2
// Project: https://github.com/jnordberg/gif.js#readme
// Definitions by: Carlos Precioso <https://github.com/cprecioso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export as namespace GIF;

declare namespace GIF {
    interface Options {
        repeat?: number;
        quality?: number;
        workers?: number;
        workerScript?: string;
        background?: string;
        width?: number | null;
        height?: number | null;
        transparent?: string | null;
        dither?: boolean;
        debug?: boolean;
    }

    interface AddFrameOptions {
        delay?: number;
        copy?: boolean;
        dispose?: number;
    }
}

declare class GIF extends EventEmitter {
    constructor(options?: GIF.Options);

    addFrame(
        image: CanvasImageSource | CanvasRenderingContext2D | WebGLRenderingContext | ImageData,
        options?: GIF.AddFrameOptions,
    ): void;

    on(event: 'abort' | 'start', listener: () => void): this;
    on(event: 'finished', listener: (blob: Blob, data: Uint8Array) => void): this;
    on(event: 'progress', listener: (percent: number) => void): this;

    once(event: 'abort' | 'start', listener: () => void): this;
    once(event: 'finished', listener: (blob: Blob, data: Uint8Array) => void): this;
    once(event: 'progress', listener: (percent: number) => void): this;

    render(): void;
}

export = GIF;

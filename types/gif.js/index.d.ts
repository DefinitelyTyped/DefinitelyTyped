// Type definitions for gif.js 0.2
// Project: https://github.com/jnordberg/gif.js#readme
// Definitions by: Carlos Precioso <https://github.com/cprecioso>
//                 Marco Tulio <https://github.com/TulioAbreu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export as namespace GIF;

declare namespace GIF {
    type DitherMethod =
        | 'FloydSteinberg'
        | 'FloydSteinberg-serpentine'
        | 'FalseFloydSteinberg'
        | 'FalseFloydSteinberg-serpentine'
        | 'Stucki'
        | 'Stucki-serpentine'
        | 'Atkinson'
        | 'Atkinson-serpentine';

    interface Options {
        repeat?: number;
        quality?: number;
        workers?: number;
        workerScript?: string;
        background?: string;
        width?: number | null;
        height?: number | null;
        transparent?: string | null;
        dither?: DitherMethod | boolean;
        debug?: boolean;
    }

    interface AddFrameOptions {
        delay?: number;
        copy?: boolean;
        dispose?: number;
    }
}

declare class GIF extends EventEmitter {
    readonly running: boolean;

    constructor(options?: GIF.Options);

    addFrame(
        image: CanvasImageSource | CanvasRenderingContext2D | WebGLRenderingContext | ImageData,
        options?: GIF.AddFrameOptions,
    ): void;

    setOption<K extends keyof GIF.Options>(key: K, value: GIF.Options[K]): void;
    setOptions(options: GIF.Options): void;

    on(event: 'abort' | 'start', listener: () => void): this;
    on(event: 'finished', listener: (blob: Blob, data: Uint8Array) => void): this;
    on(event: 'progress', listener: (percent: number) => void): this;

    once(event: 'abort' | 'start', listener: () => void): this;
    once(event: 'finished', listener: (blob: Blob, data: Uint8Array) => void): this;
    once(event: 'progress', listener: (percent: number) => void): this;

    render(): void;
    abort(): void;
}

export = GIF;

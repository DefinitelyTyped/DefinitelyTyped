import { EventEmitter } from "events";

export as namespace GIF;

declare namespace GIF {
    type DitherMethod =
        | "FloydSteinberg"
        | "FloydSteinberg-serpentine"
        | "FalseFloydSteinberg"
        | "FalseFloydSteinberg-serpentine"
        | "Stucki"
        | "Stucki-serpentine"
        | "Atkinson"
        | "Atkinson-serpentine";

    interface Options {
        repeat?: number | undefined;
        quality?: number | undefined;
        workers?: number | undefined;
        workerScript?: string | undefined;
        background?: string | undefined;
        width?: number | null | undefined;
        height?: number | null | undefined;
        transparent?: string | null | undefined;
        dither?: DitherMethod | boolean | undefined;
        debug?: boolean | undefined;
    }

    interface AddFrameOptions {
        delay?: number | undefined;
        copy?: boolean | undefined;
        dispose?: number | undefined;
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

    on(event: "abort" | "start", listener: () => void): this;
    on(event: "finished", listener: (blob: Blob, data: Uint8Array) => void): this;
    on(event: "progress", listener: (percent: number) => void): this;

    once(event: "abort" | "start", listener: () => void): this;
    once(event: "finished", listener: (blob: Blob, data: Uint8Array) => void): this;
    once(event: "progress", listener: (percent: number) => void): this;

    render(): void;
    abort(): void;
}

export = GIF;

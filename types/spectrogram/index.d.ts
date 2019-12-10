// Type definitions for spectrogram 0.0
// Project: https://github.com/miguelmota/spectrogram/
// Definitions by: AppLover69 <https://github.com/AppLover69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface SpectrogramOptions {
    canvas?: {
        width?: HTMLCanvasElement['width'] | (() => HTMLCanvasElement['width']);
        height?: HTMLCanvasElement['height'] | (() => HTMLCanvasElement['height']);
    };
    audio?: {
        enable?: boolean;
    };
    colors?: (steps: number) => Array<CanvasRenderingContext2D['fillStyle']>;
}

interface Spectrogram {
    connectSource(audioBuffer: AudioBuffer, audioContext?: AudioContext): void;
    connectSource(analyserNode: AnalyserNode, audioContext: AudioContext): void;
    start(offset?: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
    clear(canvasContext: CanvasRenderingContext2D): void;
}

interface SpectrogramConstructor {
    (canvas: HTMLCanvasElement, options: SpectrogramOptions): Spectrogram;
    new(canvas: HTMLCanvasElement, options: SpectrogramOptions): Spectrogram;
}

declare var Spectrogram: SpectrogramConstructor;
export = Spectrogram;

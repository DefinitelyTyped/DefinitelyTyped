interface SpectrogramOptions {
    canvas?: {
        width?: HTMLCanvasElement["width"] | (() => HTMLCanvasElement["width"]) | undefined;
        height?: HTMLCanvasElement["height"] | (() => HTMLCanvasElement["height"]) | undefined;
    } | undefined;
    audio?: {
        enable?: boolean | undefined;
    } | undefined;
    colors?: ((steps: number) => Array<CanvasRenderingContext2D["fillStyle"]>) | undefined;
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

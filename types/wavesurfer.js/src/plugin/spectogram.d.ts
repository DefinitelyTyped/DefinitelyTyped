import { Drawer, PluginDefinition, PluginParams, WaveSurferObserver, WaveSurferPlugin, WaveSurferUtil } from "../..";

export = WaveSurfer.SpectogramPlugin;

interface WaveSurfer {
    FFT(bufferSize: number, sampleRate: number, windowFunc: WaveSurfer.WindowFunction, alpha: number): void;
}

declare namespace WaveSurfer {
    class SpectogramPlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: SpectogramPluginParams, ws: WaveSurfer);
        static create(params: SpectogramPluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        readonly alpha: number;
        readonly colorMap: number[][];
        readonly container: HTMLElement;
        readonly drawer: Drawer;
        readonly fftSamples: number;
        readonly frequenciesDataUrl: string;
        readonly height: number;
        readonly noverlap: number;
        readonly params: SpectogramPluginParams;
        readonly pixelRatio: number;
        readonly spectrCc: CanvasRenderingContext2D;
        readonly util: WaveSurferUtil;
        readonly wavesurfer: WaveSurfer;
        readonly width: number;
        readonly windowFunc: WindowFunction;
        readonly wrapper: HTMLElement;
    }

    interface SpectogramPluginParams extends PluginParams {
        container?: string | HTMLElement;
        fftSamples?: number;
        labels?: boolean;
        noverlap?: number;
        windowFunc?: WindowFunction;
        alpha?: number;
        pixelRatio?: number;
        colorMap?: number[][];
    }

    type WindowFunction =
        | "bartlett"
        | "bartlettHann"
        | "blackman"
        | "cosine"
        | "gauss"
        | "hamming"
        | "hann"
        | "lanczoz"
        | "rectangular"
        | "triangular";
}

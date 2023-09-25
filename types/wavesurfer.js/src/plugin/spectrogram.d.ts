import { PluginDefinition, PluginParams, WaveSurferPlugin } from "../../types/plugin";
import Drawer from "../drawer";
import Observer from "../util/observer";
import WaveSurfer from "../wavesurfer";

declare module "../../wavesurfer" {
    interface WaveSurfer {
        FFT(bufferSize: number, sampleRate: number, windowFunc: WindowFunction, alpha: number): void;
    }
}

export default class SpectrogramPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: SpectrogramPluginParams, ws: WaveSurfer);
    static create(params: SpectrogramPluginParams): PluginDefinition;
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
    readonly params: SpectrogramPluginParams;
    readonly pixelRatio: number;
    readonly spectrCc: CanvasRenderingContext2D;
    readonly util: WaveSurfer["util"];
    readonly wavesurfer: WaveSurfer;
    readonly width: number;
    readonly windowFunc: WindowFunction;
    readonly wrapper: HTMLElement;
}

export interface SpectrogramPluginParams extends PluginParams {
    /** Selector of element or element in which to render. */
    container: string | HTMLElement;
    /** Number of samples to fetch to FFT. Must be a power of 2. */
    fftSamples?: number | undefined;
    /** Render with separate spectograms for the channels of the audio. */
    splitChannels?: boolean | undefined;
    /** Set to true to display frequency labels. */
    labels?: boolean | undefined;
    /** Size of the overlapping window. Must be < fftSamples. Auto deduced from canvas size by default. */
    noverlap?: number | undefined;
    /** The window function to be used. */
    windowFunc?: WindowFunction | undefined;
    /** Some window functions have this extra value (between 0 and 1). */
    alpha?: number | undefined;
    /** Controls the size of the spectrogram in relation with its canvas (1 = Draw on the whole canvas. 2 = Draw on a quarter, i.e. 1/2 the length and 1/2 the width). */
    pixelRatio?: number | undefined;
    /** A 256 long array of 4-element arrays. Each entry should contain a float between 0 and 1 and specify r, g, b, and alpha. */
    colorMap?: (RGBA[] & { length: 256 }) | undefined;
}

export type RGBA = [number, number, number, number];

export type WindowFunction =
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

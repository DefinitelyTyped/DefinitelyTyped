// Type definitions for meyda 4.3
// Project: https://github.com/meyda/meyda
// Definitions by: Damien Erambert <https://github.com/eramdam>
//                 Hugh Rawlinson <https://github.com/hughrawlinson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Meyda;

export type MeydaWindowingFunction = 'blackman' | 'sine' | 'hanning' | 'hamming';

export type MeydaAudioFeature =
    | 'amplitudeSpectrum'
    | 'chroma'
    | 'complexSpectrum'
    | 'energy'
    | 'loudness'
    | 'mfcc'
    | 'perceptualSharpness'
    | 'perceptualSpread'
    | 'powerSpectrum'
    | 'rms'
    | 'spectralCentroid'
    | 'spectralFlatness'
    | 'spectralFlux'
    | 'spectralKurtosis'
    | 'spectralRolloff'
    | 'spectralSkewness'
    | 'spectralSlope'
    | 'spectralSpread'
    | 'zcr'
    | 'buffer';

export interface MeydaAnalyzerOptions {
    audioContext: AudioContext;
    source: AudioNode;
    bufferSize: number;
    hopSize?: number;
    windowingFunction?: MeydaWindowingFunction;
    featureExtractors?: MeydaAudioFeature | MeydaAudioFeature[];
    numberOfMFCCCoefficients?: number;
    callback?: (features: Partial<MeydaFeaturesObject>) => void;
}

export type MeydaSignal = SliceableArrayLike<number>;

export interface SliceableArrayLike<T> extends ArrayLike<T> {
    slice(start: number, end: number): SliceableArrayLike<T>;
}

export interface MeydaFeaturesObject {
    amplitudeSpectrum: Float32Array;
    buffer: number[];
    chroma: number[];
    complexSpectrum: {
        real: number[];
        imag: number[];
    };
    energy: number;
    loudness: {
        specific: Float32Array;
        total: number;
    };
    mfcc: number[];
    perceptualSharpness: number;
    perceptualSpread: number;
    powerSpectrum: Float32Array;
    rms: number;
    spectralCentroid: number;
    spectralFlatness: number;
    spectralKurtosis: number;
    spectralRolloff: number;
    spectralSkewness: number;
    spectralSlope: number;
    spectralSpread: number;
    zcr: number;
}

export class MeydaAnalyzer {
    start(features: MeydaAudioFeature[]): void;

    stop(): void;

    setSource(source: AudioNode): void;

    get(features: MeydaAudioFeature[]): Partial<MeydaFeaturesObject> | null;
}

export const audioContext: AudioContext | null;
export const spn: ScriptProcessorNode | null;
export const bufferSize: number;
export const sampleRate: number;
export const melBands: number;
export const chromaBands: number;
export const callback: ((features: Partial<MeydaFeaturesObject>) => void | null);
export const windowingFunction: MeydaWindowingFunction;
export const featureExtractors: any;
export const EXTRACTION_STARTED: boolean;
export const numberOfMFCCCoefficients: number;

export function windowing(signal: MeydaSignal, windowname?: MeydaWindowingFunction): MeydaSignal;

export function createMeydaAnalyzer(options: MeydaAnalyzerOptions): MeydaAnalyzer;

export function extract(
    feature: MeydaAudioFeature | MeydaAudioFeature[],
    signal: MeydaSignal,
    previousSignal?: MeydaSignal,
): Partial<MeydaFeaturesObject> | null;

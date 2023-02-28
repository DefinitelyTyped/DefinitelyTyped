import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Observer from '../util/observer';
import WaveSurfer from '../wavesurfer';

export default class MicrophonePlugin extends Observer implements WaveSurferPlugin {
    constructor(params: MicrophonePluginParams, ws: WaveSurfer);
    static create(params: MicrophonePluginParams): PluginDefinition;
    destroy(): void;
    init(): void;

    /** Connect the media sources that feed the visualization. */
    connect(): void;
    /** Browser detector. */
    detectBrowser(): Browser;
    /** Device error callback. */
    deviceError(code: string): void;
    /** Disconnect the media sources that feed the visualization. */
    disconnect(): void;
    /** Extract browser version out of the provided user agent string. */
    extractVersion(uastring: string, expr: string, pos: number): number;
    /** Audio input device is ready. */
    gotStream(stream: MediaStream): void;
    /** Pause visualization. */
    pause(): void;
    /** Play visualization. */
    play(): void;
    /** Redraw the waveform. */
    reloadBuffer(event: AudioProcessingEvent): void;
    /** Allow user to select audio input device. */
    start(): void;
    /** Stop the device stream and remove any remaining waveform drawing from the wavesurfer canvas. */
    stop(): void;
    /** Stop the device and the visualization. */
    stopDevice(): void;
    /** Pause/resume visualization. */
    togglePlay(): void;

    readonly active: boolean;
    readonly browser: Browser;
    readonly bufferSize: number;
    readonly constraints: MediaStreamConstraints;
    readonly levelChecker: ScriptProcessorNode;
    readonly localAudioBuffer: AudioBuffer;
    readonly mediaStreamSource: MediaStreamAudioSourceNode;
    readonly micContext: AudioContext;
    readonly numberOfInputChannels: number;
    readonly numberOfOutputChannels: number;
    readonly params: MicrophonePluginParams;
    readonly reloadBufferFunction: (event: AudioProcessingEvent) => void;
    readonly stream: MediaStream;
    readonly wavesurfer: WaveSurfer;
}

export interface Browser {
    browser: 'firefox' | 'chrome' | 'edge' | 'safari' | 'Not a supported browser.';
    minVersion: number | null;
    version: number | null;
}

export interface MicrophonePluginParams extends PluginParams {
    /** Constraints describing the media types requested. */
    constraints?: MediaStreamConstraints | undefined;
    /** The buffer size in units of sample-frames (default: 4096). */
    bufferSize?: BufferSize | undefined;
    /** Integer specifying the number of channels for this node's input (default: 1). Values of up to 32 are supported. */
    numberOfInputChannels?: number | undefined;
    /** Integer specifying the number of channels for this node's output. */
    numberOfOutputChannels?: number | undefined;
}

export type BufferSize = 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

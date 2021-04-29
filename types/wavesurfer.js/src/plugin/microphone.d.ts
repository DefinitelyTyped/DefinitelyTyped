import { PluginDefinition, PluginParams, WaveSurferObserver, WaveSurferPlugin } from "../..";

export = WaveSurfer.MicrophonePlugin;

declare namespace WaveSurfer {
    class MicrophonePlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: MicrophonePluginParams, ws: WaveSurfer);
        static create(params: MicrophonePluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        connect(): void;
        detectBrowser(): Browser;
        deviceError(code: string): void;
        disconnect(): void;
        extractVersion(uastring: string, expr: string, pos: number): number;
        gotStream(stream: MediaStream): void;
        pause(): void;
        play(): void;
        reloadBuffer(event: AudioProcessingEvent): void;
        start(): void;
        stop(): void;
        stopDevice(): void;
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

    interface Browser {
        browser: "firefox" | "chrome" | "edge" | "safari" | "Not a supported browser.";
        minVersion: number | null;
        version: number | null;
    }

    interface MicrophonePluginParams extends PluginParams {
        constraints?: MediaStreamConstraints;
        bufferSize?: number;
        numberOfInputChannels?: number;
        numberOfOutputChannels?: number;
    }
}

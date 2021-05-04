import { WebAudioBackend } from "../types/backend";

export = WebAudio;

declare class WebAudio extends WebAudioBackend {
    load(buffer: AudioBuffer): void;
    seekTo(start: number, end: number): { start: number; end: number };

    readonly ac: AudioContext;
    readonly analyser: AnalyserNode | null;
    readonly destroyed: boolean;
    readonly gainNode: GainNode | null;
    readonly scriptNode: null;
}

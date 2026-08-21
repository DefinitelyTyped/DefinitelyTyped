import { WebAudioBackend } from "../types/backend";

export default class WebAudio extends WebAudioBackend {
    /** Returns the current time in seconds relative to the audio-clip's duration. */
    getCurrentTime(): number;
    load(buffer: AudioBuffer): void;
    seekTo(start: number, end: number): { start: number; end: number };

    readonly ac: AudioContext;
    readonly analyser: AnalyserNode | null;
    readonly destroyed: boolean;
    readonly gainNode: GainNode | null;
    readonly scriptNode: null;
}

import { Peaks, WebAudioBackend } from "../types/backend";
import { WaveSurferParams } from "../types/params";

export default class MediaElement extends WebAudioBackend {
    constructor(params: WaveSurferParams);

    /** Create a timer to provide a more precise audioprocess event. */
    createTimer(): void;
    /** This is called when wavesurfer is destroyed. */
    destroy(): void;
    /** Returns the current time in seconds relative to the audio-clip's duration. */
    getCurrentTime(): number | undefined;
    /** Used by wavesurfer.getDuration(). */
    getDuration(): number;
    /** Compute the max and min value of the waveform when broken into <length> subranges. */
    getPeaks(length: number, first: number, last: number): Peaks;
    /** Get the audio source playback rate. */
    getPlaybackRate(): number;
    /** Get the position from 0 to 1. */
    getPlayedPercents(): number;
    /** Get the current volume. */
    getVolume(): number;
    /** Initialise the backend, called in wavesurfer.createBackend(). */
    init(): void;
    /** Used by wavesurfer.isPlaying() and wavesurfer.playPause(). */
    isPaused(): boolean;
    /** Create media element with url as its source, and append to container element. */
    load(url: string, container: HTMLElement, peaks: Peaks, preload: string): void;
    /** Load existing media element. */
    loadElt(elt: HTMLMediaElement, peaks: Peaks): void;
    /** Plays the loaded audio region. */
    play(start?: number, end?: number): Promise<void>;
    /** Used by wavesurfer.seekTo(). */
    seekTo(start: number): void;
    /** Enable or disable muted audio. */
    setMute(muted: boolean): void;
    /** Set the play end. */
    setPlayEnd(end: number): void;
    /** Set the audio source playback rate. */
    setPlaybackRate(value: number): void;
    /** Set the sink id for the media player. */
    setSinkId(deviceId: string): Promise<void>;
    /** Set the audio volume. */
    setVolume(value: number): void;

    readonly destroyed: boolean;
}

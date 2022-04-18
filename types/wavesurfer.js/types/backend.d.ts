import MediaElement from '../src/mediaelement';
import MediaElementWebAudio from '../src/mediaelement-webaudio';
import Observer from '../src/util/observer';
import WebAudio from '../src/webaudio';
import { WaveSurferParams } from './params';

export type WaveSurferBackend = WebAudio | MediaElement | MediaElementWebAudio;

export type Peaks = ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>;

export abstract class WebAudioBackend extends Observer {
    constructor(params: WaveSurferParams);

    static scriptBufferSize: number;

    /** Create analyser node to perform audio analysis. */
    createAnalyserNode(): void;
    /** Create ScriptProcessorNode to process audio. */
    createScriptNode(): void;
    /** Create the gain node needed to control the playback volume. */
    createVolumeNode(): void;
    /** This is called when wavesurfer is destroyed */
    destroy(): void;
    /** Destroy all references with WebAudio, disconnecting audio nodes and closing Audio Context. */
    destroyWebAudio(): void;
    /** Get the audio context used by this backend or create one. */
    getAudioContext(): AudioContext;
    /** Used by wavesurfer.getDuration(). */
    getDuration(): number;
    /** Get the offline audio context used by this backend or create one. */
    getOfflineAudioContext(sampleRate: number): OfflineAudioContext;
    /** Compute the max and min value of the waveform when broken into <length> subranges. */
    getPeaks(length: number, first: number, last: number): Peaks;
    /** Returns the current playback rate. */
    getPlaybackRate(): number;
    /** Get the position from 0 to 1. */
    getPlayedPercents(): number;
    /** Get the playback position in seconds. */
    getPlayedTime(): number;
    /** Get the current volume. */
    getVolume(): number;
    /** Initialise the backend, called in wavesurfer.createBackend(). */
    init(): void;
    /** Used by wavesurfer.isPlaying() and wavesurfer.playPause(). */
    isPaused(): boolean;
    /** Pauses the loaded audio. */
    pause(): void;
    /** Plays the loaded audio region. */
    play(start?: number, end?: number): void;
    /** Unpacked setFilters(). */
    setFilter(...filters: AudioNode[]): void;
    /** Insert custom Web Audio nodes into the graph. */
    setFilters(filters: AudioNode[]): void;
    /** Set the rendered length (different from the length of the audio). */
    setLength(length: number): void;
    /** Set pre-decoded peaks. */
    setPeaks(peaks: Peaks, duration?: number): void;
    /** Set a point in seconds for playback to stop at. */
    setPlayEnd(end: number): void;
    /** Set the audio source playback rate. */
    setPlaybackRate(value: number): void;
    /** Set the sink id for the media player. */
    setSinkId(deviceId: string): Promise<void>;
    /** Set the audio volume. */
    setVolume(value: number): void;
    /** Does the browser support this backend? */
    supportsWebAudio(): boolean;
}

import * as WaveSurfer from './wavesurfer';

declare module './wavesurfer' {
    type WaveSurferBackend = WebAudio | MediaElement | MediaElementWebAudio;

    class MediaElementWebAudio extends MediaElement {
        constructor(params: WaveSurferParams);

        createMediaElementSource(mediaElement: HTMLMediaElement): void;
        destroy(): void;
        init(): void;
        play(start: number, end: number): Promise<void>;
    }

    class MediaElement extends WebAudioBackend {
        constructor(params: WaveSurferParams);

        /** Create a timer to provide a more precise audioprocess event. */
        createTimer(): void;
        /** This is called when wavesurfer is destroyed. */
        destroy(): void;
        /** Returns the current time in seconds relative to the audio-clip's duration. */
        getCurrentTime(): number;
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
        /** Pauses the loaded audio. */
        pause(): Promise<void>;
        /** Plays the loaded audio region. */
        play(start: number, end: number): Promise<void>;
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

    class WebAudio extends WebAudioBackend {
        load(buffer: AudioBuffer): void;
        seekTo(start: number, end: number): { start: number; end: number };

        readonly ac: AudioContext;
        readonly analyser: AnalyserNode | null;
        readonly destroyed: boolean;
        readonly gainNode: GainNode | null;
        readonly scriptNode: null;
    }

    abstract class WebAudioBackend extends Observer {
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
        /** Returns the current time in seconds relative to the audio-clip's duration. */
        getCurrentTime(): number;
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
        play(start: number, end: number): void;
        /** Unpacked setFilters(). */
        setFilter(...filters: AudioNode[]): void;
        /** Insert custom Web Audio nodes into the graph. */
        setFilters(filters: AudioNode[]): void;
        /** Set the rendered length (different from the length of the audio). */
        setLength(length: number): void;
        /** Set pre-decoded peaks. */
        setPeaks(peaks: Peaks, duration: number): void;
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
}

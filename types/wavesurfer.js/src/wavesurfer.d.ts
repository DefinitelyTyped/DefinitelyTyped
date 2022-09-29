import { Peaks, WaveSurferBackend } from '../types/backend';
import { WaveSurferParams } from '../types/params';
import { PluginDefinition } from '../types/plugin';
import { WaveSurferUtil } from '../types/util';
import CursorPlugin from './plugin/cursor';
import ElanPlugin from './plugin/elan';
import MarkersPlugin from './plugin/markers';
import MediaSessionPlugin from './plugin/mediasession';
import MicrophonePlugin from './plugin/microphone';
import MinimapPlugin from './plugin/minimap';
import PlayheadPlugin from './plugin/playhead';
import RegionsPlugin from './plugin/regions';
import SpectrogramPlugin from './plugin/spectrogram';
import TimelinePlugin from './plugin/timeline';
import Observer from './util/observer';

export default class WaveSurfer extends Observer {
    constructor(params: WaveSurferParams);

    static VERSION: string;
    static util: WaveSurfer['util'];
    static create(params: WaveSurferParams): WaveSurfer;

    backend: WaveSurferBackend;
    util: WaveSurferUtil;

    [x: string]: any;

    // pluginName -> WaveSurferPlugin

    /** Only available in WaveSurfer instances with CursorPlugin. */
    cursor: CursorPlugin;
    /** Only available in WaveSurfer instances with ElanPlugin. */
    elan: ElanPlugin;
    /** Only available in WaveSurfer instances with MarkersPlugin. */
    markers: MarkersPlugin;
    /** Only available in WaveSurfer instances with MediaSessionPlugin. */
    mediasession: MediaSessionPlugin;
    /** Only available in WaveSurfer instances with MicrophonePlugin. */
    microphone: MicrophonePlugin;
    /** Only available in WaveSurfer instances with MinimapPlugin. */
    minimap: MinimapPlugin;
    /** Only available in WaveSurfer instances with PlayheadPlugin. */
    playhead: PlayheadPlugin;
    /** Only available in WaveSurfer instances with RegionsPlugin. */
    regions: RegionsPlugin;
    /** Only available in WaveSurfer instances with SpectrogramPlugin. */
    spectrogram: SpectrogramPlugin;
    /** Only available in WaveSurfer instances with TimelinePlugin. */
    timeline: TimelinePlugin;

    // propertyNameAddedByPlugin -> any

    addPlugin(plugin: PluginDefinition): WaveSurfer;
    cancelAjax(): void;
    destroy(): void;
    destroyPlugin(name: string): WaveSurfer;
    empty(): void;
    exportImage(format?: string, quality?: number, type?: 'dataURL' | 'blob'): string | string[] | Promise<Blob[]>;
    exportPCM(length?: number, accuracy?: number, noWindow?: boolean, start?: number, end?: number): Promise<Peaks>;
    getActivePlugins(): { [pluginName: string]: boolean };
    getBackgroundColor(): string;
    getCurrentTime(): number;
    getCursorColor(): string;
    getDuration(): number;
    getFilters(): AudioNode[];
    getHeight(): number;
    getMute(): boolean;
    getPlaybackRate(): number;
    /** Get the fill color of the waveform behind the cursor. */
    getProgressColor(channelIdx?: number | null): string;
    getVolume(): number;
    /** Get the fill color of the waveform after the cursor. */
    getWaveColor(channelIdx?: number | null): CanvasGradient | string;
    init(): WaveSurfer;
    initPlugin(name: string): WaveSurfer;
    isPlaying(): boolean;
    isReady: boolean;
    load(url: string | HTMLMediaElement, peaks?: Peaks, preload?: string, duration?: number): void;
    loadBlob(url: Blob | File): void;
    pause(): void;
    play(start?: number, end?: number): Promise<void> | undefined;
    playPause(): Promise<void> | undefined;
    registerPlugins(plugins: PluginDefinition[]): WaveSurfer;
    seekAndCenter(progress: number): void;
    seekTo(progress: number): void;
    setBackgroundColor(color: string): void;
    setCurrentTime(seconds: number): void;
    setCursorColor(color: string): void;
    setHeight(height: number): void;
    setMute(mute: boolean): void;
    setPlaybackRate(rate: number): void;
    setPlayEnd(position: number): void;
    /** Set the fill color of the waveform behind the cursor. */
    setProgressColor(color: string | CanvasGradient, channelIdx?: number | null): void;
    setSinkId(deviceId: string): Promise<any>;
    setVolume(newVolume: number): void;
    /** Set the fill color of the waveform after the cursor. */
    setWaveColor(color: string | CanvasGradient, channelIdx?: number | null): void;
    skip(offset: number): void;
    skipBackward(seconds?: number): void;
    skipForward(seconds?: number): void;
    stop(): void;
    toggleInteraction(): void;
    toggleMute(): void;
    toggleScroll(): void;
    zoom(pxPerSec?: number): void;
}

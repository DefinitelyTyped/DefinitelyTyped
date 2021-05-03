// Type definitions for wavesurfer.js 5.0
// Project: https://github.com/katspaugh/wavesurfer.js
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
//                 Egor Gorbachev <https://github.com/kubk>
//                 Ben Nordstrom <https://github.com/bennordgengo>
//                 Claas Augner <https://github.com/caugner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import CursorPlugin = require("./src/plugin/cursor");
import ElanPlugin = require("./src/plugin/elan");
import MarkersPlugin = require("./src/plugin/markers");
import MediaSessionPlugin = require("./src/plugin/mediasession");
import MicrophonePlugin = require("./src/plugin/microphone");
import MinimapPlugin = require("./src/plugin/minimap");
import PlayheadPlugin = require("./src/plugin/playhead");
import RegionsPlugin = require("./src/plugin/regions");
import SpectogramPlugin = require("./src/plugin/spectogram");
import TimelinePlugin = require("./src/plugin/timeline");

export as namespace WaveSurfer;

export = WaveSurfer;

declare class Observer {
    constructor();
    /** Manually fire an event. */
    fireEvent(eventName: string, ...args: any[]): void;
    /** Attach a handler function for an event. */
    on(eventName: string, callback: EventHandler): WaveSurfer.ListenerDescriptor;
    /** Attach a handler to an event. */
    once(eventName: string, callback: EventHandler): WaveSurfer.ListenerDescriptor;
    /** Disable firing a list of events by name. */
    setDisabledEventEmissions(eventNames: string[]): void;
    /** Remove an event handler. */
    un(eventName: string, callback: EventHandler): void;
    /** Remove all event handlers. */
    unAll(): void;

    readonly handlers: { [eventName: string]: EventHandler[] };
}

type EventHandler = (...args: any[]) => void;

declare class WaveSurfer extends Observer {
    constructor(params: WaveSurfer.WaveSurferParams);

    static VERSION: string;
    static util: WaveSurfer.WaveSurferUtil;
    static create(params: WaveSurfer.WaveSurferParams): WaveSurfer;

    backend: WaveSurfer.WaveSurferBackend;
    util: WaveSurfer.WaveSurferUtil;

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
    /** Only available in WaveSurfer instances with SpectogramPlugin. */
    spectogram: SpectogramPlugin;
    /** Only available in WaveSurfer instances with TimelinePlugin. */
    timeline: TimelinePlugin;

    // propertyNameAddedByPlugin -> any

    addPlugin(plugin: WaveSurfer.PluginDefinition): WaveSurfer;
    cancelAjax(): void;
    destroy(): void;
    destroyPlugin(name: string): WaveSurfer;
    empty(): void;
    exportImage(format?: string, quality?: number, type?: "dataURL" | "blob"): string | string[] | Promise<Blob[]>;
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
    getProgressColor(): string;
    getVolume(): number;
    getWaveColor(): CanvasGradient | string;
    init(): WaveSurfer;
    initPlugin(name: string): WaveSurfer;
    isPlaying(): boolean;
    isReady: boolean;
    load(url: string | HTMLMediaElement, peaks?: Peaks, preload?: string, duration?: number): void;
    loadBlob(url: Blob | File): void;
    pause(): Promise<void> | undefined;
    play(start?: number, end?: number): Promise<void> | undefined;
    playPause(): Promise<void> | undefined;
    registerPlugins(plugins: WaveSurfer.PluginDefinition[]): WaveSurfer;
    seekAndCenter(progress: number): void;
    seekTo(progress: number): void;
    setBackgroundColor(color: string): void;
    setCurrentTime(seconds: number): void;
    setCursorColor(color: string): void;
    setHeight(height: number): void;
    setMute(mute: boolean): void;
    setPlaybackRate(rate: number): void;
    setPlayEnd(position: number): void;
    setSinkId(deviceId: string): Promise<any>;
    setVolume(newVolume: number): void;
    setWaveColor(color: string | CanvasGradient): void;
    skip(offset: number): void;
    skipBackward(seconds?: number): void;
    skipForward(seconds?: number): void;
    stop(): void;
    toggleInteraction(): void;
    toggleMute(): void;
    toggleScroll(): void;
    zoom(pxPerSec?: number): void;
}

type Peaks = ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>;

declare namespace WaveSurfer {
    class WaveSurferObserver extends Observer {}

    interface WaveSurferUtil {
        absMax(values: ReadonlyArray<number>): number;
        clamp(val: number, min: number, max: number): number;
        fetchFile(options: XHROptions): Observer;
        frame<T>(fn: (arg: T) => void): (arg: T) => void;
        getId(prefix: string): string;
        max(values: ReadonlyArray<number>): number;
        min(values: ReadonlyArray<number>): number;
        Observer: Observer;
        preventClick(): void;
        requestAnimationFrame(): (fn: (t: number) => void) => number;
        style<T extends HTMLElement>(el: T, styles: Styles): T;
    }

    interface Styles {
        [styleName: string]: string;
    }

    interface WaveSurferParams {
        /** Use your own previously initialized AudioContext or leave blank (default: null). */
        audioContext?: AudioContext;
        /** Speed at which to play audio. Lower number is slower (default: 1). */
        audioRate?: number;
        /** Use your own previously initialized ScriptProcessorNode or leave blank (default: null). */
        audioScriptProcessor?: ScriptProcessorNode;
        /** If a scrollbar is present, center the waveform on current progress (default: true). */
        autoCenter?: boolean;
        /** If autoCenter is active, rate at which the waveform is centered (default: 5). */
        autoCenterRate?: number;
        /** If autoCenter is active, immediately center waveform on current progress (default: false). */
        autoCenterImmediately?: boolean;
        /**
         * Backend to use (default: 'WebAudio').
         *
         * MediaElement is a fallback for unsupported browsers.
         * MediaElementWebAudio allows to use WebAudio API also with big audio files, loading audio like with MediaElement backend (HTML5 audio tag).
         */
        backend?: "WebAudio" | "MediaElement" | "MediaElementWebAudio";
        /** Change background color of the waveform container (default: null). */
        backgroundColor?: string;
        /** The height of the wave bars (default: 1). */
        barHeight?: number;
        /** The radius of the wave bars (default: 0). Makes bars rounded. */
        barRadius?: number;
        /** The optional spacing between bars of the wave, if not provided will be calculated in legacy format (default: null). */
        barGap?: number;
        /** Draw the waveform using bars (default: null). */
        barWidth?: number;
        /** If specified, draw at least a bar of this height, eliminating waveform gaps (default: null). */
        barMinHeight?: number;
        /** Close and nullify all audio contexts when the destroy method is called (default: false). */
        closeAudioContext?: boolean;
        /** CSS selector or HTML element where the waveform should be drawn. This is the only required parameter. */
        container: string | HTMLElement;
        /** The fill color of the cursor indicating the playhead position (default: '#333'). */
        cursorColor?: string;
        /** Measured in pixels (default: 1). */
        cursorWidth?: number;
        drawingContextAttributes?: DrawingContextAttributes;
        /** Optional audio length so pre-rendered peaks can be display immediately for example (default: null). */
        duration?: number;
        /** Whether to fill the entire container or draw only according to minPxPerSec (default: true). */
        fillParent?: boolean;
        /** Force decoding of audio using web audio when zooming to get a more detailed waveform (default: false). */
        forceDecode?: boolean;
        /** The height of the waveform. Measured in pixels (default: 128). */
        height?: number;
        /** Whether to hide the horizontal scrollbar when one would normally be shown (default: false). */
        hideScrollbar?: boolean;
        /** Whether the mouse interaction will be enabled at initialization. You can switch this parameter at any time later on (default: true). */
        interact?: boolean;
        /** (Use with regions plugin) Enable looping of selected regions (default: false). */
        loopSelection?: boolean;
        /** Maximum width of a single canvas in pixels (default: 4000). */
        maxCanvasWidth?: number;
        /** (Use with backend MediaElement or MediaElementWebAudio) Enable the native controls for the media element (default: false). */
        mediaControls?: boolean;
        /** (Use with backend MediaElement or MediaElementWebAudio) 'audio'|'video' ('video' only for MediaElement) */
        mediaType?: "audio" | "video";
        /** Minimum number of pixels per second of audio (default: 20). */
        minPxPerSec?: number;
        /** If true, normalize by the maximum peak instead of 1.0 (default: false). */
        normalize?: boolean;
        /** Use the PeakCache to improve rendering speed of large waveforms (default: false). */
        partialRender?: boolean;
        /** The pixel ratio used to calculate display (default: window.deviceDixelRatio). */
        pixelRatio?: number;
        /** An array of plugin definitions to register during instantiation. */
        plugins?: PluginDefinition[];
        /** The fill color of the part of the waveform behind the cursor (default: '#555'). */
        progressColor?: string;
        /** Set to false to keep the media element in the DOM when the player is destroyed (default: true). */
        removeMediaElementOnDestroy?: boolean;
        /** Can be used to inject a custom renderer (default: MultiCanvas). */
        renderer?: MultiCanvas;
        /** If set to true resize the waveform, when the window is resized. This is debounced with a 100ms timeout by default. If this parameter is a number it represents that timeout (default: false). */
        responsive?: boolean | number;
        /** If set to true, renders waveform from right-to-left (default: false). */
        rtl?: boolean;
        /** Whether to scroll the container with a lengthy waveform. Otherwise the waveform is shrunk to the container width (see fillParent) (default: false). */
        scrollParent?: boolean;
        /** Number of seconds to skip with the skipForward() and skipBackward() methods (default: 2). */
        skipLength?: number;
        /** Render with separate waveforms for the channels of the audio (default: false). */
        splitChannels?: boolean;
        /** Options for splitChannel rendering. */
        splitChannelsOptions?: SplitChannelOptions;
        /** Render the waveform vertically instead of horizontally. */
        vertical?: boolean;
        /** The fill color of the waveform after the cursor. */
        waveColor?: string | CanvasGradient;
        /** XHR options. */
        xhr?: XHROptions;
    }

    interface SplitChannelOptions {
        /** Determines whether channels are rendered on top of each other or on separate tracks. */
        overlay?: boolean;
        /** Object describing color for each channel. */
        channelColors?: { [channel: number]: ChannelColor };
        /** Indexes of channels to be hidden from rendering. */
        filterChannels?: number[];
        /** Determines whether normalization is done per channel or maintains proportionality between channels. */
        relativeNormalization?: boolean;
    }

    interface ChannelColor {
        progressColor: string;
        waveColor: string;
    }

    class CanvasEntry {
        constructor();

        /** Set the canvas transforms for wave and progress. */
        applyCanvasTransforms(vertical: boolean): void;
        /** Clear the wave and progress rendering contexts. */
        clearWave(): void;
        /** Destroys this entry. */
        destroy(): void;
        /** Render the actual waveform line on a canvas element. */
        drawLineToContext(
            ctx: CanvasRenderingContext2D,
            peaks: number[],
            absmax: number,
            halfH: number,
            offsetY: number,
            start: number,
            end: number,
        ): void;
        /** Render the actual wave and progress lines. */
        drawLines(peaks: number[], absmax: number, halfH: number, offsetY: number, start: number, end: number): void;
        /** Draw a rounded rectangle on Canvas. */
        drawRoundedRect(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
        ): void;
        /** Draw the actual rectangle on a canvas element. */
        fillRectToContext(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
        ): void;
        /** Draw a rectangle for wave and progress. */
        fillRects(x: number, y: number, width: number, height: number, radius: number): void;
        /** Return image data of the wave canvas element. */
        getImage(format: string, quality: number, type: string): string | Promise<string>;
        /** Store the progress wave canvas element and create the 2D rendering context. */
        initProgress(element: HTMLCanvasElement): string;
        /** Store the wave canvas element and create the 2D rendering context. */
        initWave(element: HTMLCanvasElement): string;
        /** Set the fill styles for wave and progress. */
        setFillStyles(waveColor: string, progressColor: string): void;
        /** Update the dimensions. */
        updateDimensions(elementWidth: number, totalWidth: number, width: number, height: number): void;

        /** Canvas 2d context attributes. */
        readonly canvasContextAttributes: DrawingContextAttributes;
        /** End of the area the canvas should render, between 0 and 1. */
        readonly end: number;
        /** Unique identifier for this entry. */
        readonly id: string;
        /** The (optional) progress wave node. */
        readonly progress: HTMLCanvasElement;
        /** The (optional) progress wave canvas rendering context. */
        readonly progressCtx: CanvasRenderingContext2D;
        /** Start of the area the canvas should render, between 0 and 1. */
        readonly start: number;
        /** The wave node. */
        readonly wave: HTMLCanvasElement;
        /** The wave canvas rendering context. */
        readonly waveCtx: CanvasRenderingContext2D;
    }

    class Drawer extends Observer {
        constructor(container: HTMLElement, params: WaveSurferParams);

        readonly container: HTMLElement;
        /** The height of the renderer. */
        readonly height: number;
        readonly lastPos: number;
        readonly params: WaveSurferParams;
        /** The width of the renderer. */
        readonly width: number;
        readonly wrapper: HTMLElement;
    }

    class MultiCanvas extends Drawer {
        constructor(container: HTMLElement, params: WaveSurferParams);

        /** Add a canvas to the canvas list. */
        addCanvas(): void;
        /** Set the canvas transforms for a certain entry (wave and progress). */
        applyCanvasTransforms(entry: CanvasEntry, vertical: boolean): void;
        /** Clear the whole multi-canvas. */
        clearWave(): void;
        /** Create the canvas elements and style them. */
        createElements(): void;
        /** Draw a waveform with bars. */
        drawBars(peaks: Peaks, channelIndex: number, start: number, end: number): void;
        /** Tell the canvas entries to render their portion of the waveform. */
        drawLine(
            peaks: number[],
            absmax: number,
            halfH: number,
            offsetY: number,
            start: number,
            end: number,
            channelIndex: number,
        ): void;
        /** Draw a waveform. */
        drawWave(peaks: Peaks, channelIndex: number, start: number, end: number): void;
        /** Draw a rectangle on the multi-canvas. */
        fillRect(
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
            channelIndex: number,
        ): void;
        /** Return image data of the multi-canvas. */
        getImage(format: string, quality: number, type: string): string | string[] | Promise<string | string[]>;
        /** Returns whether to hide the channel from being drawn based on params. */
        hideChannel(channelIndex: number): void;
        /** Initialize the drawer. */
        init(): void;
        /** Performs preparation tasks and calculations which are shared by drawBars and drawWave. */
        prepareDraw(
            peaks: Peaks,
            channelIndex: number,
            start: number,
            end: number,
            fn: (arg: DrawParams) => void,
            drawIndex: number,
            normalizedMax: number,
        ): void;
        /** Pop single canvas from the list. */
        removeCanvas(): void;
        /** Set the fill styles for a certain entry (wave and progress). */
        setFillStyles(entry: CanvasEntry, waveColor: string, progressColor: string): void;
        /** Update cursor style. */
        updateCursor(): void;
        /** Update the dimensions of a canvas element. */
        updateDimensions(entry: CanvasEntry, width: number, heihgt: number): void;
        /** Render the new progress. */
        updateProgress(position: number): void;
        /** Adjust to the updated size by adding or removing canvases. */
        updateSize(): void;

        /** Class used to generate entries. */
        readonly EntryClass: typeof CanvasEntry;
        /** The radius of the wave bars. */
        readonly barRadius: number;
        /** Canvas 2d context attributes. */
        readonly canvasContextAttributes: DrawingContextAttributes;
        readonly canvases: CanvasEntry[];
        readonly halfPixel: number;
        /** Whether or not the progress wave is rendered. */
        readonly hasProgressCanvas: boolean;
        readonly maxCanvasElementWidth: number;
        readonly maxCanvasWidth: number;
        /** Overlap added between entries to prevent vertical white stripes between canvas elements. */
        readonly overlap: number;
        readonly progressWave: HTMLElement;
        /** Whether to render the waveform vertically. */
        readonly vertical: boolean;
    }

    interface DrawingContextAttributes {
        desynchronized: boolean;
    }

    interface DrawParams {
        absmax: number;
        hasMinVals: boolean;
        height: number;
        offsetY: number;
        halfH: number;
        peaks: Peaks;
        channelIndex: number;
    }

    class PeakCache {
        constructor();

        addRangeToPeakCache(length: number, start: number, end: number): number[][];
        clearPeakCache(): void;
        getCacheRanges(): number[][];
    }

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

    class WaveSurferPlugin {
        constructor(params: Record<string, unknown>, ws: WaveSurfer);
        static create(params: Record<string, unknown>): PluginDefinition;
        init(): void;
        destroy(): void;
    }

    interface PluginDefinition {
        /** The name of the plugin, the plugin instance will be added as a property to the wavesurfer instance under this name. */
        name: string;
        /** The properties that should be added to the wavesurfer instance as static properties. */
        staticProps?: { [staticPropName: string]: unknown };
        /** Don't initialise plugin automatically. */
        deferInit?: boolean;
        /** The plugin parameters, they are the first parameter passed to the plugin class constructor function. */
        params: PluginParams;
        /** The plugin instance factory, is called with the dependency specified in extends. Returns the plugin class. */
        instance: { new (params: PluginDefinition["params"], ws: WaveSurfer): WaveSurferPlugin };
    }

    interface PluginParams {
        [paramName: string]: unknown;
        /** Set to true to manually call (default: false). */
        deferInit?: boolean;
    }

    interface ListenerDescriptor {
        /** The name of the event. */
        name: string;
        /** The callback. */
        callback: (...args: any[]) => void;
        /** The function to call to remove the listener. */
        un: () => void;
    }

    interface Attributes {
        [attributeName: string]: string;
    }

    interface Datas {
        [dataName: string]: string;
    }

    interface XHROptions {
        url?: string;
        method?: string;
        mode?: string;
        credentials?: string;
        cache?: string;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        requestHeaders?: XHRRequestHeader[];
        redirect?: string;
        referrer?: string;
        withCredentials?: boolean;
    }

    interface XHRRequestHeader {
        key: string;
        value: string;
    }

    interface WaveSurferBackend {
        setPeaks(peaks: Peaks, duration?: number): void;
        getPeaks(length: number, first?: number, last?: number): Peaks;
    }
}

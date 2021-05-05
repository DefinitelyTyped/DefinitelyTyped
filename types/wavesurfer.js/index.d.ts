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
    fireEvent(eventName: string, ...args: any[]): void;
    on(eventName: string, callback: EventHandler): WaveSurfer.ListenerDescriptor;
    once(eventName: string, callback: EventHandler): WaveSurfer.ListenerDescriptor;
    setDisabledEventEmissions(eventNames: string[]): void;
    un(eventName: string, callback: EventHandler): void;
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
        audioContext?: AudioContext;
        audioRate?: number;
        audioScriptProcessor?: ScriptProcessorNode;
        autoCenter?: boolean;
        autoCenterRate?: number;
        autoCenterImmediately?: boolean;
        backend?: "WebAudio" | "MediaElement" | "MediaElementWebAudio";
        backgroundColor?: string;
        barHeight?: number;
        barRadius?: number;
        barGap?: number;
        barWidth?: number;
        barMinHeight?: number;
        closeAudioContext?: boolean;
        container: string | HTMLElement;
        cursorColor?: string;
        cursorWidth?: number;
        drawingContextAttributes?: DrawingContextAttributes;
        duration?: number;
        fillParent?: boolean;
        forceDecode?: boolean;
        height?: number;
        hideScrollbar?: boolean;
        interact?: boolean;
        loopSelection?: boolean;
        maxCanvasWidth?: number;
        mediaControls?: boolean;
        mediaType?: string;
        minPxPerSec?: number;
        normalize?: boolean;
        partialRender?: boolean;
        pixelRatio?: number;
        plugins?: PluginDefinition[];
        progressColor?: string;
        removeMediaElementOnDestroy?: boolean;
        renderer?: MultiCanvas;
        responsive?: boolean | number;
        rtl?: boolean;
        scrollParent?: boolean;
        skipLength?: number;
        splitChannels?: boolean;
        splitChannelsOptions?: SplitChannelsOptions;
        vertical?: boolean;
        waveColor?: string | CanvasGradient;
        xhr?: XHROptions;
    }

    interface SplitChannelsOptions {
        overlay?: boolean;
        channelColors?: { [channel: number]: ChannelColor };
        filterChannels?: number[];
        relativeNormalization?: boolean;
    }

    interface ChannelColor {
        progressColor: string;
        waveColor: string;
    }

    class CanvasEntry {
        constructor();

        clearWave(): void;
        destroy(): void;
        drawLineToContext(
            ctx: CanvasRenderingContext2D,
            peaks: number[],
            absmax: number,
            halfH: number,
            offsetY: number,
            start: number,
            end: number,
        ): void;
        drawLines(peaks: number[], absmax: number, halfH: number, offsetY: number, start: number, end: number): void;
        drawRoundedRect(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
        ): void;
        fillRectToContext(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
        ): void;
        fillRects(x: number, y: number, width: number, height: number, radius: number): void;
        getImage(format: string, quality: number, type: string): string | Promise<string>;
        initProgress(element: HTMLCanvasElement): string;
        initWave(element: HTMLCanvasElement): string;
        setFillStyles(waveColor: string, progressColor: string): void;
        updateDimensions(elementWidth: number, totalWidth: number, width: number, height: number): void;

        readonly canvasContextAttributes: DrawingContextAttributes;
        readonly end: number;
        readonly id: string;
        readonly progress: HTMLCanvasElement;
        readonly progressCtx: CanvasRenderingContext2D;
        readonly start: number;
        readonly wave: HTMLCanvasElement;
        readonly waveCtx: CanvasRenderingContext2D;
    }

    class Drawer extends Observer {
        constructor(container: HTMLElement, params: WaveSurferParams);

        readonly wrapper: HTMLElement;
    }

    class MultiCanvas extends Drawer {
        constructor(container: HTMLElement, params: WaveSurferParams);

        addCanvas(): void;
        clearWave(): void;
        createElements(): void;
        drawBars(peaks: Peaks, channelIndex: number, start: number, end: number): void;
        drawLine(
            peaks: number[],
            absmax: number,
            halfH: number,
            offsetY: number,
            start: number,
            end: number,
            channelIndex: number,
        ): void;
        drawWave(peaks: Peaks, channelIndex: number, start: number, end: number): void;
        fillRectToContext(
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
            channelIndex: number,
        ): void;
        getImage(format: string, quality: number, type: string): string | string[] | Promise<string | string[]>;
        hideChannel(channelIndex: number): void;
        init(): void;
        prepareDraw(
            peaks: Peaks,
            channelIndex: number,
            start: number,
            end: number,
            fn: (arg: DrawParams) => void,
            drawIndex: number,
            normalizedMax: number,
        ): void;
        removeCanvas(): void;
        setFillStyles(entry: CanvasEntry, waveColor: string, progressColor: string): void;
        updateCursor(): void;
        updateDimensions(entry: CanvasEntry, width: number, heihgt: number): void;
        updateProgress(position: number): void;
        updateSize(): void;

        readonly EntryClass: typeof CanvasEntry;
        readonly barRadius: number;
        readonly canvasContextAttributes: DrawingContextAttributes;
        readonly canvases: CanvasEntry[];
        readonly halfPixel: number;
        readonly hasProgressCanvas: boolean;
        readonly maxCanvasElementWidth: number;
        readonly maxCanvasWidth: number;
        readonly overlap: number;
        readonly progressWave: HTMLElement;
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

        static scriptBufferSize: number;

        createTimer(): void;
        destroy(): void;
        getCurrentTime(): number;
        getDuration(): number;
        getPeaks(length: number, first: number, last: number): Peaks;
        getPlaybackRate(): number;
        getPlayedPercents(): number;
        getVolume(): number;
        init(): void;
        isPaused(): boolean;
        load(url: string, container: HTMLElement, peaks: Peaks, preload: string): void;
        loadElt(elt: HTMLMediaElement, peaks: Peaks): void;
        pause(): Promise<void>;
        play(start: number, end: number): Promise<void>;
        seekTo(start: number): void;
        setMute(muted: boolean): void;
        setPlayEnd(end: number): void;
        setPlaybackRate(value: number): void;
        setSinkId(deviceId: string): Promise<void>;
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

        createAnalyserNode(): void;
        createScriptNode(): void;
        createVolumeNode(): void;
        destroy(): void;
        destroyWebAudio(): void;
        getAudioContext(): AudioContext;
        getCurrentTime(): number;
        getDuration(): number;
        getOfflineAudioContext(sampleRate: number): OfflineAudioContext;
        getPeaks(length: number, first: number, last: number): Peaks;
        getPlaybackRate(): number;
        getPlayedPercents(): number;
        getPlayedTime(): number;
        getVolume(): number;
        init(): void;
        isPaused(): boolean;
        pause(): void;
        play(start: number, end: number): void;
        setFilter(...filters: AudioNode[]): void;
        setFilters(filters: AudioNode[]): void;
        setLength(length: number): void;
        setPeaks(peaks: Peaks, duration: number): void;
        setPlayEnd(end: number): void;
        setPlaybackRate(value: number): void;
        setSinkId(deviceId: string): Promise<void>;
        setVolume(value: number): void;
        supportsWebAudio(): boolean;
    }

    class WaveSurferPlugin {
        constructor(params: Record<string, unknown>, ws: WaveSurfer);
        static create(params: Record<string, unknown>): PluginDefinition;
        init(): void;
        destroy(): void;
    }

    interface PluginDefinition {
        name: string;
        staticProps?: { [staticPropName: string]: unknown };
        deferInit?: boolean;
        params: PluginParams;
        instance: { new (params: PluginDefinition["params"], ws: WaveSurfer): WaveSurferPlugin };
    }

    interface PluginParams {
        [paramName: string]: unknown;
        deferInit?: boolean;
    }

    interface ListenerDescriptor {
        name: string;
        callback(...args: any[]): void;
        un(): void;
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

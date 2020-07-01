// Type definitions for wavesurfer.js 3.3
// Project: https://github.com/katspaugh/wavesurfer.js
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
//                 Egor Gorbachev <https://github.com/kubk>
//                 Ben Nordstrom <https://github.com/bennordgengo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace WaveSurfer;

export = WaveSurfer;

declare class Observer {
    constructor();
    fireEvent(eventName: string, ...args: any[]): void;
    on(eventName: string, callback: (...args: any[]) => void): WaveSurfer.ListenerDescriptor;
    once(eventName: string, callback: (...args: any[]) => void): WaveSurfer.ListenerDescriptor;
    un(eventName: string, callback: (...args: any[]) => void): void;
    unAll(): void;
}

declare class WaveSurfer extends Observer {
    constructor(params: WaveSurfer.WaveSurferParams);
    static VERSION: string;
    static util: WaveSurfer.WaveSurferUtil;
    static create(params: WaveSurfer.WaveSurferParams): WaveSurfer;
    // [x: string]: any
    //   pluginName -> WaveSurferPlugin
    //   propertyNameAddedByPlugin -> any
    [x: string]: any;
    backend: WaveSurfer.WaveSurferBackend;
    util: WaveSurfer.WaveSurferUtil;
    addPlugin(plugin: WaveSurfer.PluginDefinition): WaveSurfer;
    cancelAjax(): void;
    destroy(): void;
    destroyPlugin(name: string): WaveSurfer;
    empty(): void;
    exportPCM(length?: number, accuracy?: number, noWindow?: boolean, start?: number, end?: number): Promise<string>;
    exportImage(format?: string, quality?: number, type?: 'dataURL' | 'blob'): string | string[] | Promise<Blob[]>;
    getActivePlugins(): object;
    getBackgroundColor(): string;
    getCurrentTime(): number;
    getCursorColor(): string;
    getDuration(): number;
    getFilters(): AudioNode[];
    getHeight(): number;
    getPlaybackRate(): number;
    getProgressColor(): string;
    getMute(): boolean;
    getVolume(): number;
    getWaveColor(): CanvasGradient | string;
    init(): WaveSurfer;
    initPlugin(name: string): WaveSurfer;
    isPlaying(): boolean;
    isReady(): boolean;
    load(
        url: string | HTMLMediaElement,
        peaks?: ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>,
        preload?: string,
        duration?: number,
    ): void;
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
    setVolume(newVolume: number): void;
    setWaveColor(color: string | CanvasGradient): void;
    setSinkId(deviceId: string): Promise<any>;
    skip(offset: number): void;
    skipBackward(seconds?: number): void;
    skipForward(seconds?: number): void;
    stop(): void;
    toggleInteraction(): void;
    toggleMute(): void;
    toggleScroll(): void;
    zoom(pxPerSec?: number): void;
}

declare namespace WaveSurfer {
    class WaveRenderer extends Observer {
        constructor(container: HTMLElement, params: WaveSurferParams);
        height: number;
        width: number;
        wrapper: HTMLElement;
        clearWave(): void;
        createWrapper(): void;
        destroy(): void;
        drawBars(
            peaks: ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>,
            channelIndex: number,
            start: number,
            end: number,
        ): void;
        drawPeaks(
            peaks: ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>,
            length: number,
            start: number,
            end: number,
        ): void;
        drawWave(
            peaks: ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>,
            channelIndex: number,
            start: number,
            end: number,
        ): void;
        getScrollX(): number;
        getWidth(): number;
        handleEvent(e: Event, noPrevent: boolean): number;
        progress(progress: number): void;
        recenter(percent: number): void;
        recenterOnPosition(position: number, immediate: boolean): void;
        resetScroll(): void;
        setHeight(height: number): boolean;
        setWidth(width: number): boolean;
        style(el: HTMLElement, styles: { [x: string]: string }): HTMLElement;
        updateProgress(position: number): void;
        updateSize(): void;
    }

    class WaveSurferPlugin {
        constructor(params: object, ws: WaveSurfer);
        static create(params: object): PluginDefinition;
        init(): void;
        destroy(): void;
    }

    interface WaveSurferUtil {
        ajax(options: { xhr?: XHROptions }): Observer;
        extend(dest: object, ...sources: object[]): object;
        frame(fn: (...args: any[]) => void): (...args: any[]) => number;
        getId(): string;
        max(values: ReadonlyArray<number>): number;
        min(values: ReadonlyArray<number>): number;
        Observer: Observer;
        preventClick(): void;
        requestAnimationFrame(): (fn: (t: number) => void) => number;
        style(el: HTMLElement, styles: { [x: string]: string }): HTMLElement;
    }

    interface WaveSurferParams {
        audioContext?: AudioContext;
        audioRate?: number;
        audioScriptProcessor?: ScriptProcessorNode;
        autoCenter?: boolean;
        autoCenterRate?: number;
        autoCenterImmediately?: boolean;
        backend?: 'WebAudio' | 'MediaElement' | 'MediaElementWebAudio';
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
        drawingContextAttributes?: object;
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
        renderer?: { new (container: HTMLElement, params: WaveSurferParams): WaveRenderer };
        responsive?: boolean | number;
        rtl?: boolean;
        scrollParent?: boolean;
        skipLength?: number;
        splitChannels?: boolean;
        waveColor?: string | CanvasGradient;
        xhr?: XHROptions;
    }

    interface PluginDefinition {
        name: string;
        staticProps?: object;
        deferInit?: boolean;
        params: object;
        instance: { new (params: object, ws: WaveSurfer): WaveSurferPlugin };
    }

    interface ListenerDescriptor {
        name: string;
        callback(...args: any[]): void;
        un(): void;
    }

    interface XHROptions {
        requestHeaders?: XHRRequestHeader[];
        withCredentials?: boolean;
    }

    interface XHRRequestHeader {
        key: string;
        value: string;
    }

    interface WaveSurferBackend {
        getPeaks(
            length: number,
            first?: number,
            last?: number,
        ): ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>;
    }
}

import { PluginDefinition, PluginParams, WaveSurferObserver, WaveSurferPlugin, WaveSurferUtil } from "../..";

export = WaveSurfer.TimelinePlugin;

declare namespace WaveSurfer {
    class TimelinePlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: TimelinePluginParams, ws: WaveSurfer);
        static create(params: TimelinePluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        addCanvas(): void;
        createWrapper(): void;
        defaultFormatTimeCallback(seconds: number, pxPerSec: number): number;
        defaultPrimaryLabelInterval(pxPerSec: number): number;
        defaultSecondaryLabelInterval(pxPerSec: number): number;
        defaultTimeInterval(pxPerSec: number): number;
        fillRect(x: number, y: number, width: number, height: number): void;
        fillText(text: string, x: number, y: number): void;
        removeCanvas(): void;
        render(): void;
        renderCanvases(): void;
        setFillStyles(fillStyle: string | CanvasGradient | CanvasPattern): void;
        setFonts(font: string): void;
        updateCanvases(): void;
        updateCanvasesPositioning(): void;

        readonly canvases: HTMLCanvasElement[];
        readonly container: string | HTMLElement;
        readonly params: TimelinePluginParams;
        readonly util: WaveSurferUtil;
        readonly wavesurfer: WaveSurfer;
        readonly wrapper: HTMLElement;
    }

    interface TimelinePluginParams extends PluginParams {
        container?: string | HTMLElement;
        height?: number;
        notchPercentHeight?: number;
        unlabeledNotchColor?: string;
        primaryColor?: string;
        secondaryColor?: string;
        primaryFontColor?: string;
        secondaryFontColor?: string;
        labelPadding?: number;
        zoomDebounce?: number | false;
        fontFamily?: string;
        fontSize?: number;
        duration?: number | null;
        formatTimecallback?: (sec: number, pxPerSec: number) => string;
        timeInterval?: (pxPerSec: number) => number;
        primaryLabelInterval?: (pxPerSec: number) => number;
        secondaryLabelInterval?: (pxPerSec: number) => number;
        offset?: number;
    }
}

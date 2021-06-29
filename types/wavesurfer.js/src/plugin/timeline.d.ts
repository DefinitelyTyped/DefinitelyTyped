import { PluginDefinition, PluginParams, WaveSurferPlugin } from "../../types/plugin";
import Observer from "../util/observer";
import WaveSurfer from "../wavesurfer";

export default class TimelinePlugin extends Observer implements WaveSurferPlugin {
    constructor(params: TimelinePluginParams, ws: WaveSurfer);
    static create(params: TimelinePluginParams): PluginDefinition;
    destroy(): void;
    init(): void;

    /** Add new timeline canvas. */
    addCanvas(): void;
    /** Create a timeline element to wrap the canvases drawn by this plugin. */
    createWrapper(): void;
    /** Turn the time into a suitable label for the time. */
    defaultFormatTimeCallback(seconds: number, pxPerSec: number): number;
    /** Return the cadence of notches that get labels in the primary color. */
    defaultPrimaryLabelInterval(pxPerSec: number): number;
    /** Return the cadence of notches that get labels in the secondary color. */
    defaultSecondaryLabelInterval(pxPerSec: number): number;
    /** Return how many seconds should be between each notch. */
    defaultTimeInterval(pxPerSec: number): number;
    /** Draw a rectangle on the canvases. */
    fillRect(x: number, y: number, width: number, height: number): void;
    /** Fill a given text on the canvases. */
    fillText(text: string, x: number, y: number): void;
    /** Remove timeline canvas. */
    removeCanvas(): void;
    /** Render the timeline (also updates the already rendered timeline). */
    render(): void;
    /** Render the timeline labels and notches. */
    renderCanvases(): void;
    /** Set the canvas fill style. */
    setFillStyles(fillStyle: string | CanvasGradient | CanvasPattern): void;
    /** Set the canvas font. */
    setFonts(font: string): void;
    /** Make sure the correct of timeline canvas elements exist and are cached in this.canvases. */
    updateCanvases(): void;
    /** Update the dimensions and positioning style for all the timeline canvases. */
    updateCanvasesPositioning(): void;

    readonly canvases: HTMLCanvasElement[];
    readonly container: string | HTMLElement;
    readonly params: TimelinePluginParams;
    readonly util: WaveSurfer["util"];
    readonly wavesurfer: WaveSurfer;
    readonly wrapper: HTMLElement;
}

export interface TimelinePluginParams extends PluginParams {
    /** CSS selector or HTML element where the timeline should be drawn. This is the only required parameter. */
    container: string | HTMLElement;
    /** Height of notches in percent (default: 90). */
    notchPercentHeight?: number;
    /** The colour of the notches that do not have labels (default: '#c0c0c0'). */
    unlabeledNotchColor?: string;
    /** The colour of the main notches (default: '#000'). */
    primaryColor?: string;
    /** The colour of the secondary notches (default: '#c0c0c0'). */
    secondaryColor?: string;
    /** The colour of the labels next to the main notches (default: '#000'). */
    primaryFontColor?: string;
    /** The colour of the labels next to the secondary notches (default: '#000'). */
    secondaryFontColor?: string;
    /** The padding between the label and the notch (default: 5). */
    labelPadding?: number;
    /** A debounce timeout to increase rendering performance for large files. */
    zoomDebounce?: number | false;
    fontFamily?: string;
    /** Font size of labels in pixels (default: 10). */
    fontSize?: number;
    /** Length of the track in seconds. Overrides getDuration() for setting length of timeline. */
    duration?: number | null;
    formatTimecallback?: (sec: number, pxPerSec: number) => string;
    timeInterval?: (pxPerSec: number) => number;
    /** Cadence between labels in primary color. */
    primaryLabelInterval?: (pxPerSec: number) => number;
    /** Cadence between labels in secondary color. */
    secondaryLabelInterval?: (pxPerSec: number) => number;
    /** Offset for the timeline start in seconds. May also be negative. */
    offset?: number;
}

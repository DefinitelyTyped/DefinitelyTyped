import { Styles } from "../../types/util";
import { PluginDefinition, PluginParams, WaveSurferPlugin } from "../../types/plugin";
import Observer from "../util/observer";
import WaveSurfer from "../wavesurfer";

declare module "../../wavesurfer" {
    interface WaveSurfer {
        addRegion(regionParams: RegionParams): void;
        clearRegions(): void;
        enableDragSelection(options: RegionParams): void;
    }
}

export default class RegionsPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: RegionsPluginParams, ws: WaveSurfer);
    static create(params: RegionsPluginParams): PluginDefinition;
    destroy(): void;
    init(): void;

    add(params: RegionParams): Region;
    clear(): void;
    disableDragSelection(): void;
    enableDragSelection(options: RegionParams): void;
    getCurrentRegion(): Region | null;
    getRegionSnapToGridValue(value: number, params: RegionParams): number;

    readonly list: Region[];
    readonly maxRegions: number[];
    readonly params: RegionsPluginParams;
    readonly regionsMinLength: number;
    readonly util: WaveSurfer["util"];
    readonly wavesurfer: WaveSurfer;
    readonly wrapper: HTMLElement;
}

export interface RegionsPluginParams extends PluginParams {
    /** Enable creating regions by dragging with the mouse. */
    dragSelection?: boolean;
    /** Regions that should be added upon initialisation. */
    regions?: RegionParams[];
    /** The sensitivity of the mouse dragging (default: 2). */
    slop?: number;
    /** Snap the regions to a grid of the specified multiples in seconds? */
    snapToGridInterval?: number;
    /** Shift the snap-to-grid by the specified seconds. May also be negative. */
    snapToGridOffset?: number;
    /** Maximum number of regions that may be created by the user at one time. */
    maxRegions?: number[];
    /** Allows custom formating for region tooltip. */
    formatTimeCallback?: () => string;
    /** from container edges' Optional width for edgeScroll to start (default: 5% of viewport width). */
    edgeScrollWidth?: number;
}

export class Region extends Observer {
    constructor(params: RegionParams, regionsUtil: WaveSurfer["util"], ws: WaveSurfer);

    bindRagEvents(): void;
    bindEvents(): void;
    bindInOut(): void;
    formatTime(start: number, end: number): string;
    getWidth(): number;
    onDrag(delta: number): void;
    onResize(delta: number, direction: "start" | "end"): void;
    play(start: number): void;
    playLoop(start: number): void;
    remove(): void;
    render(): void;
    setLoop(loop: boolean): void;
    update(params: RegionParams): void;
    updateHandlesResize(resize: boolean): void;
    updateRender(): void;

    readonly attributes: Attributes;
    readonly color: string;
    readonly data: Datas;
    readonly drag: boolean;
    readonly edgeScrollWidth?: number;
    readonly element: HTMLElement;
    readonly end: number;
    readonly firedIn: boolean;
    readonly firedOut: boolean;
    readonly formatTimeCallback?: (start: number, end: number) => string;
    readonly handleLeftEl: HTMLElement | null;
    readonly handleRightEl: HTMLElement | null;
    readonly handleStyle: HandleStyle;
    readonly id: string;
    readonly isDragging: boolean;
    readonly isResizing: boolean;
    readonly loop: boolean;
    readonly marginTop: string;
    readonly maxLength: number;
    readonly minLength: number;
    readonly preventContextMenu: boolean;
    readonly regionHeight: string;
    readonly regionsUtil: WaveSurfer["util"];
    readonly resize: boolean;
    readonly scroll: boolean;
    readonly scrollSpeed: number;
    readonly scrollThreshold: number;
    readonly start: number;
    readonly style: WaveSurfer["util"]["style"];
    readonly util: WaveSurfer["util"];
    readonly wavesurfer: WaveSurfer;
    readonly wrapper: HTMLElement;
}

export interface RegionParams {
    id: string;
    start?: number;
    end?: number;
    loop?: boolean;
    drag?: boolean;
    resize?: boolean;
    color?: string;
    channelIdx?: number;
    handleStyle?: HandleStyle;
    preventContextMenu?: boolean;
    showTooltip?: boolean;
}

export interface HandleStyle {
    left: Styles;
    right: Styles;
}

export interface Attributes {
    [attributeName: string]: string;
}

export interface Datas {
    [dataName: string]: string;
}

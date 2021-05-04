import * as WaveSurfer from '../../wavesurfer';

export = RegionsPlugin;

declare module '../../wavesurfer' {
    interface WaveSurfer {
        addRegion(regionParams: RegionParams): void;
        clearRegions(): void;
        enableDragSelection(options: RegionParams): void;
    }
}

declare class RegionsPlugin extends WaveSurfer.Observer implements WaveSurfer.WaveSurferPlugin {
    constructor(params: RegionsPluginParams, ws: WaveSurfer.WaveSurfer);
    static create(params: RegionsPluginParams): WaveSurfer.PluginDefinition;
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
    readonly util: WaveSurfer.WaveSurfer['util'];
    readonly wavesurfer: WaveSurfer.WaveSurfer;
    readonly wrapper: HTMLElement;
}

interface RegionsPluginParams extends  WaveSurfer.PluginParams {
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

declare class Region extends WaveSurfer.Observer {
    constructor(params: RegionParams, regionsUtil: WaveSurfer.WaveSurfer['util'], ws: WaveSurfer.WaveSurfer);

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
    readonly regionsUtil: WaveSurfer.WaveSurfer['util'];
    readonly resize: boolean;
    readonly scroll: boolean;
    readonly scrollSpeed: number;
    readonly scrollThreshold: number;
    readonly start: number;
    readonly style: WaveSurfer.WaveSurfer['util']["style"];
    readonly util: WaveSurfer.WaveSurfer['util'];
    readonly wavesurfer: WaveSurfer.WaveSurfer;
    readonly wrapper: HTMLElement;
}

interface RegionParams {
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

interface HandleStyle {
    left: WaveSurfer.Styles;
    right: WaveSurfer.Styles;
}

interface Attributes {
    [attributeName: string]: string;
}

interface Datas {
    [dataName: string]: string;
}

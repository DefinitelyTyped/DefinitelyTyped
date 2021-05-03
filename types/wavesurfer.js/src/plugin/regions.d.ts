import {
    Attributes,
    Datas,
    PluginDefinition,
    PluginParams,
    Styles,
    WaveSurferObserver,
    WaveSurferPlugin,
    WaveSurferUtil,
} from "../..";

export = WaveSurfer.RegionsPlugin;

declare class WaveSurfer {
    addRegion(regionParams: WaveSurfer.RegionParams): void;
    clearRegions(): void;
    enableDragSelection(options: WaveSurfer.RegionParams): void;
}

declare namespace WaveSurfer {
    class RegionsPlugin extends WaveSurferObserver implements WaveSurferPlugin {
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
        readonly util: WaveSurferUtil;
        readonly wavesurfer: WaveSurfer;
        readonly wrapper: HTMLElement;
    }

    interface RegionsPluginParams extends PluginParams {
        dragSelection?: boolean;
        regions?: RegionParams[];
        slop?: number;
        snapToGridInterval?: number;
        maxRegions?: number[];
        formatTimeCallback?: () => string;
        edgeScrollWidth?: number;
    }

    class Region extends WaveSurferObserver {
        constructor(params: RegionParams, regionsUtil: WaveSurferUtil, ws: WaveSurfer);

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
        readonly regionsUtil: WaveSurferUtil;
        readonly resize: boolean;
        readonly scroll: boolean;
        readonly scrollSpeed: number;
        readonly scrollThreshold: number;
        readonly start: number;
        readonly style: WaveSurferUtil["style"];
        readonly util: WaveSurferUtil;
        readonly wavesurfer: WaveSurfer;
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
        left: Styles;
        right: Styles;
    }
}

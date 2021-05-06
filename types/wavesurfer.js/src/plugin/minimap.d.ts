import { WaveSurferObserver, Drawer, WaveSurferPlugin, PluginDefinition, PluginParams, WaveSurferUtil } from "../..";
import RegionsPlugin = require("./regions");

export = WaveSurfer.MinimapPlugin;

declare namespace WaveSurfer {
    class MinimapPlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: MinimapPluginParams, ws: WaveSurfer);
        static create(params: MinimapPluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        bindMinmapEvents(): void;
        bindWavesurferEvents(): void;
        createElements(): void;
        getWidth(): number;
        moveOverviewRegion(pixels: number): void;
        regions(): void;
        render(): void;
        renderRegions(): void;

        readonly draggingOverview: boolean;
        readonly drawer: Drawer;
        readonly overviewPosition: number;
        readonly overviewRegion: HTMLElement | null;
        readonly overviewWidth: number | null;
        readonly params: MinimapPluginParams;
        readonly ratio: number;
        readonly regionsPlugin: RegionsPlugin | null;
        readonly renderEvent: string;
        readonly util: WaveSurferUtil;
        readonly waveShowedWidth: number;
        readonly waveWidth: number;
        readonly wavesurfer: WaveSurfer;
    }

    interface MinimapPluginParams extends PluginParams {
        container?: string | HTMLElement | false;

        showRegions?: boolean;
        regionsPluginName?: string;
        showOverview?: boolean;
        overviewBorderColor?: string;
        overviewBorderSize?: number;
        height?: number;
    }
}

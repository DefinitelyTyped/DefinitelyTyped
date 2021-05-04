import * as WaveSurfer from '../../wavesurfer';
import RegionsPlugin = require('./regions');

export = MinimapPlugin;

declare class MinimapPlugin extends WaveSurfer.Observer implements WaveSurfer.WaveSurferPlugin {
    constructor(params: MinimapPluginParams, ws: WaveSurfer.WaveSurfer);
    static create(params: MinimapPluginParams): WaveSurfer.PluginDefinition;
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
    readonly drawer: WaveSurfer.Drawer;
    readonly overviewPosition: number;
    readonly overviewRegion: HTMLElement | null;
    readonly overviewWidth: number | null;
    readonly params: MinimapPluginParams;
    readonly ratio: number;
    readonly regionsPlugin: RegionsPlugin | null;
    readonly renderEvent: string;
    readonly util: WaveSurfer.WaveSurfer['util'];
    readonly waveShowedWidth: number;
    readonly waveWidth: number;
    readonly wavesurfer: WaveSurfer.WaveSurfer;
}

interface MinimapPluginParams extends WaveSurfer.PluginParams {
    /** CSS selector or HTML element where the map should be rendered. By default it is simply appended after the waveform. */
    container?: string | HTMLElement | false;
}

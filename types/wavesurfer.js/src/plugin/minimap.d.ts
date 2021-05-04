import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Drawer = require('../drawer');
import Observer = require('../util/observer');
import WaveSurfer = require('../wavesurfer');
import RegionsPlugin = require('./regions');

export = MinimapPlugin;

declare class MinimapPlugin extends Observer implements WaveSurferPlugin {
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
    readonly util: WaveSurfer['util'];
    readonly waveShowedWidth: number;
    readonly waveWidth: number;
    readonly wavesurfer: WaveSurfer;
}

interface MinimapPluginParams extends PluginParams {
    /** CSS selector or HTML element where the map should be rendered. By default it is simply appended after the waveform. */
    container?: string | HTMLElement | false;
}

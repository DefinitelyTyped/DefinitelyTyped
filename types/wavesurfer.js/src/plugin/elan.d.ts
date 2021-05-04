import * as WaveSurfer from '../../wavesurfer';

export = ElanPlugin;

declare class ElanPlugin extends WaveSurfer.Observer implements WaveSurfer.WaveSurferPlugin {
    constructor(params: ElanPluginParams, ws: WaveSurfer.WaveSurfer);
    static create(params: ElanPluginParams): WaveSurfer.PluginDefinition;
    destroy(): void;
    init(): void;
}

interface ElanPluginParams extends WaveSurfer.PluginParams {
    /** CSS selector or HTML element where the ELAN information should be rendered. */
    container?: string | HTMLElement;
    /** The location of ELAN XML data. */
    url?: string;
    /** If set only shows the data tiers with the TIER_ID in this map. */
    tiers?: unknown;
}

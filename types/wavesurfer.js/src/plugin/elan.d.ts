import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Observer = require('../util/observer');
import WaveSurfer = require('../wavesurfer');

export = ElanPlugin;

declare class ElanPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: ElanPluginParams, ws: WaveSurfer);
    static create(params: ElanPluginParams): PluginDefinition;
    destroy(): void;
    init(): void;
}

interface ElanPluginParams extends PluginParams {
    /** CSS selector or HTML element where the ELAN information should be rendered. */
    container?: string | HTMLElement;
    /** The location of ELAN XML data. */
    url?: string;
    /** If set only shows the data tiers with the TIER_ID in this map. */
    tiers?: unknown;
}

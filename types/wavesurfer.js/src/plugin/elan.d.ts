import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Observer from '../util/observer';
import WaveSurfer from '../wavesurfer';

export default class ElanPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: ElanPluginParams, ws: WaveSurfer);
    static create(params: ElanPluginParams): PluginDefinition;
    destroy(): void;
    init(): void;
}

export interface ElanPluginParams extends PluginParams {
    /** CSS selector or HTML element where the ELAN information should be rendered. */
    container?: string | HTMLElement | undefined;
    /** The location of ELAN XML data. */
    url?: string | undefined;
    /** If set only shows the data tiers with the TIER_ID in this map. */
    tiers?: unknown | undefined;
}

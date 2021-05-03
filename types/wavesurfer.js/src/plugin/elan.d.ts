import { PluginDefinition, PluginParams, WaveSurferObserver, WaveSurferPlugin } from "../..";

export = WaveSurfer.ElanPlugin;

declare namespace WaveSurfer {
    class ElanPlugin extends WaveSurferObserver implements WaveSurferPlugin {
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
}

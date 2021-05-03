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
        container?: string | HTMLElement;
        url?: string;
        tiers?: unknown;
    }
}

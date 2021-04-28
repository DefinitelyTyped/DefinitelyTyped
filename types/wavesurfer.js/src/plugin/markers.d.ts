import { PluginDefinition, PluginParams, WaveSurferObserver, WaveSurferPlugin, WaveSurferUtil } from "../..";

export = WaveSurfer.MarkersPlugin;

interface WaveSurfer {
    addMarker(param: WaveSurfer.MarkerParams): WaveSurfer.Marker;
    clearMarkers(): void;
}
declare namespace WaveSurfer {
    class MarkersPlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: MarkersPluginParams, ws: WaveSurfer);
        static create(params: MarkersPluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        add(param: MarkerParams): Marker;
        clear(): void;
        remove(index: number): void;

        readonly markerHeight: number;
        readonly markerWidth: number;
        readonly markers: Marker[];
        readonly params: MarkersPluginParams;
        readonly style: WaveSurferUtil["style"];
        readonly util: WaveSurferUtil;
        readonly wavesurfer: WaveSurfer;
        readonly wrapper: HTMLElement;
    }

    interface Marker {
        time: number;
        label?: string;
        color: string;
        position: "top" | "bottom";
    }

    interface MarkersPluginParams {
        markers?: MarkerParams[];
    }

    interface MarkerParams {
        time: number;
        label?: string;
        color?: string;
        position?: "top" | "bottom";
    }
}

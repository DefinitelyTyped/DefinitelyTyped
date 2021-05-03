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

        /** Add a marker. */
        add(param: MarkerParams): Marker;
        /** Remove all markers. */
        clear(): void;
        /** Remove a marker. */
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
        /** Initial set of markers. */
        markers?: MarkerParams[];
    }

    interface MarkerParams {
        /** The time to set the marker at. */
        time: number;
        /** An optional marker label. */
        label?: string;
        /** Background color for marker. */
        color?: string;
        position?: "top" | "bottom";
    }
}

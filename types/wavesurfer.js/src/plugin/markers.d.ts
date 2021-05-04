import * as WaveSurfer from '../../wavesurfer';

export = MarkersPlugin;

declare module '../../wavesurfer' {
    interface WaveSurfer {
        addMarker(param: MarkerParams): Marker;
        clearMarkers(): void;
    }
}

declare class MarkersPlugin extends WaveSurfer.Observer implements WaveSurfer.WaveSurferPlugin {
    constructor(params: MarkersPluginParams, ws: WaveSurfer.WaveSurfer);
    static create(params: MarkersPluginParams): WaveSurfer.PluginDefinition;
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
    readonly style: WaveSurfer.WaveSurfer['util']["style"];
    readonly util: WaveSurfer.WaveSurfer['util'];
    readonly wavesurfer: WaveSurfer.WaveSurfer;
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

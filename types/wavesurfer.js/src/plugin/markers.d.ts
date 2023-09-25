import { PluginDefinition, PluginParams, WaveSurferPlugin } from "../../types/plugin";
import Observer from "../util/observer";
import WaveSurfer from "../wavesurfer";

declare module "../../wavesurfer" {
    interface WaveSurfer {
        addMarker(param: MarkerParams): Marker;
        clearMarkers(): void;
    }
}

export default class MarkersPlugin extends Observer implements WaveSurferPlugin {
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
    readonly style: WaveSurfer["util"]["style"];
    readonly util: WaveSurfer["util"];
    readonly wavesurfer: WaveSurfer;
    readonly wrapper: HTMLElement;
}

export interface Marker {
    time: number;
    label?: string | undefined;
    color: string;
    position: "top" | "bottom";
}

export interface MarkersPluginParams {
    /** Initial set of markers. */
    markers?: MarkerParams[] | undefined;
}

export interface MarkerParams {
    /** The time to set the marker at. */
    time: number;
    /** An optional marker label. */
    label?: string | undefined;
    /** Background color for marker. */
    color?: string | undefined;
    /** Position (default: "bottom"). */
    position?: "top" | "bottom" | undefined;
    /** An HTML element to display instead of the default marker image. */
    markerElement?: HTMLElement | undefined;
    /** Set marker as draggable (default: false). */
    draggable?: boolean | undefined;
}

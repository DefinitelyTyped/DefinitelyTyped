// Type definitions for Leaflet.DomMarkers
// Project: https://github.com/ValentinH/Leaflet.DomMarkers
// Definitions by: Dominic Alie <https://github.com/dalie>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../leaflet/leaflet.d.ts" />

declare module L {
    module DomMarkers {
        export interface Icon extends DivIcon {
        }

        export function icon(options: IDomMarkerOptions): Icon;

        export interface IDomMarkerOptions extends DivIconOptions {
            element: HTMLElement;
        }
    }
}
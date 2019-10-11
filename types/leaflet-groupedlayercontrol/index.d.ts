// Type definitions for leaflet-groupedlayercontrol 0.6
// Project: https://github.com/ismyrnow/leaflet-groupedlayercontrol
// Definitions by: Ryan Conklin <https://github.com/ryanc16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        class GroupedLayers extends L.Control {
            constructor(baseLayers: { [index: string]: L.Layer }, groupedOverlays: { [index: string]: { [index: string]: L.LayerGroup } }, options: GroupedLayersOptions);
        }
    }

    namespace control {
        function groupedLayers(baseLayers: { [index: string]: L.Layer }, groupedOverlays: { [index: string]: { [index: string]: L.LayerGroup } }, options: GroupedLayersOptions): L.Control
    }

    export interface GroupedLayersOptions extends L.ControlOptions {
        /** true */
        collapsed?: boolean,
        /** true */
        autoZIndex?: boolean,
        exclusiveGroups?: string[],
        /** false */
        groupCheckboxes?: boolean
    }

}
// Type definitions for leaflet-groupedlayercontrol 0.6
// Project: https://github.com/ismyrnow/leaflet-groupedlayercontrol
// Definitions by: Ryan Conklin <https://github.com/ryanc16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        class GroupedLayers extends Control {
            constructor(baseLayers: { [index: string]: Layer }, groupedOverlays: { [index: string]: { [index: string]: LayerGroup } }, options: GroupedLayersOptions);
        }
    }

    namespace control {
        function groupedLayers(baseLayers: { [index: string]: Layer }, groupedOverlays: { [index: string]: { [index: string]: LayerGroup } }, options: GroupedLayersOptions): Control;
    }

    interface GroupedLayersOptions extends ControlOptions {
        /** Default: true */
        collapsed?: boolean;
        /** Default: true */
        autoZIndex?: boolean;
        exclusiveGroups?: string[];
        /** Default: false */
        groupCheckboxes?: boolean;
    }
}

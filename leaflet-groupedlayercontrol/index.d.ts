// Type definitions for leaflet-groupedlayercontrol 0.6
// Project: https://github.com/ismyrnow/leaflet-groupedlayercontrol
// Definitions by: Sam Thornton <https://github.com/sdthornton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {

	namespace Control {

		export interface GroupedLayers extends L.Control {
			addBaseLayer(layer: Layer, name: string): any,
			addOverlay(layer: Layer, name: string, group: string): this,
			removeLayer(layer: Layer): this
		}

		export interface GroupedLayersOptions {
			collapsed?: boolean,
			position?: string,
			autoZIndex?: boolean,
			exclusiveGroups?: Array<string>,
			groupCheckboxes?: boolean
		}

	}

	namespace control {

		/**
			* Creates a grouped layer control
			*/
		export function groupedLayers(baseLayers: any, groupedOverlays: any, options?: Control.GroupedLayersOptions): L.Control.GroupedLayers;

	}
}

// Type definitions for Mapbox 1.6.3
// Project: https://www.mapbox.com/mapbox.js/
// Definitions by: Maxime Fabre <https://github.com/anahkiasen/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../leaflet/leaflet.d.ts"/>

//////////////////////////////////////////////////////////////////////
///////////////////////////// MAP OBJECT /////////////////////////////
//////////////////////////////////////////////////////////////////////

// Map
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {
	var accessToken: string;

	/**
	 * Create and automatically configure a map with layers, markers, and interactivity.
	 */
	function map(element: string, id: string, options?: MapOptions): L.mapbox.Map;
	function map(element: string, tilejson: any, options?: MapOptions): L.mapbox.Map;

	interface MapOptions extends L.MapOptions {
		featureLayer?  : FeatureLayerOptions;
		gridLayer?     : any;
		tileLayer?     : TileLayerOptions;
		infoControl?   : ControlOptions;
		legendControl? : ControlOptions;
		shareControl?  : ShareControlOptions;
	}

	interface FilterFunction {
		(feature: any): boolean;
	}

	interface Map extends L.Map {
		tileLayer    : L.mapbox.TileLayer;
		gridLayer    : L.mapbox.GridLayer;
		featureLayer : L.mapbox.FeatureLayer;

		gridControl   : L.mapbox.GridControl;
		infoControl   : L.mapbox.InfoControl;
		legendControl : L.mapbox.LegendControl;
		shareControl  : L.mapbox.ShareControl;

		addLayer(layer: any): any;
		getTileJSON(): any;

	}

}

//////////////////////////////////////////////////////////////////////
/////////////////////////////// LAYERS ///////////////////////////////
//////////////////////////////////////////////////////////////////////

// TileLayer
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * You can add a tiled layer to your map with L.mapbox.tileLayer(), a simple interface to layers from Mapbox and elsewhere.
	 */
	function tileLayer(id: string, options?: TileLayerOptions): L.mapbox.TileLayer;
	function tileLayer(tilejson: any, options?: TileLayerOptions): L.mapbox.TileLayer;

	interface TileLayerOptions extends L.TileLayerOptions {
		retinaVersion?: string;
	}

	interface TileLayer extends L.TileLayer {

		/**
		 * Returns this layer's TileJSON object which determines its tile source, zoom bounds and other metadata.
		 */
		getTileJSON(): any;

		/**
		 * Set the image format of tiles in this layer. You can use lower-quality tiles in order to load maps faster
		 */
		setFormat(format: string): TileLayer;

	}

}

// GridLayer
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * An L.mapbox.gridLayer loads UTFGrid tiles of interactivity into your map, which you can easily access with L.mapbox.gridControl.
	 */
	function gridLayer(id: string): L.mapbox.GridLayer;
	function gridLayer(tilejson: any): L.mapbox.GridLayer;

	interface GridLayer {

		active(): boolean;
		addTo(map: L.mapbox.Map): any;
		onAdd(map: L.mapbox.Map): any;
		onRemove(): any;

		/**
		 * Bind an event handler to a given event on this L.mapbox.gridLayer instance. GridLayers expose a number of useful events that give you access to UTFGrid data as the user interacts with the map.
		 */
		on(event: string, handler: Function, context?: any): any;

		/**
		 * Returns this layer's TileJSON object which determines its tile source, zoom bounds and other metadata.
		 */
		getTileJSON(): any;

		/**
		 * Load data for a given latitude, longitude point on the map, and call the callback function with that data, if any.
		 */
		getData(latlng: L.LatLng, callback: Function): any;

	}

}

// FeatureLayer
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * L.mapbox.featureLayer provides an easy way to integrate GeoJSON from Mapbox and elsewhere into your map.
	 */
	function featureLayer(): L.mapbox.FeatureLayer;
	function featureLayer(id: string, options?: FeatureLayerOptions): L.mapbox.FeatureLayer;
	function featureLayer(geojson: any, options?: FeatureLayerOptions): L.mapbox.FeatureLayer;

	interface FeatureLayerOptions {
		filter?    : FilterFunction;
		sanitizer? : (template: string) => string;
	}

	interface FeatureLayer extends L.FeatureGroup<L.ILayer> {

		/**
		 * Load GeoJSON data for this layer from the URL given by url.
		 */
		loadURL(url: string): any;

		/**
		 * Load marker GeoJSON data from a map with the given id on Mapbox.
		 */
		loadID(id: string): any;

		/**
		 * Sets the filter function for this data layer.
		 */
		setFilter(filter: FilterFunction): any;

		/**
		 * Gets the filter function for this data layer.
		 */
		getFilter(): FilterFunction;

		/**
		 * Set the contents of a markers layer: run the provided features through
		 * the filter function and then through the factory function to create
		 * elements for the map. If the layer already has features, they are
		 * replaced with the new features. An empty array will clear the
		 * layer of all features.
		 */
		setGeoJSON(geojson: any): L.mapbox.FeatureLayer;

		/**
		 * Get the contents of this layer as GeoJSON data.
		 */
		getGeoJSON(): any;

	}

}

//////////////////////////////////////////////////////////////////////
////////////////////////////// GEOCODING /////////////////////////////
//////////////////////////////////////////////////////////////////////

// Geocoder
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * A low-level interface to geocoding, useful for more complex uses and reverse-geocoding.
	 */
	function geocoder(id: string): L.mapbox.Geocoder;

	interface Geocoder {

		getURL(): string;
		setURL(url: string): any;
		setID(id: string): any;
		setTileJSON(tilejson: any): any;
		queryURL(url: string): string;

		/**
		 * Queries the geocoder with a query string, and returns its result, if any.
		 */
		query(queryString: string, callback: Function): any;

		/**
		 * Queries the geocoder with a location, and returns its result, if any.
		 */
		reverseQuery(location: any, callback: Function): any;

	}
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////// CONTROLS ////////////////////////////
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {
	interface ControlOptions extends L.ControlOptions {
		sanitizer?: (template: string) => string;
	}
}

// InfoControl
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * A map control that shows a toggleable info container. If set, attribution is auto-detected from active layers and added to the info container.
	 */
	function infoControl(options?: ControlOptions): InfoControl;

	interface InfoControl extends L.Control {

		onAdd(map: L.mapbox.Map): any;
		onRemove(map: L.mapbox.Map): any;

		/**
		 * Adds an info string to infoControl.
		 */
		addInfo(info: string): any;

		/**
		 * Removes an info string from infoControl
		 */
		removeInfo(info: string): any;

	}

}

// LegendControl
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * A map control that shows legends added to maps in Mapbox.
	 * Legends are auto-detected from active layers.
	 */
	function legendControl(options?: ControlOptions): LegendControl;

	interface LegendControl extends L.Control {

		onAdd(map: L.mapbox.Map): any;

		/**
		 * Adds a legend to the legendControl.
		 */
		addLegend(legend: string): any;

		/**
		 * Removes a legend from the legendControl.
		 */
		removeLegend(legend: string): any;

	}

}

// GridControl
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * Interaction is what we call interactive parts of maps that are created with
	 * the powerful tooltips & regions system in TileMill. Under the hood, it's powered by the open UTFGrid specification.
	 */
	function gridControl(layer: string, options?: GridControlOptions): GridControl;

	interface GridControlOptions extends ControlOptions {
		template?    : string;
		follow?      : boolean;
		pinnable?    : boolean;
		touchTeaser? : boolean;
		location?    : boolean;
	}

	interface GridControl extends L.Control {

		onAdd(map: L.mapbox.Map): any;
		onRemove(map: L.mapbox.Map): any;

		/**
		 * If a tooltip is currently shown by the gridControl, hide and close it.
		 */
		hide(): any;

		/**
		 * Change the Mustache template used to transform the UTFGrid data in the map's interactivity into HTML for display.
		 */
		setTemplate(template: string): any;

	}

}

// GeocoderControl
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * Adds geocoder functionality as well as a UI element to a map. This uses the Mapbox Geocoding API.
	 */
	function geocoderControl(id: string, options?: GeocoderControlOptions): GeocoderControl;

	interface GeocoderControlOptions extends L.ControlOptions {
		keepOpen?: boolean;
	}

	interface GeocoderControl {

		getURL(): string;
		onAdd(map: L.mapbox.Map): any;


		/**
		 * Set the url used for geocoding.
		 */
		setURL(url: string): any;

		/**
		 * Set the map id used for geocoding.
		 */
		setID(id: string): any;

		/**
		 * Set the TileJSON used for geocoding.
		 */
		setTileJSON(tilejson: any): any;

		/**
		 * Bind a listener to an event emitted by the geocoder control. Supported additional events are
		 */
		on(event: string, callback: Function): any;

	}

}

// ShareControl
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * Adds a "Share" button to the map, which can be used to share the map to Twitter or Facebook, or generate HTML for a map embed.
	 */
	function shareControl(id: string, options?: ShareControlOptions): ShareControl;

	interface ShareControlOptions extends L.ControlOptions {
		url?: string;
	}

	interface ShareControl extends L.Control {

		onAdd(map: L.mapbox.Map): any;

	}

}

//////////////////////////////////////////////////////////////////////
////////////////////////////// MARKERS ///////////////////////////////
//////////////////////////////////////////////////////////////////////

declare module L.mapbox.marker {

	/**
	 * A core icon generator used in L.mapbox.marker.style
	 */
	function icon(feature: any): L.Icon;

	/**
	 * An icon generator for use in conjunction with pointToLayer to generate markers from the Mapbox Markers API and support the simplestyle-spec for features.
	 */
	function style(feature: any, latlng: any): L.Marker;

}

//////////////////////////////////////////////////////////////////////
////////////////////////////// SIMPLESTYLE ///////////////////////////
//////////////////////////////////////////////////////////////////////

declare module L.mapbox.simplestyle {

	/**
	 * Given a GeoJSON Feature with optional simplestyle-spec properties, return an options object formatted to be used as Leaflet Path options.
	 */
	function style(feature: any): L.PathOptions;

}

//////////////////////////////////////////////////////////////////////
/////////////////////////////// UTILITY //////////////////////////////
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {

	/**
	 * A HTML sanitization function, with the same effect as the default value of the sanitizer option of L.mapbox.featureLayer, L.mapbox.gridControl, and L.mapbox.legendControl.
	 */
	function sanitize(text: string): string;

	/**
	 * A mustache template rendering function, as used by the templating feature provided by L.mapbox.gridControl.
	 */
	function template(template: string, data?: any): string;

}

//////////////////////////////////////////////////////////////////////
///////////////////////////// CONFIGURATION //////////////////////////
//////////////////////////////////////////////////////////////////////

declare module L.mapbox {
	export class config {

		static FORCE_HTTPS: boolean;

		static HTTP_URLS: string[];

		static HTTPS_URLS: string[];

	}
}

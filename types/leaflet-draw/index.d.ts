// Type definitions for leaflet-draw 0.4
// Project: https://github.com/Leaflet/Leaflet.draw
// Definitions by: Matt Guest <https://github.com/matt-guest>, Ryan Blace <https://github.com/reblace>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
	interface MapOptions {
		drawControl?: boolean;
	}

	namespace Control {
		interface DrawConstructorOptions {
			/**
			 * The initial position of the control (one of the map corners).
			 *
			 * Default value: 'topleft'
			 */
			position?: string;

			/**
			 * The options used to configure the draw toolbar.
			 *
			 * Default value: {}
			 */
			draw?: DrawOptions;

			/**
			 * 	The options used to configure the edit toolbar.
			 *
			 *  Default value: false
			 */
			edit?: EditOptions;
		}

		interface DrawOptions {
			/**
			 * Polyline draw handler options. Set to false to disable handler.
			 *
			 *  Default value: {}
			 */
			polyline?: DrawOptions.PolylineOptions;

			/**
			 * Polygon draw handler options. Set to false to disable handler.
			 *
			 *  Default value: {}
			 */
			polygon?: DrawOptions.PolygonOptions;

			/**
			 * Rectangle draw handler options. Set to false to disable handler.
			 *
			 *  Default value: {}
			 */
			rectangle?: DrawOptions.RectangleOptions;

			/**
			 * Circle draw handler options. Set to false to disable handler.
			 *
			 *  Default value: {}
			 */
			circle?: DrawOptions.CircleOptions;

			/**
			 * Marker draw handler options. Set to false to disable handler.
			 *
			 *  Default value: {}
			 */
			marker?: DrawOptions.MarkerOptions;
		}

		interface EditOptions {
			/**
			 * This is the FeatureGroup that stores all editable shapes.
			 * THIS IS REQUIRED FOR THE EDIT TOOLBAR TO WORK
			 *
			 * Default value: null
			 */
			featureGroup: FeatureGroup;

			/**
			 * Edit handler options. Set to false to disable handler.
			 *
			 * Default value: null
			 */
			edit?: DrawOptions.EditHandlerOptions;

			/**
			 * Delete handler options. Set to false to disable handler.
			 *
			 * Default value: null
			 */
			remove?: DrawOptions.DeleteHandlerOptions;
		}

		interface Draw extends Control {
			setDrawingOptions(options: DrawOptions): void;
		}

		class Draw {
			constructor(options?: DrawConstructorOptions);
		}
	}

	namespace DrawOptions {
		interface PolylineOptions {
			/**
			 * Determines if line segments can cross.
			 *
			 * Default value: true
			 */
			allowIntersection?: boolean;

			/**
			 * Configuration options for the error that displays if an intersection is detected.
			 *
			 * Default value: See code
			 */
			drawError?: any;

			/**
			 * Distance in pixels between each guide dash.
			 *
			 * Default value: 20
			 */
			guidelineDistance?: number;

			/**
			 * The options used when drawing the polyline/polygon on the map.
			 *
			 * Default value: See code
			 */
			shapeOptions?: L.PolylineOptions;

			/**
			 * Determines which measurement system (metric or imperial) is used.
			 *
			 * Default value: true
			 */
			metric?: boolean;

			/**
			 * 	This should be a high number to ensure that you can draw over all other layers on the map.
			 *
			 * Default value: 2000
			 */
			zIndexOffset?: number;

			/**
			 * Determines if the draw tool remains enabled after drawing a shape.
			 *
			 * Default value: false
			 */
			repeatMode?: boolean;
		}

		interface PolygonOptions extends PolylineOptions {
			/**
			 * Show the area of the drawn polygon in m², ha or km².
			 * The area is only approximate and become less accurate the larger the polygon is.
			 *
			 * Default value: false
			 */
			showArea?: boolean;
		}

		interface RectangleOptions {
			/**
			 * The options used when drawing the rectangle on the map.
			 *
			 * Default value: See code
			 */
			shapeOptions?: L.PathOptions;

			/**
			 * Determines if the draw tool remains enabled after drawing a shape.
			 *
			 * Default value: false
			 */
			repeatMode?: boolean;
		}

		interface CircleOptions {
			/**
			 * The options used when drawing the circle on the map.
			 *
			 * Default value: See code
			 */
			shapeOptions?: L.PathOptions;

			/**
			 * Determines if the draw tool remains enabled after drawing a shape.
			 *
			 * Default value: false
			 */
			repeatMode?: boolean;
		}

		interface MarkerOptions {
			/**
			 * TThe icon displayed when drawing a marker.
			 *
			 * Default value: L.Icon.Default()
			 */
			icon?: L.Icon;

			/**
			 * This should be a high number to ensure that you can draw over all other layers on the map.
			 *
			 * Default value: 2000
			 */
			zIndexOffset?: number;

			/**
			 * Determines if the draw tool remains enabled after drawing a shape.
			 *
			 * Default value: false
			 */
			repeatMode?: boolean;
		}

		interface EditHandlerOptions {
			/**
			 * The path options for how the layers will look while in edit mode.
			 * If this is set to null the editable path options will not be set.
			 *
			 * Default value: See code
			 */
			selectedPathOptions?: L.PathOptions;
		}

		interface DeleteHandlerOptions {
		}
	}

	namespace Draw {
		namespace Event {
			const CREATED: string;
			const EDITED: string;
			const DELETED: string;
			const DRAWSTART: string;
			const DRAWSTOP: string;
			const DRAWVERTEX: string;
			const EDITSTART: string;
			const EDITMOVE: string;
			const EDITRESIZE: string;
			const EDITVERTEX: string;
			const EDITSTOP: string;
			const DELETESTART: string;
			const DELETESTOP: string;
		}
	}

	namespace DrawEvents {
		interface Created extends L.Event {
			/**
			 * Layer that was just created.
			 */
			layer: Layer;

			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker.
			 */
			layerType: string;
		}

		interface Edited extends L.Event {
			/**
			 * List of all layers just edited on the map.
			 */
			layers: LayerGroup;
		}

		/**
		 * Triggered when layers have been removed (and saved) from the FeatureGroup.
		 */
		interface Deleted extends L.Event {
			/**
			 * List of all layers just removed from the map.
			 */
			layers: LayerGroup;
		}

		interface DrawStart extends L.Event {
			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
			 */
			layerType: string;
		}

		interface DrawStop extends L.Event {
			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
			 */
			layerType: string;
		}

		interface EditStart extends L.Event {
			/**
			 * The type of edit this is. One of: edit
			 */
			handler: string;
		}

		interface EditStop extends L.Event {
			/**
			 * The type of edit this is. One of: edit
			 */
			handler: string;
		}

		interface DeleteStart extends L.Event {
			/**
			 * The type of edit this is. One of: remove
			 */
			handler: string;
		}

		interface DeleteStop extends L.Event {
			/**
			 * The type of edit this is. One of: remove
			 */
			handler: string;
		}
	}

	namespace GeometryUtil {
		/**
		 * Returns the area of a polygon drawn with leaflet.draw
		 */
		function geodesicArea(coordinates: L.LatLngLiteral[]): number;

		/**
		 * Returns a readable area string in yards or metric
		 */
		function readableArea(area: number, isMetric: boolean): string;
	}
}

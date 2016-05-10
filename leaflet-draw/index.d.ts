// Type definitions for leaflet-draw 0.2.4
// Project: https://github.com/Leaflet/Leaflet.draw
// Definitions by: Matt Guest <https://github.com/matt-guest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../leaflet/leaflet-0.7.d.ts" />

declare namespace L {
	export interface MapOptions {
		drawControl?: boolean;
	}

	export interface ControlStatic {
		Draw: Control.DrawStatic;
	}

	namespace Control {

		export interface DrawStatic {
			new (options?: IDrawConstructorOptions): Draw;
		}

		export interface IDrawConstructorOptions {

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
			edit: EditOptions;

		}

		export interface DrawOptions {

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

		export interface EditOptions {

			/**
			 * This is the FeatureGroup that stores all editable shapes.
			 * THIS IS REQUIRED FOR THE EDIT TOOLBAR TO WORK
			 *
			 * Default value: null
			 */
			featureGroup: FeatureGroup<ILayer>;

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

		export interface Draw extends IControl {

		}
	}


	namespace DrawOptions {

		export interface PolylineOptions {

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

		export interface PolygonOptions extends PolylineOptions {

			/**
			 * Show the area of the drawn polygon in m², ha or km².
			 * The area is only approximate and become less accurate the larger the polygon is.
			 *
			 * Default value: false
			 */
			showArea?: boolean;
		}

		export interface RectangleOptions {

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

		export interface CircleOptions {

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

		export interface MarkerOptions {

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

		export interface EditHandlerOptions {
			/**
			 * The path options for how the layers will look while in edit mode.
			 * If this is set to null the editable path options will not be set.
			 *
			 * Default value: See code
			 */
			selectedPathOptions?: L.PathOptions;
		}

		export interface DeleteHandlerOptions {
		}

	}

	namespace DrawEvents {

		export interface Created {

			/**
			 * Layer that was just created.
			 */
			layer: ILayer;

			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker.
			 */
			layerType: string;
		}

		export interface Edited {

			/**
			 * List of all layers just edited on the map.
			 */
			layers: LayerGroup<ILayer>;
		}

		/**
		 * Triggered when layers have been removed (and saved) from the FeatureGroup.
		 */
		export interface Deleted {

			/**
			 * List of all layers just removed from the map.
			 */
			layers: LayerGroup<ILayer>;
		}

		export interface DrawStart {

			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
			 */
			layerType: string;
		}

		export interface DrawStop {

			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
			 */
			layerType: string;
		}

        export interface EditStart {
			/**
			 * The type of edit this is. One of: edit
			 */
			handler: string;
		}

		export interface EditStop {
			/**
			 * The type of edit this is. One of: edit
			 */
			handler: string;
		}

		export interface DeleteStart {
			/**
			 * The type of edit this is. One of: remove
			 */
			handler: string;
		}

		export interface DeleteStop {
			/**
			 * The type of edit this is. One of: remove
			 */
			handler: string;
		}
	}
}

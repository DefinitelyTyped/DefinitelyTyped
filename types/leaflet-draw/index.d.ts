// Type definitions for leaflet-draw 0.4
// Project: https://github.com/Leaflet/Leaflet.draw
// Definitions by: Matt Guest <https://github.com/matt-guest>
//                 Ryan Blace <https://github.com/reblace>
//                 Yun Shi <https://github.com/YunS-Stacy>
//                 Kevin Richter <https://github.com/beschoenen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
	interface MapOptions {
		drawControl?: boolean;
	}

	interface ToolbarAction {
		title: string;
		text: string;
		callback: () => void;
		context: object;
	}

	interface ToolbarModeHandler {
		enabled: boolean;
		handler: Handler;
		title: string;
	}

	interface ToolbarOptions {
		polyline?: DrawOptions.PolylineOptions;
		polygon?: DrawOptions.PolygonOptions;
		rectangle?: DrawOptions.RectangleOptions;
		circle?: DrawOptions.CircleOptions;
		marker?: DrawOptions.MarkerOptions;
		circlemarker?: DrawOptions.CircleOptions;
	}

	interface PrecisionOptions {
		km?: number;
		ha?: number;
		m?: number;
		mi?: number;
		ac?: number;
		yd?: number;
		ft?: number;
		nm?: number;
	}

	class Toolbar extends Class {
		constructor(options?: ToolbarOptions);

		addToolbar(map: Map): HTMLElement | void;

		removeToolbar(): void;
	}

	class DrawToolbar extends Toolbar {
		getModeHandlers(map: Map): ToolbarModeHandler[];

		getActions(handler: Draw.Feature): ToolbarAction[];

		setOptions(options: Control.DrawConstructorOptions): void;
	}

	class EditToolbar extends Toolbar {
		getModeHandlers(map: Map): ToolbarModeHandler[];

		getActions(handler: Draw.Feature): ToolbarAction[];

		setOptions(options: Control.DrawConstructorOptions): void;
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
			 * The options used to configure the edit toolbar.
			 *
			 * Default value: false
			 */
			edit?: EditOptions;
		}

		interface DrawOptions {
			/**
			 * Polyline draw handler options. Set to false to disable handler.
			 *
			 * Default value: {}
			 */
			polyline?: DrawOptions.PolylineOptions | false;

			/**
			 * Polygon draw handler options. Set to false to disable handler.
			 *
			 * Default value: {}
			 */
			polygon?: DrawOptions.PolygonOptions | false;

			/**
			 * Rectangle draw handler options. Set to false to disable handler.
			 *
			 * Default value: {}
			 */
			rectangle?: DrawOptions.RectangleOptions | false;

			/**
			 * Circle draw handler options. Set to false to disable handler.
			 *
			 * Default value: {}
			 */
			circle?: DrawOptions.CircleOptions | false;

			/**
			 * Circle marker draw handler options. Set to false to disable handler.
			 *
			 * Default value: {}
			 */
			circlemarker?: DrawOptions.CircleMarkerOptions | false;

			/**
			 * Marker draw handler options. Set to false to disable handler.
			 *
			 * Default value: {}
			 */
			marker?: DrawOptions.MarkerOptions | false;
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
			edit?: DrawOptions.EditHandlerOptions | false;

			/**
			 * Delete handler options. Set to false to disable handler.
			 *
			 * Default value: null
			 */
			remove?: DrawOptions.DeleteHandlerOptions | false;
		}

		interface Draw extends Control {
			setDrawingOptions(options: DrawOptions): void;
		}

		class Draw {
			constructor(options?: DrawConstructorOptions);
		}
	}

	namespace DrawOptions {
		interface SimpleShapeOptions {
			/**
			 * Determines if the draw tool remains enabled after drawing a shape.
			 *
			 * Default value: false
			 */
			repeatMode?: boolean;
		}

		interface PolylineOptions {
			/**
			 * Determines if line segments can cross.
			 *
			 * Default value: true
			 */
			allowIntersection?: boolean;

			/**
			 * Determines if the draw tool remains enabled after drawing a shape.
			 *
			 * Default value: false
			 */
			repeatMode?: boolean;

			/**
			 * Configuration options for the error that displays if an intersection is detected.
			 *
			 * Default value: See code
			 */
			drawError?: DrawErrorOptions;

			icon?: Icon | DivIcon;

			touchIcon?: Icon | DivIcon;

			/**
			 * Distance in pixels between each guide dash.
			 *
			 * Default value: 20
			 */
			guidelineDistance?: number;

			/**
			 * The maximum length of the guide line
			 *
			 * Default value: 4000
			 */
			maxGuideLineLength?: number;

			/**
			 * The options used when drawing the polyline/polygon on the map.
			 *
			 * Default value: See code
			 */
			shapeOptions?: PathOptions;

			/**
			 * Determines which measurement system (metric or imperial) is used.
			 *
			 * Default value: true
			 */
			metric?: boolean;

			/**
			 * When not metric, to use feet instead of yards for display.
			 *
			 * Default value: true
			 */
			feet?: boolean;

			/**
			 * When not metric, not feet use nautic mile for display
			 *
			 * Default value: false
			 */
			nautic?: boolean;

			/**
			 * Whether to display distance in the tooltip
			 *
			 * Default value: true
			 */
			showLength?: boolean;

			/**
			 * This should be a high number to ensure that you can draw over all other layers on the map.
			 *
			 * Default value: 2000
			 */
			zIndexOffset?: number;

			/**
			 * To change distance calculation
			 *
			 * Default value: 1
			 */
			factor?: number;

			/**
			 * Once this number of points are placed, finish shape
			 *
			 * Default value: 0
			 */
			maxPoints?: number;
		}

		interface PolygonOptions extends PolylineOptions {
			/**
			 * Show the area of the drawn polygon in m², ha or km².
			 * The area is only approximate and become less accurate the larger the polygon is.
			 *
			 * Default value: false
			 */
			showArea?: boolean;

			/**
			 * Defines the precision for each type of unit (e.g. {km: 2, ft: 0}
			 *
			 * Default value: {}
			 */
			precision?: PrecisionOptions;
		}

		interface RectangleOptions extends SimpleShapeOptions {
			/**
			 * The options used when drawing the rectangle on the map.
			 *
			 * Default value: See code
			 */
			shapeOptions?: PathOptions;

			/**
			 * Whether to use the metric measurement system or imperial
			 *
			 * Default value: true
			 */
			metric?: boolean;
		}

		interface CircleOptions extends SimpleShapeOptions {
			/**
			 * The options used when drawing the circle on the map.
			 *
			 * Default value: See code
			 */
			shapeOptions?: PathOptions;

			/**
			 * Whether to show the radius in the tooltip
			 *
			 * Default value: true
			 */
			showRadius?: boolean;

			/**
			 * Whether to use the metric measurement system or imperial
			 *
			 * Default value: true
			 */
			metric?: boolean;

			/**
			 * When not metric, use feet instead of yards for display
			 *
			 * Default value: true
			 */
			feet?: boolean;

			/**
			 * When not metric, not feet use nautic mile for display
			 *
			 * Default value: false
			 */
			nautic?: boolean;
		}

		interface CircleMarkerOptions {
			/**
			 * Whether to draw stroke around the circle marker.
			 *
			 * Default value: true
			 */
			stroke?: boolean;

			/**
			 * The stroke color of the circle marker.
			 *
			 * Default value: '#3388ff'
			 */
			color?: string;

			/**
			 * The stroke width in pixels of the circle marker.
			 *
			 * Default value: 4
			 */
			weight?: number;

			/**
			 * The stroke opacity of the circle marker.
			 *
			 * Default value: 0.5
			 */
			opacity?: number;

			/**
			 * Whether to fill the circle marker with color.
			 *
			 * Default value: true
			 */
			fill?: boolean;

			/**
			 * The fill color of the circle marker. Defaults to the value of the color option.
			 *
			 * Default value: null
			 */
			fillColor?: string;

			/**
			 * The opacity of the circle marker.
			 *
			 * Default value: 0.2
			 */
			fillOpacity?: number;

			/**
			 * Whether you can click the circle marker.
			 *
			 * Default value: true
			 */
			clickable?: boolean;

			/**
			 * This should be a high number to ensure that you can draw over all other layers on the map.
			 *
			 * Default value: 2000
			 */
			zIndexOffset?: number;
		}

		interface MarkerOptions {
			/**
			 * TThe icon displayed when drawing a marker.
			 *
			 * Default value: L.Icon.Default()
			 */
			icon?: Icon | DivIcon;

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
			selectedPathOptions?: PathOptions;
		}

		interface DeleteHandlerOptions {
		}

		interface DrawErrorOptions {
			color?: string;
			timeout?: number;
			message?: string;
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
			const TOOLBAROPENED: string;
			const TOOLBARCLOSED: string;
			const TOOLBARCONTEXT: string;
		}

		class Feature extends Handler {
			initialize(
				map: Map,
				options: DrawOptions.PolylineOptions | DrawOptions.PolygonOptions | DrawOptions.RectangleOptions | DrawOptions.MarkerOptions | DrawOptions.EditHandlerOptions | DrawOptions.DeleteHandlerOptions
			): void;

			setOptions(
				options: DrawOptions.PolylineOptions | DrawOptions.PolygonOptions | DrawOptions.RectangleOptions | DrawOptions.MarkerOptions | DrawOptions.EditHandlerOptions | DrawOptions.DeleteHandlerOptions
			): void;
		}

		class SimpleShape extends Feature {
		}

		class Marker extends Feature {
			constructor(
				map: Map,
				options?: DrawOptions.MarkerOptions
			)
		}

		class CircleMarker extends Marker {
			constructor(
				map: Map,
				options?: DrawOptions.MarkerOptions
			)
		}

		class Circle extends SimpleShape {
			constructor(
				map: Map,
				options?: DrawOptions.CircleOptions
			)
		}

		class Polyline extends Feature {
			constructor(
				map: Map,
				options?: DrawOptions.PolylineOptions
			)

			deleteLastVertex(): void;

			addVertex(latlng: LatLng): void;

			completeShape(): void;
		}

		class Rectangle extends SimpleShape {
			constructor(
				map: Map,
				options?: DrawOptions.RectangleOptions
			)
		}

		class Polygon extends Polyline {
			constructor(
				map: Map,
				options?: DrawOptions.PolygonOptions
			)
		}

		class Tooltip extends Class {
			constructor(map: Map);

			dispose(): void;

			updateContent(labelText?: { text: string, subtext?: string }): Tooltip;

			updatePosition(latlng: LatLng): Tooltip;

			showAsError(): Tooltip;

			removeError(): Tooltip;
		}
	}

	namespace DrawEvents {
		interface Created extends Event {
			/**
			 * Layer that was just created.
			 */
			layer: Circle | CircleMarker | Marker | Polygon | Polyline | Rectangle;

			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker.
			 */
			layerType: string;
		}

		interface Edited extends Event {
			/**
			 * List of all layers just edited on the map.
			 */
			layers: LayerGroup;
		}

		/**
		 * Triggered when layers have been removed (and saved) from the FeatureGroup.
		 */
		interface Deleted extends Event {
			/**
			 * List of all layers just removed from the map.
			 */
			layers: LayerGroup;
		}

		interface DrawStart extends Event {
			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
			 */
			layerType: string;
		}

		interface DrawStop extends Event {
			/**
			 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
			 */
			layerType: string;
		}

		interface DrawVertex extends Event {
			/**
			 * List of all layers just being added from the map.
			 */
			layers: LayerGroup;
		}

		interface EditStart extends Event {
			/**
			 * The type of edit this is. One of: edit
			 */
			handler: string;
		}

		interface EditMove extends Event {
			/**
			 * Layer that was just moved.
			 */
			layer: Layer;
		}

		interface EditResize extends Event {
			/**
			 * Layer that was just resized.
			 */
			layer: Layer;
		}

		interface EditVertex extends Event {
			/**
			 * List of all layers just being edited from the map.
			 */
			layers: LayerGroup;

			poly: Polyline | Polygon;
		}

		interface EditStop extends Event {
			/**
			 * The type of edit this is. One of: edit
			 */
			handler: string;
		}

		interface DeleteStart extends Event {
			/**
			 * The type of edit this is. One of: remove
			 */
			handler: string;
		}

		interface DeleteStop extends Event {
			/**
			 * The type of edit this is. One of: remove
			 */
			handler: string;
		}

		interface ToolbarOpened extends Event {
		}

		interface ToolbarClosed extends Event {
		}

		interface MarkerContext extends Event {
		}
	}

	namespace GeometryUtil {
		/**
		 * Returns the area of a polygon drawn with leaflet.draw
		 */
		function geodesicArea(coordinates: LatLngLiteral[]): number;

		/**
		 * Returns n in specified number format (if defined) and precision
		 */
		function formattedNumber(n: string, precision: number): string;

		/**
		 * Returns a readable area string in yards or metric
		 */
		function readableArea(area: number, isMetric?: boolean, precision?: PrecisionOptions): string;

		/**
		 * Converts metric distance to distance string.
		 * The value will be rounded as defined by the precision option object.
		 */
		function readableDistance(distance: number, isMetric?: boolean, isFeet?: boolean, isNauticalMile?: boolean, precision?: PrecisionOptions): string;

		/**
		 * Returns true if the Leaflet version is 0.7.x, false otherwise.
		 */
		function isVersion07x(): boolean;
	}

	namespace LatLngUtil {
		/**
		 * Clone the latLng point or points or nested points and return an array with those points
		 */
		function cloneLatLngs(latlngs: LatLng[]): LatLng[][];

		/**
		 * Clone the latLng and return a new LatLng object.
		 */
		function cloneLatLng(latlng: LatLng): LatLng;
	}

	namespace EditToolbar {
		class Edit extends Toolbar {
			constructor(map: Map, options?: ToolbarOptions);

			revertLayers(): void;

			save(): void;
		}

		class Delete extends Toolbar {
			constructor(map: Map, options?: ToolbarOptions);

			revertLayers(): void;

			save(): void;

			removeAllLayers(): void;
		}
	}

	namespace EditOptions {
		interface EditPolyVerticesEditOptions {
			icon?: Icon | DivIcon;
			touchIcon?: Icon | DivIcon;
			drawError?: DrawOptions.DrawErrorOptions;
		}

		interface EditSimpleShapeOptions {
			moveIcon?: Icon | DivIcon;
			resizeIcon?: Icon | DivIcon;
			touchMoveIcon?: Icon | DivIcon;
			touchResizeIcon?: Icon | DivIcon;
		}
	}

	namespace Edit {
		class Circle extends CircleMarker {
		}

		class CircleMarker extends SimpleShape {
		}

		class Marker extends Handler {
			constructor(marker: Marker, options?: object);
		}

		class Poly extends Handler {
			constructor(poly: Draw.Polyline);

			updateMarkers(): void;
		}

		class PolyVerticesEdit extends Handler {
			constructor(poly: Poly, latlngs: LatLngExpression[], options?: EditOptions.EditPolyVerticesEditOptions);

			updateMarkers(): void;
		}

		class Rectangle extends SimpleShape {
		}

		class SimpleShape extends Handler {
			constructor(shape: SimpleShape, options?: EditOptions.EditSimpleShapeOptions);

			updateMarkers(): void;
		}
	}
}

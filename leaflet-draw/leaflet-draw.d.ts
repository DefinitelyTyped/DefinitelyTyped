// Type definitions for leaflet-draw
// Project: https://github.com/Leaflet/Leaflet.draw
// Definitions by: Lukas Pohl <https://github.com/fieldy1234>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../leaflet/leaflet.d.ts" />

declare module L {
	export module Draw {
		export interface CreatedEvent {
			layer: L.ILayer;
			
			layerType: string;
		}
		
		export interface StopEvent {
			layerType: string;
		}
		
		export interface EditedEvent {
			layers: L.LayerGroup<L.ILayer>;
		}
		
		export interface EditstartEvent {
			handler: string;
		}
		
		export interface EditstopEvent {
			handler: string;
		}
		
		export interface DeletedEvent {
			layers: L.LayerGroup<L.ILayer>;
		}
		
		export interface DeletestartEvent {
			handler: string;
		}
		
		export interface DeletestopEvent {
			handler: string;
		}
		
		interface MarkerOptions {
			icon?: L.Icon;
		
			zIndexOffset?: Number;
		
			repeatMode?: Boolean;
		}

		interface Feature extends L.Handler {
			enable(): void;

			disable(): void;

			addHooks(): void;

			removeHooks(): void;

			setOptions(options: any): void;
		}

		interface PolylineOptions { 
			shapeOptions?: L.PathOptions;
		
			allowIntersection?: Boolean;
		
			drawError?: Object;
		
			guidelineDistance?: number;
		
			metric?: Boolean;
		
			zIndexOffset?: Number;
		}
		
		interface PolygonOptions extends PolylineOptions {
			showArea?: Boolean;
		}
		
		interface SimpleShapeOptions {
			shapeOptions?: L.PathOptions;
		
			repeatMode?: Boolean;
		}
		
		interface SimpleShapeStatic extends ClassStatic {
		}
		interface SimpleShape extends L.IHandler {
			new(map: L.Map, options: SimpleShapeOptions): SimpleShape;
		}
		export var SimpleShape: SimpleShapeStatic;
		
		interface PolygonStatic extends ClassStatic {
			new(map: L.Map, options: PolygonOptions): Polygon;
		}
		interface Polygon extends L.Draw.Polyline {
		}
		export var Polygon: PolygonStatic;

		interface PolylineStatic extends ClassStatic {
			new(map: L.Map, options: PolylineOptions): Polyline;
		}
		interface Polyline extends L.Draw.Feature {
		}
		export var Polyline: PolylineStatic;

		interface RectangleStatic extends ClassStatic {
			new(map: L.Map, options: SimpleShapeOptions): Rectangle;
		}
		interface Rectangle extends L.Draw.SimpleShape {
		}
		export var Rectangle: RectangleStatic;
		
		interface CircleStatic extends ClassStatic {
			new(map: L.Map, options: SimpleShapeOptions): Circle;
		}
		interface Circle extends L.Draw.SimpleShape {
		}
		export var Circle: CircleStatic;
		
		interface MarkerStatic extends ClassStatic {
			new(map: L.Map, options: MarkerOptions): Marker;
		}
		interface Marker extends L.Draw.Feature {
		}
		export var Marker: MarkerStatic;
	}
	
	export interface ControlStatic {
		Draw: Control.DrawStatic;
	}
	
	module Control {
		export interface DrawStatic extends ClassStatic {
			new(options?: any): Draw;
		}
		
		export interface Draw extends L.Control {
			position: string;

			draw: any;

			edit: EditOptions;
			
			setDrawingOptions(options: any): void;
		}

		interface EditHandlerOptions {
			selectedPathOptions: L.Path
		}
		
		interface DeleteHandlerOptions {
 		}

		interface EditOptions {
			featureGroup<T extends L.ILayer>(layers?: T[]): L.FeatureGroup<T>;
		
			edit: EditHandlerOptions;
		
			remove: DeleteHandlerOptions;
		}
	}
}

declare module "leaflet-draw" {
	var draw: {};
	export = draw;
}

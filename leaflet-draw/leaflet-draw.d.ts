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
			new(map: L.Map, options: SimpleShapeOptions): SimpleShape;
		}
		interface SimpleShape extends L.IHandler {
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
		
		interface CircleStatic extends SimpleShapeStatic {
		}
		interface Circle extends L.Draw.SimpleShape {
			new(map: L.Map, options: SimpleShapeOptions): Circle;
		}
		export var Circle: CircleStatic;
		
		interface MarkerStatic extends ClassStatic {
			new(map: L.Map, options: MarkerOptions): Marker;
		}
		interface Marker extends L.Draw.Feature {
		}
		export var Marker: MarkerStatic;
	}

        /**
          * Creates a control with the given options.
          */
/*        new(options?: ControlOptions): Control;

        Zoom: Control.ZoomStatic;
        Attribution: Control.AttributionStatic;
        Layers: Control.LayersStatic;
        Scale: Control.ScaleStatic;
    }*/
	
		/*export interface DrawStatic extends ControlStatic {
			new(options?: any): Draw;
		}
		
		export var Draw: DrawStatic;
		
		export interface Draw extends L.Control {
		}
		
		export var Control: DrawStatic;*/
	
	export interface ControlStatic {
		Draw: Control.DrawStatic;
	}
	
	module Control {
		export interface DrawStatic extends ClassStatic {
			new(options?: any): Draw;
		}
		
		export interface Draw extends L.Control {
			setDrawingOptions(options: any): void;
		}
		/*export interface DrawStatic {
			new(options?: any): Draw;
		}
		export var Draw: DrawStatic;

		export interface Draw {
		}*/
	/*
		export interface ControlStatic extends ClassStatic {
			new(options?: ControlOptions): Control;

			Zoom: Control.ZoomStatic;
			Attribution: Control.AttributionStatic;
			Layers: Control.LayersStatic;
			Scale: Control.ScaleStatic;
		}
		export var Control: ControlStatic;

		export interface Control extends IControl {
		} */
	
		/*export interface DrawStatic extends ControlStatic {
		}
		
		export interface Draw extends DrawStatic {
		}*/
		/*export interface DrawStatic extends ControlStatic {
		}
		
		export var Draw: DrawStatic;
		
		export interface Draw extends DrawStatic {
		}*/
		/*interface DeleteHandlerOptions {
		}

		interface EditHandlerOptions {
			selectedPathOptions: L.Path
		}

		interface EditOptions {
			featureGroup<T extends L.ILayer>(layers?: T[]): L.FeatureGroup<T>;
		
			edit: EditHandlerOptions;
		
			remove: DeleteHandlerOptions;
		}
		
		export interface Draw extends L.Control {
			position: string;

			draw: any;

			edit: EditOptions;

			setDrawingOptions(options: any): void;
		}*/
	}
}

declare module "leaflet-draw" {
	var draw: any;
	export = draw;
}

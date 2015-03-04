// Type definitions for leaflet-draw
// Project: https://github.com/Leaflet/Leaflet.draw
// Definitions by: Lukas Pohl <https://github.com/fieldy1234>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../../typings/leaflet/leaflet.d.ts" />

declare module L {
	export module Draw {
		export interface DrawCreatedEvent {
			layer: L.ILayer;
			
			layerType: string;
		}
		
		export interface DrawDrawstopEvent {
			layerType: string;
		}
		
		export interface DrawEditedEvent {
			layers: L.LayerGroup<L.ILayer>;
		}
		
		export interface DrawEditstartEvent {
			handler: string;
		}
		
		export interface DrawEditstopEvent {
			handler: string;
		}
		
		export interface DrawDeletedEvent {
			layers: L.LayerGroup<L.ILayer>;
		}
		
		export interface DrawDeletestartEvent {
			handler: string;
		}
		
		export interface DrawDeletestopEvent {
			handler: string;
		}
		
		interface MarkerOptions {
			icon?: L.Icon;
		
			zIndexOffset?: Number;
		
			repeatMode?: Boolean;
		}

		class Feature extends L.Handler {
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

		class SimpleShape extends L.Handler {
			enable(): void;

			disable(): void;
			
			constructor(map: L.Map, options: SimpleShapeOptions);
		}

		class Rectangle extends L.Draw.SimpleShape {
		}

		class Polygon extends L.Draw.Polyline {
			constructor(map: L.Map, options: PolygonOptions);
		}

		class Polyline extends L.Draw.Feature {
			constructor(map: L.Map, options: PolylineOptions);
		}

		class Circle extends L.Draw.SimpleShape {
		}

		class Marker extends L.Draw.Feature {
			constructor(map: L.Map, options: MarkerOptions);
		}
	}

	module Control {
		interface DeleteHandlerOptions {
		}

		interface EditHandlerOptions {
			selectedPathOptions: L.Path
		}

		interface EditOptions {
			featureGroup<T extends L.ILayer>(layers?: T[]): L.FeatureGroup<T>;
		
			edit: EditHandlerOptions;
		
			remove: DeleteHandlerOptions;
		}
		
		export class Draw extends L.Control {
			position: string;

			draw: any;

			edit: EditOptions;

			setDrawingOptions(options: any): void;
		}
	}
}

declare module "leaflet-draw" {
	var draw: any;
	export = draw;
}

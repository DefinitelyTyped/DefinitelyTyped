// Type definitions for Leaflet.label v0.2.1
// Project: https://github.com/Leaflet/Leaflet.label
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../leaflet/leaflet.d.ts" />

declare module L {
    export interface IconOptions {
        labelAnchor?: Point;
    }

    export interface PathOptions {
        labelAnchor?: Point;
    }

	export interface CircleMarkerOptions {
		labelAnchor?: Point;
	}

	export interface Marker {
		showLabel(): Marker;
		hideLabel(): Marker;
		setLabelNoHide(noHide: boolean): void;
		bindLabel(content: string, options?: LabelOptions): Marker;
		unbindLabel(): Marker;
		updateLabelContent(content: string): void;
		getLabel(): Label;
		setOpacity(opacity: number, labelHasSemiTransparency: boolean): void;
	}

	export interface CircleMarker {
		showLabel(): CircleMarker;
		hideLabel(): CircleMarker;
		setLabelNoHide(noHide: boolean): void;
		bindLabel(content: string, options?: LabelOptions): CircleMarker;
		unbindLabel(): CircleMarker;
		updateLabelContent(content: string): void;
		getLabel(): Label;
	}

	export interface FeatureGroup<T extends ILayer> {
		clearLayers(): FeatureGroup<T>;
		bindLabel(content: string, options?: LabelOptions): FeatureGroup<T>;
		unbindLabel(): FeatureGroup<T>;
		updateLabelContent(content: string): FeatureGroup<T>;
	}

	export interface Path {
		bindLabel(content: string, options?: LabelOptions): Path;
		unbindLabel(): Path;
		updateLabelContent(content: string): void;
	}

	export interface LabelOptions {
		className?: string;
		clickable?: boolean;
		direction?: string; // 'left' | 'right' | 'auto';
		pane?: string;
		noHide?: boolean;
		offset?: Point;
		opacity?: number;
		zoomAnimation?: boolean;
	}

	export interface LabelStatic extends ClassStatic {
		new(options?: LabelOptions): Label;
	}

	export var Label: LabelStatic;

	export interface Label extends IEventPowered<Label> {
		onAdd(map: Map): void;
		onRemove(map: Map): void;
		setLatLng(latlng: LatLng): Label;
		setContent(content: string): Label;
		close(): void;
		updateZIndex(zIndex: number): void;
		setOpacity(opacity: number): void;
	}
}

// Type definitions for Leaflet.label 0.2
// Project: https://github.com/Leaflet/Leaflet.label
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface IconOptions {
        labelAnchor?: Point;
    }

    interface PathOptions {
        labelAnchor?: Point;
    }

    interface CircleMarkerOptions {
        labelAnchor?: Point;
    }

    interface Marker {
        showLabel(): Marker;
        hideLabel(): Marker;
        setLabelNoHide(noHide: boolean): void;
        bindLabel(content: string, options?: LabelOptions): Marker;
        unbindLabel(): Marker;
        updateLabelContent(content: string): void;
        getLabel(): Label;
        setOpacity(opacity: number, labelHasSemiTransparency: boolean): void;
    }

    interface CircleMarker {
        showLabel(): CircleMarker;
        hideLabel(): CircleMarker;
        setLabelNoHide(noHide: boolean): void;
        bindLabel(content: string, options?: LabelOptions): CircleMarker;
        unbindLabel(): CircleMarker;
        updateLabelContent(content: string): void;
        getLabel(): Label;
    }

    interface FeatureGroup<T extends ILayer> {
        clearLayers(): FeatureGroup<T>;
        bindLabel(content: string, options?: LabelOptions): FeatureGroup<T>;
        unbindLabel(): FeatureGroup<T>;
        updateLabelContent(content: string): FeatureGroup<T>;
    }

    interface Path {
        bindLabel(content: string, options?: LabelOptions): Path;
        unbindLabel(): Path;
        updateLabelContent(content: string): void;
    }

    interface LabelOptions {
        className?: string;
        clickable?: boolean;
        direction?: string; // 'left' | 'right' | 'auto';
        pane?: string;
        noHide?: boolean;
        offset?: Point;
        opacity?: number;
        zoomAnimation?: boolean;
    }

    interface LabelStatic extends ClassStatic {
        new(options?: LabelOptions): Label;
    }

    const Label: LabelStatic;

    interface Label extends IEventPowered<Label> {
        onAdd(map: Map): void;
        onRemove(map: Map): void;
        setLatLng(latlng: LatLng): Label;
        setContent(content: string): Label;
        close(): void;
        updateZIndex(zIndex: number): void;
        setOpacity(opacity: number): void;
    }
}

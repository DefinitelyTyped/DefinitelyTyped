import * as L from "leaflet";

declare module "leaflet" {
    interface IconOptions {
        labelAnchor?: Point | undefined;
    }

    interface PathOptions {
        labelAnchor?: Point | undefined;
    }

    interface CircleMarkerOptions {
        labelAnchor?: Point | undefined;
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
        className?: string | undefined;
        clickable?: boolean | undefined;
        direction?: string | undefined; // 'left' | 'right' | 'auto';
        pane?: string | undefined;
        noHide?: boolean | undefined;
        offset?: Point | undefined;
        opacity?: number | undefined;
        zoomAnimation?: boolean | undefined;
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

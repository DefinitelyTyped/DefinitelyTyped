// Type definitions for Leaflet.Editable 1.2
// Project: https://github.com/leaflet/leaflet.editable
// Definitions by: Dominic Alie <https://github.com/dalie>
//                 Eric Myllyoja <https://github.com/MasterEric>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Leaflet from 'leaflet';

declare module 'leaflet' {
    /*
     * Leaflet.Editable add options and events to the `L.Map` object.
     * See `Editable` events for the list of events fired on the Map.
     */
    interface Map {
        /**
         * Whether to create a L.Editable instance at map init or not.
         */
        editable: boolean;

        /**
         * Options to pass to L.Editable when instanciating.
         */
        editOptions: EditableOptions;

        /**
         * Edit tools instance.
         */
        editTools: Editable;
    }

    /**
     * Add to the MapOptions.
     */
    interface MapOptions {
        /**
         * Whether to create a L.Editable instance at map init or not.
         */
        editable?: boolean;

        /**
         * Options to pass to L.Editable when instanciating.
         */
        editOptions?: EditableOptions;

        /**
         * Class to be used as vertex, for path editing.
         */
        editToolsClass?: object;
    }

    /**
     * EditableMixin is included to L.Polyline, L.Polygon, L.Rectangle, L.Circle and L.Marker.
     * It adds some methods to them.
     */
    interface EditableMixin {
        /**
         * Enable editing, by creating an editor if not existing, and then calling enable on it.
         */
        enableEdit(map?: Map): Editor;

        /**
         * Disable editing, also remove the editor property reference.
         */
        disableEdit(): void;

        /**
         * Enable or disable editing, according to current status.
         */
        toggleEdit(): void;

        /**
         * Return true if current instance has an editor attached, and this editor is enabled.
         */
        editEnabled(): boolean;
    }

    /**
     * Make geometries editable in Leaflet.
     *
     * This is not a plug and play UI, and will not. This is a minimal, lightweight, and fully extendable API to
     * control editing of geometries. So you can easily build your own UI with your own needs and choices.
     */
    interface EditableStatic {
        new (map: Map, options: EditableOptions): Editable;
    }

    /**
     * Options to pass to L.Editable when instanciating.
     */
    interface EditableOptions {
        /**
         * The default zIndex of the editing tools.
         */
        zIndex?: number;

        /**
         * Class to be used when creating a new Polygon.
         */
        polygonClass?: object;

        /**
         * Class to be used when creating a new Polyline.
         */
        polylineClass?: object;

        /**
         * Class to be used when creating a new Marker.
         */
        markerClass?: object;

        /**
         * Class to be used when creating a new Rectangle.
         */
        rectangleClass?: object;

        /**
         * Class to be used when creating a new Circle.
         */
        circleClass?: object;

        /**
         * CSS class to be added to the map container while drawing.
         */
        drawingCSSClass?: string;

        /**
         * Cursor mode set to the map while drawing.
         */
        drawingCursor?: string;

        /**
         * Layer used to store edit tools (vertex, line guide…).
         */
        editLayer?: LayerGroup<Layer>;

        /**
         * Default layer used to store drawn features (marker, polyline…).
         */
        featuresLayer?: LayerGroup<Polyline | Polygon | Marker>;

        /**
         * Class to be used as Polyline editor.
         */
        polylineEditorClass?: object;

        /**
         * Class to be used as Polygon editor.
         */
        polygonEditorClass?: object;

        /**
         * Class to be used as Marker editor.
         */
        markerEditorClass?: object;

        /**
         * Class to be used as Rectangle editor.
         */
        rectangleEditorClass?: object;

        /**
         * Class to be used as Circle editor.
         */
        circleEditorClass?: object;

        /**
         * Options to be passed to the line guides.
         */
        lineGuideOptions?: object;

        /**
         * Set this to true if you don't want middle markers.
         */
        skipMiddleMarkers?: boolean;
    }

    /**
     * Make geometries editable in Leaflet.
     *
     * This is not a plug and play UI, and will not. This is a minimal, lightweight, and fully extendable API to
     * control editing of geometries. So you can easily build your own UI with your own needs and choices.
     */
    interface Editable extends Evented {
        /**
         * Options to pass to L.Editable when instanciating.
         */
        options: EditableOptions;

        /**
         * Return true if any drawing action is ongoing.
         */
        drawing(): boolean;

        /**
         * When you need to stop any ongoing drawing, without needing to know which editor is active.
         */
        stopDrawing(): void;

        /**
         * When you need to commit any ongoing drawing, without needing to know which editor is active.
         */
        commitDrawing(event: LeafletMouseEvent): void;

        /**
         * Start drawing a polyline. If latlng is given, a first point will be added. In any case, continuing on user
         * click. If options is given, it will be passed to the polyline class constructor.
         */
        startPolyline(latLng?: LatLng, options?: PolylineOptions): Polyline;

        /**
         * Start drawing a polygon. If latlng is given, a first point will be added. In any case, continuing on user
         * click. If options is given, it will be passed to the polygon class constructor.
         */
        startPolygon(latLng?: LatLng, options?: PolylineOptions): Polygon;

        /**
         * Start adding a marker. If latlng is given, the marker will be shown first at this point. In any case, it
         * will follow the user mouse, and will have a final latlng on next click (or touch). If options is given,
         * it will be passed to the marker class constructor.
         */
        startMarker(latLng?: LatLng, options?: MarkerOptions): Marker;

        /**
         * Start drawing a Rectangle. If `latlng` is given, the Rectangle anchor will be added. In any case,
         * continuing on user drag. If `options` is given, it will be passed to the Rectangle class constructor.
         */
        startRectangle(latLng?: LatLng, options?: PolylineOptions): Rectangle;

        /**
         * Start drawing a Circle. If `latlng` is given, the Circle anchor will be added. In any case, continuing
         * on user drag. If `options` is given, it will be passed to the Circle class constructor.
         */
        startCircle(latLng?: LatLng, options?: CircleMarkerOptions): Circle;
    }

    let Editable: EditableStatic;

    type Editor = MarkerEditor | PolylineEditor | PolygonEditor | RectangleEditor | CircleEditor;

    /**
     * When editing a feature (marker, polyline…), an editor is attached to it.
     * This editor basically knows how to handle the edition.
     */
    interface BaseEditor {
        /**
         * Set up the drawing tools for the feature to be editable.
         */
        enable(): Editor;

        /**
         * Remove editing tools.
         */
        disable(): Editor;

        /**
         * Return true if any drawing action is ongoing with this editor.
         */
        drawing(): boolean;
    }

    /**
     * Editor for Marker.
     */
    // tslint:disable-next-line:no-empty-interface
    interface MarkerEditor extends BaseEditor {}

    /**
     * Base class for all path editors.
     */
    interface PathEditor extends BaseEditor {
        /**
         * Rebuild edit elements (Vertex, MiddleMarker, etc.).
         */
        reset(): void;

        /**
         * Programmatically add a point while drawing.
         */
        push(): void;

        /**
         * Programmatically remove last point (if any) while drawing.
         */
        pop(): LatLng | null;

        /**
         * Add a new shape (Polyline, Polygon) in a multi, and setup up drawing tools to draw it;
         * if optional latlng is given, start a path at this point.
         */
        newShape(latLng?: LatLng): void;

        /**
         * Remove a path shape at the given latlng.
         */
        deleteShapeAt(latLng?: LatLng): LatLng[];

        /**
         * Append a new shape to the Polygon or Polyline.
         */
        appendShape(shape: LatLng[]): void;

        /**
         * Prepend a new shape to the Polygon or Polyline.
         */
        prependShape(shape: LatLng[]): void;

        /**
         * Insert a new shape to the Polygon or Polyline at given index (default is to append).
         */
        insertShape(shape: LatLng[], index: number): void;
    }

    /**
     * Editor for Polyline.
     */
    interface PolylineEditor extends PathEditor {
        /**
         * Set up drawing tools to continue the line forward.
         */
        continueForward(latLngs?: LatLng[]): void;

        /**
         * Set up drawing tools to continue the line backward.
         */
        continueBackward(latLngs?: LatLng[]): void;

        /**
         * Split the given latlngs shape at index index and integrate new shape in instance latlngs.
         */
        splitShape(latLngs: LatLng[], index: number): void;
    }

    /**
     * Editor for Polygon.
     */
    interface PolygonEditor extends PathEditor {
        /**
         * Set up drawing tools for creating a new hole on the polygon.
         * If the latlng param is given, a first point is created.
         *
         * Despite being described in the documentation,
         *   the index parameter is not specified in the method signature.
         */
        newHole(latlng?: LatLng): void;
    }

    /**
     * Editor for Rectangle.
     */
    // tslint:disable-next-line:no-empty-interface
    interface RectangleEditor extends PathEditor {}

    /**
     * Editor for Circle.
     */
    // tslint:disable-next-line:no-empty-interface
    interface CircleEditor extends PathEditor {}

    /**
     * Handler for dragging path vertices.
     */
    interface VertexMarker extends Marker {
        /**
         * Delete a vertex and the related LatLng.
         */
        delete(): void;

        /**
         * Get the index of the current vertex among others of the same LatLngs group.
         */
        getIndex(): number;

        /**
         * Get last vertex index of the LatLngs group of the current vertex.
         */
        getLastIndex(): number;

        /**
         * Get the previous VertexMarker in the same LatLngs group.
         */
        getPrevious(): VertexMarker;

        /**
         * Get the next VertexMarker in the same LatLngs group.
         */
        getNext(): VertexMarker;

        /**
         * Split the vertex LatLngs group at its index, if possible.
         */
        split(): void;

        /**
         * Continue the vertex LatLngs from this vertex.
         * Only active for first and last vertices of a Polyline.
         */
        continue(): void;
    }

    interface Marker extends EditableMixin, MarkerEditor {}
    interface Polyline extends EditableMixin, PolylineEditor {}
    interface Polygon extends EditableMixin, PolygonEditor {}
    interface Rectangle extends EditableMixin, RectangleEditor {}
    interface Circle extends EditableMixin, CircleEditor {}
}

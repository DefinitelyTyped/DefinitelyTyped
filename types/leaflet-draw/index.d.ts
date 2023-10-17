import * as L from "leaflet";

declare module "leaflet" {
    interface MapOptions {
        drawControl?: boolean | undefined;
        drawControlTooltips?: boolean | undefined;
        touchExtend?: boolean | undefined;
    }

    class DrawMap extends Map {
        mergeOptions(options?: MapOptions): void;
        addInitHook(): void;
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
        polyline?: DrawOptions.PolylineOptions | undefined;
        polygon?: DrawOptions.PolygonOptions | undefined;
        rectangle?: DrawOptions.RectangleOptions | undefined;
        circle?: DrawOptions.CircleOptions | undefined;
        marker?: DrawOptions.MarkerOptions | undefined;
        circlemarker?: DrawOptions.CircleOptions | undefined;
    }

    interface PrecisionOptions {
        km?: number | undefined;
        ha?: number | undefined;
        m?: number | undefined;
        mi?: number | undefined;
        ac?: number | undefined;
        yd?: number | undefined;
        ft?: number | undefined;
        nm?: number | undefined;
    }

    class Toolbar extends Class {
        constructor(options?: ToolbarOptions);

        addToolbar(map: DrawMap): HTMLElement | void;

        removeToolbar(): void;
    }

    class DrawToolbar extends Toolbar {
        getModeHandlers(map: DrawMap): ToolbarModeHandler[];

        getActions(handler: Draw.Feature): ToolbarAction[];

        setOptions(options: Control.DrawConstructorOptions): void;
    }

    class EditToolbar extends Toolbar {
        getModeHandlers(map: DrawMap): ToolbarModeHandler[];

        getActions(handler: Draw.Feature): ToolbarAction[];

        setOptions(options: Control.DrawConstructorOptions): void;
    }

    namespace Control {
        interface DrawConstructorOptions {
            /**
             * The initial position of the control (one of the map corners).
             *
             * @default 'topleft'
             */
            position?: ControlPosition | undefined;

            /**
             * The options used to configure the draw toolbar.
             *
             * @default {}
             */
            draw?: DrawOptions | undefined;

            /**
             * The options used to configure the edit toolbar.
             *
             * @default false
             */
            edit?: EditOptions | undefined;
        }

        interface DrawOptions {
            /**
             * Polyline draw handler options. Set to false to disable handler.
             *
             * @default {}
             */
            polyline?: DrawOptions.PolylineOptions | false | undefined;

            /**
             * Polygon draw handler options. Set to false to disable handler.
             *
             * @default {}
             */
            polygon?: DrawOptions.PolygonOptions | false | undefined;

            /**
             * Rectangle draw handler options. Set to false to disable handler.
             *
             * @default {}
             */
            rectangle?: DrawOptions.RectangleOptions | false | undefined;

            /**
             * Circle draw handler options. Set to false to disable handler.
             *
             * @default {}
             */
            circle?: DrawOptions.CircleOptions | false | undefined;

            /**
             * Circle marker draw handler options. Set to false to disable handler.
             *
             * @default {}
             */
            circlemarker?: DrawOptions.CircleMarkerOptions | false | undefined;

            /**
             * Marker draw handler options. Set to false to disable handler.
             *
             * @default {}
             */
            marker?: DrawOptions.MarkerOptions | false | undefined;
        }

        interface EditOptions {
            /**
             * This is the FeatureGroup that stores all editable shapes.
             * THIS IS REQUIRED FOR THE EDIT TOOLBAR TO WORK
             *
             * @default null
             */
            featureGroup: FeatureGroup;

            /**
             * Edit handler options. Set to false to disable handler.
             *
             * @default null
             */
            edit?: Omit<EditToolbar.EditHandlerOptions, "featureGroup"> | false | undefined;

            /**
             * Delete handler options. Set to false to disable handler.
             *
             * Default value: null
             */
            remove?: boolean | null | undefined;
        }

        class Draw extends Control {
            constructor(options?: DrawConstructorOptions);

            initialize(options?: DrawOptions): void;
            setDrawingOptions(options?: DrawOptions): void;
        }
    }

    namespace DrawOptions {
        interface SimpleShapeOptions {
            /**
             * Determines if the draw tool remains enabled after drawing a shape.
             *
             * @default false
             */
            repeatMode?: boolean | undefined;
        }

        interface PolylineOptions extends SimpleShapeOptions {
            /**
             * Determines if line segments can cross.
             *
             * @default true
             */
            allowIntersection?: boolean | undefined;

            /**
             * Configuration options for the error that displays if an intersection is detected.
             *
             * @default { color: '#b00b00', timeout: 2500 }
             */
            drawError?: DrawErrorOptions | undefined;

            /**
             * Distance in pixels between each guide dash.
             *
             * @default 20
             */
            guidelineDistance?: number | undefined;

            /**
             * The options used when drawing the polyline/polygon on the map.
             *
             * @default { stroke: true, color: '#3388ff', weight: 4, opacity: 0.5, fill: false, clickable: true }
             */
            shapeOptions?:
                | L.PolylineOptions & {
                    clickable?: boolean | undefined;
                }
                | undefined;

            /**
             * Whether to display distance in the tooltip
             *
             * @default true
             */
            showLength?: boolean | undefined;

            /**
             * Determines which measurement system (metric or imperial) is used.
             *
             * @default true
             */
            metric?: boolean | undefined;

            /**
             * When not metric, to use feet instead of yards for display.
             *
             * @default true
             */
            feet?: boolean | undefined;

            /**
             * When not metric, not feet use nautic mile for display
             *
             * @default false
             */
            nautic?: boolean | undefined;

            /**
             * This should be a high number to ensure that you can draw over all other layers on the map.
             *
             * @default 2000
             */
            zIndexOffset?: number | undefined;

            icon?: Icon | DivIcon | undefined;

            touchIcon?: Icon | DivIcon | undefined;

            /**
             * The maximum length of the guide line
             *
             * @default 4000
             */
            maxGuideLineLength?: number | undefined;

            /**
             * To change distance calculation
             *
             * @default 1
             */
            factor?: number | undefined;

            /**
             * Once this number of points are placed, finish shape
             *
             * @default 0
             */
            maxPoints?: number | undefined;
        }

        interface PolygonOptions extends PolylineOptions {
            /**
             * Show the area of the drawn polygon in m², ha or km².
             * The area is only approximate and become less accurate the larger the polygon is.
             *
             * @default false
             */
            showArea?: boolean | undefined;

            /**
             * Show the length of the drawn line.
             * The area is only approximate and become less accurate the larger the polygon is.
             *
             * @default false
             */
            showLength?: boolean | undefined;

            /**
             * Defines the precision for each type of unit (e.g. {km: 2, ft: 0}
             *
             * @default {}
             */
            precision?: PrecisionOptions | undefined;
        }

        interface RectangleOptions extends SimpleShapeOptions {
            /**
             * The options used when drawing the rectangle on the map.
             *
             * @default {stroke: true, weight: 4, opacity: 0.5, fill: true, fillColor: null, fillOpacity: 0.2, showArea: true, clickable: true }
             */
            shapeOptions?: PathOptions | undefined;

            /**
             * Whether to use the metric measurement system or imperial
             *
             * @default true
             */
            metric?: boolean | undefined;
        }

        interface CircleOptions extends SimpleShapeOptions {
            /**
             * The options used when drawing the circle on the map.
             *
             * @default { stroke: true, color: '#3388ff', weight: 4, opacity: 0.5, fill: true, fillColor: null, fillOpacity: 0.2, clickable: true }
             */
            shapeOptions?: PathOptions | undefined;

            /**
             * Whether to show the radius in the tooltip
             *
             * @default true
             */
            showRadius?: boolean | undefined;

            /**
             * Whether to use the metric measurement system or imperial
             *
             * @default true
             */
            metric?: boolean | undefined;

            /**
             * When not metric, use feet instead of yards for display
             *
             * @default true
             */
            feet?: boolean | undefined;

            /**
             * When not metric, not feet use nautic mile for display
             *
             * @default false
             */
            nautic?: boolean | undefined;
        }

        interface CircleMarkerOptions extends MarkerOptions {
            /**
             * Whether to draw stroke around the circle marker.
             *
             * @default true
             */
            stroke?: boolean | undefined;

            /**
             * The stroke color of the circle marker.
             *
             * @default '#3388ff'
             */
            color?: string | undefined;

            /**
             * The stroke width in pixels of the circle marker.
             *
             * @default 4
             */
            weight?: number | undefined;

            /**
             * The stroke opacity of the circle marker.
             *
             * @default 0.5
             */
            opacity?: number | undefined;

            /**
             * Whether to fill the circle marker with color.
             *
             * @default true
             */
            fill?: boolean | undefined;

            /**
             * The fill color of the circle marker. Defaults to the value of the color option.
             *
             * @default null
             */
            fillColor?: string | undefined;

            /**
             * The opacity of the circle marker.
             *
             * @default 0.2
             */
            fillOpacity?: number | undefined;

            /**
             * Whether you can click the circle marker.
             *
             * @default true
             */
            clickable?: boolean | undefined;

            /**
             * This should be a high number to ensure that you can draw over all other layers on the map.
             *
             * @default 2000
             */
            zIndexOffset?: number | undefined;
        }

        interface MarkerOptions {
            /**
             * The icon displayed when drawing a marker.
             *
             * @default L.Icon.Default()
             */
            icon?: Icon | DivIcon | undefined;

            /**
             * This should be a high number to ensure that you can draw over all other layers on the map.
             *
             * @default 2000
             */
            zIndexOffset?: number | undefined;

            /**
             * Determines if the draw tool remains enabled after drawing a shape.
             *
             * @default false
             */
            repeatMode?: boolean | undefined;
        }

        interface DrawErrorOptions {
            color?: string | undefined;
            timeout?: number | undefined;
            message?: string | undefined;
        }
    }

    namespace Draw {
        namespace Event {
            const CREATED: "draw:created";
            const DELETED: "draw:deleted";
            const DELETESTART: "draw:deletestart";
            const DELETESTOP: "draw:deletestop";
            const DRAWSTART: "draw:drawstart";
            const DRAWSTOP: "draw:drawstop";
            const DRAWVERTEX: "draw:drawvertex";
            const EDITED: "draw:edited";
            const EDITMOVE: "draw:editmove";
            const EDITRESIZE: "draw:editresize";
            const EDITSTART: "draw:editstart";
            const EDITSTOP: "draw:editstop";
            const EDITVERTEX: "draw:editvertex";
            const MARKERCONTEXT: "draw:markercontext";
            const TOOLBARCLOSED: "draw:toolbarclosed";
            const TOOLBAROPENED: "draw:toolbaropened";
        }

        /**
         * EventHandlers to be used in looping over all events
         *
         * @example
         * for (const key in eventHandlers) { map.off(eventHandlers[key], LeafletFn); }
         */
        interface EventHandlers {
            onCreated: typeof Event.CREATED;
            onDeleted: typeof Event.DELETED;
            onDeleteStart: typeof Event.DELETESTART;
            onDeleteStop: typeof Event.DELETESTOP;
            onDrawStart: typeof Event.DRAWSTART;
            onDrawStop: typeof Event.DRAWSTOP;
            onDrawVertex: typeof Event.DRAWVERTEX;
            onEdited: typeof Event.EDITED;
            onEditMove: typeof Event.EDITMOVE;
            onEditResize: typeof Event.EDITRESIZE;
            onEditStart: typeof Event.EDITSTART;
            onEditStop: typeof Event.EDITSTOP;
            onEditVertex: typeof Event.EDITVERTEX;
            onMarkerContext: typeof Event.MARKERCONTEXT;
            onToolbarClosed: typeof Event.TOOLBARCLOSED;
            onToolbarOpened: typeof Event.TOOLBAROPENED;

            // Requires an index signature of type string to be properly useful
            [key: string]: string;
        }

        class Feature extends Handler {
            initialize(
                map: DrawMap,
                options:
                    | DrawOptions.PolylineOptions
                    | DrawOptions.PolygonOptions
                    | DrawOptions.RectangleOptions
                    | DrawOptions.MarkerOptions,
            ): void;

            setOptions(
                options:
                    | DrawOptions.PolylineOptions
                    | DrawOptions.PolygonOptions
                    | DrawOptions.RectangleOptions
                    | DrawOptions.MarkerOptions,
            ): void;
        }

        class SimpleShape extends Feature {
            constructor(
                map: DrawMap,
                options?: DrawOptions.SimpleShapeOptions,
            );
        }

        class Marker extends Feature {
            constructor(
                map: DrawMap,
                options?: DrawOptions.MarkerOptions,
            );
        }

        class CircleMarker extends Marker {
            constructor(
                map: DrawMap,
                options?: DrawOptions.MarkerOptions,
            );
        }

        class Circle extends SimpleShape {
            constructor(
                map: DrawMap,
                options?: DrawOptions.CircleOptions,
            );
        }

        class Polyline extends Feature {
            constructor(
                map: DrawMap,
                options?: DrawOptions.PolylineOptions,
            );

            deleteLastVertex(): void;

            addVertex(latlng: LatLng): void;

            completeShape(): void;
        }

        class Rectangle extends SimpleShape {
            constructor(
                map: DrawMap,
                options?: DrawOptions.RectangleOptions,
            );
        }

        class Polygon extends Polyline {
            constructor(
                map: DrawMap,
                options?: DrawOptions.PolygonOptions,
            );
        }

        class Tooltip extends Class {
            constructor(map: DrawMap);

            dispose(): void;

            updateContent(labelText?: { text: string; subtext?: string | undefined }): Tooltip;

            updatePosition(latlng: LatLng): Tooltip;

            showAsError(): Tooltip;

            removeError(): Tooltip;
        }
    }

    namespace DrawEvents {
        interface Created extends LeafletEvent {
            /**
             * Layer that was just created.
             */
            layer: Circle | CircleMarker | Marker | Polygon | Polyline | Rectangle;

            /**
             * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker.
             */
            layerType: string;
        }

        interface Edited extends LeafletEvent {
            /**
             * List of all layers just edited on the map.
             */
            layers: LayerGroup;
        }

        /**
         * Triggered when layers have been removed (and saved) from the FeatureGroup.
         */
        interface Deleted extends LeafletEvent {
            /**
             * List of all layers just removed from the map.
             */
            layers: LayerGroup;
        }

        interface DrawStart extends LeafletEvent {
            /**
             * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
             */
            layerType: string;
        }

        interface DrawStop extends LeafletEvent {
            /**
             * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
             */
            layerType: string;
        }

        interface DrawVertex extends LeafletEvent {
            /**
             * List of all layers just being added from the map.
             */
            layers: LayerGroup;
        }

        interface EditStart extends LeafletEvent {
            /**
             * The type of edit this is. One of: edit
             */
            handler: string;
        }

        interface EditMove extends LeafletEvent {
            /**
             * Layer that was just moved.
             */
            layer: Layer;
        }

        interface EditResize extends LeafletEvent {
            /**
             * Layer that was just resized.
             */
            layer: Layer;
        }

        interface EditVertex extends LeafletEvent {
            /**
             * List of all layers just being edited from the map.
             */
            layers: LayerGroup;

            poly: Polyline | Polygon;
        }

        interface EditStop extends LeafletEvent {
            /**
             * The type of edit this is. One of: edit
             */
            handler: string;
        }

        interface DeleteStart extends LeafletEvent {
            /**
             * The type of edit this is. One of: remove
             */
            handler: string;
        }

        interface DeleteStop extends LeafletEvent {
            /**
             * The type of edit this is. One of: remove
             */
            handler: string;
        }

        type ToolbarOpened = LeafletEvent;
        type ToolbarClosed = LeafletEvent;
        type MarkerContext = LeafletEvent;
    }

    namespace GeometryUtil {
        /**
         * Shortcut function for planar distance between two {L.LatLng} at current zoom.
         */
        function distance(map: DrawMap, latlanA: LatLng, latlngB: LatLng): number;

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
         * Converts a metric distance to one of [ feet, nauticalMile, metric or yards ] string
         * The value will be rounded as defined by the precision option object.
         */
        function readableDistance(
            distance: number,
            isMetric?: boolean,
            isFeet?: boolean,
            isNauticalMile?: boolean,
            precision?: PrecisionOptions,
        ): string;

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

    namespace LineUtil {
        /**
         * Checks to see if two line segments intersect.
         * Does not handle degenerate cases.
         */
        function segmentsIntersect(): boolean;
    }

    namespace Polygon {
        /**
         * Checks a polygon for any intersecting line segments.
         * Ignores holes.
         */
        function intersects(): boolean;
    }

    namespace EditToolbar {
        interface EditPolyOptions extends EditOptions.EditPolyVerticesEditOptions {
            /**
             * Determines if line segments can cross
             *
             * @default true
             */
            allowIntersection?: boolean;
        }
        interface EditHandlerOptions {
            /**
             * This is the FeatureGroup that stores all editable shapes.
             * THIS IS REQUIRED FOR THE EDIT TOOLBAR TO WORK
             *
             * @default null
             */
            featureGroup: FeatureGroup;

            /**
             * The options for the polygon layer in editing mode
             *
             * @default null
             */
            poly?: EditPolyOptions;

            /**
             * The path options for how the layers will look while in edit mode.
             * If this is set to null the editable path options will not be set.
             *
             * @default { dashArray: '10, 10', fill: true, fillColor: '#fe57a1', fillOpacity: 0.1, maintainColor: false }
             */
            selectedPathOptions?: PathOptions | undefined;
        }
        class Edit extends Handler {
            constructor(map: DrawMap, options?: EditHandlerOptions);

            revertLayers(): void;

            save(): void;
        }

        class Delete extends Handler {
            constructor(map: DrawMap, options?: { featureGroup: FeatureGroup });

            revertLayers(): void;

            save(): void;

            removeAllLayers(): void;
        }
    }

    namespace EditOptions {
        interface EditPolyVerticesEditOptions {
            icon?: Icon | DivIcon | undefined;
            touchIcon?: Icon | DivIcon | undefined;
            drawError?: DrawOptions.DrawErrorOptions | undefined;
        }

        interface EditSimpleShapeOptions {
            moveIcon?: Icon | DivIcon | undefined;
            resizeIcon?: Icon | DivIcon | undefined;
            touchMoveIcon?: Icon | DivIcon | undefined;
            touchResizeIcon?: Icon | DivIcon | undefined;
        }
    }

    namespace Edit {
        class Circle extends CircleMarker {
            constructor(shape: Circle, options?: EditOptions.EditSimpleShapeOptions);
        }

        class CircleMarker extends SimpleShape {
            constructor(shape: CircleMarker, options?: EditOptions.EditSimpleShapeOptions);
        }

        class Marker extends Handler {
            constructor(marker: Marker, options?: object);
        }

        class Polyline extends Handler {
            constructor(polyline: Draw.Polyline);

            updateMarkers(): void;
        }

        class PolyVerticesEdit extends Handler {
            constructor(poly: Polyline, latlngs: LatLngExpression[], options?: EditOptions.EditPolyVerticesEditOptions);

            updateMarkers(): void;
        }

        class Rectangle extends SimpleShape {
            constructor(shape: Rectangle, options?: EditOptions.EditSimpleShapeOptions);
        }

        class SimpleShape extends Handler {
            constructor(shape: SimpleShape, options?: EditOptions.EditSimpleShapeOptions);

            updateMarkers(): void;
        }
    }

    namespace Localization {
        interface DrawLocal {
            draw: Draw;
            edit: Edit;
        }

        interface Draw {
            toolbar: DrawToolbar;
            handlers: DrawHandlers;
        }

        interface Edit {
            toolbar: EditToolbar;
            handlers: EditHandlers;
        }

        interface Action {
            title: string;
            text: string;
        }

        interface DrawToolbar {
            actions: Action;
            finish: Action;
            undo: Action;
            buttons: {
                polyline: string;
                polygon: string;
                rectangle: string;
                circle: string;
                marker: string;
                circlemarker: string;
            };
        }

        interface Tooltip {
            start?: string | undefined;
            cont?: string | undefined;
            end?: string | undefined;
        }

        interface DrawHandlers {
            circle: {
                tooltip: {
                    start: string;
                };
                radius: string;
            };
            circlemarker: {
                tooltip: {
                    start: string;
                };
            };
            marker: {
                tooltip: {
                    start: string;
                };
            };
            polygon: {
                tooltip: {
                    start: string;
                    cont: string;
                    end: string;
                };
            };
            polyline: {
                error: string;
                tooltip: {
                    start: string;
                    cont: string;
                    end: string;
                };
            };
            rectangle: {
                tooltip: {
                    start: string;
                };
            };
            simpleshape: {
                tooltip: {
                    end: string;
                };
            };
        }

        interface EditToolbar {
            actions: {
                save: Action;
                cancel: Action;
                clearAll: Action;
            };
            buttons: {
                edit: string;
                editDisabled: string;
                remove: string;
                removeDisabled: string;
            };
        }

        interface EditHandlers {
            edit: {
                tooltip: {
                    text: string;
                    subtext: string;
                };
            };
            remove: {
                tooltip: {
                    text: string;
                };
            };
        }
    }

    function map(element: string | HTMLElement, options?: MapOptions): DrawMap;

    const drawVersion: string;
    const drawLocal: Localization.DrawLocal;
}

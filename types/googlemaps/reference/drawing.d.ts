declare namespace google.maps.drawing {
    class DrawingManager extends MVCObject {
        constructor(options?: DrawingManagerOptions);
        getDrawingMode(): OverlayType;
        getMap(): Map;
        setDrawingMode(drawingMode: OverlayType | null): void;
        setMap(map: Map | null): void;
        setOptions(options: DrawingManagerOptions): void;
    }

    /** Options for the drawing manager. */
    interface DrawingManagerOptions {
        /**
         * Options to apply to any new circles created with this DrawingManager.
         * The center and radius properties are ignored, and the map property of a
         * new circle is always set to the DrawingManager's map.
         */
        circleOptions?: CircleOptions;
        /**
         * The enabled/disabled state of the drawing control. Defaults to true.
         */
        drawingControl?: boolean;
        /** The display options for the drawing control. */
        drawingControlOptions?: DrawingControlOptions;
        /**
         * The DrawingManager's drawing mode, which defines the type of overlay to
         * be added on the map. Accepted values are 'marker', 'polygon',
         * 'polyline', 'rectangle', 'circle', or null. A drawing mode of null
         * means that the user can interact with the map as normal, and clicks do
         * not draw anything.
         */
        drawingMode?: OverlayType | null;
        /**
         * The Map to which the DrawingManager is attached, which is the Map on
         * which the overlays created will be placed.
         */
        map?: Map;
        /**
         * Options to apply to any new markers created with this DrawingManager.
         * The position property is ignored, and the map property of a new marker
         * is always set to the DrawingManager's map.
         */
        markerOptions?: MarkerOptions;
        /**
         * Options to apply to any new polygons created with this DrawingManager.
         * The paths property is ignored, and the map property of a new polygon is
         * always set to the DrawingManager's map.
         */
        polygonOptions?: PolygonOptions;
        /**
         * Options to apply to any new polylines created with this DrawingManager.
         * The path property is ignored, and the map property of a new polyline is
         * always set to the DrawingManager's map.
         */
        polylineOptions?: PolylineOptions;
        /**
         * Options to apply to any new rectangles created with this
         * DrawingManager. The bounds property is ignored, and the map property of
         * a new rectangle is always set to the DrawingManager's map.
         */
        rectangleOptions?: RectangleOptions;
    }

    interface DrawingControlOptions {
        drawingModes?: OverlayType[];
        position?: ControlPosition;
    }

    /** The properties of an overlaycomplete event on a DrawingManager.. */
    interface OverlayCompleteEvent {
        /** The completed overlay. */
        overlay: Marker | Polygon | Polyline | Rectangle | Circle;
        /** The completed overlay's type. */
        type: OverlayType;
    }

    /**
     * The types of overlay that may be created by the DrawingManager. Specify
     * these by value, or by using the constant's name. For example, 'polygon'
     * or google.maps.drawing.OverlayType.POLYGON.
     */
    enum OverlayType {
        /**
         * Specifies that the DrawingManager creates circles, and that the overlay
         * given in the overlaycomplete event is a circle.
         */
        CIRCLE = 'circle',
        /**
         * Specifies that the DrawingManager creates markers, and that the overlay
         * given in the overlaycomplete event is a marker.
         */
        MARKER = 'marker',
        /**
         * Specifies that the DrawingManager creates polygons, and that the
         * overlay given in the overlaycomplete event is a polygon.
         */
        POLYGON = 'polygon',
        /**
         * Specifies that the DrawingManager creates polylines, and that the
         * overlay given in the overlaycomplete event is a polyline.
         */
        POLYLINE = 'polyline',
        /**
         * Specifies that the DrawingManager creates rectangles, and that the
         * overlay given in the overlaycomplete event is a rectangle.
         */
        RECTANGLE = 'rectangle',
    }
}

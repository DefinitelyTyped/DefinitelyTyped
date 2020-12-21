declare namespace google.maps {
    class Polyline extends MVCObject {
        constructor(opts?: PolylineOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray<LatLng>;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void;
        setVisible(visible: boolean): void;
    }

    interface PolylineOptions {
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        clickable?: boolean;
        /**
         * If set to true, the user can drag this shape over the map.
         * The geodesic property defines the mode of dragging. Defaults to false.
         */
        draggable?: boolean;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        editable?: boolean;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions are
         * maintained relative to the surface of the earth. Defaults to false.
         */
        geodesic?: boolean;
        /** The icons to be rendered along the polyline. */
        icons?: IconSequence[];
        /** Map on which to display Polyline. */
        map?: Map;
        /**
         * The ordered sequence of coordinates of the Polyline.
         * This path may be specified using either a simple array of LatLngs, or an
         * MVCArray of LatLngs. Note that if you pass a simple array, it will be
         * converted to an MVCArray Inserting or removing LatLngs in the MVCArray
         * will automatically update the polyline on the map.
         */
        path?: MVCArray<LatLng> | LatLng[] | LatLngLiteral[];
        /**
         * The stroke color. All CSS3 colors are supported except for extended
         * named colors.
         */
        strokeColor?: string;
        /** The stroke opacity between 0.0 and 1.0. */
        strokeOpacity?: number;
        /** The stroke width in pixels. */
        strokeWeight?: number;
        /** Whether this polyline is visible on the map. Defaults to true. */
        visible?: boolean;
        /** The zIndex compared to other polys. */
        zIndex?: number;
    }

    interface IconSequence {
        fixedRotation?: boolean;
        // tslint:disable-next-line:no-unnecessary-qualifier
        icon?: google.maps.Symbol;
        offset?: string;
        repeat?: string;
    }

    class Polygon extends MVCObject {
        constructor(opts?: PolygonOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        /** Retrieves the first path. */
        getPath(): MVCArray<LatLng>;
        /** Retrieves the paths for this polygon. */
        getPaths(): MVCArray<MVCArray<LatLng>>;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void;
        setPaths(
            paths:
                | MVCArray<MVCArray<LatLng>>
                | MVCArray<LatLng>
                | LatLng[][]
                | LatLngLiteral[][]
                | LatLng[]
                | LatLngLiteral[],
        ): void;
        setVisible(visible: boolean): void;
    }

    interface PolygonOptions {
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        clickable?: boolean;
        /**
         * If set to true, the user can drag this shape over the map.
         * The geodesic property defines the mode of dragging. Defaults to false.
         */
        draggable?: boolean;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        editable?: boolean;
        /**
         * The fill color. All CSS3 colors are supported except for extended named
         * colors.
         */
        fillColor?: string;
        /** The fill opacity between 0.0 and 1.0 */
        fillOpacity?: number;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions are
         * maintained relative to the surface of the earth. Defaults to false.
         */
        geodesic?: boolean;
        /** Map on which to display Polygon. */
        map?: Map;
        /**
         * The ordered sequence of coordinates that designates a closed loop. Unlike
         * polylines, a polygon may consist of one or more paths. As a result, the
         * paths property may specify one or more arrays of LatLng coordinates.
         * Paths are closed automatically; do not repeat the first vertex of the
         * path as the last vertex. Simple polygons may be defined using a single
         * array of LatLngs. More complex polygons may specify an array of arrays.
         * Any simple arrays are converted into MVCArrays. Inserting or removing
         * LatLngs from the MVCArray will automatically update the polygon on the
         * map.
         */
        paths?:
            | MVCArray<MVCArray<LatLng>>
            | MVCArray<LatLng>
            | LatLng[][]
            | LatLngLiteral[][]
            | LatLng[]
            | LatLngLiteral[];
        /**
         * The stroke color.
         * All CSS3 colors are supported except for extended named colors.
         */
        strokeColor?: string;
        /** The stroke opacity between 0.0 and 1.0 */
        strokeOpacity?: number;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        strokePosition?: StrokePosition;
        /** The stroke width in pixels. */
        strokeWeight?: number;
        /** Whether this polygon is visible on the map. Defaults to true. */
        visible?: boolean;
        /** The zIndex compared to other polys. */
        zIndex?: number;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent Maps JavaScript API}
     */
    interface PolyMouseEvent extends MapMouseEvent {
        /**
         * The index of the edge within the path beneath the cursor when the event occurred, if the
         *  event occurred on a mid-point on an editable polygon.
         */
        edge?: number;
        /**
         * The index of the path beneath the cursor when the event occurred, if the event occurred on
         *  a vertex and the polygon is editable. Otherwise undefined.
         */
        path?: number;
        /**
         * The index of the vertex beneath the cursor when the event occurred, if the event occurred on
         *  a vertex and the polyline or polygon is editable. If the event does not occur on a vertex,
         *  the value is undefined.
         */
        vertex?: number;
    }

    class Rectangle extends MVCObject {
        constructor(opts?: RectangleOptions);
        getBounds(): LatLngBounds;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getVisible(): boolean;
        setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: RectangleOptions): void;
        setVisible(visible: boolean): void;
    }

    interface RectangleOptions {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        map?: Map;
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    /** A circle on the Earth's surface; also known as a "spherical cap". */
    class Circle extends MVCObject {
        /**
         * Create a circle using the passed CircleOptions, which specify the
         * center, radius, and style.
         */
        constructor(opts?: CircleOptions);
        /** Gets the LatLngBounds of this Circle. */
        getBounds(): LatLngBounds;
        /** Returns the center of this circle. */
        getCenter(): LatLng;
        /** Returns whether this circle can be dragged by the user. */
        getDraggable(): boolean;
        /** Returns whether this circle can be edited by the user. */
        getEditable(): boolean;
        /** Returns the map on which this circle is displayed. */
        getMap(): Map;
        /** Returns the radius of this circle (in meters). */
        getRadius(): number;
        /** Returns whether this circle is visible on the map. */
        getVisible(): boolean;
        /** Sets the center of this circle. */
        setCenter(center: LatLng | LatLngLiteral): void;
        /** If set to true, the user can drag this circle over the map. */
        setDraggable(draggable: boolean): void;
        /**
         * If set to true, the user can edit this circle by dragging the control
         * points shown at the center and around the circumference of the circle.
         */
        setEditable(editable: boolean): void;
        /**
         * Renders the circle on the specified map. If map is set to null, the
         * circle will be removed.
         */
        setMap(map: Map | null): void;
        setOptions(options: CircleOptions): void;
        /** Sets the radius of this circle (in meters). */
        setRadius(radius: number): void;
        /** Hides this circle if set to false. */
        setVisible(visible: boolean): void;
    }

    interface CircleOptions {
        /** The center */
        center?: LatLng | LatLngLiteral;
        /** Indicates whether this Circle handles mouse events. Defaults to true. */
        clickable?: boolean;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to
         * false.
         */
        draggable?: boolean;
        /**
         * If set to true, the user can edit this circle by dragging the control
         * points shown at the center and around the circumference of the circle.
         * Defaults to false.
         */
        editable?: boolean;
        /**
         * The fill color. All CSS3 colors are supported except for extended named
         * colors.
         */
        fillColor?: string;
        /** The fill opacity between 0.0 and 1.0 */
        fillOpacity?: number;
        /** Map on which to display Circle. */
        map?: Map;
        /** The radius in meters on the Earth's surface */
        radius?: number;
        /**
         * The stroke color. All CSS3 colors are supported except for extended
         * named colors.
         */
        strokeColor?: string;
        /** The stroke opacity between 0.0 and 1.0 */
        strokeOpacity?: number;
        /**
         * The stroke position. Defaults to CENTER. This property is not supported
         * on Internet Explorer 8 and earlier.
         */
        strokePosition?: StrokePosition;
        /** The stroke width in pixels. */
        strokeWeight?: number;
        /** Whether this circle is visible on the map. Defaults to true. */
        visible?: boolean;
        /** The zIndex compared to other polys. */
        zIndex?: number;
    }

    /**
     * The possible positions of the stroke on a polygon.
     */
    enum StrokePosition {
        /**
         * The stroke is centered on the polygon's path, with half the stroke inside
         * the polygon and half the stroke outside the polygon.
         */
        CENTER = 0,
        /** The stroke lies inside the polygon. */
        INSIDE = 1,
        /** The stroke lies outside the polygon. */
        OUTSIDE = 2,
    }
}

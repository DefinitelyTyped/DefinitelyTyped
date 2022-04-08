// Type definitions for non-npm package MapKit JS 5.50
// Project: https://developer.apple.com/reference/mapkitjs
// Definitions by: Philipp Jean-Jacques <https://github.com/kilghaz>
//                 Waseem Dahman <https://github.com/wsmd>
//                 Chris Drackett <https://github.com/chrisdrackett>
//                 Moritz Sternemann <https://github.com/moritzsternemann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * The JavaScript API for embedding Apple maps on your website.
 */
declare namespace mapkit {
    /**
     * Initialize a mapkit object by providing an authorization callback and language.
     */
    function init(options: MapKitInitOptions): void;
    /**
     * Subscribes a listener function to an event type.
     *
     * @param type The type of event (e.g., "configuration-change").
     * @param listener The callback function to invoke. listener is passed an
     * Event as its sole argument.
     * @param thisObject An object set as the this keyword on the listener function.
     */
    function addEventListener<T>(
        type: InitializationEventType,
        listener: (this: T, event: InitializationEvent) => void,
        thisObject?: T,
    ): void;
    /**
     * Unsubscribes a listener function from an event type.
     *
     * @param type The type of event (e.g., "configuration-change").
     * @param listener The callback function to remove.
     * @param thisObject An object set as the this keyword on the listener function.
     */
    function removeEventListener<T>(
        type: InitializationEventType,
        listener: (this: T, event: InitializationEvent) => void,
        thisObject?: T,
    ): void;
    /**
     * A language ID indicating the selected language.
     */
    let language: string;
    /**
     * The build string.
     */
    const build: string;
    /**
     * The version of MapKit JS.
     */
    const version: string;

    /**
     * Initialization options for MapKit JS.
     */
    interface MapKitInitOptions {
        /**
         * A callback function that obtains a token.
         *
         * @param done A function that completes the MapKit JS token request. Called
         * after creating a new token.
         */
        authorizationCallback: (done: (token: string) => void) => void;
        /**
         * An ID that indicates the preferred language in which to display map
         * labels, controls, directions, and other text.
         */
        language?: string;
    }

    /**
     * Constants indicating the visibility of different adaptive map features.
     */
    const FeatureVisibility: {
        /**
         * A constant indicating that feature visibility adapts to the current map state.
         */
        readonly Adaptive: string;
        /**
         * A constant indicating that the feature is always hidden.
         */
        readonly Hidden: string;
        /**
         * A constant indicating that the feature is always visible.
         */
        readonly Visible: string;
    };

    type InitializationEventType = 'configuration-change' | 'error';

    interface InitializationEvent {
        status: 'Initialized' | 'Refreshed' | 'Unauthorized' | 'Too Many Requests';
    }

    /**
     * An embeddable interactive map that you add to a webpage.
     */
    class Map {
        /**
         * Creates a map that you embed on a webpage, and initializes its display
         * properties and other options.
         *
         * @parent parent A DOM element or the ID of a DOM element to use as this
         * map's container.
         * @param options An object that contains options for initializing a map's
         * features.
         */
        constructor(parent: string | Element, options?: MapConstructorOptions);
        /**
         * Adds an event listener to handle events triggered by user interactions
         * and the framework.
         *
         * @param type The event type of interest (e.g., "select").
         * @param listener The callback function to invoke. Listener is passed a
         * Map event as its sole argument.
         * @param thisObject An object to be set as the this keyword on the listener
         * function.
         */
        addEventListener<T, K extends keyof MapEvents<this>>(
            type: K,
            listener: (this: T, event: MapEvents<this>[K]) => void,
            thisObject?: T,
        ): void;
        /**
         * Removes an event listener.
         */
        removeEventListener<T, K extends keyof MapEvents<this>>(
            type: K,
            listener: (type: T, event: MapEvents<this>[K]) => void,
            thisObject?: T,
        ): void;
        /**
         * Removes the map's element from the DOM and releases internal references to
         * this map to free up memory.
         */
        destroy(): void;
        /**
         * The map's DOM element.
         */
        readonly element: Element;

        // Accessing Interaction Properties

        /**
         * A Boolean value that indicates if map rotation is available.
         */
        isRotationAvailable: boolean;
        /**
         * A Boolean value that determines whether the user may rotate the map using
         * the compass control or a rotate gesture.
         */
        isRotationEnabled: boolean;
        /**
         * A Boolean value that determines whether the user may scroll the map with
         * a pointing device or with gestures on a touchscreen.
         */
        isScrollEnabled: boolean;
        /**
         * A Boolean value that determines whether the user may zoom in and out on
         * the map using pinch gestures or the zoom control.
         */
        isZoomEnabled: boolean;

        // Manipulating the Visible Portion of the Map

        /**
         * The map coordinate at the center of the map view.
         */
        center: Coordinate;
        /**
         * Centers the map to the provided coordinate, with optional animation.
         */
        setCenterAnimated(coordinate: Coordinate, animate?: boolean): this;
        /**
         * The area currently displayed by the map.
         */
        region: CoordinateRegion;
        /**
         * Changes the map's region to the region provided, with optional animation.
         */
        setRegionAnimated(region: CoordinateRegion, animate?: boolean): this;
        /**
         * The map's rotation, in degrees.
         */
        rotation: number;
        /**
         * Changes the map's rotation setting to the number of degrees specified.
         */
        setRotationAnimated(degrees: number, animate?: boolean): this;
        /**
         * The visible area of the map defined in map units.
         */
        visibleMapRect: MapRect;
        /**
         * Changes the map's visible map rectangle to the specified map rectangle.
         */
        setVisibleMapRectAnimated(mapRect: MapRect, animate?: boolean): this;
        /**
         * Sets a constraint for the center of the map.
         */
        cameraBoundary: CameraBoundaryDescription;
        /**
         * Changes the map's camera boundary with an animated transition.
         */
        setCameraBoundaryAnimated(coordinateRegionOrMapRect: CoordinateRegion | MapRect, animate?: boolean): this;
        /**
         * Sets the altitude of the camera above the center of the map.
         */
        cameraDistance: number;
        /**
         * Changes the map's camera distance with an animated transition.
         */
        setCameraDistanceAnimated(distance: number, animate?: boolean): this;
        /**
         * Sets the minimum and maximum distance of the camera from the map center.
         */
        cameraZoomRange: CameraZoomRange;
        /**
         * Changes the map's camera zoom range with an animated transition.
         */
        setCameraZoomRangeAnimated(cameraZoomRange: CameraZoomRange, animate?: boolean): this;

        // Configuring the Map's Appearance

        /**
         * Constants indicating the color scheme of the map.
         */
        static readonly ColorSchemes: {
            /**
             * A constant indicating a light color scheme.
             */
            readonly Light: string;
            /**
             * A constant indicating a dark color scheme.
             */
            readonly Dark: string;
        };
        /**
         * Constants representing the type of map to display.
         */
        static readonly MapTypes: {
            /**
             * A street map that shows the position of all roads and some road names.
             */
            readonly Standard: string;
            /**
             * A street map where your data is emphasized over the underlying map details.
             */
            readonly MutedStandard: string;
            /**
             * A satellite image of the area with road and road name information
             * layered on top.
             */
            readonly Hybrid: string;
            /**
             * A satellite image of the area.
             */
            readonly Satellite: string;
        };
        /**
         * Constants indicating the system of measurement displayed on the map.
         */
        static readonly Distances: {
            /**
             * A constant indicating the measurement system is adaptive, and determined
             * based on the map's language.
             */
            readonly Adaptive: string;
            /**
             * A constant indicating the measurement system is imperial.
             */
            readonly Imperial: string;
            /**
             * A constant indicating the measurement system is metric.
             */
            readonly Metric: string;
        };
        /**
         * The map’s color scheme when displaying standard or muted standard map types.
         */
        colorScheme: string;
        /**
         * The system of measurement displayed on the map.
         */
        distances: string;
        /**
         * The type of data displayed by the map view.
         */
        mapType: string;
        /**
         * The map's inset margins.
         */
        padding: Padding;
        /**
         * A feature visibility setting that determines when the compass is visible.
         */
        showsCompass: string;
        /**
         * A Boolean value that determines whether to display a control that lets
         * users choose the map type.
         */
        showsMapTypeControl: boolean;
        /**
         * A Boolean value that determines whether to display a control for zooming
         * in and zooming out on a map.
         */
        showsZoomControl: boolean;
        /**
         * A Boolean value that determines whether the user location control is visible.
         */
        showsUserLocationControl: boolean;
        /**
         * The filter used to determine the points of interest shown on the map.
         */
        pointOfInterestFilter: PointOfInterestFilter;
        /**
         * A Boolean value that determines whether the map displays points of interest.
         */
        showsPointsOfInterest: boolean;
        /**
         * A feature visibility setting that determines when the map's scale is displayed.
         */
        showsScale: string;
        /**
         * The CSS color that is used to paint the user interface controls on the map.
         */
        tintColor: string;
        /**
         * Adjusts the maps visible region to bring the specified overlays and
         * annotations into view.
         */
        showItems<I = Array<Annotation | Overlay>>(items: I, options?: MapShowItemsOptions): I;

        // Annotating the Map

        /**
         * An array of all the annotations on the map.
         */
        annotations: Annotation[];
        /**
         * The annotation that is selected.
         */
        selectedAnnotation: Annotation | null;
        /**
         * A delegate method for modifying an annotation that represents a group of
         * annotations that are combined into a cluster.
         */
        annotationForCluster(clusterAnnotation: Annotation): void;
        /**
         * Returns the list of annotation objects located in the specified map
         * rectangle.
         */
        annotationsInMapRect(mapRect: MapRect): Annotation[];
        /**
         * Adds an annotation to the map.
         */
        addAnnotation(annotation: Annotation): Annotation;
        /**
         * Adds multiple annotations to the map.
         */
        addAnnotations(annotations: Annotation[]): Annotation[];
        /**
         * Removes an annotation from the map.
         */
        removeAnnotation(annotation: Annotation): Annotation;
        /**
         * Removes multiple annotations from the map.
         */
        removeAnnotations(annotations: Annotation[]): Annotation[];

        // Adding and Removing Overlays

        /**
         * An array of all of the map's overlays.
         */
        overlays: Overlay[];
        /**
         * The overlay on the map that is selected.
         */
        selectedOverlay: Overlay | null;
        /**
         * Returns an array of overlays at a given point on the webpage.
         */
        overlaysAtPoint(point: DOMPoint): Overlay[];
        /**
         * Adds an overlay to the map.
         */
        addOverlay(overlay: Overlay): Overlay;
        /**
         * Adds multiple overlays to the map.
         */
        addOverlays(overlays: Overlay[]): Overlay[];
        /**
         * Removes an overlay from the map.
         */
        removeOverlay(overlay: Overlay): Overlay;
        /**
         * Removes multiple overlays from the map.
         */
        removeOverlays(overlays: Overlay[]): Overlay[];
        /**
         * Returns the topmost overlay at a given point on the webpage.
         */
        topOverlayAtPoint(point: DOMPoint): Overlay | null;

        // Adding and Removing Geographical Features

        /**
         * Adds a collection of annotations, overlays, or other item collections to the map.
         */
        addItems(
            items: Array<Annotation | Overlay | ItemCollection> | ItemCollection,
        ): Array<Annotation | Overlay | ItemCollection> | ItemCollection;
        /**
         * Removes a collection of annotations, overlays, or other item collections from the map.
         */
        removeItems(
            items: Array<Annotation | Overlay | ItemCollection> | ItemCollection,
        ): Array<Annotation | Overlay | ItemCollection> | ItemCollection;

        // Adding and Removing Tile Overlays

        /**
         * An array of all of the map's tile overlays.
         */
        tileOverlays: TileOverlay[];
        /**
         * Adds a tile overlay to the map.
         */
        addTileOverlay(tileOverlay: TileOverlay): TileOverlay;
        /**
         * Adds an array of tile overlays to the map.
         */
        addTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
        /**
         * Removes a tile overlay from the map.
         */
        removeTileOverlay(tileOverlay: TileOverlay): TileOverlay;
        /**
         * Removes an array of tile overlays from the map.
         */
        removeTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];

        // Displaying the User's Location

        /**
         * A Boolean value that determines whether to show the user's location on
         * the map.
         */
        showsUserLocation: boolean;
        /**
         * A Boolean value that determines whether to center the map on the user's
         * location.
         */
        tracksUserLocation: boolean;
        /**
         * An annotation that indicates the user's location on the map.
         */
        readonly userLocationAnnotation: Annotation | null;

        // Converting Map Coordinates

        /**
         * Converts a coordinate on the map to a point in the page's coordinate system.
         */
        convertCoordinateToPointOnPage(coordinate: Coordinate): DOMPoint;
        /**
         * Converts a point in page coordinates to the corresponding map coordinate.
         */
        convertPointOnPageToCoordinate(point: DOMPoint): Coordinate;
    }

    /**
     * An object that contains options for initializing a map's features.
     */
    interface MapConstructorOptions {
        /**
         * The visible area of the map defined in map units.
         */
        visibleMapRect?: MapRect;
        /**
         * The area currently displayed by the map.
         */
        region?: CoordinateRegion;
        /**
         * The map coordinate at the center of the map view.
         */
        center?: Coordinate;
        /**
         * The map's rotation, in degrees.
         */
        rotation?: number;
        /**
         * The CSS color that is used to paint the user interface controls on the map.
         */
        tintColor?: string;
        /**
         * The map’s color scheme when displaying standard or muted standard map types.
         */
        colorScheme?: string;
        /**
         * The type of data displayed by the map view.
         */
        mapType?: string;
        /**
         * The map's inset margins.
         */
        padding?: Padding;
        /**
         * A Boolean value that determines whether to display a control that lets
         * users choose the map type.
         */
        showsMapTypeControl?: boolean;
        /**
         * A Boolean value that determines whether the user may rotate the map using
         * the compass control or a rotate gesture.
         */
        isRotationEnabled?: boolean;
        /**
         * A feature visibility setting that determines when the compass is visible.
         */
        showsCompass?: string;
        /**
         * A Boolean value that determines whether the user may zoom in and out on
         * the map using pinch gestures or the zoom control.
         */
        isZoomEnabled?: boolean;
        /**
         * A Boolean value that determines whether to display a control for zooming
         * in and zooming out on a map.
         */
        showsZoomControl?: boolean;
        /**
         * A Boolean value that determines whether the user may scroll the map with
         * a pointing device or gestures on a touchscreen.
         */
        isScrollEnabled?: boolean;
        /**
         * A feature visibility setting that determines when the map's scale is
         * displayed.
         */
        showsScale?: string;
        /**
         * A delegate method for modifying cluster annotations.
         */
        annotationForCluster?(annotation: Annotation): void;
        /**
         * An array of all the annotations on the map.
         */
        annotations?: Annotation[];
        /**
         * The annotation on the map that is selected.
         */
        selectedAnnotation?: Annotation;
        /**
         * An array of all of the map's overlays.
         */
        overlays?: Overlay[];
        /**
         * The overlay on the map that is selected.
         */
        selectedOverlay?: Overlay;
        /**
         * A Boolean value that determines whether the map displays points of interest.
         */
        showsPointsOfInterest?: boolean;
        /*
         * The filter used to determine the points of interest shown on the map.
         */
        pointOfInterestFilter?: PointOfInterestFilter;
        /**
         * A Boolean value that determines whether to show the user's location on
         * the map.
         */
        showsUserLocation?: boolean;
        /**
         * A Boolean value that determines whether to center the map on the user's
         * location.
         */
        tracksUserLocation?: boolean;
        /**
         * A Boolean value that determines whether the user location control is visible.
         */
        showsUserLocationControl?: boolean;
    }

    /**
     * An object literal containing at least one property defining an area on the map.
     */
    interface CameraBoundaryDescription {
        /**
         * A rectangular area on a two-dimensional map projection.
         */
        mapRect?: MapRect;
        /**
         * A rectangular area on a map, defined by coordinates of the rectangle's northeast and southwest corners.
         */
        region?: CoordinateRegion;
    }

    /**
     * An array to which maps are automatically added and removed as they are
     * initialized and destroyed.
     */
    const maps: Map[];

    interface EventBase<T> {
        type: string;
        target: T;
    }

    // prettier-ignore
    interface MapEvents<T> {
  'region-change-start': EventBase<T>;
  'region-change-end': EventBase<T>;
  'scroll-start': EventBase<T>;
  'scroll-end': EventBase<T>;
  'zoom-start': EventBase<T>;
  'zoom-end': EventBase<T>;
  'map-type-change': EventBase<T>;
  'single-tap': EventBase<T>;
  'double-tap': EventBase<T>;
  'long-press': EventBase<T>;

  // Annotation Events

  'select': EventBase<T> & { annotation?: Annotation; overlay?: Overlay };
  'deselect': EventBase<T> & { annotation?: Annotation; overlay?: Overlay };
  'drag-start': EventBase<T> & { annotation: Annotation };
  'dragging': EventBase<T> & { annotation: Annotation; coordinate: Coordinate };
  'drag-end': EventBase<T> & { annotation: Annotation };

  // User Location Events

  'user-location-change': EventBase<T> & { coordinate: Coordinate; timestamp: Date };
  'user-location-error': EventBase<T> & { code: number; message: string };
}

    /**
     * Options that determine map parameters used when showing items.
     */
    interface MapShowItemsOptions {
        /**
         * A Boolean value that determines whether the map is animated as the map
         * region changes to show the items.
         */
        animate?: boolean;
        /**
         * The minimum longitudinal and latitudinal span the map should display.
         */
        padding?: Padding;
        /**
         * Spacing that is added around the computed map region when showing items.
         */
        minimumSpan?: CoordinateSpan;
    }

    /**
     * A rectangular area on a two-dimensional map projection.
     */
    class MapRect {
        /**
         * Initializes a MapRect object.
         *
         * @param x The origin point along the east-west axis of the map projection.
         * @param y The origin point along the north-south axis of the map projection.
         * @param width The distance (measured using map points) along the east-west
         * axis of the map projection.
         * @param height The distance (measured using map points) along the north-south
         * axis of the map projection.
         */
        constructor(x: number, y: number, width: number, height: number);
        /**
         * The origin point of a rectangle.
         */
        origin: MapPoint;
        /**
         * The width and height of a rectangle, starting from the origin point.
         */
        size: MapSize;
        /**
         * The maximum x-axis value of a rectangle.
         */
        maxX: number;
        /**
         * The maximum y-axis value of a rectangle.
         */
        maxY: number;
        /**
         * The mid-point along the x-axis of a rectangle.
         */
        midX: number;
        /**
         * The mid-point along the y-axis of a rectangle.
         */
        midY: number;
        /**
         * The minimum x-axis value of a rectangle.
         */
        minX: number;
        /**
         * The minimum y-axis value of a rectangle.
         */
        minY: number;
        /**
         * Returns a copy of a map rectangle.
         */
        copy(): MapRect;
        /**
         * Indicates whether two map rectangles are equal.
         *
         * @param anotherRect The map rectangle to equate to.
         */
        equals(anotherRect: MapRect): boolean;
        /**
         * @param scaleFactor The scale factor.
         * @param scaleCenter The center map point for scaling.
         */
        scale(scaleFactor: number, scaleCenter: MapPoint): MapRect;
        /**
         * Returns the region that corresponds to a map rectangle.
         */
        toCoordinateRegion(): CoordinateRegion;
    }

    /**
     * A rectangular area on a map defined by a center coordinate and a span,
     * expressed in degrees of latitude and longitude.
     */
    class CoordinateRegion {
        /**
         * Creates A rectangular geographic region centered around a latitude and
         * longitude coordinate.
         *
         * @param center Coordinate that is center point of the region.
         * @param span A CoordinateSpan that represents the amount of map to
         * display. The span also defines the current zoom level used by the map object.
         */
        constructor(center: Coordinate, span: CoordinateSpan);
        /**
         * The center point of the region.
         */
        center: Coordinate;
        /**
         * The horizontal and vertical span representing the amount of map to display.
         */
        span: CoordinateSpan;
        /**
         * The distance provided in meters or the longest distance derived from the center point to the region’s bounding box.
         */
        readonly radius: number;
        /**
         * Returns a copy of the calling coordinate region.
         */
        copy(): CoordinateRegion;
        /**
         * Returns a Boolean value indicating whether two regions are equal.
         */
        equals(anotherRegion: CoordinateRegion): boolean;
        /**
         * Returns the map rectangle that corresponds to the calling coordinate region.
         */
        toMapRect(): MapRect;
        /**
         * Returns the bounding region that corresponds to the calling coordinate region.
         */
        toBoundingRegion(): BoundingRegion;
    }

    /**
     * An object representing the latitude and longitude for a point on the
     * Earth's surface.
     */
    class Coordinate {
        /**
         * Creates a coordinate object with the specified latitude and longitude.
         */
        constructor(latitude: number, longitude: number);
        /**
         * The latitude in degrees.
         */
        latitude: number;
        /**
         * The longitude in degrees.
         */
        longitude: number;
        /**
         * Returns a copy of the coordinate.
         */
        copy(): Coordinate;
        /**
         * Returns a Boolean value indicating whether two coordinates are equal.
         */
        equals(anotherCoordinate: Coordinate): boolean;
        /**
         * Returns the map point that corresponds to the coordinate.
         */
        toMapPoint(): MapPoint;
        /**
         * Returns the unwrapped map point that corresponds to the coordinate.
         */
        toUnwrappedMapPoint(): MapPoint;
    }

    /**
     * The values that define content padding within the map view frame.
     */
    class Padding {
        /**
         * Creates a padding object, and initializes its inset margin properties.
         *
         * @param top The amount of padding, in CSS pixels, to inset the map from
         * the top edge.
         * @param right The amount of padding, in CSS pixels, to inset the map from
         * the right edge.
         * @param bottom The amount of padding, in CSS pixels, to inset the map from
         * the left edge.
         * @param left The amount of padding, in CSS pixels, to inset the map from
         * the left edge.
         */
        constructor(top?: number, right?: number, bottom?: number, left?: number);
        /**
         * Creates a padding object, and initializes its inset margin properties.
         *
         * @param options An object literal of inset margin properties
         */
        constructor(options?: PaddingConstructorOptions);
        /**
         * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
         */
        bottom: number;
        /**
         * The amount of padding, in CSS pixels, to inset the map from the left edge.
         */
        left: number;
        /**
         * The amount of padding, in CSS pixels, to inset the map from the right edge.
         */
        right: number;
        /**
         * The amount of padding, in CSS pixels, to inset the map from the top edge.
         */
        top: number;
    }

    interface PaddingConstructorOptions {
        /**
         * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
         */
        bottom?: number;
        /**
         * The amount of padding, in CSS pixels, to inset the map from the left edge.
         */
        left?: number;
        /**
         * The amount of padding, in CSS pixels, to inset the map from the right edge.
         */
        right?: number;
        /**
         * The amount of padding, in CSS pixels, to inset the map from the top edge.
         */
        top?: number;
    }

    /**
     * The base annotation object, used for creating custom annotations.
     */
    class Annotation {
        /**
         * Creates a new annotation given its location and initialization options.
         *
         * @param coordinate The coordinate at which this annotation should appear.
         * @param factory A factory function that returns a DOM element used to
         * represent this annotation.
         * @param options A hash of properties with which to initialize the annotation.
         */
        constructor(
            coordinate: Coordinate,
            factory: (coordinate: Coordinate, options: AnnotationConstructorOptions) => Element,
            options?: AnnotationConstructorOptions,
        );
        /**
         * Adds an event listener to handle events triggered by user interactions
         * with annotations.
         *
         * @param type The event type of interest (e.g., "select").
         * @param listener The callback function to invoke. listener is passed an
         * annotation event as its sole argument.
         * @param thisObject An object to be set as the this keyword on the
         * listener function.
         */
        addEventListener<T>(
            type: AnnotationEventType,
            listener: (this: T, event: EventBase<Map>) => void,
            thisObject?: T,
        ): void;
        /**
         * Adds an event listener to handle events triggered by user interactions
         * with annotations.
         *
         * @param type The event type of interest (e.g., "select").
         * @param listener The callback function to remove.
         * @param thisObject An object to be set as the this keyword on the listener
         * function.
         */
        removeEventListener<T>(
            type: AnnotationEventType,
            listener: (this: T, event: EventBase<Map>) => void,
            thisObject?: T,
        ): void;
        /**
         * Constant values used to provide a hint the map uses to prioritize
         * displaying annotations.
         */
        static readonly DisplayPriority: {
            readonly Low: number;
            readonly High: number;
            readonly Required: number;
        };
        /**
         * Constants indicating how to interpret the collision frame rectangle of
         * an annotation view.
         */
        static readonly CollisionMode: {
            readonly Rectangle: string;
            readonly Circle: string;
            readonly None: string;
        };
        /**
         * The annotation's coordinate.
         */
        coordinate: Coordinate;
        /**
         * The map to which the annotation was added.
         */
        readonly map: Map | null;
        /**
         * The annotation's element in the DOM.
         */
        readonly element: Element;
        /**
         * Data that you define that is assigned to the annotation.
         */
        data: any;
        /**
         * The text to display in the annotation's callout.
         */
        title: string;
        /**
         * The text to display as a subtitle, on the second line of an annotation's
         * callout.
         */
        subtitle: string;
        /**
         * An offset that changes the annotation's default anchor point.
         */
        anchorOffset: DOMPoint;
        /**
         * A CSS animation that runs when the annotation appears on the map.
         */
        appearanceAnimation: string;
        /**
         * A numeric hint the map uses to prioritize displaying annotations.
         */
        displayPriority: number;
        /**
         * Spacing added around the annotation when showing items.
         */
        padding: Padding;
        /**
         * The desired dimensions of the annotation, in CSS pixels.
         */
        size: { width: number; height: number };
        /**
         * A Boolean value that determines if the annotation is visible or hidden.
         */
        visible: boolean;
        /**
         * A Boolean value that determines if the annotation should be animated.
         */
        animates: boolean;
        /**
         * A Boolean value that determines whether the user can drag the annotation.
         */
        draggable: boolean;
        /**
         * A Boolean value that determines whether the annotation is selected.
         */
        selected: boolean;
        /**
         * A Boolean value that determines whether the annotation responds to user
         * interaction.
         */
        enabled: boolean;
        /**
         * A delegate that enables you to customize the annotation's callout.
         */
        callout: AnnotationCalloutDelegate;
        /**
         * An offset that changes the annotation callout's default placement.
         */
        calloutOffset: DOMPoint;
        /**
         * A Boolean value that determines whether a callout should be shown.
         */
        calloutEnabled: boolean;
        /**
         * An array of annotations that are grouped together in a cluster.
         */
        memberAnnotations: Annotation[];
        /**
         * An identifer used for grouping annotations into the same cluster.
         */
        clusteringIdentifier: string | null;
        /**
         * A mode that determines the shape of the collision frame.
         */
        collisionMode: string;
    }

    /**
     * An object that contains options for initializing annotation features.
     */
    interface AnnotationConstructorOptions {
        /**
         * The text to display in the annotation's callout.
         */
        title?: string;
        /**
         * The text to display as a subtitle on the second line of an annotation's
         * callout.
         */
        subtitle?: string;
        /**
         * Accessibility text for the annotation.
         */
        accessibilityLabel?: string;
        /**
         * Data you define that is assigned to the annotation.
         */
        data?: any;
        /**
         * A Boolean value that determines whether the user can drag the annotation.
         */
        draggable?: boolean;
        /**
         * A Boolean value that determines if the annotation is visible or hidden.
         */
        visible?: boolean;
        /**
         * A Boolean value that determines whether the annotation responds to user
         * interaction.
         */
        enabled?: boolean;
        /**
         * A Boolean value that determines whether the annotation is selected.
         */
        selected?: boolean;
        /**
         * A Boolean value that determines whether a callout should be shown.
         */
        calloutEnabled?: boolean;
        /**
         * A Boolean value that determines if the annotation should be animated.
         */
        animates?: boolean;
        /**
         * A CSS animation that runs when the annotation appears on the map.
         */
        appearanceAnimation?: string;
        /**
         * The offset in CSS pixels of the element from the bottom center.
         */
        anchorOffset?: DOMPoint;
        /**
         * The offset in CSS pixels of a callout from the top center of the element.
         */
        calloutOffset?: DOMPoint;
        /**
         * A delegate that enables you to customize the annotation's callout.
         */
        callout?: AnnotationCalloutDelegate;
        /**
         * The desired dimensions of the annotation, in CSS pixels.
         */
        size?: { width: number; height: number };
        /**
         * A hint the map uses to prioritize displaying the annotation.
         */
        displayPriority?: number;
        /**
         * Spacing added around the annotation when showing items.
         */
        padding?: Padding;
        /**
         * A mode that determines the shape of the collision frame.
         */
        collisionMode?: string;
        /**
         * An identifer used for grouping annotations into the same cluster.
         */
        clusteringIdentifier?: string;
    }

    /**
     * Methods for customizing the behavior and appearance of an annotation callout.
     */
    interface AnnotationCalloutDelegate {
        /**
         * Returns a point determining the callout's anchor offset.
         */
        calloutAnchorOffsetForAnnotation?(annotation: Annotation, size: { width: number; height: number }): DOMPoint;
        /**
         * Determines whether the callout should appear for an annotation.
         */
        calloutShouldAppearForAnnotation?(annotation: Annotation): boolean;
        /**
         * Determines whether the callout should animate.
         */
        calloutShouldAnimateForAnnotation?(annotation: Annotation): boolean;
        /**
         * Returns a CSS animation used when the callout appears.
         */
        calloutAppearanceAnimationForAnnotation?(annotation: Annotation): string;
        /**
         * Returns custom content for the callout bubble.
         */
        calloutContentForAnnotation?(annotation: Annotation): Element;
        /**
         * Returns an element representing a custom callout.
         */
        calloutElementForAnnotation?(annotation: Annotation): Element;
        /**
         * Returns an element used as a custom accessory on the left side of the
         * callout content area.
         */
        calloutLeftAccessoryForAnnotation?(annotation: Annotation): Element;
        /**
         * Returns an element used as a custom accessory on the right side of the
         * callout content area.
         */
        calloutRightAccessoryForAnnotation?(annotation: Annotation): Element;
    }

    /**
     * A customized annotation with image resources that you provide.
     */
    class ImageAnnotation extends Annotation {
        /**
         * Initializes an image annotation with a URL to its image and a coordinate.
         */
        constructor(coordinate: Coordinate, options: ImageAnnotationConstructorOptions);
    }

    /**
     * An object containing options for initializing an image annotation.
     */
    interface ImageAnnotationConstructorOptions extends AnnotationConstructorOptions {
        /**
         * An object containing URLs for the image assets in multiple resolutions.
         */
        url: {
            1: string;
            2?: string;
            3?: string;
        };
    }

    /**
     * Creates a marker annotation at the coordinate location with provided options.
     */
    class MarkerAnnotation extends Annotation {
        /**
         * Creates a marker annotation at the coordinate location with provided options.
         *
         * @param coordinate The coordinate at which this annotation should appear.
         * @param options A hash of properties with which to initialize the annotation.
         */
        constructor(coordinate: Coordinate, options?: MarkerAnnotationConstructorOptions);
        /**
         * A value that determines the behavior of the subtitle's visibility.
         */
        subtitleVisibility: string;
        /**
         * A value that determines the behavior of the title's visibility.
         */
        titleVisibility: string;
        /**
         * The background color of the balloon.
         */
        color: string;
        /**
         * The fill color of the glyph.
         */
        glyphColor: string;
        /**
         * The text to display in the marker balloon.
         */
        glyphText: string;
        /**
         * The image to display in the marker balloon.
         */
        glyphImage: object | null;
        /**
         * The image to display in the balloon when the marker is selected.
         */
        selectedGlyphImage: object;
    }

    /**
     * An object containing the options that initialize a marker annotation.
     */
    interface MarkerAnnotationConstructorOptions extends AnnotationConstructorOptions {
        /**
         * The background color of the balloon.
         */
        color?: string;
        /**
         * The fill color of the glyph.
         */
        glyphColor?: string;
        /**
         * The text to display in the marker balloon.
         */
        glyphText?: string;
        /**
         * The image to display in the marker balloon.
         */
        glyphImage?: {
            1: string;
            2?: string;
            3?: string;
        };
        /**
         * The image to display in the balloon when the marker is selected.
         */
        selectedGlyphImage?: object;
        /**
         * A value that determines the behavior of the subtitle's visibility.
         */
        subtitleVisibility?: string;
        /**
         * A value that determines the behavior of the title's visibility.
         */
        titleVisibility?: string;
    }

    // prettier-ignore
    type AnnotationEventType =
      | 'select'
      | 'deselect'
      | 'drag-start'
      | 'dragging'
      | 'drag-end';

    /**
     * An abstract base object that defines the methods and attributes for map overlays.
     */
    abstract class Overlay {
        /**
         * Starts listening for the specified type of event.
         */
        addEventListener(type: OverlayEventType, listener: (event: EventBase<this>) => void, thisObject?: any): void;
        /**
         * Stops listening for the specified type of event.
         */
        removeEventListener(type: OverlayEventType, listener: (event: EventBase<this>) => void, thisObject?: any): void;
        /**
         * Custom data to associate with this overlay.
         */
        data: object;
        /**
         * A Boolean value that determines if an overlay is visible.
         */
        visible: boolean;
        /**
         * A Boolean value that determines whether the overlay responds to user interaction.
         */
        enabled: boolean;
        /**
         * A Boolean value that indicates whether the overlay is selected.
         */
        selected: boolean;
        /**
         * Style properties to apply to the overlay.
         */
        style: Style;
        /**
         * The map to which the overlay is added.
         */
        readonly map: Map | null;
    }

    /**
     * A circular overlay with a configurable radius, centered on a specific
     * geographic coordinate.
     */
    class CircleOverlay extends Overlay {
        /**
         * Creates a circle overlay with a center coordinate, radius, and style options.
         *
         * @param coordinate The coordinate of the circle's center.
         * @param radius The circle's radius, in meters.
         * @param options An object literal of Overlay properties used to initialize
         * the circle.
         */
        constructor(coordinate: Coordinate, radius: number, options?: StylesOverlayOptions);
        /**
         * The coordinate of the circle overlay's center.
         */
        coordinate: Coordinate;
        /**
         * The circle overlay's radius in meters.
         */
        radius: number;
    }

    /**
     * An overlay made up of connected line segments that do not form a closed shape.
     */
    class PolylineOverlay extends Overlay {
        /**
         * Creates a polyline overlay with coordinate points and style options.
         *
         * @param points The points in the polyline as an array of Coordinate
         * @param options An object literal of style options with which to initialize
         * the polyline.
         */
        constructor(points: Coordinate[], options?: StylesOverlayOptions);
        /**
         * An array of coordinate points that define the polyline overlay's shape.
         */
        points: Coordinate[];
    }

    /**
     * An overlay made up of one or more points, forming a closed shape.
     */
    class PolygonOverlay extends Overlay {
        /**
         * Creates a polygon overlay with an array of points and style options.
         *
         * @param points The points in the polygon as an array of arrays of
         * Coordinate, or an array of Coordinate. If it's the latter,
         * the array is auto-wrapped by an enclosing array.
         * @param options An object literal of options with which to initialize the
         * polygon.
         */
        constructor(points: Coordinate[], options?: StylesOverlayOptions);
        /**
         * One or more arrays of coordinates that define the polygon overlay shape.
         */
        points: Coordinate[];
    }

    interface OverlayOptions {
        /**
         * Custom data to associate with this overlay.
         */
        data?: object;
        /**
         * A Boolean value that determines if an overlay is visible.
         */
        visible?: boolean;
        /**
         * A Boolean value that determines whether the overlay responds to user
         * interaction.
         */
        enabled?: boolean;
        /**
         * A Boolean value that indicates whether the overlay is selected.
         */
        selected?: boolean;
    }

    /**
     * An observable set of style attributes for an overlay.
     */
    interface StylesOverlayOptions extends OverlayOptions {
        style?: Style;
    }

    type OverlayEventType = 'select' | 'deselect';

    /**
     * The width and height of a map region.
     */
    class CoordinateSpan {
        /**
         * Creates a new coordinate span object with the specified latitude and
         * longitude deltas.
         *
         * @param latitudeDelta The amount of north-to-south distance (measured in
         * degrees) to display on the map.
         * @param longitudeDelta The amount of east-to-west distance (measured in
         * degrees) to display for the map region.
         */
        constructor(latitudeDelta: number, longitudeDelta: number);
        /**
         * The amount of north-to-south distance (measured in degrees) to display on
         * the map.
         */
        latitudeDelta: number;
        /**
         * The amount of east-to-west distance (measured in degrees) to display for
         * the map region.
         */
        longitudeDelta: number;
        /**
         * Returns a copy of the coordinate span.
         */
        copy(): CoordinateSpan;
        /**
         * Returns a Boolean value that indicates whether two spans are equal.
         */
        equals(anotherSpan: CoordinateSpan): boolean;
    }

    /**
     * An overlay that covers an area of the map with bitmap tiles.
     */
    class TileOverlay {
        /**
         * Creates a tile overlay with a URL template and style options.
         */
        constructor(urlTemplate: string | URLTemplateCallback, options?: TileOverlayConstructorOptions);
        /**
         * A string, or callback function that returns a string, with a URL that
         * provides the requested tile.
         */
        urlTemplate: string | URLTemplateCallback;
        /**
         * Reloads the tile overlay for the displayed map region with the latest
         * data values.
         */
        reload(): void;
        /**
         * Minimum zoom level of the overlay.
         */
        minimumZ: number;
        /**
         * Maximum zoom level of the overlay.
         */
        maximumZ: number;
        /**
         * Opacity level of the overlay.
         */
        opacity: number;
        /**
         * Custom data used to populate the URL template.
         */
        data: object;
    }

    /**
     * Attributes used when initializing a tile overlay, including minimum and
     * maximum zoom, opacity, and custom data.
     */
    interface TileOverlayConstructorOptions {
        /**
         * Minimum zoom level of the overlay.
         */
        minimumZ?: number;
        /**
         * Maximum zoom level of the overlay.
         */
        maximumZ?: number;
        /**
         * Opacity level of the overlay.
         */
        opacity?: number;
        /**
         * Custom data used to populate the URL template.
         */
        data?: object;
    }

    type URLTemplateCallback = (x: number, y: number, z: number, scale: number, data: object) => string;

    /**
     * A set of observable attributes for overlays, including color and opacity of
     * stroke and fill, and line styles.
     */
    class Style {
        /**
         * Creates and initializes a style object.
         */
        constructor(options?: StyleConstructorOptions);
        /**
         * The fill color of a shape.
         */
        fillColor: string;
        /**
         * The opacity of the fill color.
         */
        fillOpacity: number;
        /**
         * A rule for determining whether a point is inside or outside a polygon.
         */
        fillRule: string;
        /**
         * The style to use when drawing line endings.
         */
        lineCap: string;
        /**
         * An array of line and gap lengths, used to create a dashed line.
         */
        lineDash: number[];
        /**
         * The number of CSS pixels to offset drawing of a line's dash pattern.
         */
        lineDashOffset: number;
        /**
         * The style to use when drawing joins between line segments.
         */
        lineJoin: string;
        /**
         * The width of a line's stroke, in CSS pixels.
         */
        lineWidth: number;
        /**
         * The stroke color of a line.
         */
        strokeColor: string;
        /**
         * The opacity of the stroke color.
         */
        strokeOpacity: number;
        /**
         * The unit distance along the line where a stroke begins.
         */
        strokeStart: number;
        /**
         * The unit distance along the line where a stroke ends.
         */
        strokeEnd: number;
        /**
         * The gradient to apply along the line.
         */
        lineGradient: LineGradient;
    }

    /**
     * Initial values of options for applying style to overlays.
     */
    interface StyleConstructorOptions {
        /**
         * The fill color of a shape.
         */
        fillColor?: string;
        /**
         * The opacity of the fill color.
         */
        fillOpacity?: number;
        /**
         * A rule for determining whether a point is inside or outside a polygon.
         */
        fillRule?: string;
        /**
         * The style to use when drawing line endings.
         */
        lineCap?: string;
        /**
         * An array of line and gap lengths, used to create a dashed line.
         */
        lineDash?: number[];
        /**
         * The number of CSS pixels to offset drawing of a line's dash pattern.
         */
        lineDashOffset?: number;
        /**
         * The style to use when drawing joins between line segments.
         */
        lineJoin?: string;
        /**
         * The width of a line's stroke, in CSS pixels.
         */
        lineWidth?: number;
        /**
         * The stroke color of a line.
         */
        strokeColor?: string;
        /**
         * The opacity of the stroke color.
         */
        strokeOpacity?: number;
        /**
         * The unit distance along the line where a stroke begins.
         */
        strokeStart?: number;
        /**
         * The unit distance along the line where a stroke ends.
         */
        strokeEnd?: number;
        /**
         * The gradient to apply along the line.
         */
        lineGradient: LineGradient;
    }

    /**
     * A line that displays with a gradient along the length of the line.
     */
    class LineGradient {
        /**
         * Creates a style that renders a gradient along the length of a line.
         *
         * @param options A JavaScript object with unit distance values as keys with matched CSS colors.
         */
        constructor(options?: object);
        /**
         * Adds a color transition point to the gradient.
         *
         * @param offset The unit distance at which to add the color.
         * @param color The CSS color at the transition point.
         */
        addColorStop(offset: number, color: string): void;
        /**
         * Adds a color transition at the index point in the list of points within a polyline.
         *
         * @param index A valid index into a polyline’s points.
         * @param color The CSS color at the index point.
         */
        addColorStopAtIndex(index: number, color: string): void;
    }

    /**
     * A geocoder that converts human-readable addresses to geographic coordinates
     * and vice versa.
     */
    class Geocoder {
        /**
         * Initialize a geocoder object and set optional language and user location
         * properties.
         */
        constructor(options?: GeocoderConstructorOptions);
        /**
         * Converts an address to geographic coordinates.
         */
        lookup(
            place: string,
            callback: (error: Error | null, data: GeocoderResponse) => void,
            options?: GeocoderLookupOptions,
        ): number;
        /**
         * Converts a geographic coordinate to an address.
         *
         * @param The coordinate to convert to a human-readable address.
         * @param callback This callback function is invoked with two arguments,
         * error on failure and data on success.
         * @param language language is the only option that can be set for the
         * reverse geocoder.
         */
        reverseLookup(
            coordinate: Coordinate,
            callback: (error: Error | null, data: GeocoderResponse) => void,
            options?: Pick<GeocoderConstructorOptions, 'language'>,
        ): number;
        /**
         * Cancels the pending lookup or reverse lookup specified by its request ID.
         *
         * @param id The request ID of the lookup or reverseLookup to cancel.
         */
        cancel(id: number): boolean;
        /**
         * A Boolean value that indicates whether the geocoder should return results
         * near the user's current location.
         */
        language: string;
        /**
         * A Boolean value that indicates whether the geocoder should return results
         * near the user's current location.
         */
        getsUserLocation: string;
    }

    /**
     * Initialization options for geocoder objects.
     */
    interface GeocoderConstructorOptions {
        /**
         * A Boolean value that indicates whether the geocoder should return results
         * near the user's current location.
         */
        language?: string;
        /**
         * A Boolean value that indicates whether the geocoder should return results
         * near the user's current location.
         */
        getsUserLocation?: boolean;
    }

    /**
     * Options that constrain geocoder lookup results to a specific area or set a
     * language for results.
     */
    interface GeocoderLookupOptions {
        /**
         * The language in which to display the lookup results.
         */
        language?: string;
        /**
         * Coordinates used to constrain the lookup results.
         */
        coordinate?: Coordinate;
        /**
         * A region in which to constrain lookup results.
         */
        region?: CoordinateRegion;
        /**
         * A list of countries in which to constrain the lookup results.
         */
        limitToCountries?: string;
    }

    /**
     * The response from a geocoder lookup or reverse lookup.
     */
    interface GeocoderResponse {
        results: Place[];
    }

    /**
     * A place object returned from a geocoder lookup or reverse lookup.
     */
    interface Place {
        /**
         * The name of the place.
         */
        name: string;
        /**
         * The latitude and longitude for the place.
         */
        coordinate: Coordinate;
        /**
         * The address of the place, formatted using its country's conventions.
         */
        formattedAddress: string;
        /**
         * The geographic region associated with the place.
         */
        region: CoordinateRegion;
        /**
         * The country code associated with the place.
         */
        countryCode: string;
        /**
         * The category of the place.
         */
        pointOfInterestCategory?: PointOfInterestCategory;
        /**
         * The country of the place.
         */
        country?: string;
        /**
         * The state or province of the place.
         */
        administrativeArea?: string;
        /**
         * The short code for the state or area.
         */
        administrativeAreaCode?: string;
        /**
         * The city of the place.
         */
        locality?: string;
        /**
         * The postal code of the place.
         */
        postCode?: string;
        /**
         * The name of the area within the locality.
         */
        subLocality?: string;
        /**
         * The street name at the place.
         */
        thoroughfare?: string;
        /**
         * The number on the street at the place.
         */
        subThoroughfare?: string;
        /**
         * A combination of thoroughfare and subthoroughfare.
         */
        fullThoroughfare?: string;
        /**
         * Common names of the area in which the place resides.
         */
        areasOfInterest?: string[];
        /**
         * Common names for the local area or neighborhood of the place.
         */
        dependentLocalities?: string[];
    }

    /**
     * An object that retrieves map-based search results for a user-entered query.
     */
    class Search {
        /**
         * Creates a search object with optional initial values that you provide.
         *
         * @param options Options that you may provide when creating a search object.
         */
        constructor(options?: SearchConstructorOptions);
        /**
         * Retrieves the results of a search query.
         *
         * @param query A String or a SearchAutocompleteResult.
         * @param callback A callback function or delegate object.
         * @param options With the options hash, you can constrain the search to a
         * desired area using the coordinate or region properties. If set, this
         * option overrides the language provided to the search constructor.
         * @returns a request ID (integer) that can be passed to cancel to abort a
         * pending request.
         */
        search<Q extends string | SearchAutocompleteResult>(
            query: Q,
            callback: SearchDelegate | SearchCallback<Q>,
            options?: SearchOptions,
        ): number;
        /**
         * Retrieves a list of autocomplete results for the specified search query.
         *
         * @param query A string that represents the user's search term in progress.
         * @param callback A callback function or delegate object.
         * @param options Autocomplete takes the same options hash as search
         */
        autocomplete(
            query: string,
            callback: SearchDelegate | AutocompleteSearchCallback,
            options?: SearchOptions,
        ): void;
        /**
         * Cancels a search request using its request ID.
         *
         * @param id The integer ID returned by a call to Search.search
         * @return true if the server canceled the pending search request.
         */
        cancel(id: number): boolean;
    }

    /**
     * Options that you may provide when creating a search object.
     */
    interface SearchConstructorOptions {
        /**
         * A language ID that determines the language for the search result text.
         */
        language?: string;
        /**
         * A Boolean value that indicates whether to limit the search results to the
         * user's current location, as determined by the web browser.
         */
        getsUserLocation?: boolean;
        /**
         * A map coordinate that provides a hint for the geographic area to search.
         */
        coordinate?: Coordinate;
        /**
         * A map region that provides a hint for the geographic area to search.
         */
        region?: CoordinateRegion;
        /**
         * A Boolean value that indicates whether the search autocomplete results should include queries.
         */
        includeQueries?: boolean;
        /**
         * A Boolean value that indicates whether the search results should include addresses.
         */
        includeAddresses?: boolean;
        /**
         * A string that constrains search results to within the provided countries.
         */
        limitToCountries?: boolean;
        /**
         * A Boolean value that indicates whether the search results should include points of interest.
         */
        includePointsOfInterest?: boolean;
        /**
         * A filter used to include or exclude point of interest categories.
         */
        pointOfInterestFilter?: PointOfInterestFilter;
    }

    /**
     * Options you provide to constrain an autocomplete request.
     */
    interface SearchAutocompleteOptions {
        /**
         * A language ID that determines the language for the search result text.
         */
        language?: string;
        /**
         * A map coordinate that provides a hint for the geographic area to search.
         */
        coordinate?: Coordinate;
        /**
         * A map region that provides a hint for the geographic area to search.
         */
        region?: CoordinateRegion;
        /**
         * A Boolean value that indicates whether the search results should include addresses.
         */
        includeAddresses?: boolean;
        /**
         * A Boolean value that indicates whether the search results should include points of interest.
         */
        includePointsOfInterest?: boolean;
        /**
         * A Boolean value that indicates whether the search results should include queries.
         */
        includeQueries?: boolean;
        /**
         * A filter used to include or exclude point of interest categories in search results.
         */
        pointOfInterestFilter?: PointOfInterestFilter;
        /**
         * A string that constrains search results to within the provided countries.
         */
        limitToCountries?: string;
    }

    type SearchCallback<Q> = (
        error: Error | null,
        data: {
            /**
             * The query corresponding to the results  The query corresponding to the
             * results, if a SearchAutocompleteResult was not used to perform the search.
             */
            query: Q extends SearchAutocompleteResult ? undefined : string;
            /**
             * A region that encloses the search results. This property is not present
             * if there are no results.
             */
            displayRegion?: CoordinateRegion;
            /**
             * An array of Place objects. The places array is empty if there is no match.
             */
            places: Place[];
        },
    ) => void;

    type AutocompleteSearchCallback = (error: Error | null, data: SearchAutocompleteResponse) => void;

    /**
     * An object or callback function called when performing a search or autocomplete
     * request.
     */
    interface SearchDelegate {
        /**
         * Upon successful completion of a search request, this method returns a data
         * object that is the same as the one passed to the search callback function.
         */
        searchDidComplete?(data: SearchResponse): void;
        /**
         * Called when the search request fails.
         */
        searchDidError?(error: Error): void;
        /**
         * When an autocomplete request successfully completes, this method returns
         * a data array that is the same as the one passed to the autocomplete
         * callback function.
         */
        autocompleteDidComplete?(data: SearchAutocompleteResponse): void;
        /**
         * Invoked when an autocomplete request fails.
         */
        autocompleteDidError?(error: Error): void;
    }

    /**
     * Options you can provide when performing a search.
     */
    interface SearchOptions {
        /**
         * A language ID that determines the language for the search result text.
         */
        language: string;
        /**
         * A map coordinate that provides a hint for the geographic area to search.
         */
        coordinate: Coordinate;
        /**
         * A map region that provides a hint for the geographic area to search.
         */
        region: CoordinateRegion;
        /**
         * A Boolean value that indicates whether the search results should include addresses.
         */
        includeAddresses?: boolean;
        /**
         * A Boolean value that indicates whether the search results should include points of interest.
         */
        includePointsOfInterest?: boolean;
        /**
         * A filter used to include or exclude point of interest categories in search results.
         */
        pointOfInterestFilter?: PointOfInterestFilter;
    }

    /**
     * The result of a search, including the original search query, the bounding
     * region, and a list of places that match the query.
     */
    interface SearchResponse {
        /**
         * The query string used to perform the search.
         */
        query: string;
        /**
         * The region that encloses the places included in the search results.
         */
        boundingRegion: CoordinateRegion;
        /**
         * A list of places that match the search query.
         */
        places: Place[];
    }

    /**
     * An object containing the response from an autocomplete request.
     */
    interface SearchAutocompleteResponse {
        /**
         * The query string used to perform the autocomplete request.
         */
        query: string;
        /**
         * The results from an autocomplete request.
         */
        results: SearchAutocompleteResult[];
    }

    /**
     * The result of an autocomplete query, including display lines and a coordinate.
     */
    interface SearchAutocompleteResult {
        /**
         * Lines of text to display to the user in an autocomplete menu.
         */
        displayLines: string[];
        /**
         * The coordinate of the result, provided when it corresponds to a single place.
         */
        coordinate: Coordinate;
    }

    /**
     * A filter used to determine the points of interest to include or exclude on a map or local search.
     */
    class PointOfInterestFilter {
        /**
         * Creates a point of interest filter that includes categories from a list that you provide.
         */
        static including(categoryList: PointOfInterestCategory[]): PointOfInterestFilter;
        /**
         * Creates a point of interest filter that excludes categories from a list that you provide.
         */
        static excluding(categoryList: PointOfInterestCategory[]): PointOfInterestFilter;
        /**
         * A filter that includes all point of interest categories.
         */
        static readonly filterIncludingAllCategories: PointOfInterestFilter;
        /**
         * A filter that excludes all point of interest categories.
         */
        static readonly filterExcludingAllCategories: PointOfInterestFilter;
        /**
         * Returns a Boolean value that indicates whether the filter includes the provided point of interest category.
         */
        includesCategory(category: PointOfInterestCategory): boolean;
        /**
         * Returns a Boolean value that indicates whether the filter excludes the provided point of interest category.
         */
        excludesCategory(category: PointOfInterestCategory): boolean;
    }

    /**
     * An object that fetches points of interest within a specified region.
     */
    class PointsOfInterestSearch {
        /**
         * Creates a search object for fetching points of interest.
         *
         * @param options Options that you may provide when you create a points of interest search.
         */
        constructor(options?: PointsOfInterestSearchOptions);
        /**
         * The region that bounds the area in which to fetch points of interest.
         */
        region: CoordinateRegion;
        /**
         * The center point of the request represented as latitude and longitude.
         */
        center: Coordinate;
        /**
         * The distance provided in meters, or the longest distance derived from the center point to the region’s bounding box.
         */
        radius: number;
        /**
         * A filter that lists points of interest categories to include or exclude.
         */
        pointOfInterestFilter: PointOfInterestFilter;
        /**
         * The language ID to use when fetching points of interest.
         */
        language: string;
        /**
         * The maximum distance to use from the center of the region for fetching points of interest.
         */
        readonly MaxRadius: number;
        /**
         * Fetches points of interest.
         *
         * @param query A String or a SearchAutocompleteResult.
         * @param callback A callback function or delegate object.
         * @param options A PointsOfInterestSearchOptions object.
         * @returns a request ID (integer) that can be passed to cancel to abort a
         * pending request.
         */
        search(
            callback: PointsOfInterestSearchDelegate | PointsOfInterestSearchCallback,
            options?: PointsOfInterestSearchOptions,
        ): number;
        /**
         * Cancels a search request using its request ID.
         *
         * @param id The integer ID returned by a call to Search.search
         * @return true if the server canceled the pending search request.
         */
        cancel(id: number): boolean;
    }

    /**
     * Options that you may provide when creating a search object.
     */
    interface PointsOfInterestSearchOptions {
        /**
         * A language ID that determines the language for the search result text.
         */
        language?: string;
        /**
         * The center point of the request represented as latitude and longitude.
         */
        center?: Coordinate;
        /**
         * The distance provided in meters, or the longest distance derived from the center point to the region’s bounding box.
         */
        radius?: number;
        /**
         * The region that bounds the area in which to fetch points of interest.
         */
        region?: CoordinateRegion;
        /**
         * A filter used to include or exclude point of interest categories.
         */
        pointOfInterestFilter?: PointOfInterestFilter;
    }

    type PointsOfInterestSearchCallback = (error: Error | null, data: PointsOfInterestSearchResponse) => void;

    /**
     * An object or callback function that MapKit JS calls when fetching points of interest.
     */
    interface PointsOfInterestSearchDelegate {
        /**
         * Tells the delegate that the search completed.
         */
        searchDidComplete?(data: PointsOfInterestSearchResponse): void;
        /**
         * Tells the delegate that the search failed due to an error.
         */
        searchDidError?(error: Error): void;
    }

    /**
     * The result of a request used to fetch points of interest.
     */
    interface PointsOfInterestSearchResponse {
        /**
         * The list of points of interest that match the request options.
         */
        places: Place[];
    }

    /**
     * Point of interest categories.
     */

    enum PointOfInterestCategory {
        /**
         * The point of interest category for airports.
         */
        Airport,
        /**
         * The point of interest category for amusement parks.
         */
        AmusementPark,
        /**
         * The point of interest category for aquariums.
         */
        Aquarium,
        /**
         * The point of interest category for ATM machines.
         */
        ATM,
        /**
         * The point of interest category for bakeries.
         */
        Bakery,
        /**
         * The point of interest category for banks.
         */
        Bank,
        /**
         * The point of interest category for beaches.
         */
        Beach,
        /**
         * The point of interest category for breweries.
         */
        Brewery,
        /**
         * The point of interest category for cafes.
         */
        Cafe,
        /**
         * The point of interest category for campgrounds.
         */
        Campground,
        /**
         * The point of interest category for car rentals.
         */
        CarRental,
        /**
         * The point of interest category for EV chargers.
         */
        EVCharger,
        /**
         * The point of interest category for fire stations.
         */
        FireStation,
        /**
         * The point of interest category for fitness centers.
         */
        FitnessCenter,
        /**
         * The point of interest category for food markets.
         */
        FoodMarket,
        /**
         * The point of interest category for gas stations.
         */
        GasStation,
        /**
         * The point of interest category for hospitals.
         */
        Hospital,
        /**
         * The point of interest category for hotels.
         */
        Hotel,
        /**
         * The point of interest category for laundries.
         */
        Laundry,
        /**
         * The point of interest category for libraries.
         */
        Library,
        /**
         * The point of interest category for marinas.
         */
        Marina,
        /**
         * The point of interest category for movie theaters.
         */
        MovieTheater,
        /**
         * The point of interest category for museums.
         */
        Museum,
        /**
         * The point of interest category for national parks.
         */
        NationalPark,
        /**
         * The point of interest category for nightlife.
         */
        Nightlife,
        /**
         * The point of interest category for parks
         */
        Park,
        /**
         * The point of interest category for parking locations.
         */
        Parking,
        /**
         * The point of interest category for pharmacies.
         */
        Pharmacy,
        /**
         * The point of interest category for police.
         */
        Police,
        /**
         * The point of interest category for post offices.
         */
        PostOffice,
        /**
         * The point of interest category for locations of public transportation.
         */
        PublicTransport,
        /**
         * The point of interest category for restaurants.
         */
        Restaurant,
        /**
         * The point of interest category for restrooms.
         */
        Restroom,
        /**
         * The point of interest category for schools.
         */
        School,
        /**
         * The point of interest category for stadiums.
         */
        Stadium,
        /**
         * The point of interest category for stores.
         */
        Store,
        /**
         * The point of interest category for theaters.
         */
        Theater,
        /**
         * The point of interest category for universities.
         */
        University,
        /**
         * The point of interest category for wineries.
         */
        Winery,
        /**
         * The point of interest category for zoos.
         */
        Zoo,
    }

    /**
     * Creates a directions object with options that you may provide.
     */
    class Directions {
        /**
         * Creates a directions object with options that you may provide.
         *
         * @param An object containing the options for creating a directions object.
         * This parameter is optional.
         */
        constructor(options?: DirectionsConstructorOptions);
        /**
         * Retrieves estimated arrival times to up to 10 destinations from a single starting point.
         *
         * @param request An EtaRequestOptions object that specifies details for the server to provide estimated arrival times at one or more destinations.
         * @param callback A callback function that receives the estimated time response object, returned asynchronously.
         * @return A request ID, which you can pass to cancel to abort a pending request.
         */
        eta(request: EtaRequestOptions, callback: (error: Error | null, data: EtaResponse) => void): number;
        /**
         * Retrieves directions and estimated travel time for the specified start
         * and end points.
         *
         * @param request DirectionsRequest object that specifies details for the
         * directions you want to retrieve.
         * @param callback A callback function that receives the directions,
         * returned asynchronously.
         * @return A request ID, which you can pass to cancel to abort a pending request.
         */
        route(request: DirectionsRequest, callback: (error: Error | null, data: DirectionsResponse) => void): number;
        /**
         * Cancels a previous request for route directions.
         *
         * @param id The ID returned by a call to route.
         */
        cancel(id: number): boolean;
    }

    namespace Directions {
        /**
         * The modes of transportation.
         */
        enum Transport {
            /**
             * A constant identifying the mode of transportation as driving.
             */
            Automobile,
            /**
             * A constant identifying the mode of transportation as walking.
             */
            Walking,
        }
    }

    /**
     * Options that you may provide when creating a directions object.
     */
    interface DirectionsConstructorOptions {
        /**
         * A language ID that determines the language for route information.
         */
        language?: string;
    }

    /**
     * The options you may provide for requesting estimated arrival times.
     */
    interface EtaRequestOptions {
        /**
         * The starting point for estimated arrival time requests.
         */
        origin: Coordinate;
        /**
         * The time of departure used in an estimated arrival time request.
         */
        destinations: Coordinate[];
        /**
         * An array of coordinates that represent end points for estimated arrival time requests.
         */
        transportType: Directions.Transport;
        /**
         * The mode of transportation the server uses when estimating arrival times.
         */
        departureDate: Date;
    }

    /**
     * The estimated arrival times for a set of destinations.
     */
    interface EtaResponse {
        /**
         * The request object associated with the estimated time of arrival response.
         */
        request: EtaRequestOptions;
        /**
         * An array of estimated arrival times.
         */
        etas: EtaResult[];
    }

    /**
     * The mode of transportation, distance, and travel time estimates for a single destination.
     */
    interface EtaResult {
        /**
         * The mode of transportation used to estimate the arrival time.
         */
        transportType: Directions.Transport;
        /**
         * The route distance in meters.
         */
        distance: number;
        /**
         * The estimated travel time in seconds, including estimated delays due to traffic.
         */
        expectedTravelTime: number;
        /**
         * The estimated travel time in seconds, excluding estimated delays for traffic.
         */
        staticTravelTime: number;
    }

    /**
     * The requested start and end points for a route, as well as the planned mode of transportation.
     */
    interface DirectionsRequest {
        /**
         * The start point for routing directions.
         */
        origin: string | Coordinate | Place;
        /**
         * The end point for routing directions.
         */
        destination: string | Coordinate | Place;
        /**
         * The arrival date for the trip.
         */
        arrivalDate?: Date;
        /**
         * The departure date for the trip.
         */
        departureDate?: Date;
        /**
         * The mode of transportation to which directions should apply.
         */
        transportType?: Directions.Transport;
        /**
         * A Boolean value that indicates whether the server should return multiple
         * routes when they are available.
         */
        requestsAlternateRoutes?: boolean;
    }

    /**
     * The directions and estimated travel time returned for a route.
     */
    interface DirectionsResponse {
        request: any;
        routes: Route[];
    }

    /**
     * Information about a route, including step-by-step instructions, distance,
     * and estimated travel time.
     */
    interface Route {
        /**
         * An instance of a polyline overlay that represents the path of a route.
         */
        polyline: PolylineOverlay;
        /**
         * An array of coordinate objects representing the path of the route.
         * @deprecated
         */
        path: Coordinate[];
        /**
         * An array of steps that comprise the overall route.
         */
        steps: RouteStep[];
        /**
         * The name assigned to the route.
         */
        name: string;
        /**
         * The route distance in meters.
         */
        distance: number;
        /**
         * The expected travel time in seconds.
         */
        expectedTravelTime: number;
        /**
         * The overall route transport type.
         */
        transportType: Directions.Transport;
    }

    /**
     * A single route between a requested start and end point.
     */
    interface RouteStep {
        /**
         * An array of coordinate objects representing the path of the route segment.
         */
        path: Coordinate[];
        /**
         * The written instructions for following the path represented by the step.
         */
        instructions: string;
        /**
         * The step distance in meters.
         */
        distance: number;
        /**
         * The transport type of the step.
         */
        transportType: Directions.Transport;
    }
    /**
     * A location on a map when the Earth's surface is projected onto a
     * two-dimensional surface.
     */
    class MapPoint {
        /**
         * Initializes a MapPoint object.
         *
         * @param x The point along the east-west axis of the map projection.
         * @param  The point along the north-south axis of the map projection.
         */
        constructor(x: number, y: number);
        /**
         * The location of the point along the x-axis of the map.
         */
        x: number;
        /**
         * The location of the point along the y-axis of the map.
         */
        y: number;
        /**
         * Returns a copy of a map point.
         */
        copy(): MapPoint;
        /**
         * Indicates whether two map points are equal.
         *
         * @param anotherPoint A map point to use for comparison.
         */
        equals(anotherPoint: MapPoint): boolean;
        /**
         * Returns a coordinate containing the latitude and longitude corresponding
         * to a map point.
         */
        toCoordinate(): Coordinate;
    }

    /**
     * A pair of values in map units that define the width and height of a
     * projected coordinate span.
     */
    class MapSize {
        /**
         * Initializes a MapSize object.
         *
         * @param width The distance (measured using map points) along the east-west
         * axis of the map projection.
         * @param height The distance (measured using map points) along the
         * north-south axis of the map projection.
         */
        constructor(width: number, height: number);
        /**
         * The height value, in map point units.
         */
        height: number;
        /**
         * The width value, in map point units.
         */
        width: number;
        /**
         * Returns a copy of a map size.
         */
        copy(): MapSize;
        /**
         * Indicates whether two map sizes are equal.
         *
         * @param anotherSize The map size to equate to.
         */
        equals(anotherSize: MapSize): boolean;
    }

    /**
     * A rectangular area on a map, defined by coordinates of the rectangle's
     * northeast and southwest corners.
     */
    class BoundingRegion {
        /**
         * Creates a rectangular bounding region defined by the latitude and
         * longitude coordinates of the rectangle's northeast and southwest corners.
         *
         * @param northLatitude The north latitude of the bounding region.
         * @param eastLongitude The east longitude of the bounding region.
         * @param southLatitude The south latitude of the bounding region.
         * @param westLongitude The west longitude of the bounding region.
         */
        constructor(northLatitude: number, eastLongitude: number, southLatitude: number, westLongitude: number);
        /**
         * The east longitude of the bounding region.
         */
        eastLongitude: number;
        /**
         * The north latitude of the bounding region.
         */
        northLatitude: number;
        /**
         * The south latitude of the bounding region.
         */
        southLatitude: number;
        /**
         * The west longitude of the bounding region.
         */
        westLongitude: number;
        /**
         * Returns a copy of the calling bounding region.
         */
        copy(): BoundingRegion;
        /**
         * Returns the coordinate region that corresponds to the calling bounding region.
         */
        toCoordinateRegion(): CoordinateRegion;
    }

    /**
     * A minimum and maximum camera distance as meters from the center of the map.
     */
    class CameraZoomRange {
        /**
         * Describes the minimum and maximum camera distance in meters.
         */
        constructor(minCameraDistance: CameraZoomRangeConstructorOptions | number, maxCameraDistance?: number);
        /**
         * The minimum allowed distance of the camera from the center of the map in meters.
         */
        minCameraDistance: number;
        /**
         * The maximum allowed distance of the camera from the center of the map in meters.
         */
        maxCameraDistance: number;
    }

    /**
     * Initialization options for the camera zoom range.
     */
    interface CameraZoomRangeConstructorOptions {
        /**
         * The minimum allowed distance of the camera from the center of the map in meters.
         */
        minCameraDistance?: number;
        /**
         * The maximum allowed distance of the camera from the center of the map in meters.
         */
        maxCameraDistance?: number;
    }

    /**
     *
     * @param data The original GeoJSON data, which may be a URL to a GeoJSON file,
     * or a GeoJSON object.
     * @param callback A callback function that is required if you provide a URL
     * for the data parameter, and optional otherwise.
     */
    function importGeoJSON(
        data: string | object,
        callback?: GeoJSONDelegate | ImportGeoJSONCallback,
    ): ItemCollection | Error;

    type ImportGeoJSONCallback = (error: Error, result: ItemCollection) => void;

    /**
     * A delegate object that controls a GeoJSON import in order to override
     * default behavior and provide custom style.
     */
    interface GeoJSONDelegate {
        /**
         * Overrides a feature.
         *
         * @param item An item created for the geometry of this feature or null for
         * features with null geometry.
         * @param geoJSON The original GeoJSON object for this feature.
         */
        itemForFeature?(
            item: Annotation | Overlay | ItemCollection | null,
            geoJSON: object,
        ): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides a feature collection.
         *
         * @param itemCollection A collection containing associated annotations and
         * overlays.
         * @param geoJSON The original GeoJSON object for this FeatureCollection.
         * This will contain an array of feature types.
         */
        itemForFeatureCollection?(
            itemCollection: ItemCollection,
            geoJSON: object,
        ): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides a line string.
         *
         * @param overlay A PolylineOverlay object.
         * @param geoJSON original GeoJSON object for this LineString object.
         */
        itemForLineString?(
            overlay: PolylineOverlay,
            geoJSON: object,
        ): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides a multiline string.
         *
         * @param itemCollection An item collection containing associated overlays.
         * @param geoJSON The original GeoJSON object for this MultiLineString. This
         * will contain an array of geometries.
         */
        itemForMultiLineString?(
            itemCollection: ItemCollection,
            geoJSON: object,
        ): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides a point.
         *
         * @param coordinate A GeoJSON Point generates the coordinate. You can use
         * the coordinate to instantiate an item to return.
         * @param geoJSON The original GeoJSON object for this Point. This object could
         * be a simple Point or a Feature with the Point geometry type.
         */
        itemForPoint?(coordinate: Coordinate, geoJSON: object): Array<Annotation | Overlay>;
        /**
         * Overrides a multipoint object.
         *
         * @param itemCollection A collection containing associated annotations.
         * @param geoJSON The original GeoJSON object for this MultiPoint. This will
         * contain an array of geometries.
         */
        itemForMultiPoint?(
            itemCollection: ItemCollection,
            geoJSON: object,
        ): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides a polygon.
         *
         * @param overlay You can customize the provided overlay before returning it,
         * or you could completely replace the overlay.
         * @param geoJSON The original GeoJSON object for this polygon.
         */
        itemForPolygon?(overlay: PolygonOverlay, geoJSON: object): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides a multipolygon.
         *
         * @param itemCollection A collection containing associated overlays.
         * @param geoJSON The original GeoJSON object for this MultiPolygon. This
         * will contain an array of geometries.
         */
        itemForMultiPolygon?(
            itemCollection: ItemCollection,
            geoJSON: object,
        ): Annotation | Overlay | Array<Annotation | Overlay>;
        /**
         * Overrides the style of overlays.
         *
         * @param overlay The overlay to style.
         * @param geoJSON The original GeoJSON for this feature or geometry object.
         */
        styleForOverlay?(overlay: Overlay, geoJSON: object): Style;
        /**
         * Completes the GeoJSON import.
         *
         * @param result The mapped item collection.
         * @param geoJSON The original parsed GeoJSON object.
         */
        geoJSONDidComplete?(result: ItemCollection, geoJSON: object): void;
        /**
         * Indicates the GeoJSON import failed.
         *
         * @param error An Error instance related to the last blocking error.
         * @param geoJSON The original parsed GeoJSON object.
         */
        geoJSONDidError?(error: Error, geoJSON: object): void;
    }

    /**
     * A tree structure containing annotations, overlays, and nested item
     * collection objects.
     */
    interface ItemCollection {
        /**
         * The raw GeoJSON data.
         */
        data: object;
        /**
         * A flattened array of items that include annotations or overlays.
         */
        getFlattenedItemList: Array<Annotation | Overlay>;
        /**
         * A nested list of annotations, overlays, or other item collections.
         */
        items: Array<Annotation | Overlay | ItemCollection>;
    }
}

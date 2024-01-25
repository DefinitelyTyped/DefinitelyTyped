/// <reference types="mapbox__mapbox-gl-draw" />

declare namespace woosmap.map {
    /**
     * Add drawing capabilities to Woosmap Map. You can call methods of a Drawing instance and add custom modes as you would
     * with a MapboxDraw instance. This Drawing library is not loaded by default when you load the Map JS API but must be
     * explicitly specified through use of a `libraries` parameter in SDK URL.
     */
    class Drawing extends MapboxDraw {
        constructor(options?: MapboxDraw.MapboxDrawOptions);

        /**
         * Adds Drawing Control to a Map.
         */
        addControl(map: woosmap.map.Map, position?: woosmap.map.ControlPositionType): void;

        /**
         * Removes Drawing Control to its attached Map.
         */
        removeControl(): void;

        /**
         * Register Drawing Events
         */
        addListener(event: MapboxDraw.DrawEventType, handler: (...args: any[]) => any): void;
    }
}
declare namespace woosmap.map {
    class Map extends woosmap.map.MVCObject {
        /**
         * An instance of `Data`, bound to the map.
         * Add features to this `Data` object to conveniently display them on this map.
         */
        data: woosmap.map.Data;
        /**
         * Creates a new map inside the given HTML container, which is typically a `DIV` element.
         */
        constructor(mapDiv: HTMLElement | string, options?: woosmap.map.MapOptions);

        /**
         * Sets the viewport to contain the given bounds.
         */
        fitBounds(
            bounds: woosmap.map.LatLngBounds | woosmap.map.LatLngBoundsLiteral,
            padding?: woosmap.map.Padding,
            animate?: boolean,
        ): void;

        /**
         * Returns the lat/lng bounds of the current viewport.
         * Optionally takes a padding parameter.
         */
        getBounds(padding?: woosmap.map.Padding): woosmap.map.LatLngBounds;

        /**
         * Returns the position displayed at the center of the map.
         */
        getCenter(): woosmap.map.LatLng;

        getDiv(): HTMLElement;

        /**
         * Returns the compass heading.
         * The heading value is measured in degrees (clockwise) from cardinal direction North.
         */
        getHeading(): number;

        /**
         * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane
         */
        getTilt(): number;

        /**
         * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane.
         */
        getZoom(): number;

        /**
         * Changes the center of the map by the given distance in pixels
         */
        panBy(x: number, y: number): void;

        /**
         * Changes the center of the map to the given LatLng.
         */
        panTo(latLng: woosmap.map.LatLng | woosmap.map.LatLngLiteral, padding?: woosmap.map.Padding): void;

        /**
         * Changes any combination of center, zoom, bearing, and pitch, animating the transition along a curve that evokes
         * flight.
         */
        flyTo(options: woosmap.map.FlyToOptions): void;

        /**
         * Pans the map by the minimum amount necessary to contain the given LatLngBounds.
         * It makes no guarantee where on the map the bounds will be,
         * except that the map will be panned to show as much of the bounds as possible inside
         * `{currentMapSizeInPx} - {padding}.`
         */
        panToBounds(
            latLngBounds: woosmap.map.LatLngBounds | woosmap.map.LatLngBoundsLiteral,
            padding: number | woosmap.map.Padding,
        ): void;

        /**
         * Sets the map center
         */
        setCenter(center: woosmap.map.LatLng | woosmap.map.LatLngLiteral, padding?: woosmap.map.Padding): void;

        /**
         * Sets the compass heading for map measured in degrees from cardinal direction North.
         */
        setHeading(heading: number): void;

        setTilt(tilt: number): void;

        setZoom(zoom: number): void;
    }
}
declare namespace woosmap.map {
    class InfoWindow extends woosmap.map.MVCObject {
        constructor(options: woosmap.map.InfoWindowOptions);

        /**
         * Opens the info window.
         */
        open(map: woosmap.map.Map, anchor: woosmap.map.Marker | woosmap.map.LatLng | woosmap.map.LatLngLiteral): void;

        /**
         * Closes this InfoWindow by removing it from the DOM structure.
         */
        close(): void;

        /**
         * Sets the info window content
         */
        setContent(content: string): void;

        /**
         * Sets the anchor
         */
        setPosition(positionOrMarker: woosmap.map.Marker | woosmap.map.LatLng | woosmap.map.LatLngLiteral): void;

        /**
         * Sets the offset
         */
        setOffset(offset: woosmap.map.Point): void;

        /**
         * Sets the marker
         */
        setMarker(marker?: woosmap.map.Marker | null): void;

        /**
         * Sets the info window map.
         */
        setMap(map: woosmap.map.Map | null): void;

        /**
         * Gets the current map bound to the
         */
        getMap(): woosmap.map.Map | null;
    }
}
declare namespace woosmap.map {
    class Marker extends woosmap.map.MVCObject {
        cursor: string;
        map: woosmap.map.Map | null;
        position: woosmap.map.LatLng;
        /**
         * Constructs a Marker
         */
        constructor(options?: woosmap.map.MarkerOptions);

        setIcon(icon: woosmap.map.Icon | string): void;

        setMap(map?: woosmap.map.Map | null): void;

        /**
         * Sets the marker opacity.
         */
        setOpacity(opacity: number): void;

        /**
         * Gets the marker opacity.
         */
        getOpacity(): number;

        /**
         * Get the marker's geographical location.The longitude of the result may differ by a multiple of 360 degrees from the longitude previously
         * set by `setLngLat` because `Marker` wraps the anchor longitude across copies of the world to keep
         * the marker on screen.
         */
        getPosition(): woosmap.map.LatLng;

        /**
         * Sets the position of the marker
         */
        setPosition(
            position: woosmap.map.LatLng | woosmap.map.LatLngLiteral,
            animate?: boolean,
            options?: woosmap.map.MarkerAnimateOptions,
        ): void;

        /**
         * Get the marker's offset.
         */
        getOffset(): woosmap.map.Point;

        /**
         * Sets the offset of the marker
         */
        setOffset(offset: woosmap.map.Point): woosmap.map.Marker;

        /**
         * Sets the `draggable` property and functionality of the marker
         */
        setDraggable(shouldBeDraggable: boolean): woosmap.map.Marker;

        /**
         * Returns true if the marker can be dragged
         */
        getDraggable(): boolean;

        /**
         * Sets the `rotation` property of the marker.
         */
        setRotation(rotation: number): woosmap.map.Marker;

        /**
         * Returns the current rotation angle of the marker (in degrees).
         */
        getRotation(): number;

        /**
         * Sets the `rotationAlignment` property of the marker.
         */
        setRotationAlignment(alignment: string): woosmap.map.Marker;

        /**
         * Returns the current `rotationAlignment` property of the marker.
         */
        getRotationAlignment(): string;

        /**
         * Sets the `pitchAlignment` property of the marker.
         */
        setPitchAlignment(alignment?: string): woosmap.map.Marker;

        /**
         * Returns the current `pitchAlignment` property of the marker.
         */
        getPitchAlignment(): string;
    }
}
declare namespace woosmap.map {
    class StoresOverlay extends woosmap.map.OverlayView {
        /**
         * Constructs a StoreOverlay
         */
        constructor(style: woosmap.map.Style);

        /**
         * Clears selected store if any
         */
        clearSelection(): void;

        /**
         * Sets the selected store
         */
        setSelection(feature: object): void;

        /**
         * Sets the query used to fetch stores.
         * To clear the query set it to undefined.
         */
        setQuery(query?: string | null): void;

        setMap(map?: woosmap.map.Map | null): void;
    }
}
declare namespace woosmap.map {
    class OverlayView {
        constructor();

        setMap(map: woosmap.map.Map | null): void;
    }
}
declare namespace woosmap.map {
    class DirectionsService {
        constructor();

        /**
         * Issue a directions search request.
         */
        route(
            request: woosmap.map.DirectionRequest,
            callback: (result: woosmap.map.DirectionResult, status: string) => any,
        ): void;
    }
}
declare namespace woosmap.map {
    /**
     * A layer for displaying geospatial data. Points can be displayed.
     */
    class Data extends woosmap.map.MVCObject {
        /**
         * Creates an empty collection.
         */
        constructor();

        /**
         * Adds the feature passed as parameter.
         */
        add(feature: woosmap.map.data.Feature | woosmap.map.FeatureData): void;

        /**
         * Remove the feature passed as parameter.
         */
        remove(feature: woosmap.map.data.Feature): void;

        /**
         * Adds GeoJSON features to the collection. Give this method a parsed JSON.
         * The imported features are returned. Throws an exception if the GeoJSON could not be imported.
         */
        addGeoJson(
            geojson: woosmap.map.GeoJSONFeatureCollection | woosmap.map.GeoJSONFeature,
            options?: { idPropertyName: string },
        ): void;

        /**
         * Exports the features in the collection to a GeoJSON object.
         */
        toGeoJson(callback: (geojson: woosmap.map.GeoJSONFeatureCollection) => void): void;

        /**
         * Checks whether the given feature is in the collection.
         */
        contains(feature: woosmap.map.data.Feature): boolean;

        /**
         * Repeatedly invokes the given function, passing a feature in the collection to the function on each invocation.
         * The order of iteration through the features is undefined.
         */
        forEach(callback: (feature: woosmap.map.data.Feature) => void): void;

        /**
         * Returns the feature matching the id.
         */
        getFeatureById(id: string): woosmap.map.data.Feature | null;

        /**
         * Returns the map on which the features are displayed.
         */
        getMap(): woosmap.map.Map | null;

        /**
         * Renders the features on the specified map. If map is set to null, the features will be removed from the map.
         */
        setMap(map: woosmap.map.Map | null): void;

        /**
         * Sets the style for all features in the collection. Styles specified on a per-feature basis via `overrideStyle()`
         * continue to apply.
         * Pass either an object with the desired style options, or a function that computes the style for each feature.
         * The function will be called every time a feature's properties are updated.
         */
        setStyle(style: woosmap.map.StyleFunction | woosmap.map.StyleOptions): void;

        /**
         * Gets the style for all features in the collection.
         */
        getStyle(): woosmap.map.StyleFunction | woosmap.map.StyleOptions;

        /**
         * Changes the style of a feature.
         * These changes are applied on top of the style specified by `setStyle()`.
         * Style properties set to null revert to the value specified via `setStyle()`.
         */
        overrideStyle(feature: woosmap.map.data.Feature, style: woosmap.map.StyleOptions): void;

        /**
         * Removes the effect of previous `overrideStyle()` calls.
         * The style of the given feature reverts to the style specified by `setStyle()`.
         * If no feature is given, all features have their style reverted.
         */
        revertStyle(feature?: woosmap.map.data.Feature | null): void;

        /**
         * Loads GeoJSON features to the collection from an url. If a callback is provided
         * it will be called with the imported features.
         */
        loadGeoJson(
            url: string,
            options?: { idPropertyName: string },
            callback?: (data: woosmap.map.data.Feature[]) => void,
        ): void;
    }
}
declare namespace woosmap.map.data {
    class Feature {
        /**
         * Constructs a new Data.Feature
         */
        constructor(featureData: woosmap.map.FeatureData | woosmap.map.GeoJSONFeature);

        /**
         * Returns the feature geometry.
         */
        getGeometry(): woosmap.map.GeometryCollectionElement | woosmap.map.Data.GeometryCollection;

        /**
         * Set the feature geometry.
         */
        setGeometry(geometry: woosmap.map.GeometryCollectionElement | woosmap.map.Data.GeometryCollection): void;

        /**
         * Returns the feature id.
         */
        getId(): string;

        /**
         * Returns the feature property
         */
        getProperty(name: string): any;

        /**
         * Removes property
         */
        removeProperty(name: string): void;

        /**
         * Sets the value of the specified property. If newValue is undefined this is equivalent to calling removeProperty.
         */
        setProperty(name: string, newValue: any): void;

        /**
         * Exports the feature to a GeoJSON object.
         */
        toGeoJson(callback: (geojson: woosmap.map.GeoJSONFeature) => void): void;
    }
}
declare namespace woosmap.map.Data {
    class Point {
        /**
         * Constructs a Point geometry
         */
        constructor(point: woosmap.map.LatLng | woosmap.map.Coordinates | woosmap.map.LatLngLiteral);

        /**
         * Returns the point geometry
         */
        get(): woosmap.map.LatLng;

        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        /**
         * Returns `"Point"`.
         */
        getType(): "Point";
    }
}
declare namespace woosmap.map.Data {
    class MultiPoint {
        /**
         * Constructs a Multipoint geometry.
         */
        constructor(points: woosmap.map.LatLng[] | woosmap.map.Coordinates[] | woosmap.map.LatLngLiteral[]);

        /**
         * Returns n-th Point of the MultiPoint.
         */
        getAt(n: number): woosmap.map.LatLng;

        /**
         * Return the array of points
         */
        getArray(): woosmap.map.LatLng[];

        /**
         * Returns the length of the multipoint.
         */
        getLength(): number;

        /**
         * For each point calls the callback.
         */
        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        /**
         * Returns `"MultiPoint"`.
         */
        getType(): "MultiPoint";
    }
}
declare namespace woosmap.map.Data {
    class LineString {
        constructor(points: woosmap.map.LatLng[] | woosmap.map.Coordinates[] | woosmap.map.LatLngLiteral[]);

        /**
         * Returns the n-th Point (as LatLng) of the LineString.
         */
        getAt(n: number): woosmap.map.LatLng;

        /**
         * Returns the points of the linestring as an array of LatLng.
         */
        getArray(): woosmap.map.LatLng[];

        /**
         * Returns the count of points in the linestring.
         */
        getLength(): number;

        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        getType(): "LineString";
    }
}
declare namespace woosmap.map.Data {
    class MultiLineString {
        /**
         * Constructs a MultiLineString.
         * A MultiLineString is a collection of LineString.
         */
        constructor(
            linestrings: woosmap.map.Data.LineString[] | woosmap.map.LatLng[][] | woosmap.map.LatLngLiteral[][],
        );

        /**
         * Returns the n-th LineString of the MultiLineString.
         */
        getAt(n: number): woosmap.map.Data.LineString;

        getArray(): woosmap.map.Data.LineString[];

        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        /**
         * Returns `"MultiLineString"`.
         */
        getType(): "MultiLineString";
    }
}
declare namespace woosmap.map.Data {
    class LinearRing extends woosmap.map.Data.LineString {
        /**
         * Constructs a linear ring.
         */
        constructor(points: woosmap.map.LatLng[] | woosmap.map.Coordinates[] | woosmap.map.LatLngLiteral[]);
    }
}
declare namespace woosmap.map.Data {
    class Polygon {
        /**
         * Constructs a Polygon, using a set of linear ring.
         */
        constructor(
            elements:
                | woosmap.map.Data.LinearRing[]
                | woosmap.map.LatLng[][]
                | woosmap.map.LatLngLiteral[][]
                | woosmap.map.Coordinates[][],
        );

        /**
         * Returns the n-th LinearRing of the Polygon.
         */
        getAt(n: number): woosmap.map.Data.LinearRing;

        /**
         * Returns the array of LinearRing that composes the Polygon.
         */
        getArray(): woosmap.map.Data.LinearRing[];

        /**
         * Returns the count of LinearRings that composes the Polygon.
         */
        getLength(): number;

        /**
         * For each LinearRing call `callback`.
         */
        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        /**
         * Returns `"Polygon"`.
         */
        getType(): "Polygon";
    }
}
declare namespace woosmap.map.Data {
    class MultiPolygon {
        /**
         * Constructs a MultiPolygon geometry.
         * A MultiPolygon is a set of Polygons.
         */
        constructor(
            elements:
                | woosmap.map.Data.Polygon[]
                | woosmap.map.Data.LinearRing[][]
                | woosmap.map.LatLng[][][]
                | woosmap.map.LatLngLiteral[][][],
        );

        /**
         * Returns the n-th polygon of the MultiPolygon.
         */
        getAt(n: number): woosmap.map.Data.Polygon;

        /**
         * Returns the array of Polygons that makes the MultiPolygon.
         */
        getArray(): woosmap.map.Data.Polygon[];

        /**
         * Return the count of Polygon in the MultiPolygon.
         */
        getLength(): number;

        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        /**
         * Returns `"MultiPolygon"`.
         */
        getType(): string;
    }
}
declare namespace woosmap.map.Data {
    class GeometryCollection {
        /**
         * Constructs a geometry collection from an array of geometries.
         */
        constructor(elements: woosmap.map.GeometryArray | woosmap.map.GeoJSONGeometry[]);

        /**
         * Returns the n-th Geometry of the GeometryCollection.
         */
        getAt(n: number): woosmap.map.GeometryCollectionElement;

        getArray(): woosmap.map.GeometryArray;

        getLength(): number;

        forEachLatLng(callback: (point: woosmap.map.LatLng) => void): void;

        /**
         * Returns `"GeometryCollection"`.
         */
        getType(): "GeometryCollection";
    }
}
declare namespace woosmap.map {
    class BaseGeometry extends woosmap.map.MVCObject {
        constructor(options: woosmap.map.GeometryOptions);

        /**
         * Returns whether the geometry is draggable or not.
         */
        getDraggable(): boolean;

        /**
         * Returns whether the geometry is editable or not.
         */
        getEditable(): boolean;

        /**
         * Returns the current parent Map.
         */
        getMap(): woosmap.map.Map | null;

        /**
         * Returns whether the geometry is visible or not.
         */
        getVisible(): boolean;

        /**
         * Sets the geometry draggable.
         */
        setDraggable(draggable: boolean): void;

        /**
         * Sets the geometry editable.
         */
        setEditable(editable: boolean): void;

        /**
         * Sets the map object to display on.
         * if `map` is null, the geometry will be removed from the current `map`.
         */
        setMap(map: woosmap.map.Map | null): void;

        /**
         * Sets the visibility of the geometry.
         */
        setVisible(visible: boolean): void;
    }
}
declare namespace woosmap.map {
    class Polyline extends woosmap.map.BaseGeometry {
        /**
         * Constructs a Polyline.
         */
        constructor(options: woosmap.map.PolylineOptions);

        getPath(): woosmap.map.MVCArray<woosmap.map.LatLng>;

        setOptions(options: woosmap.map.PolylineOptions): void;

        setPath(
            path: woosmap.map.MVCArray<woosmap.map.LatLng> | woosmap.map.LatLng[] | woosmap.map.LatLngLiteral[],
        ): void;
    }
}
declare namespace woosmap.map {
    class BasePolygon extends woosmap.map.BaseGeometry {
        constructor(options: woosmap.map.GeometryOptions);
    }
}
declare namespace woosmap.map {
    class Polygon extends woosmap.map.BasePolygon {
        /**
         * Constructs a polygon.
         */
        constructor(options: woosmap.map.PolygonOptions);

        /**
         * Returns the outer path of the polygon.
         */
        getPath(): woosmap.map.MVCArray<woosmap.map.LatLng>;

        /**
         * Returns all the path that compose the polygon.
         */
        getPaths(): woosmap.map.MVCArray<woosmap.map.MVCArray<woosmap.map.LatLng>>;

        /**
         * Sets the polygon options.
         */
        setOptions(options: woosmap.map.PolygonOptions): void;

        /**
         * Sets the polygon path.
         */
        setPath(
            path: woosmap.map.MVCArray<woosmap.map.LatLng> | Array<woosmap.map.LatLng | woosmap.map.LatLngLiteral>,
        ): void;

        /**
         * Sets the polygon paths.
         */
        setPaths(
            paths:
                | woosmap.map.MVCArray<woosmap.map.MVCArray<woosmap.map.LatLng>>
                | woosmap.map.MVCArray<woosmap.map.LatLng>
                | Array<Array<woosmap.map.LatLng | woosmap.map.LatLngLiteral>>
                | Array<woosmap.map.LatLng | woosmap.map.LatLngLiteral>,
        ): void;
    }
}
declare namespace woosmap.map {
    class Rectangle extends woosmap.map.BasePolygon {
        /**
         * Constructs a Rectangle.
         */
        constructor(options: woosmap.map.RectangleOptions);

        getBounds(): woosmap.map.LatLngBounds;

        setBounds(bounds: woosmap.map.LatLngBounds | woosmap.map.LatLngBoundsLiteral): void;

        setOptions(options: woosmap.map.RectangleOptions): void;
    }
}
declare namespace woosmap.map {
    class Circle extends woosmap.map.BasePolygon {
        /**
         * Constructs a Circle.
         */
        constructor(options: woosmap.map.CircleOptions);

        /**
         * Returns the bounds for the circle geometry.
         */
        getBounds(): woosmap.map.LatLngBounds;

        /**
         * Returns the center for the circle geometry.
         */
        getCenter(): woosmap.map.LatLng;

        /**
         * Returns the radius for the circle geometry.
         */
        getRadius(): number;

        /**
         * Sets the center for the circle.
         */
        setCenter(center: woosmap.map.LatLng | woosmap.map.LatLngLiteral): void;

        /**
         * Sets the radius for the circle.
         */
        setRadius(radius: number): void;

        /**
         * Sets the options for the circle.
         */
        setOptions(options: woosmap.map.CircleOptions): void;
    }
}
declare namespace woosmap.map {
    class LatLng {
        /**
         * Returns the latitude in degrees.
         */
        lat: () => number;
        /**
         * Returns the longitude in degrees.
         */
        lng: () => number;
        /**
         * Creates a `LatLng` object representing a geographic point.
         * Latitude is specified in degrees within the range [-90, 90].
         * Longitude is specified in degrees within the range [-180, 180].
         * Set `noWrap` to `true` to enable values outside of this range.
         * Note the ordering of latitude and longitude.
         */
        constructor(
            lat: woosmap.map.LatLng | woosmap.map.LatLngLiteral | number | (() => number),
            lng?: number | (() => number),
        );

        /**
         * Comparison function.
         */
        equals(other: woosmap.map.LatLng): boolean;

        /**
         * Converts to JSON representation. This function is intended to be used via `JSON.stringify`.
         */
        toJSON(): woosmap.map.LatLngLiteral;

        toString(): string;
    }
}
declare namespace woosmap.map {
    class LatLngBounds {
        /**
         * Creates a LatLngBounds object
         */
        constructor(
            northEast?: woosmap.map.LatLng | woosmap.map.LatLngLiteral | null,
            southWest?: woosmap.map.LatLng | woosmap.map.LatLngLiteral | null,
        );

        /**
         * Extends the current bounds with point.
         */
        extend(latlng: woosmap.map.LatLng | woosmap.map.LatLngLiteral): void;

        /**
         * Checks if current bounds contain latlng.
         */
        contains(latlng: woosmap.map.LatLng | woosmap.map.LatLngLiteral): boolean;

        /**
         * Checks if bounds are intersecting with other.
         */
        intersects(other: woosmap.map.LatLngBounds): boolean;

        /**
         * Computes the union of this bounds and other.
         */
        union(other: woosmap.map.LatLngBounds): void;

        /**
         * Returns the north-east corner of this bounds.
         */
        getNorthEast(): woosmap.map.LatLng;

        /**
         * Returns the south-west corner of this bounds.
         */
        getSouthWest(): woosmap.map.LatLng;

        /**
         * Computes the center of the latlng bounds.
         */
        getCenter(): woosmap.map.LatLng;

        /**
         * Checks if the current bounds are empty.
         */
        isEmpty(): boolean;
    }
}
declare namespace woosmap.map {
    class Point {
        /**
         * Creates a Point object
         */
        constructor(x: number, y: number);

        /**
         * Indicates whether some other object is "equal to" this one.
         */
        equals(other: woosmap.map.Point): boolean;
    }
}
declare namespace woosmap.map {
    class Size {
        /**
         * Creates a Size object
         */
        constructor(width: number, height: number);

        /**
         * Indicates whether some other object is "equal to" this one.
         */
        equals(other: woosmap.map.Size): boolean;
    }
}
declare namespace woosmap.map {
    class MVCArray<T> extends woosmap.map.MVCObject {
        constructor(array?: T[]);

        /**
         * Removes all elements from the array.
         */
        clear(): void;

        /**
         * Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).
         */
        forEach(callback: (element: T, index: number) => void): void;

        getArray(): T[];

        /**
         * Get the element at the specified index.
         */
        getAt(i: number): T;

        /**
         * Get the number of elements in this array.
         */
        getLength(): number;

        /**
         * Inserts an element at the specified index.
         */
        insertAt(i: number, elem: T): void;

        /**
         * Removes the last element of the array and returns that element.
         */
        pop(): T;

        /**
         * Adds one element to the end of the array and returns the new length of the array.
         */
        push(elem: T): number;

        /**
         * Removes an element from the specified index.
         */
        removeAt(i: number): T;

        /**
         * Sets an element at the specified index.
         */
        setAt(i: number, elem: T): void;

        /**
         * Returns the index of a given element.
         */
        indexOf(elem: T): number;
    }
}
declare namespace woosmap.map {
    /**
     * Constructor for MVCObject.
     */
    class MVCObject {
        /**
         * Constructor for MVCObject.
         */
        constructor();

        /**
         * Binds the property identified by 'key' to the specified target.
         */
        bindTo(key: string, target: object, targetKey?: string, notify?: boolean): void;

        /**
         * Is this property a complex object - is it bound as either observer or target
         */
        isPropertyBound(key: string): boolean;

        /**
         * Returns the value of the property specified by `key`
         */
        get(key: string): any;

        /**
         * Sets `value` to `key` on `this`.
         */
        set(key: string, value: any, forceCallback?: boolean): void;

        /**
         * Set all the values of the properties contained in `keyValuePairs`
         */
        setOptions(keyValuePairs: object): void;

        /**
         * Un-bind the property identified by `key` from its current target
         */
        unbind(key: string): void;

        /**
         * Unbind all bound properties on this object
         */
        unbindAll(): void;

        /**
         * Adds a listener for eventName.
         */
        addListener(eventName: string, handler: (...args: any[]) => any): woosmap.map.MapEventListener;
    }
}
declare namespace woosmap.map {
    class DirectionsRenderer extends woosmap.map.MVCObject {
        constructor(options: woosmap.map.DirectionsRendererOptions);

        /**
         * Sets the map where to render the directions.
         */
        setMap(map: woosmap.map.Map | null): void;

        /**
         * Sets the directions result to render.
         */
        setDirections(directions: woosmap.map.DirectionResult): void;

        /**
         * Sets the route index in the DirectionResult object to render.
         * By default the first route (0) will be rendered.
         */
        setRouteIndex(routeIndex: number): void;
    }
}
declare namespace woosmap.map {
    /**
     * A service for computing distances and durations between multiple origins and
     * destinations and retrieving isochrone destinations.
     */
    class DistanceService {
        /**
         * A service for computing distances and durations between multiple origins and
         * destinations and retrieving isochrone destinations.
         */
        constructor();

        /**
         * Retrieves distances and durations for the supplied
         * matrix request.
         */
        getDistanceMatrix(
            request: woosmap.map.distance.DistanceMatrixRequest,
        ): Promise<woosmap.map.distance.DistanceMatrixResponse>;

        /**
         * Find all destinations that can be reached in a specific amount of time or a maximum travel distance based
         * on the supplied isochrone request.
         */
        getDistanceIsochrone(
            request: woosmap.map.distance.DistanceIsochroneRequest,
        ): Promise<woosmap.map.distance.DistanceIsochroneResponse>;
    }
}
declare namespace woosmap.map {
    /**
     * Contains methods related to retrieving stores and stores' bounds.
     */
    class StoresService {
        /**
         * Contains methods related to retrieving stores and stores' bounds.
         */
        constructor();

        /**
         * Retrieves stores autocomplete suggestions based on the supplied
         * autocomplete request.
         */
        autocomplete(
            request: woosmap.map.stores.StoresAutocompleteRequest,
        ): Promise<woosmap.map.stores.StoresAutocompleteResponse>;

        /**
         * Searches stores based on the supplied search request.
         */
        search(request: woosmap.map.stores.StoresSearchRequest): Promise<woosmap.map.stores.StoresSearchResponse>;

        /**
         * Retrieves a store object based on the supplied store ID.
         */
        getStoreById(storeId: string): Promise<woosmap.map.stores.StoreResponse>;

        /**
         * Retrieves bounds of stores based on the supplied bounds search request.
         */
        getBounds(request: woosmap.map.stores.StoresBoundsRequest): Promise<woosmap.map.stores.StoresBoundsResponse>;
    }
}
declare namespace woosmap.map {
    /**
     * Contains methods related to retrieving autocomplete predictions, geocoding for localities and retrieving details
     */
    class LocalitiesService {
        /**
         * Contains methods related to retrieving autocomplete predictions, geocoding for localities and retrieving details
         */
        constructor();

        /**
         * Retrieves localities autocomplete predictions based on the supplied
         * autocomplete request.
         */
        autocomplete(
            request: woosmap.map.localities.LocalitiesAutocompleteRequest,
        ): Promise<woosmap.map.localities.LocalitiesAutocompleteResponse>;

        /**
         * Retrieves localities results based on the supplied
         * geocode request.
         */
        geocode(
            request: woosmap.map.localities.LocalitiesGeocodeRequest,
        ): Promise<woosmap.map.localities.LocalitiesGeocodeResponse>;

        /**
         * Retrieves details about the locality identified by the given `public_id`
         */
        getDetails(
            request: woosmap.map.localities.LocalitiesDetailsRequest,
        ): Promise<woosmap.map.localities.LocalitiesDetailsResponse>;
    }
}
declare namespace woosmap.map.errors {
    class APIError extends Error {
        /**
         * The http Status code extracted from the response.
         */
        statusCode: number;
        constructor();
    }
}
declare namespace woosmap.map.errors {
    class BadRequestError extends woosmap.map.errors.APIError {
        constructor(message?: string);
    }
}
declare namespace woosmap.map.errors {
    class UnauthorizedError extends woosmap.map.errors.APIError {
        constructor(message?: string);
    }
}
declare namespace woosmap.map.errors {
    class ForbiddenError extends woosmap.map.errors.APIError {
        constructor(message?: string);
    }
}
declare namespace woosmap.map.errors {
    class NotFoundError extends woosmap.map.errors.APIError {
        constructor(message?: string);
    }
}
declare namespace woosmap.map.errors {
    class TooManyRequestsError extends woosmap.map.errors.APIError {
        constructor(message?: string);
    }
}
declare namespace woosmap.map.errors {
    class InternalServerError extends woosmap.map.errors.APIError {
        constructor(message?: string);
    }
}
declare namespace woosmap.map {
    type ControlPositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";
}
declare namespace woosmap.map {
    interface FlyToOptions {
        /**
         * Controls weather to animate or not.
         */
        animate?: boolean;
        /**
         * If `zoom` is specified, `around` determines the point around which the zoom is centered.
         */
        around?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * The target bearing in degrees.
         */
        bearing?: number;
        /**
         * The target center.
         */
        center?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * The animation's duration (in milliseconds).
         */
        duration?: number;
        /**
         * A function taking a time in the range 0..1 and returning a number where 0 is
         * the start state and 1 is the final state.
         */
        easing?: (_: number) => number;
        /**
         * If `false`, then the animation can be avoided if the user browser has `prefers-reduced-motion` turned on.
         */
        essential?: boolean;
        /**
         * The target center relative to real map container center at the end of animation.
         */
        offset?: woosmap.map.Point | woosmap.map.PointLiteral;
        /**
         * Padding to apply when centering the map.
         */
        padding?: woosmap.map.Padding;
        /**
         * The target pitch (angle towards horizon) in degrees.
         */
        pitch?: number;
        /**
         * The target zoom level.
         */
        zoom?: number;
    }
}
declare namespace woosmap.map {
    interface Padding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }
}
declare namespace woosmap.map {
    interface MapPanes {
        /**
         * This pane contains the info window. It is above all map overlays. (Pane 4).
         */
        floatPane: Element;
        mapPane: Element;
        /**
         * This pane is the lowest pane and is above the tiles. It does not receive DOM events.
         * (Pane 0).
         */
        markerLayer: Element;
        /**
         * This pane contains polylines, polygons, ground overlays and tile layer overlays.
         * It does not receive DOM events. (Pane 1).
         */
        overlayLayer: Element;
        /**
         * This pane contains elements that receive DOM events. (Pane 3).
         */
        overlayMouseTarget: Element;
    }
}
declare namespace woosmap.map {
    type GestureHandlingMode = "none" | "greedy" | "cooperative" | "auto";
}
declare namespace woosmap.map {
    /**
     * MapOptions object used to define the properties that can be set on a Map.
     */
    interface MapOptions {
        /**
         * The initial map center to start from.
         */
        center?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        defaultStyle?: string;
        /**
         * Disable the rendering of the buildings in 3D when the map is pitched.
         */
        disable3dBuilding?: boolean;
        /**
         * Disables the default maps controls interface, (default: false).
         */
        disableDefaultUI?: boolean;
        /**
         * Disable the tilt control for the users, (default: false).
         */
        disableTilt?: boolean;
        /**
         * This option controls how the gesture are handled
         * Depending on the value when gesture on the map is detected (scroll on desktop, one finger pan on mobile)
         * an overlay asking the user to use Cmd or Ctrl while scrolling or use two finger gesture to pan on mobile will be
         * shown.
         * -  `cooperative`: Shows the overlay only if the page is scrollable.
         * -  `greedy`: Never shows the overlay.
         * -  `none`: Disables gesture handling. The map cannot be zoomed or paned using gestures.
         * -  `auto`: (default) Use cooperative mode if the page is scrollable, else use greedy mode.
         */
        gestureHandling?: woosmap.map.GestureHandlingMode;
        /**
         * The initial heading to start from.
         */
        heading?: number;
        /**
         * ```json
         * [
         *   {
         *     "featureType": "poi",
         *     "stylers": [{
         *       "visibility": "on"
         *     }]
         *   },
         *   {
         *     "featureType": "water",
         *     "stylers": [{
         *         "saturation": -100
         *     }]
         *   }
         * ]
         * ```
         */
        styles?: woosmap.map.MapStyleSpec[] | null;
        /**
         * The initial tilt to start from.
         */
        tilt?: number;
        /**
         * The initial map zoom level to start from.
         */
        zoom?: number;
    }
}
declare namespace woosmap.map {
    interface MapStyler {
        /**
         * The color to use to style features.
         * Expected to be in hex form `#RRBBGG`.
         */
        color?: string;
        /**
         * Applies a gamma correction on lightness.
         */
        gamma?: number;
        /**
         * The color to extract the hue from. The lightness and saturation will be kept from the original color.
         */
        hue?: string;
        /**
         * Inverts the lightness.
         */
        invert_lightness?: boolean;
        /**
         * Changes the lightness.
         */
        lightness?: number;
        /**
         * Changes the saturation
         */
        saturation?: number;
        /**
         * Sets the visibility of the selected features.
         * Expected to be in hex form `#RRBBGG`.
         * expected values are "on", "off"
         */
        visibility?: string;
        /**
         * Changes the weight of drawn features (mostly lines, labels outline).
         */
        weight?: number;
    }
}
declare namespace woosmap.map {
    interface MapStyleSpec {
        /**
         * The group of elements, to which stylers will be applied.
         * default value: "all"
         */
        elementType?: string;
        /**
         * The group of feature, to which stylers will be applied.
         * default value: "all"
         */
        featureType?: string;
        /**
         * The rules to apply to the selected features.
         */
        stylers: woosmap.map.MapStyler[];
    }
}
declare namespace woosmap.map {
    interface InfoWindowOptions {
        /**
         * Content to display in the InfoWindow.
         * This can be an HTML element, a plain-text string, or a string containing HTML.
         * The InfoWindow will be sized according to the content.
         */
        content?: string | Node | null;
        /**
         * Disable auto-pan on open.
         * By default, the info window will pan the map so that it is fully visible when it opens.
         */
        disableAutoPan?: boolean | null;
        /**
         * Maximum width of the infowindow, regardless of content's width.
         * This value is only considered if it is set before a call to open.
         */
        maxWidth?: number | null;
        /**
         * The offset, in pixels, of the tip of the info window from the point on the map at whose geographical
         * coordinates the info window is anchored.
         */
        pixelOffset?: woosmap.map.Point;
    }
}
declare namespace woosmap.map {
    interface MarkerLabelOptions {
        /**
         * A custom className property to be applied to the label's element.
         */
        className?: string | null;
        /**
         * The color of the label text. (black by default).
         */
        color?: string | null;
        /**
         * The font family for the label.
         */
        fontFamily?: string | null;
        /**
         * The font size for the label.
         */
        fontSize?: string | null;
        /**
         * The font weight for the label.
         */
        fontWeight?: string | null;
        /**
         * The text to be displayed in the label.
         */
        text: string;
    }
}
declare namespace woosmap.map {
    interface MarkerAnimateOptions {
        /**
         * A callback function to be called after setting the position. null as default
         */
        complete?: (...args: any[]) => any;
        /**
         * The animation's duration (in milliseconds).
         */
        duration?: number;
    }
}
declare namespace woosmap.map {
    interface MarkerOptions {
        /**
         * The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.
         */
        anchorPoint?: woosmap.map.Point;
        /**
         * If true the marker receive the click events. Default value is true.
         */
        clickable?: boolean;
        draggable?: boolean;
        /**
         * The icon to display.
         * When icon is a string it is treated as Icon with the string as `url` property.
         */
        icon?: string | woosmap.map.Icon;
        /**
         * Adds a letter or number label inside a marker.
         */
        label?: string | woosmap.map.MarkerLabelOptions;
        /**
         * The Map where the marker should be displayed.
         */
        map?: woosmap.map.Map;
        /**
         * The marker's opacity (min: 0, max: 1)
         */
        opacity?: number;
        /**
         * The markers's position.
         */
        position: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        title?: string | null;
        /**
         * If true the marker will be visible. Default value is true
         */
        visible?: boolean;
    }
}
declare namespace woosmap.map {
    interface Icon {
        anchor?: woosmap.map.Point | woosmap.map.PointLiteral;
        labelOrigin?: woosmap.map.Point | woosmap.map.PointLiteral;
        scaledSize?: woosmap.map.Size | woosmap.map.SizeLiteral;
        size?: woosmap.map.Size | woosmap.map.SizeLiteral;
        url: string;
    }
}
declare namespace woosmap.map {
    interface StyleRule {
        color: string;
        icon: woosmap.map.Icon;
        minSize?: number;
        selectedIcon?: woosmap.map.Icon;
        size?: number;
    }
}
declare namespace woosmap.map {
    interface TypedStyleRule {
        color: string;
        icon: woosmap.map.Icon;
        selectedIcon?: woosmap.map.Icon;
        type: string;
    }
}
declare namespace woosmap.map {
    interface Style {
        breakPoint: number;
        default: woosmap.map.StyleRule;
        rules: woosmap.map.TypedStyleRule[];
    }
}
declare namespace woosmap.map {
    interface DirectionLeg {
        distance: woosmap.map.Distance;
        duration: woosmap.map.Duration;
        end_address: string;
        end_location: woosmap.map.LatLngLiteral;
        end_waypoint: number;
        start_address: string;
        start_location: woosmap.map.LatLngLiteral;
        start_waypoint: number;
        steps?: woosmap.map.DirectionStep[];
    }
}
declare namespace woosmap.map {
    interface DirectionStep {
        distance: string;
        duration: string;
        end_location: woosmap.map.LatLngLiteral;
        instructions: woosmap.map.DirectionStepInstructions;
        start_location: woosmap.map.LatLngLiteral;
        travelMode: string;
    }
}
declare namespace woosmap.map {
    interface DirectionStepInstructions {
        action: number;
        summary: string;
        verbal_after?: string;
        verbal_alert?: string;
        verbal_before?: string;
        verbal_succint?: string;
    }
}
declare namespace woosmap.map {
    interface DirectionsBounds {
        northeast: woosmap.map.LatLngLiteral;
        southwest: woosmap.map.LatLngLiteral;
    }
}
declare namespace woosmap.map {
    interface DirectionsOverviewPolyline {
        /**
         * Contains encoded polyline.
         */
        points: string;
    }
}
declare namespace woosmap.map {
    interface DirectionRoute {
        bounds: woosmap.map.DirectionsBounds;
        legs: woosmap.map.DirectionLeg[];
        /**
         * additional information of the route.
         */
        notice: string;
        /**
         * The decoded overview path.
         */
        overview_path?: woosmap.map.LatLng[];
        /**
         * The encoded overview polyline.
         */
        overview_polyline: woosmap.map.DirectionsOverviewPolyline;
    }
}
declare namespace woosmap.map {
    interface DirectionResult {
        error_message?: string;
        routes: woosmap.map.DirectionRoute[];
    }
}
declare namespace woosmap.map {
    interface DirectionsWayPoint {
        /**
         * Waypoint location.
         */
        location: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * If set to `true` the route will be splitted into two legs.
         */
        stopover?: boolean;
    }
}
declare namespace woosmap.map {
    interface DirectionRequest {
        /**
         * Valid values are a timestamp (e.g. 1600799173 for the date:22/09/2020 20:26:13) or now. Use either arrival_time or departure_time, not both.
         */
        arrival_time?: string;
        /**
         * Valid values are a timestamp (e.g. 1600799173 for the date:22/09/2020 20:26:13) or now. Use either arrival_time or departure_time, not both.
         */
        departure_time?: string;
        destination: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * When set to full the response will contain detailed driving instructions.
         */
        details?: "none" | "full";
        origin: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        provideRouteAlternatives?: boolean;
        travelMode?: string;
        unitSystem?: string;
        waypoints?: woosmap.map.DirectionsWayPoint[];
    }
}
declare namespace woosmap.map {
    interface AutocompleteMatchedSubstring {
        length: number;
        offset: number;
    }
}
declare namespace woosmap.map {
    interface MatchedSubstring {
        matchedSubstrings: woosmap.map.AutocompleteMatchedSubstring[];
    }
}
declare namespace woosmap.map {
    interface Pagination {
        page: number;
        pageCount: number;
    }
}
declare namespace woosmap.map.localities {
    interface AddressComponents {
        long_name: string | string[];
        short_name: string | string[];
        types: string[];
    }
}
declare namespace woosmap.map {
    /**
     * A representation of distance as a numeric value and a display string.
     */
    interface Distance {
        text: string;
        value: number;
    }
}
declare namespace woosmap.map {
    /**
     * A representation of duration as a numeric value and a display string.
     */
    interface Duration {
        text: string;
        value: number;
    }
}
declare namespace woosmap.map {
    interface FeatureData {
        geometry?: woosmap.map.GeometryClasses | woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        id?: any;
        properties?: object;
    }
}
declare namespace woosmap.map {
    type GeometryType =
        | "Point"
        | "MultiPoint"
        | "LineString"
        | "MultiLineString"
        | "LinearRing"
        | "Polygon"
        | "MultiPolygon"
        | "GeometryCollection";
}
declare namespace woosmap.map {
    interface GeometryData {
        coordinates: any;
        geometries?: woosmap.map.GeometryData[];
        type: woosmap.map.GeometryType;
    }
}
declare namespace woosmap.map.Data {
    interface Geometry<T, C> {
        /**
         * Returns the type of the geometry.
         */
        getType(): T;
    }
}
declare namespace woosmap.map {
    type GeometryCollectionElement =
        | woosmap.map.Data.Point
        | woosmap.map.Data.MultiPoint
        | woosmap.map.Data.LineString
        | woosmap.map.Data.MultiLineString
        | woosmap.map.Data.Polygon
        | woosmap.map.Data.MultiPolygon;
}
declare namespace woosmap.map {
    type GeometryArray = woosmap.map.GeometryCollectionElement[];
}
declare namespace woosmap.map {
    type GeometryClasses = woosmap.map.GeometryCollectionElement | woosmap.map.Data.GeometryCollection;
}
declare namespace woosmap.map {
    interface IconSequence {
        fixedRotation?: boolean | null;
        icon?: woosmap.map.SymbolIcon | null;
        offset?: string | null;
        repeat?: string | null;
    }
}
declare namespace woosmap.map {
    interface MarkerLabel {
        /**
         * The color of the label. Default to: black.
         */
        color?: string;
        /**
         * The font size of the label in pixels. Default to: 14px.
         */
        fontSize?: string;
        parsedFontSize: number;
        /**
         * The text to be displayed in the label.
         */
        text: string;
    }
}
declare namespace woosmap.map {
    interface StyleOptions {
        animation?: Animation;
        clickable?: boolean;
        cursor?: string;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        icon?: string | woosmap.map.Icon;
        iconImage?: string;
        icons?: woosmap.map.IconSequence[];
        label?: string | woosmap.map.MarkerLabel;
        opacity?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        title?: string;
        visible?: boolean;
        zIndex?: number;
    }
}
declare namespace woosmap.map {
    type StyleFunction = (feature: woosmap.map.data.Feature) => woosmap.map.StyleOptions;
}
declare namespace woosmap.map {
    type GeoJSONPosition = [number, number];
}
declare namespace woosmap.map {
    interface GeoJSONRawGeometry<T, C> {
        coordinates: C;
        type: T;
    }
}
declare namespace woosmap.map {
    type GeoJSONPoint = woosmap.map.GeoJSONRawGeometry<"Point", woosmap.map.GeoJSONPosition>;
}
declare namespace woosmap.map {
    type GeoJSONMultiPoint = woosmap.map.GeoJSONRawGeometry<"MultiPoint", woosmap.map.GeoJSONPosition[]>;
}
declare namespace woosmap.map {
    type GeoJSONLineString = woosmap.map.GeoJSONRawGeometry<"LineString", woosmap.map.GeoJSONPosition[]>;
}
declare namespace woosmap.map {
    type GeoJSONMultiLineString = woosmap.map.GeoJSONRawGeometry<"MultiLineString", woosmap.map.GeoJSONPosition[][]>;
}
declare namespace woosmap.map {
    type GeoJSONPolygon = woosmap.map.GeoJSONRawGeometry<"Polygon", woosmap.map.GeoJSONPosition[][]>;
}
declare namespace woosmap.map {
    type GeoJSONMultiPolygon = woosmap.map.GeoJSONRawGeometry<"MultiPolygon", woosmap.map.GeoJSONPosition[][][]>;
}
declare namespace woosmap.map {
    type GeoJSONGeometry =
        | woosmap.map.GeoJSONPoint
        | woosmap.map.GeoJSONMultiPoint
        | woosmap.map.GeoJSONLineString
        | woosmap.map.GeoJSONMultiLineString
        | woosmap.map.GeoJSONPolygon
        | woosmap.map.GeoJSONMultiPolygon
        | woosmap.map.GeoJSONGeometryCollection;
}
declare namespace woosmap.map {
    interface GeoJSONGeometryCollection {
        geometries: woosmap.map.GeoJSONGeometry[];
        type: "GeometryCollection";
    }
}
declare namespace woosmap.map {
    interface GeoJSONFeature {
        geometry: woosmap.map.GeoJSONGeometry;
        id?: number | string;
        properties: {};
        type: "Feature";
    }
}
declare namespace woosmap.map {
    interface GeoJSONFeatureCollection {
        features: woosmap.map.GeoJSONFeature[];
        type: "FeatureCollection";
    }
}
declare namespace woosmap.map {
    interface GeometryOptions {
        clickable?: boolean | null;
        draggable?: boolean | null;
        editable?: boolean | null;
        geodesic?: boolean | null;
        map?: woosmap.map.Map | null;
        strokeColor?: string | null;
        strokeOpacity?: number | null;
        strokePosition?: string;
        strokeWeight?: number | null;
        /**
         * Whether the Geometry is visible or not.
         */
        visible?: boolean | null;
        zIndex?: number | null;
    }
}
declare namespace woosmap.map {
    interface PolygonFillOptions extends woosmap.map.GeometryOptions {
        fillColor?: string | null;
        fillOpacity?: number | null;
    }
}
declare namespace woosmap.map {
    interface PolylineOptions extends woosmap.map.GeometryOptions {
        /**
         * The path of the polyline.
         */
        path: (woosmap.map.MVCArray<woosmap.map.LatLng> | null) | woosmap.map.LatLng[] | woosmap.map.LatLngLiteral[];
    }
}
declare namespace woosmap.map {
    interface PolygonOptions extends woosmap.map.PolygonFillOptions {
        /**
         * The paths of the polygon.
         */
        paths:
            | (woosmap.map.MVCArray<woosmap.map.MVCArray<woosmap.map.LatLng>> | null)
            | woosmap.map.MVCArray<woosmap.map.LatLng>
            | Array<Array<woosmap.map.LatLng | woosmap.map.LatLngLiteral>>
            | Array<woosmap.map.LatLng | woosmap.map.LatLngLiteral>;
    }
}
declare namespace woosmap.map {
    interface RectangleOptions extends woosmap.map.PolygonFillOptions {
        /**
         * The bounds of the Rectangle.
         */
        bounds: (woosmap.map.LatLngBounds | null) | (woosmap.map.LatLngBoundsLiteral | null);
    }
}
declare namespace woosmap.map {
    interface CircleOptions extends woosmap.map.PolygonFillOptions {
        /**
         * The center of the circle.
         */
        center: (woosmap.map.LatLng | null) | (woosmap.map.LatLngLiteral | null);
        /**
         * The radius of the circle.
         */
        radius?: number | null;
    }
}
declare namespace woosmap.map {
    type Coordinates = [number, number];
}
declare namespace woosmap.map {
    interface LatLngLiteral {
        /**
         * Latitude in degrees.
         * Values will be clamped to the range [-90, 90].
         * This means that if the value specified is less than -90, it will be set to -90.
         * And if the value is greater than 90, it will be set to 90.
         */
        lat: number;
        /**
         * Longitude in degrees.
         * Values outside the range [-180, 180] will be wrapped so that they fall within the range.
         * For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170.
         * This reflects the fact that longitudes wrap around the globe.
         */
        lng: number;
    }
}
declare namespace woosmap.map {
    interface LatLngBoundsLiteral {
        east: number;
        north: number;
        south: number;
        west: number;
    }
}
declare namespace woosmap.map {
    interface PointLiteral {
        /**
         * x coordinate *
         */
        x: number;
        /**
         * y coordinate *
         */
        y: number;
    }
}
declare namespace woosmap.map {
    interface SizeLiteral {
        height: number;
        width: number;
    }
}
declare namespace woosmap.map {
    /**
     * An event listener, created by woosmap.map.event.addListener() and friends.
     */
    interface MapEventListener {
        /**
         * Calling `listener.remove()` is equivalent to `woosmap.map.event.removeListener(listener)`.
         */
        remove(): void;
    }
}
declare namespace woosmap.map {
    interface SymbolIcon {
        /**
         * The position of the symbol relative to the marker or polyline.
         * The coordinates of the symbol's path are translated left and up by the anchor's x and y coordinates respectively.
         * By default, a symbol is anchored at(0, 0).
         * The position is expressed in the same coordinate system as the symbol's path.
         */
        anchor?: woosmap.map.Point | null;
        /**
         * The symbol's fill color. All CSS3 colors are supported except for extended named colors.
         * For symbol markers, this defaults to 'black'.
         * For symbols on polylines, this defaults to the stroke color of the corresponding polyline.
         */
        fillColor?: string | null;
        /**
         * The symbol's fill opacity. Defaults to 0.
         */
        fillOpacity?: number | null;
        /**
         * The origin of the label relative to the origin of the path, if label is supplied by the marker.
         * By default, the origin is located at(0, 0).
         * The origin is expressed in the same coordinate system as the symbol's path. `
         * This property is unused for symbols on polylines.
         */
        labelOrigin?: woosmap.map.Point | null;
        /**
         * The symbol's path, which is a built-in symbol path, or a custom path expressed using SVG path notation.
         */
        path: string;
        /**
         * The angle by which to rotate the symbol, expressed clockwise in degrees.
         * Defaults to 0.
         * A symbol in an IconSequence where fixedRotation is false is rotated relative to the angle of the edge on which it lies.
         */
        rotation?: number | null;
        /**
         * The amount by which the symbol is scaled in size.
         * For symbol markers, this defaults to 1; after scaling, the symbol may be of any size.
         * For symbols on a polyline, this defaults to the stroke weight of the polyline; after scaling,
         * the symbol must lie inside a square 22 pixels in size centered at the symbol's anchor.
         */
        scale?: number | null;
        /**
         * The symbol's stroke color.
         * All CSS3 colors are supported except for extended named colors.
         * For symbol markers, this defaults to 'black'.
         * For symbols on a polyline, this defaults to the stroke color of the polyline.
         */
        strokeColor?: string | null;
        /**
         * The symbol's stroke opacity. For symbol markers, this defaults to 1.
         * For symbols on a polyline, this defaults to the stroke opacity of the polyline.
         */
        strokeOpacity?: number | null;
        /**
         * The symbol's stroke weight. Defaults to the scale of the symbol.
         */
        strokeWeight?: number | null;
    }
}
declare namespace woosmap.map {
    interface DirectionsRendererOptions {
        directions?: woosmap.map.DirectionResult;
        draggable?: boolean;
        map?: woosmap.map.Map;
        markerOption?: object;
        preserveViewport?: boolean;
        routeIndex?: number;
        suppressBicyclingLayer?: boolean;
        suppressInfoWindows?: boolean;
        suppressMarkers?: boolean;
        suppressPolylines?: boolean;
    }
}
declare namespace woosmap.map.distance {
    /**
     * A Distance Matrix request to be sent to `DistanceService.getDistanceMatrix` containing
     * a list of origins and a list of destinations.
     */
    interface DistanceMatrixRequest {
        /**
         * If `true`, instructs the Distance service to avoid ferries
         * where possible. Optional.
         */
        avoidFerries?: boolean;
        /**
         * If `true`, instructs the Distance service to avoid highways
         * where possible. Optional.
         */
        avoidHighways?: boolean;
        /**
         * If `true`, instructs the Distance service to avoid toll
         * roads where possible. Optional.
         */
        avoidTolls?: boolean;
        /**
         * If set, instructs the Distance service to avoid the specific polygons.
         */
        avoidZones?: woosmap.map.LatLng[][] | woosmap.map.LatLngLiteral[][];
        /**
         * By using this parameter, Distance will calculate the duration
         * with traffic Specifies the date/time at which to base the calculations on for traffic purposes.
         * Valid values are a `Date` or a string timestamp or "now".
         */
        departureTime?: Date | string;
        /**
         * An array containing destinations latlng to which to calculate distance and time.
         * Required.
         */
        destinations: woosmap.map.LatLng[] | woosmap.map.LatLngLiteral[];
        /**
         * Defines element values that will be part of the response (distance and/or duration).
         * if not specified default is distance
         */
        elements?: "distance" | "duration" | "duration_distance";
        /**
         * Defines in which language the results should be returned, if possible
         */
        language?: string;
        /**
         * Defines the method to compute the rpute between the start point and the end point.
         * `time` for the fastest route and `distance` for the shortest route.
         */
        method?: "time" | "distance";
        /**
         * An array containing origins latlng from which to calculate distance and time.
         * Required.
         */
        origins: woosmap.map.LatLng[] | woosmap.map.LatLngLiteral[];
        travelMode?: string;
        /**
         * The unit system requested. see `UnitSystem`
         */
        unitSystem?: string;
    }
}
declare namespace woosmap.map.distance {
    /**
     * A Distance Isochrone request to be sent to `DistanceService.getDistanceIsochrone` containing
     * an origin and a distance value as minutes or kilometers.
     */
    interface DistanceIsochroneRequest {
        /**
         * If `true`, instructs the Distance service to avoid ferries
         * where possible. Optional.
         */
        avoidFerries?: boolean;
        /**
         * If `true`, instructs the Distance service to avoid highways
         * where possible. Optional.
         */
        avoidHighways?: boolean;
        /**
         * If `true`, instructs the Distance service to avoid toll
         * roads where possible. Optional.
         */
        avoidTolls?: boolean;
        /**
         * If set, instructs the Distance service to avoid the specific polygons.
         */
        avoidZones?: woosmap.map.LatLng[][] | woosmap.map.LatLngLiteral[][];
        /**
         * Defines in which language the results should be returned, if possible
         */
        language?: string;
        /**
         * Defines the method to compute the rpute between the start point and the end point.
         * `time` for the fastest route and `distance` for the shortest route.
         */
        method?: "time" | "distance";
        /**
         * The starting point.
         */
        origin: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * The travel mode requested. see `woosmap.map.TravelMode`
         */
        travelMode?: string;
        /**
         * The unit system requested. see `UnitSystem`
         */
        unitSystem?: string;
        /**
         * The value to use for isochrone contour.
         * You can specify time in minutes or distance in kilometers (cf. method parameter).
         * The maximum value that can be specified is 120 (120 minutes : 2 hours or 120 km).
         */
        value: number;
    }
}
declare namespace woosmap.map.distance {
    /**
     * The response to a `DistanceService.getDistanceMatrix` request, consisting of
     * a status, and a list of `DistanceMatrixResponseRow`s, one for each corresponding origin location.
     */
    interface DistanceMatrixResponse {
        /**
         * The message describing a Distance Matrix API request error. Present only if status is not OK.
         */
        error_message?: string;
        /**
         * The rows of the matrix, corresponding to the origin locations.
         */
        rows: woosmap.map.distance.DistanceMatrixResponseRow[];
        /**
         * The status returned. see `woosmap.map.distance.DistanceServiceStatus` {DistanceServiceStatus}
         */
        status: string;
    }
}
declare namespace woosmap.map.distance {
    /**
     * The response to a `DistanceService.getDistanceIsochrone` request, consisting of
     * a status, and a `DistanceIsoline` object.
     */
    interface DistanceIsochroneResponse {
        /**
         * The message describing a Distance Isochrone API request error. Present only if status is not OK.
         */
        error_message?: string;
        /**
         * Contains the properties of isoline
         */
        isoline: woosmap.map.distance.DistanceIsoline;
        /**
         * The status returned. see `woosmap.map.distance.DistanceServiceStatus` {DistanceServiceStatus}
         */
        status: string;
    }
}
declare namespace woosmap.map.distance {
    /**
     * A row of the `DistanceMatrixResponse`,consisting of a list of `DistanceMatrixElement`s,
     * one for each corresponding destination locations.
     */
    interface DistanceMatrixResponseRow {
        /**
         * The row's elements, corresponding to the destination locations.
         */
        elements: woosmap.map.distance.DistanceMatrixElement[];
    }
}
declare namespace woosmap.map.distance {
    /**
     * A single Distance Matrix element which contains the status, duration and distance
     * from one origin to one destination.
     */
    interface DistanceMatrixElement {
        /**
         * The total distance of this matrix element expressed in meters (value) and as text.
         */
        distance: woosmap.map.Distance;
        /**
         * The total duration of this matrix element, expressed in seconds (value) and as text.
         */
        duration: woosmap.map.Duration;
        /**
         * Status returned for Distance Matrix Element.
         * -  `OK` indicates the response contains a valid result.
         * -  `NOT_FOUND` indicates that the origin and/or destination of this pairing could not be matched to the network.
         * -  `ZERO_RESULTS` indicates no route could be found between the origin and destination.
         */
        status: "OK" | "NOT_FOUND" | "ZERO_RESULTS";
    }
}
declare namespace woosmap.map.distance {
    /**
     * The isochrone object which represents a line of points of equal travel time or distance around the given origin.
     */
    interface DistanceIsoline {
        /**
         * The distance of the isochrone (returned only if method=distance in parameters)
         */
        distance?: woosmap.map.Distance;
        /**
         * The encoded polyline of the isoline.
         */
        geometry: string;
        /**
         * An object describing the input location with Latitude and Longitude in decimal degrees.
         */
        origin: woosmap.map.LatLngLiteral;
        /**
         * The decoded polyline of the isoline.
         */
        path?: woosmap.map.LatLng[];
        /**
         * The time of the isochrone (returned as default or when specifying method=time in parameters)
         */
        time?: woosmap.map.Duration;
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Stores Autocomplete request to be sent to `StoresService.autocomplete` containing
     * a search query as string with `localized` field to autocomplete stores on `localizedNames`.
     */
    interface StoresAutocompleteRequest {
        /**
         * The preferred language to match against name (defaults on Accept-Language header)
         */
        language?: string;
        /**
         * Limits the number of autocomplete results (default 5, max 50).
         */
        limit?: number;
        /**
         * Example: `query=name:'My cool store'|type:'click_and_collect'`
         * Search query combining one or more search clauses.
         * Each search clause is made up of three parts structured as `field : operator value`.
         * example: `name:="My cool store"`
         */
        query?: string;
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Stores Search request to be sent to `StoresService.search` containing
     * a search query as string to autocomplete stores on.
     */
    interface StoresSearchRequest {
        /**
         * To bias the results around a specific latlng
         */
        latLng?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * Page number when accessing paginated stores
         */
        page?: number;
        /**
         * Find stores nearby an encoded polyline and inside a defined radius.
         */
        polyline?: string;
        /**
         * Example: `query=name:'My cool store'|type:'click_and_collect'`
         * Search query combining one or more search clauses.
         * Each search clause is made up of three parts structured as `field : operator value`.
         * example: `name:="My cool store"`
         */
        query?: string;
        /**
         * To bias the results within a given circular area.
         * Unit in meters
         */
        radius?: number;
        /**
         * If your request returns a high number of stores, the result will be paginated.
         * You can then request stores by page using `page` and `storesByPage` parameters (Default is 100, max is 300).
         */
        storesByPage?: number;
        /**
         * whether to search for stores intersecting a zone
         */
        zone?: boolean;
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Stores Bounds request to be sent to `StoresService.getBounds`
     */
    interface StoresBoundsRequest {
        /**
         * To bias the results around a specific latlng
         */
        latLng?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * Example: `query=name:'My cool store'|type:'click_and_collect'`
         * Search query combining one or more search clauses.
         * Each search clause is made up of three parts structured as `field : operator value`.
         * example: `name:="My cool store"`
         */
        query?: string;
        /**
         * To bias the results within a given circular area.
         * Unit in meters
         */
        radius?: number;
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Stores Autocomplete response returned by the call to
     * `StoresService.autocomplete` containing a
     * list of `StorePrediction`.
     */
    interface StoresAutocompleteResponse {
        /**
         * list of `StorePrediction`.
         */
        predictions: woosmap.map.stores.StorePrediction[];
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Store Response as a GeoJSON Feature Object returned by the call to
     * `StoresService.getStoreById`
     */
    interface StoreResponse {
        /**
         * Defines the geometry of a store
         */
        geometry: woosmap.map.GeoJSONPoint;
        /**
         * Defines attributes of a Store
         */
        properties: woosmap.map.stores.Store;
        type: "Feature";
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Stores Search response as a GeoJSON FeatureCollection Object returned by the call to
     * `StoresService.search` and containing a list of `StoreResponse`.
     */
    interface StoresSearchResponse {
        /**
         * list of `StoreResponse` features
         */
        features: woosmap.map.stores.StoreResponse[];
        /**
         * Pagination to reach all returned assets. max 300 assets par page.
         */
        pagination: woosmap.map.Pagination;
        type: "FeatureCollection";
    }
}
declare namespace woosmap.map.stores {
    /**
     * A Stores Bounds response returned by the call to `StoresService.getBounds` and containing
     * the bounds of searched stores.
     */
    interface StoresBoundsResponse {
        bounds: woosmap.map.LatLngBoundsLiteral;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Represents a single store prediction.
     */
    interface StorePrediction {
        highlighted?: number;
        matched_substrings?: woosmap.map.MatchedSubstring[];
        name: string;
        store_id: string;
        types: string[];
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines information about a Store.
     */
    interface Store {
        /**
         * Defines an object containing the separate components applicable to this address.
         */
        address: woosmap.map.stores.StoreAddress;
        /**
         * Defines an object containing the store's contact available information.
         */
        contact: woosmap.map.stores.StoreContact;
        /**
         * Defines the distance in meters from the position if you
         * set `lat` and `lng` in your `StoresSearchRequest`.
         */
        distance?: number;
        /**
         * Defines the previous date timestamp when the store has been updated
         */
        lastUpdated: string | null;
        /**
         * the store's name
         */
        name: string;
        /**
         * The current opening status for a store
         */
        open: woosmap.map.stores.StoreOpen;
        /**
         * Defines the opening hours of a store.
         */
        opening_hours: woosmap.map.stores.StoreOpeningHours | null;
        /**
         * A textual identifier that uniquely identifies a store
         */
        store_id: string;
        /**
         * Contains an array of tags describing the store.
         */
        tags: string[];
        /**
         * Contains an array of types describing the store.
         */
        types: string[];
        /**
         * Contains all additional information relative to a store.
         * No restriction regarding the types of data in it (Arrays, Object, Boolean, String, Numeric…)
         * but you can only query for text matching, numerical comparison or boolean.
         */
        user_properties: any;
        /**
         * The current Weekly Opening taking into account the special hours
         */
        weekly_opening: woosmap.map.stores.StoreWeeklyOpening;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines information about a store address.
     */
    interface StoreAddress {
        /**
         * A city where belongs a store
         */
        city?: string;
        /**
         * An ISO_3166-1 Country Code where the store is located(see [https://en.wikipedia.org/wiki/ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) for full list)
         */
        country_code?: string | null;
        /**
         * An array for lines of a store Address
         */
        lines?: string[];
        /**
         * A Zipcode / Postal code of a store address
         */
        zipcode?: string;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines information about a store contact.
     */
    interface StoreContact {
        /**
         * Contains the store's email contact.
         */
        email: string;
        /**
         * Contains the store's phone number in its local format.
         */
        phone: string;
        /**
         * The website contact for this store, such as a business' homepage.
         */
        website: string;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines the current opening status for a store
     */
    interface StoreOpen {
        current_slice: woosmap.map.stores.StoreOpeningHoursPeriod;
        nextOpening?: woosmap.map.stores.StoreOpenNextOpening;
        open_hours: woosmap.map.stores.StoreOpeningHoursPeriod[];
        /**
         * Defines if the store is currently opened.
         */
        open_now: boolean;
        /**
         * Represents the day number of the week.
         * possible values are: `1 | 2 | 3 | 4 | 5 | 6 | 7`
         */
        week_day?: number;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines the hours for an opening period.
     * To set a slice of time when the asset is open you must define a `start` and `end` keys.
     * `start` and `end` must belong to the same day (crossing midnight may result in `open_now` being always `false`.)
     */
    interface StoreOpeningHoursPeriod {
        "all-day"?: boolean;
        end: string;
        start: string;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines the next opening hours period
     */
    interface StoreOpenNextOpening {
        day: string;
        end: string;
        start: string;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines the current Weekly Opening taking into account the special hours.
     * The key defines the day number. It can be from "1" for monday up to "7" for sunday.
     */
    interface StoreWeeklyOpening {
        "1"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        "2"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        "3"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        "4"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        "5"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        "6"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        "7"?: woosmap.map.stores.StoreWeeklyOpeningHoursPeriod;
        timezone: string;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines the weekly opening hours of a store.
     */
    interface StoreWeeklyOpeningHoursPeriod {
        hours: woosmap.map.stores.StoreOpeningHoursPeriod[];
        /**
         * Define if the hours comes from a special opening hours' day.
         */
        isSpecial: boolean;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Describes the opening hours of a store.
     */
    interface StoreOpeningHours {
        /**
         * Defines the special opening hours of a store.
         * The format for defining opening and closing hours for a particular day is the same as the usual.
         * Instead of using numeric week day for keys you must use a date YYYY-MM-DD like "2015-03-08"
         * example: `special:{"2015-03-08": {start:"14:00", end:"16:00"}}
         */
        special: any;
        /**
         * Timezone for the Opening Hours of a store. It is used to compute the `open_now` property of an asset.
         * see [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
         */
        timezone: string;
        /**
         * Defines the usual opening hours of a store.
         */
        usual: woosmap.map.stores.StoreOpeningHoursUsual;
    }
}
declare namespace woosmap.map.stores {
    /**
     * Defines the usual opening hours of a store.
     * The key defines the day number. It can be from "1" for monday up to "7" for sunday.
     */
    interface StoreOpeningHoursUsual {
        "1"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        "2"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        "3"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        "4"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        "5"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        "6"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        "7"?: woosmap.map.stores.StoreOpeningHoursPeriod[];
        default?: woosmap.map.stores.StoreOpeningHoursPeriod[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * A Localities autocompletion request to be sent to `LocalitiesService.autocomplete`
     */
    interface LocalitiesAutocompleteRequest {
        /**
         * Used to filter over countries. Countries must be passed as an
         * ISO 3166-1 Alpha-2 or Alpha-3 compatible country code.
         */
        components?: woosmap.map.localities.LocalitiesComponentRestrictions;
        /**
         * To set the description format for all or some of the suggestion types selected.
         * see [https://developers.woosmap.com/products/localities/autocomplete/#custom_description](https://developers.woosmap.com/products/localities/autocomplete/#custom_description)
         */
        customDescription?: string;
        /**
         * To open suggestions to worldwide postal codes in addition to postal codes for Western Europe.
         */
        data?: woosmap.map.localities.LocalitiesRequestData;
        /**
         * If set, this parameter allows a refined search over locality names that bears the same postal code.
         * possible value is `extended=postal_code`
         */
        extended?: string;
        /**
         * The user entered input string.
         */
        input: string;
        /**
         * The language code, using ISO 3166-1 Alpha-2 country codes,
         * indicating in which language the results should be returned, if possible.
         * If language is not supplied, the Localities service will use english as default language.
         * No language necessary for `postal_code` request.
         */
        language?: string;
        /**
         * Location for prediction biasing. The `location` defines the point around which
         * to retrieve predictions in priority.
         */
        location?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * This parameter may be used in addition to the `location` parameter
         * to define the distance in meters within which the API will return results in priority.
         * Results outside the defined area may still be displayed.
         * Default radius if this parameter is not set is 100 000.
         */
        radius?: number;
        /**
         * The types of predictions to be returned.
         * By default, suggestions return types `locality` and `postal_code`.
         * can be either a single type or a list of `LocalitiesTypes`
         * see [https://developers.woosmap.com/products/localities/autocomplete/#types](https://developers.woosmap.com/products/localities/autocomplete/#types)
         */
        types?: string | string[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * A Localities Geocode request to be sent to `LocalitiesService.geocode`
     * Requires an `address` string to perform a geocode request or a `latlng` object for a reverse geocode request.
     */
    interface LocalitiesGeocodeRequest {
        /**
         * The input string to geocode. Can represent an address, a street, a locality or a postal code.
         */
        address?: string;
        /**
         * Used to filter over countries. Countries must be passed as an
         * ISO 3166-1 Alpha-2 or Alpha-3 compatible country code.
         */
        components?: woosmap.map.localities.LocalitiesComponentRestrictions;
        /**
         * To specify the format for the short country code expected to be returned in the `address_components` field.
         * Default is the format used to specify `components` or `alpha2` if no components are specified.
         */
        countryCodeFormat?: "alpha2" | "alpha3";
        /**
         * Whether to retrieve suggestions to worldwide postal codes in addition to postal codes for Western Europe.
         */
        data?: woosmap.map.localities.LocalitiesRequestData;
        /**
         * Used to limit the returning fields when `type=address`.
         * by default, and for other types localities, all fields are return. Only one field is available: geometry.
         */
        fields?: "geometry";
        /**
         * The language code, using ISO 3166-1 Alpha-2 country codes,
         * indicating in which language the results should be returned, if possible.
         * If language is not supplied, the Localities service will use english as default language.
         * No language necessary for `postal_code` request.
         */
        language?: string;
        /**
         * The latLng parameter is used for reverse geocoding, it’s required if the `address` parameter is missing.
         */
        latLng?: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        /**
         * When latlng parameter is used for reverse geocoding, setting list_sub_building=true allows to retrieve all addresses at the same location for a common street number or building.
         */
        list_sub_buildings?: boolean;
    }
}
declare namespace woosmap.map.localities {
    /**
     * A Localities details query to be sent to the `LocalitiesService`.
     */
    interface LocalitiesDetailsRequest {
        /**
         * To specify the format for the short country code expected to be returned in the `address_components` field.
         * Default is the format used to specify `components` or `alpha2` if no components are specified.
         */
        countryCodeFormat?: "alpha2" | "alpha3";
        /**
         * Used to limit the returning fields when `type=address`.
         * by default, and for other types localities, all fields are return. Only one field is available: geometry.
         */
        fields?: "geometry";
        /**
         * The language code, using ISO 3166-1 Alpha-2 country codes,
         * indicating in which language the results should be returned, if possible.
         * If language is not supplied, the Localities service will use english as default language.
         * No language necessary for `postal_code` request.
         */
        language?: string;
        /**
         * A textual identifier that uniquely identifies a locality, returned from a `LocalitiesService.autocomplete`.
         */
        publicId: string;
    }
}
declare namespace woosmap.map.localities {
    /**
     * A Localities Autocomplete response returned by the call to
     * `LocalitiesService.autocomplete` containing a
     * list of `LocalitiesPredictions`.
     */
    interface LocalitiesAutocompleteResponse {
        localities: woosmap.map.localities.LocalitiesPredictions[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * A Localities Geocode response returned by the call to
     * `LocalitiesService.geocode` containing a
     * list of `LocalitiesGeocodeResult`.
     */
    interface LocalitiesGeocodeResponse {
        results: woosmap.map.localities.LocalitiesGeocodeResult[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * A Localities Details response returned by the call to
     * `LocalitiesService.getDetails` containing a
     * `LocalitiesDetailsResult`.
     */
    interface LocalitiesDetailsResponse {
        result: woosmap.map.localities.LocalitiesDetailsResult;
    }
}
declare namespace woosmap.map.localities {
    /**
     * Defines information about a Locality.
     */
    interface LocalitiesDetailsResult {
        /**
         * An array containing Address Components with additional information
         */
        address_components?: woosmap.map.localities.AddressComponents[];
        /**
         * Contains the readable text description of the result.
         */
        formatted_address: string;
        /**
         * The location of the result, in latitude and longitude, eventually associated with a Viewport.
         * Accuracy is also provided for locality of type Address.
         */
        geometry?: woosmap.map.localities.LocalitiesDetailsGeometry;
        /**
         * The postal code name if locality is typeof postal_code
         */
        name?: string;
        /**
         * Contains a unique ID for each suggestion.
         */
        public_id: string;
        /**
         * This optional field is only available for UK addresses referenced as not yey built.
         */
        status?: "not_yet_built";
        /**
         * available localities types
         */
        types: woosmap.map.localities.LocalitiesTypes[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * Restricts predictions to the specified country (ISO 3166-1 Alpha-2 or Alpha-3 compatible country code, case-insensitive).
     * For example, 'FR', 'GB', or 'DE'. You can provide a single one, or an array of country code strings.
     */
    interface LocalitiesComponentRestrictions {
        country: string | string[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * Details geometry, contains a location and optionally bounds viewport.
     */
    interface LocalitiesDetailsGeometry {
        accuracy: woosmap.map.localities.LocalitiesDetailsAccuracy;
        location: woosmap.map.LatLngLiteral;
        viewport: woosmap.map.LatLngBoundsLiteral;
    }
}
declare namespace woosmap.map.localities {
    /**
     * Human readable description of an address and the unique public_id of the address
     */
    interface LocalitiesDetailsSummary {
        description: string;
        public_id: string;
    }
}
declare namespace woosmap.map.localities {
    /**
     * Represents a single locality prediction
     */
    interface LocalitiesPredictions {
        /**
         * Concatenation of `name`, `admin_1`, `admin_0` or requested `customDescription`.
         * The description can vary depending on the type requested
         */
        description?: string;
        /**
         * On the specific territory of United Kingdom, Localities autocomplete request can return
         * the additional attribute `has_addresses` for a postal code, which indicates if a postal code bears addresses.
         * When `has_addresses` is `true`, it is possible to display a list of the available addresses
         * by requesting details with the Localities `public_id`.
         */
        has_addresses?: boolean;
        /**
         * Contains a set of substrings for each field that match elements in the input.
         * It can be used to highlight those substrings.
         */
        matched_substrings?: woosmap.map.MatchedSubstring;
        /**
         * Contains a unique ID for locality. This ID is required to perform `LocalitiesService.getDetails` request.
         */
        public_id: string;
        /**
         * Contains the type of the Localities prediction.
         */
        type?: woosmap.map.localities.LocalitiesTypes;
    }
}
declare namespace woosmap.map.localities {
    /**
     * Defines information about a Geocoded Locality.
     */
    interface LocalitiesGeocodeResult {
        /**
         * An array containing Address Components with additional information
         */
        address_components?: woosmap.map.localities.AddressComponents[];
        /**
         * Contains the readable text description of the result.
         */
        formatted_address: string;
        /**
         * The location of the result, in latitude and longitude, eventually associated with a Viewport.
         * Accuracy is also provided for locality of type Address.
         */
        geometry?: woosmap.map.localities.LocalitiesDetailsGeometry;
        /**
         * Contains a unique ID for geocoded locality.
         */
        public_id: string;
        /**
         * This optional field is only available for UK addresses referenced as not yey built.
         */
        status?: "not_yet_built";
        /**
         * When reverse geocoding with list_sub_buildings=true, this field will contain a list of precise addresses that can be found at that location, i.e. all flats within a building.
         */
        sub_buildings?: woosmap.map.localities.LocalitiesDetailsSummary[];
        /**
         * available localities types
         */
        types: woosmap.map.localities.LocalitiesTypes[];
    }
}
declare namespace woosmap.map.localities {
    /**
     * The types of suggestion to return.
     * By default, suggestions return types `locality` and `postal_code`.
     * Check [full list of supported types](https://developers.woosmap.com/products/localities/autocomplete/#types)
     */
    type LocalitiesTypes =
        | "address"
        | "locality"
        | "admin_level"
        | "airport"
        | "amusement_park"
        | "art_gallery"
        | "country"
        | "metro_station"
        | "museum"
        | "postal_code"
        | "shopping"
        | "tourist_attraction"
        | "train_station"
        | "zoo";
}
declare namespace woosmap.map.localities {
    /**
     * The `advanced` value opens suggestions to worldwide postal codes in addition to postal codes for Western Europe.
     * default to `standard`
     */
    type LocalitiesRequestData = "standard" | "advanced";
}
declare namespace woosmap.map.localities {
    /**
     * This accuracy is present when type address is returned.
     * `DISTRICT` and `POSTAL_CODE` are for UK only.
     */
    type LocalitiesDetailsAccuracy = "ROOFTOP" | "DISTRICT" | "POSTAL_CODE" | "ROUTE";
}
declare namespace woosmap.map.localities {
    /**
     * Defines the type of the returned geocoded element.
     */
    type LocalitiesGeocodeTypes = "address" | "locality" | "postal_code" | "route";
}
declare namespace woosmap.map.localities {
    /**
     * Defines the type of the returned geocoded element.
     */
    type LocalitiesGeocodeLocationType = "ROOFTOP" | "DISTRICT" | "POSTAL_CODE" | "ROUTE";
}
declare namespace woosmap.map.localities {
    /**
     * Defines information about the geometry of a Locality.
     */
    interface LocalitiesGeocodeGeometry {
        location: woosmap.map.LatLngLiteral;
        location_type: woosmap.map.localities.LocalitiesGeocodeLocationType;
        viewport: woosmap.map.LatLngBounds;
    }
}
declare namespace woosmap.map {
    enum DirectionStatus {
        OK = "OK",
    }
}
declare namespace woosmap.map {
    /**
     * The valid travel modes that can be specified in a
     * `DistanceRouteRequest`, `DistanceMatrixRequest` or `DistanceIsochroneRequest`.
     * Specify these by value, or by using the
     * constant's name. For example, `'WALKING'` or
     * `woosmap.map.TravelMode.WALKING`
     */
    enum TravelMode {
        BICYCLING = "BICYCLING",
        DRIVING = "DRIVING",
        WALKING = "WALKING",
    }
}
declare namespace woosmap.map {
    /**
     * The valid unit systems that can be specified in a `DistanceRouteRequest`,
     * `DistanceMatrixRequest` or `DistanceIsochroneRequest`.
     */
    enum UnitSystem {
        IMPERIAL = "IMPERIAL",
        METRIC = "METRIC",
    }
}
declare namespace woosmap.map.distance {
    /**
     * The status returned by the `DistanceService` on the resolve of
     * its searches. Specify these by value, or by using the constant's name.
     * For example, `'OK'` or `woosmap.map.distance.DistanceServiceStatus.OK`.
     */
    enum DistanceServiceStatus {
        BACKEND_ERROR = "BACKEND_ERROR",
        INVALID_REQUEST = "INVALID_REQUEST",
        MAX_ELEMENTS_EXCEEDED = "MAX_ELEMENTS_EXCEEDED",
        MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED",
        OK = "OK",
        OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
        REQUEST_DENIED = "REQUEST_DENIED",
    }
}
declare namespace woosmap.map.event {
    /**
     * Adds the given listener function to the given event name for the given object instance.
     * Returns an identifier for this listener that can be used with `removeListener()`.
     */
    function addListener(
        instance: object,
        eventName: string,
        handler: (...args: any[]) => any,
    ): woosmap.map.MapEventListener;
    /**
     * Like addListener, but the handler removes itself after handling the first event.
     */
    function addListenerOnce(
        instance: object,
        eventName: string,
        handler: (...args: any[]) => any,
    ): woosmap.map.MapEventListener;
    function addDomListener(element: Element, eventName: string, handler: (...args: any[]) => any): void;
    /**
     * Removes the given listener, which should have been returned by addListener above.
     * Equivalent to calling `listener.remove()`.
     */
    function removeListener(listener: woosmap.map.MapEventListener): void;
    /**
     * Removes all listeners for all events for the given instance.
     */
    function clearInstanceListeners(instance: object): void;
    /**
     * Removes all listeners for the given event for the given instance.
     */
    function clearListeners(instance: object, eventName: string): void;
    /**
     * Triggers the given event. All arguments after eventName are passed as arguments to the listeners.
     */
    function trigger(instance: object, eventName: string, eventArgs?: any[] | null): void;
}
declare namespace woosmap.map.geometry {
    /**
     * Computes whether the given point lies inside the specified polygon.
     */
    function containsLocation(
        point: woosmap.map.LatLng | woosmap.map.LatLngLiteral,
        polygon: woosmap.map.Polygon,
    ): boolean;
    /**
     * Computes whether the given point lies on or near to a polyline, or the edge of a polygon,
     * within a specified tolerance.
     * Returns true when the difference between the latitude and longitude of the supplied point,
     * and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10-9 degrees.
     */
    function isLocationOnEdge(
        point: woosmap.map.LatLng | woosmap.map.LatLngLiteral,
        poly: woosmap.map.Polygon,
        tolerance?: number,
    ): boolean;
}
declare namespace woosmap.map {
    class IndoorWidget {
        /**
         * Creates a new Indoor widget.
         */
        constructor(
            widgetOptions?: woosmap.map.IndoorWidgetOptions,
            rendererOptions?: woosmap.map.IndoorRendererOptions,
        );

        /**
         * Sets the map where to render the Indoor widget.
         */
        setMap(map: Map): void;

        /**
         * Renders map with the selected venue
         */
        setVenue(venueId: string): void;

        /**
         * Renders a map with a POI highlighted by pk / id
         * silent parameter will prevent the indoor_feature_selected event to trigger
         * padding parameter will apply padding to the map container while highlighting the POI on map
         */
        highlightFeature(id: string, silent: boolean, padding?: Padding): void;

        /**
         * Renders a map with a POI highlighted by its ref
         * padding parameter will apply padding to the map container while highlighting the POI on map
         */
        highlightFeatureByRef(ref: string, padding?: Padding): void;

        /**
         * Unselect a selected feature: it closes the widget and unhighlight the feature.
         */
        unselectFeature(): void;

        /**
         * Call this function to draw a polyline on map.
         */
        setDirections(directions?: woosmap.map.IndoorDirectionResult | null): void;

        /**
         * Sets the distance units.
         */
        setUnits(units: "imperial" | "metric"): void;

        /**
         * Gets the distance units.
         */
        getUnits(): "imperial" | "metric";

        /**
         * Sets the routing profile (or directions mode) ('security' | 'wheelchair') for way finding
         */
        setDirectionsMode(profile: string): void;

        /**
         * Gets the distance units.
         */
        getDirectionsMode(): string | null;

        /**
         * Sets the baseFilter.
         */
        setBaseFilter(filter?: string | null): void;

        /**
         * Gets the baseFilter
         */
        getBaseFilter(): string | null;

        /**
         * Sets the current user location.
         */
        setUserLocation(lat: number, lng: number, level: number, bearing?: number, forceFocus?: boolean): void;

        /**
         * Sets the navigation mode
         */
        setNavigationMode(allowNavigation: boolean): void;

        /**
         * Gets the navigates mode
         */
        getNavigationMode(): boolean;

        /**
         * Gets the autocompleteWithDistance option
         */
        getAutocompleteWithDistance(): boolean;

        /**
         * Renders map with custom theme
         */
        setTheme(theme: string): void;

        /**
         * Sets the zones to avoid during routing. Argument expected in the format level;lat,lng;lat,lng;lat,lng...|level;lat,lng;lat,lng;lat,lng...
         */
        setZonesToAvoid(avoidZones: string): string | null;

        /**
         * Gets the zones to avoid while routing
         */
        getZonesToAvoid(): string | null;

        /**
         * Sets the floor for the venue
         */
        setFloor(floor: number): void;

        /**
         * Adds a listener for eventName.
         */
        addListener(eventName: string, handler: any): MapEventListener;

        /**
         * Triggers the given event. All arguments after eventName are passed as arguments to the listeners.
         */
        trigger(instance: object, eventName: string, eventArgs?: any[] | null): void;
    }
}
declare namespace woosmap.map {
    class IndoorRenderer extends MVCObject {
        /**
         * Creates an Indoor renderer.
         */
        constructor(options?: woosmap.map.IndoorRendererOptions);

        /**
         * Sets the map where to render the Indoor map.
         */
        setMap(map?: woosmap.map.Map | null): void;

        /**
         * Get the displayed level.
         */
        getLevel(): number;

        /**
         * Get the selected feature.
         */
        getSelectedFeature(): GeoJSONFeature | null;

        /**
         * Get the displayed venue.
         */
        getVenue(): woosmap.map.Venue | null;

        /**
         * Gets view set for the renderer
         */
        getView(): "mobile" | "desktop" | "auto";

        /**
         * Call this function to draw a polyline on map.
         */
        setDirections(directions?: woosmap.map.IndoorDirectionResult | null, padding?: number | null): void;

        /**
         * Highlight the step of the directions
         */
        highlightStep(
            stepToHighlight?: GeoJSONFeature | null,
            fitBounds?: boolean,
            tilt?: boolean,
            soundEnabled?: boolean,
        ): void;

        /**
         * Show or hide the routing path on the map
         */
        displayRoutingPath(show: boolean): void;

        /**
         * Unselect a selected feature
         */
        unselectFeature(): void;

        /**
         * Set the current user location. A blue dot is going to be displayed.
         */
        setUserLocation(
            lat: number,
            lng: number,
            level: number,
            bearing?: number,
            forceFocus?: boolean,
            adjusted?: boolean,
        ): void;

        /**
         * Returns the current user location.
         */
        getUserLocation(): woosmap.map.IndoorPosition;

        /**
         * Detects whether user location is found inside venue's bounding box
         */
        isUserInsideVenue(lat: number, lng: number): boolean;

        /**
         * Sets the floor for the venue
         */
        setFloor(floor: number): void;

        /**
         * Renders map with the selected venue
         */
        setVenue(venueId: string): void;

        /**
         * Renders a map with a POI highlighted by pk or id
         */
        highlightFeature(featureid: string, silent: boolean, padding?: Padding): void;

        /**
         * Renders a map with a POI highlighted by ref
         */
        highlightFeatureByRef(ref: string, padding?: Padding): void;

        /**
         * Filter the map to display only labels and icons of POIs which are matching the filters
         */
        filterPois(advancedFilter: string, disableZoomMin: boolean): any;

        /**
         * Renders map with custom theme
         */
        setTheme(theme: string): void;

        /**
         * Sets the default filter applied
         */
        setBaseFilter(filter: string): void;

        /**
         * Resets the user marker
         */
        resetUserMarker(): void;

        /**
         * Triggers event to notify user has deviated from path during navigation
         */
        notifyUserDeviated(currentLocation: GeoJSONFeature): void;
    }
}
declare namespace woosmap.map {
    /**
     * Service used to call the Indoor API.
     */
    class IndoorService {
        /**
         * Service used to call the Indoor API.
         */
        constructor();

        /**
         * Retrieve all the venues
         */
        venues(callback: (venues: woosmap.map.VenuesResult) => void): void;

        /**
         * Retrieve detailed venue data
         */
        venue(venueId: string, callback: (venue: woosmap.map.Venue) => void): void;

        /**
         * Search for features by their names
         */
        search(
            venueId: string,
            query: string,
            callback: (featureCollection: GeoJSONFeatureCollection) => any,
            ref?: string | null,
            id?: string | null,
            advancedFilter?: string | null,
        ): void;

        /**
         * Gets indoor directions
         */
        directions(
            request: woosmap.map.IndoorDirectionRequest,
            callback: (directions: woosmap.map.IndoorDirectionResult) => void,
        ): void;

        /**
         * Gets feature by feature id
         */
        feature(venueId: string, featureId: number, callback: (feature: GeoJSONFeature) => void): void;

        /**
         * Autocomplete for pois
         */
        autocomplete(
            venueId: string,
            query: string,
            callback: (predictions: woosmap.map.Indoor.Predictions) => any,
            ref?: string | null,
            id?: string | null,
            fromLocation?: string | null,
            advancedFilter?: string | null,
        ): void;
    }
}
declare namespace woosmap.map {
    /**
     * Defines the indoor venue information. An indoor venue consists of one or more buildings, geometry other information describing the venue.
     */
    interface Venue {
        bbox: number[];
        buildings?: woosmap.map.Building[] | null;
        categories?: string[] | null;
        levels: woosmap.map.Level[];
        name?: string | null;
        routing_profiles?: string[] | null;
        venue_id: string;
    }
}
declare namespace woosmap.map {
    /**
     * Request to get directions between an origin and a destination.
     */
    interface IndoorDirectionRequest {
        avoid?: string | null;
        destination?: LatLng | null;
        destinationId: (number | null) | string;
        destinationLevel?: number | null;
        language?: string | null;
        mode?: string | null;
        optimize?: boolean | null;
        origin?: LatLng | null;
        originId: (number | null) | string;
        originLevel?: number | null;
        units: "metric" | "imperial";
        venueId: string;
        waypoints?: string | null;
    }
}
declare namespace woosmap.map {
    /**
     * UI Option of the Indoor widget.
     */
    interface IndoorWidgetOptionsui {
        primaryColor: string;
        secondaryColor: string;
    }
}
declare namespace woosmap.map {
    /**
     * Level of a Venue
     */
    interface Level {
        bbox: number[];
        level: number;
        name?: string | null;
    }
}
declare namespace woosmap.map {
    /**
     * Options of the Indoor widget.
     */
    interface IndoorWidgetOptions {
        /**
         * Set directions mode/routing profile
         */
        autocompleteWithDistance?: boolean;
        /**
         * Areas to avoid while routing. Useful when certain areas of the venues are restricted or under maintenance.
         * Expected format `level;lat,lng;lat,lng;lat,lng|level;lat,lng;lat,lng;lat,lng`
         */
        avoidZones?: string;
        /**
         * Filter the map and the autocomplete to display/search only labels and icons of POIs which are matching the filters
         */
        baseFilter?: string;
        /**
         * Set directions mode/routing profile
         */
        directionsMode?: string;
        /**
         * Sets whether to enable/disable navigation mode.
         */
        navigationMode?: boolean;
        /**
         * Set the custom colors of the indoor widget
         */
        ui?: woosmap.map.IndoorWidgetOptionsui;
        /**
         * Set units to use to show distance in directions itinerary
         */
        units?: "imperial" | "metric" | "";
    }
}
declare namespace woosmap.map {
    /**
     * Position indoor.
     */
    interface IndoorPosition {
        adjusted?: boolean | null;
        bearing?: number | null;
        forceFocus?: boolean | null;
        level: number;
        position: LatLngLiteral;
    }
}
declare namespace woosmap.map {
    /**
     * Indoor location composed of a latitude, a longitude and a level.
     */
    interface LatLngLevel {
        lat: number;
        level: number;
        lng: number;
    }
}
declare namespace woosmap.map {
    /**
     * Options to configure the Indoor Renderer.
     */
    interface IndoorRendererOptions {
        /**
         * Filter the map to display only labels and icons of POIs which are matching the filters
         */
        baseFilter?: string;
        /**
         * Center the map on the venue when initializing.
         */
        centerMap?: boolean;
        /**
         * Set default floor for the venue
         */
        defaultFloor?: number;
        /**
         * Icons to indicate origin and destination on the route
         */
        directionsIcons?: woosmap.map.IndoorDirectionsIcons;
        /**
         * Force the extrusion to be always visible.
         */
        forceExtrusion?: boolean;
        /**
         * Hide the level selector
         */
        hideLevelSelector?: boolean;
        /**
         * Renders map with a POI selected by pk or id
         */
        highlightPOI?: string;
        /**
         * Renders map with a POI selected by ref
         */
        highlightPOIByRef?: string;
        /**
         * Sets custom icon for venue markers
         */
        icon?: woosmap.map.IndoorRendererOptionsIcon;
        /**
         * The position to place the level selector. Possible values are top(left) and right.
         */
        levelSelectorPosition?: "auto" | "top" | "right";
        /**
         * Enforces the view of the renderer.
         */
        responsive?: "mobile" | "desktop" | "auto";
        /**
         * Show the routing paths
         */
        showRoutingPaths?: boolean;
        /**
         * Renders map with the custom theme provided.
         */
        theme?: string;
        /**
         * Display an infowindow to highlight a selected POI
         */
        useInfoWindow?: boolean;
        /**
         * Set default venue
         */
        venue?: string;
    }
}
declare namespace woosmap.map {
    /**
     * Array of lat, lon coordinates.
     */
    type PolylineCoords = GeoJSONPosition[];
}
declare namespace woosmap.map {
    /**
     * Building of a venue.
     */
    interface Building {
        cover?: string | null;
        description?: string | null;
        levels: woosmap.map.Level[];
        localized_name?: {} | null;
        logo?: string | null;
        name?: string | null;
        opening_hours?: string | null;
        ref?: string | null;
    }
}
declare namespace woosmap.map {
    /**
     * List of venues.
     */
    interface VenuesResult {
        venues: woosmap.map.Venue[];
    }
}
declare namespace woosmap.map {
    /**
     * Indoor distance object.
     */
    interface IndoorDistance {
        text: string;
        value: number;
    }
}
declare namespace woosmap.map.Indoor {
    /**
     * Collection of poi predictions
     */
    interface Predictions {
        predictions: woosmap.map.Indoor.Prediction[];
        type: "Array";
    }
}
declare namespace woosmap.map {
    /**
     * Indoor duration object.
     */
    interface IndoorDuration {
        text: string;
        value: number;
    }
}
declare namespace woosmap.map.Indoor {
    /**
     * Autocomplete predictions
     */
    interface Prediction {
        building?: string | null;
        distance?: number | null;
        id: number;
        level: number;
        name: string;
        ref?: string | null;
    }
}
declare namespace woosmap.map {
    /**
     * Indoor instruction object.
     */
    interface IndoorInstruction {
        instruction_type: string;
        summary: string;
    }
}
declare namespace woosmap.map {
    /**
     * Icons to indicate origin and destination on route
     */
    interface IndoorDirectionsIcons {
        destinationIcon?: woosmap.map.IndoorRendererOptionsIcon;
        originIcon?: woosmap.map.IndoorRendererOptionsIcon;
    }
}
declare namespace woosmap.map {
    /**
     * Indoor directions bounds.
     */
    type IndoorDirectionsBounds = number[];
}
declare namespace woosmap.map {
    /**
     * Icons to use to display venues on the map.
     */
    interface IndoorRendererOptionsIcon {
        anchor?: { x: number; y: number };
        scaledSize: { height: number; width: number };
        url: string;
    }
}
declare namespace woosmap.map {
    /**
     * Indoor directions route.
     */
    interface IndoorDirectionRoute {
        bounds: woosmap.map.IndoorDirectionsBounds;
        legs: woosmap.map.IndoorDirectionLeg[];
    }
}
declare namespace woosmap.map {
    /**
     * Indoor directions step.
     */
    interface IndoorStep {
        bearing_end: number;
        bearing_start: number;
        distance: woosmap.map.IndoorDistance;
        duration: woosmap.map.IndoorDuration;
        end_location: woosmap.map.LatLngLevel;
        instruction?: woosmap.map.IndoorInstruction | null;
        polyline: woosmap.map.PolylineCoords;
        start_location: woosmap.map.LatLngLevel;
    }
}
declare namespace woosmap.map {
    /**
     * Indoor directions leg.
     */
    interface IndoorDirectionLeg {
        distance: woosmap.map.IndoorDistance;
        duration: woosmap.map.IndoorDuration;
        end_location: woosmap.map.LatLngLevel;
        start_location: woosmap.map.LatLngLevel;
        steps: woosmap.map.IndoorStep[];
    }
}
declare namespace woosmap.map {
    /**
     * Indoor directions result.
     */
    interface IndoorDirectionResult {
        routes: woosmap.map.IndoorDirectionRoute[];
    }
}

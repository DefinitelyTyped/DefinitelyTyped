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
        setPosition(position: woosmap.map.LatLng | woosmap.map.LatLngLiteral): void;

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
        center: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
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
         * The initial map zoom level to start from.
         */
        zoom: number;
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
    interface Distance {
        text: string;
        value: number;
    }
}
declare namespace woosmap.map {
    interface Duration {
        text: string;
        value: number;
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
        origin: woosmap.map.LatLng | woosmap.map.LatLngLiteral;
        provideRouteAlternatives?: boolean;
        travelMode?: string;
        unitSystem?: string;
        waypoints?: woosmap.map.DirectionsWayPoint[];
    }
}
declare namespace woosmap.map {
    type Coordinates = [number, number];
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
    enum TravelMode {
        BICYCLING = "BICYCLING",
        DRIVING = "DRIVING",
        WALKING = "WALKING",
    }
}
declare namespace woosmap.map {
    enum UnitSystem {
        IMPERIAL = "IMPERIAL",
        METRIC = "METRIC",
    }
}
declare namespace woosmap.map {
    enum DirectionStatus {
        OK = "OK",
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

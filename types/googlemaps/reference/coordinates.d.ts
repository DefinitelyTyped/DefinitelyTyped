declare namespace google.maps {
    /**
     * A LatLng is a point in geographical coordinates: latitude and longitude.
     *
     * * Latitude ranges between -90 and 90 degrees, inclusive. Values above or below this range will be clamped to the
     *   range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the
     *   value is greater than 90, it will be set to 90.
     * * Longitude ranges between -180 and 180 degrees, inclusive. Values above or below this range will be wrapped so
     *   that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be
     *   converted to -170. This reflects the fact that longitudes wrap around the globe.
     *
     * Although the default map projection associates longitude with the x-coordinate of the map, and latitude with the
     * y-coordinate, the latitude coordinate is always written first, followed by the longitude.
     * Notice that you cannot modify the coordinates of a LatLng. If you want to compute another point, you have to
     * create a new one.
     * @example <caption>Most methods that accept LatLng objects also accept a {@link LatLngLiteral} object, so that the following are equivalent:</caption>
     * map.setCenter(new google.maps.LatLng(-34, 151));
     * map.setCenter({lat: -34, lng: 151});
     * @example <caption>The constructor also accepts literal objects, and converts them to instances of LatLng:</caption>
     * myLatLng = new google.maps.LatLng({lat: -34, lng: 151});
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng Maps JavaScript API}
     */
    class LatLng {
        /**
         * Creates a {@link LatLng} object representing a geographic point.
         * Note the ordering of latitude and longitude.
         * @param lat Latitude is specified in degrees within the range [-90, 90].
         * @param lng Longitude is specified in degrees within the range [-180, 180].
         * @param noWrap Set noWrap to true to enable values outside of this range.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.constructor Maps JavaScript API}
         */
        constructor(lat: number, lng: number, noWrap?: boolean);

        /**
         * Creates a {@link LatLng} object representing a geographic point.
         * @param literal Object literal.
         * @param noWrap Set noWrap to true to enable values outside of this range.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.constructor Maps JavaScript API}
         */
        constructor(literal: LatLngLiteral, noWrap?: boolean);

        /**
         * Comparison function.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.equals Maps JavaScript API}
         */
        equals(other: LatLng): boolean;

        /**
         * Returns the latitude in degrees.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.lat Maps JavaScript API}
         */
        lat(): number;

        /**
         * Returns the longitude in degrees.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.lng Maps JavaScript API}
         */
        lng(): number;

        /**
         * Converts to JSON representation. This function is intended to be used via {@link JSON.stringify}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.toJSON Maps JavaScript API}
         */
        toJSON(): LatLngLiteral;

        /**
         * Converts to string representation.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.toString Maps JavaScript API}
         */
        toString(): string;

        /**
         * Returns a string of the form "lat,lng" for this LatLng. We round the lat/lng values to 6 decimal places by
         * default.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng.toUrlValue Maps JavaScript API}
         */
        toUrlValue(precision?: number): string;
    }

    /**
     * Object literals are accepted in place of {@link LatLng} objects, as a convenience, in many places. These are
     * converted to {@link LatLng} objects when the Maps API encounters them.
     *
     * **LatLng object literals are not supported in the Geometry library.**
     * @example
     * map.setCenter({lat: -34, lng: 151});
     * new google.maps.Marker({position: {lat: -34, lng: 151}, map: map});
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral Maps JavaScript API}
     */
    interface LatLngLiteral {
        /**
         * Latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is
         * less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral.lat Maps JavaScript API}
         */
        lat: number;

        /**
         * Longitude in degrees. Values outside the range [-180, 180] will be wrapped so that they fall within the
         * range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This
         * reflects the fact that longitudes wrap around the globe.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral.lng Maps JavaScript API}
         */
        lng: number;
    }

    /**
     * @see {@link LatLngLiteral}.
     */
    interface ReadonlyLatLngLiteral {
        /**
         * @see {@link LatLngLiteral#lat}
         */
        readonly lat: number;

        /**
         * @see {@link LatLngLiteral#lng}
         */
        readonly lng: number;
    }

    /**
     * A LatLngBounds instance represents a rectangle in geographical coordinates, including one that crosses the 180
     * degrees longitudinal meridian.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds Maps JavaScript API}
     */
    class LatLngBounds {
        /**
         * Constructs a rectangle from the points at its south-west and north-east corners.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.constructor Maps JavaScript API}
         */
        constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral);

        /**
         * Returns true if the given lat/lng is in this bounds.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.contains Maps JavaScript API}
         */
        contains(latLng: LatLng | LatLngLiteral): boolean;

        /**
         * Returns true if this bounds approximately equals the given bounds.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.equals Maps JavaScript API}
         */
        equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;

        /**
         * Extends this bounds to contain the given point.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.extend Maps JavaScript API}
         */
        extend(point: LatLng | LatLngLiteral): LatLngBounds;

        /**
         * Computes the center of this LatLngBounds
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.getCenter Maps JavaScript API}
         */
        getCenter(): LatLng;

        /**
         * Returns the north-east corner of this bounds.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.getNorthEast Maps JavaScript API}
         */
        getNorthEast(): LatLng;

        /**
         * Returns the south-west corner of this bounds.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.getSouthWest Maps JavaScript API}
         */
        getSouthWest(): LatLng;

        /**
         * Returns true if this bounds shares any points with the other bounds.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.intersects Maps JavaScript API}
         */
        intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;

        /**
         * Returns if the bounds are empty.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.isEmpty Maps JavaScript API}
         */
        isEmpty(): boolean;

        /**
         * Converts to JSON representation. This function is intended to be used via {@link JSON.stringify}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.toJSON Maps JavaScript API}
         */
        toJSON(): LatLngBoundsLiteral;

        /**
         * Converts the given map bounds to a lat/lng span.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.toSpan Maps JavaScript API}
         */
        toSpan(): LatLng;

        /**
         * Converts to string.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.toString Maps JavaScript API}
         */
        toString(): string;

        /**
         * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the
         * southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.toUrlValue Maps JavaScript API}
         */
        toUrlValue(precision?: number): string;

        /**
         * Extends this bounds to contain the union of this and the given bounds.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.union Maps JavaScript API}
         */
        union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
    }

    /**
     * Object literals are accepted in place of {@link LatLngBounds} objects throughout the API. These are automatically
     * converted to {@link LatLngBounds} objects. All {@link LatLngBoundsLiteral#south south},
     * {@link LatLngBoundsLiteral#west west}, {@link LatLngBoundsLiteral#north north} and
     * {@link LatLngBoundsLiteral#east east} must be set, otherwise an exception is thrown.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBoundsLiteral Maps JavaScript API}
     */
    interface LatLngBoundsLiteral {
        /**
         * East longitude in degrees. Values outside the range [-180, 180] will be wrapped to the range [-180, 180]. For
         * example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects
         * the fact that longitudes wrap around the globe.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBoundsLiteral.east Maps JavaScript API}
         */
        east: number;

        /**
         * North latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value
         * specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBoundsLiteral.north Maps JavaScript API}
         */
        north: number;

        /**
         * South latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value
         * specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBoundsLiteral.south Maps JavaScript API}
         */
        south: number;

        /**
         * West longitude in degrees. Values outside the range [-180, 180] will be wrapped to the range [-180, 180]. For
         * example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects
         * the fact that longitudes wrap around the globe.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBoundsLiteral.west Maps JavaScript API}
         */
        west: number;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point Maps JavaScript API}
     */
    class Point {
        /**
         * A point on a two-dimensional plane.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point.constructor Maps JavaScript API}
         */
        constructor(x: number, y: number);

        /**
         * The X coordinate
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point.x Maps JavaScript API}
         */
        x: number;

        /**
         * The Y coordinate
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point.y Maps JavaScript API}
         */
        y: number;

        /**
         * Compares two Points
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point.equals Maps JavaScript API}
         */
        equals(other: Point): boolean;

        /**
         * Returns a string representation of this Point.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point.toString Maps JavaScript API}
         */
        toString(): string;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Size Maps JavaScript API}
     */
    class Size {
        /**
         * Two-dimensional size.
         * @param width the distance on the x-axis
         * @param height the distance on the y-axis
         * @param widthUnit
         * @param heightUnit
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Size.constructor Maps JavaScript API}
         */
        constructor(width: number, height: number, widthUnit?: string, heightUnit?: string);

        /**
         * The height along the y-axis, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Size.height Maps JavaScript API}
         */
        height: number;

        /**
         * The width along the x-axis, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Size.width Maps JavaScript API}
         */
        width: number;

        /**
         * Compares two Sizes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Size.equals Maps JavaScript API}
         */
        equals(other: Size): boolean;

        /**
         * Returns a string representation of this Size.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Size.toString Maps JavaScript API}
         */
        toString(): string;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Padding Maps JavaScript API}
     */
    interface Padding {
        /**
         * Padding for the bottom, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Padding.bottom Maps JavaScript API}
         */
        bottom?: number;

        /**
         * Padding for the left, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Padding.left Maps JavaScript API}
         */
        left?: number;

        /**
         * Padding for the right, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Padding.right Maps JavaScript API}
         */
        right?: number;

        /**
         * Padding for the top, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#Padding.top Maps JavaScript API}
         */
        top?: number;
    }

    /**
     * Object literal which represents a circle.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#CircleLiteral Maps JavaScript API}
     */
    interface CircleLiteral extends CircleOptions {
        /**
         * The center of the Circle.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#CircleLiteral.center Maps JavaScript API}
         */
        center?: LatLng | LatLngLiteral;

        /**
         * The radius in meters on the Earth's surface.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#CircleLiteral.radius Maps JavaScript API}
         */
        radius?: number;
    }
}

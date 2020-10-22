declare namespace google.maps {
    /**
     * A LatLng is a point in geographical coordinates: latitude and longitude.
     *
     * * Latitude ranges between -90 and 90 degrees, inclusive. Values above or
     *   below this range will be clamped to the range [-90, 90]. This means
     *   that if the value specified is less than -90, it will be set to -90.
     *   And if the value is greater than 90, it will be set to 90.
     * * Longitude ranges between -180 and 180 degrees, inclusive. Values above
     *   or below this range will be wrapped so that they fall within the
     *   range. For example, a value of -190 will be converted to 170. A value
     *   of 190 will be converted to -170. This reflects the fact that
     *   longitudes wrap around the globe.
     *
     * Although the default map projection associates longitude with the
     * x-coordinate of the map, and latitude with the y-coordinate, the
     * latitude coordinate is always written first, followed by the longitude.
     * Notice that you cannot modify the coordinates of a LatLng. If you want
     * to compute another point, you have to create a new one.
     */
    class LatLng {
        /**
         * Creates a LatLng object representing a geographic point.
         * Note the ordering of latitude and longitude.
         * @param lat Latitude is specified in degrees within the range [-90, 90].
         * @param lng Longitude is specified in degrees within the range [-180,
         *     180].
         * @param noWrap Set noWrap to true to enable values outside of this range.
         */
        constructor(lat: number, lng: number, noWrap?: boolean);

        /**
         * Creates a LatLng object representing a geographic point.
         * @param literal Object literal.
         * @param noWrap Set noWrap to true to enable values outside of this range.
         */
        constructor(literal: LatLngLiteral, noWrap?: boolean);

        /** Comparison function. */
        equals(other: LatLng): boolean;

        /** Returns the latitude in degrees. */
        lat(): number;

        /** Returns the longitude in degrees. */
        lng(): number;

        /** Converts to string representation. */
        toString(): string;

        /**
         * Returns a string of the form "lat,lng". We round the lat/lng values to 6
         * decimal places by default.
         */
        toUrlValue(precision?: number): string;

        /**
         * Converts to JSON representation. This function is intended to be used
         * via JSON.stringify.
         */
        toJSON(): LatLngLiteral;
    }

    /**
     * Object literals are accepted in place of {@link LatLng} objects, as a
     * convenience, in many places. These are converted to {@link LatLng} objects
     * when the Maps API encounters them.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral Maps JavaScript API}
     */
    interface LatLngLiteral {
        /**
         * Latitude in degrees. Values will be clamped to the range [-90, 90]. This
         * means that if the value specified is less than -90, it will be set to
         * -90. And if the value is greater than 90, it will be set to 90.
         */
        lat: number;

        /**
         * Longitude in degrees. Values outside the range [-180, 180] will be
         * wrapped so that they fall within the range. For example, a value of -190
         * will be converted to 170. A value of 190 will be converted to -170. This
         * reflects the fact that longitudes wrap around the globe.
         */
        lng: number;
    }

    /** @see {@link LatLngLiteral}. */
    interface ReadonlyLatLngLiteral {
        /** @see {@link LatLngLiteral#lat} */
        readonly lat: number;

        /** @see {@link LatLngLiteral#lng} */
        readonly lng: number;
    }

    /**
     * A LatLngBounds instance represents a rectangle in geographical coordinates,
     * including one that crosses the 180 degrees longitudinal meridian.
     */
    class LatLngBounds {
        /**
         * Constructs a rectangle from the points at its south-west and north-east
         * corners.
         */
        constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral);

        /** Returns true if the given lat/lng is in this bounds. */
        contains(latLng: LatLng | LatLngLiteral): boolean;

        /** Returns true if this bounds approximately equals the given bounds. */
        equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;

        /** Extends this bounds to contain the given point. */
        extend(point: LatLng | LatLngLiteral): LatLngBounds;

        /** Computes the center of this LatLngBounds */
        getCenter(): LatLng;

        /** Returns the north-east corner of this bounds. */
        getNorthEast(): LatLng;

        /** Returns the south-west corner of this bounds. */
        getSouthWest(): LatLng;

        /** Returns true if this bounds shares any points with the other bounds. */
        intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;

        /** Returns if the bounds are empty. */
        isEmpty(): boolean;

        /**
         * Converts to JSON representation. This function is intended to be used
         * via JSON.stringify.
         */
        toJSON(): LatLngBoundsLiteral;

        /** Converts the given map bounds to a lat/lng span. */
        toSpan(): LatLng;

        /** Converts to string. */
        toString(): string;

        /**
         * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this
         * bounds, where "lo" corresponds to the southwest corner of the bounding
         * box, while "hi" corresponds to the northeast corner of that box.
         */
        toUrlValue(precision?: number): string;

        /**
         * Extends this bounds to contain the union of this and the given bounds.
         */
        union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
    }

    interface LatLngBoundsLiteral {
        east: number;

        north: number;

        south: number;

        west: number;
    }

    class Point {
        /** A point on a two-dimensional plane. */
        constructor(x: number, y: number);

        /** The X coordinate */
        x: number;

        /** The Y coordinate */
        y: number;

        /** Compares two Points */
        equals(other: Point): boolean;

        /** Returns a string representation of this Point. */
        toString(): string;
    }

    class Size {
        constructor(width: number, height: number, widthUnit?: string, heightUnit?: string);

        height: number;

        width: number;

        equals(other: Size): boolean;

        toString(): string;
    }

    interface Padding {
        bottom: number;

        left: number;

        right: number;

        top: number;
    }

    interface CircleLiteral extends CircleOptions {
        /** The center of the Circle. */
        center?: LatLng | LatLngLiteral;

        /** The radius in meters on the Earth's surface. */
        radius?: number;
    }
}

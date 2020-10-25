declare namespace google.maps {
    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder Maps JavaScript API}
     */
    class Geocoder {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode Maps JavaScript API}
         */
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest Maps JavaScript API}
     */
    interface GeocoderRequest {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.address Maps JavaScript API}
         */
        address?: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.bounds Maps JavaScript API}
         */
        bounds?: LatLngBounds | LatLngBoundsLiteral;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.componentRestrictions Maps JavaScript API}
         */
        componentRestrictions?: GeocoderComponentRestrictions;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.location Maps JavaScript API}
         */
        location?: LatLng | LatLngLiteral;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.placeId Maps JavaScript API}
         */
        placeId?: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.region Maps JavaScript API}
         */
        region?: string;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions Maps JavaScript API}
     */
    interface GeocoderComponentRestrictions {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.administrativeArea Maps JavaScript API}
         */
        administrativeArea?: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.country Maps JavaScript API}
         */
        country?: string | string[];

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.locality Maps JavaScript API}
         */
        locality?: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.postalCode Maps JavaScript API}
         */
        postalCode?: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.route Maps JavaScript API}
         */
        route?: string;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus Maps JavaScript API}
     */
    enum GeocoderStatus {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.ERROR Maps JavaScript API}
         */
        ERROR = 'ERROR',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.INVALID_REQUEST Maps JavaScript API}
         */
        INVALID_REQUEST = 'INVALID_REQUEST',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.OK Maps JavaScript API}
         */
        OK = 'OK',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.OVER_QUERY_LIMIT Maps JavaScript API}
         */
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.REQUEST_DENIED Maps JavaScript API}
         */
        REQUEST_DENIED = 'REQUEST_DENIED',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.UNKNOWN_ERROR Maps JavaScript API}
         */
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.ZERO_RESULTS Maps JavaScript API}
         */
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult Maps JavaScript API}
     */
    interface GeocoderResult {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.address_components Maps JavaScript API}
         */
        address_components: GeocoderAddressComponent[];

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.formatted_address Maps JavaScript API}
         */
        formatted_address: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.geometry Maps JavaScript API}
         */
        geometry: GeocoderGeometry;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.partial_match Maps JavaScript API}
         */
        partial_match: boolean;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.place_id Maps JavaScript API}
         */
        place_id: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.postcode_localities Maps JavaScript API}
         */
        postcode_localities: string[];

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.types Maps JavaScript API}
         */
        types: string[];
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent Maps JavaScript API}
     */
    interface GeocoderAddressComponent {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent.long_name Maps JavaScript API}
         */
        long_name: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent.short_name Maps JavaScript API}
         */
        short_name: string;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent.types Maps JavaScript API}
         */
        types: string[];
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry Maps JavaScript API}
     */
    interface GeocoderGeometry {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.bounds Maps JavaScript API}
         */
        bounds: LatLngBounds;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.location Maps JavaScript API}
         */
        location: LatLng;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.location_type Maps JavaScript API}
         */
        location_type: GeocoderLocationType;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.viewport Maps JavaScript API}
         */
        viewport: LatLngBounds;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType Maps JavaScript API}
     */
    enum GeocoderLocationType {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.APPROXIMATE Maps JavaScript API}
         */
        APPROXIMATE = 'APPROXIMATE',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.GEOMETRIC_CENTER Maps JavaScript API}
         */
        GEOMETRIC_CENTER = 'GEOMETRIC_CENTER',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.RANGE_INTERPOLATED Maps JavaScript API}
         */
        RANGE_INTERPOLATED = 'RANGE_INTERPOLATED',

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.ROOFTOP Maps JavaScript API}
         */
        ROOFTOP = 'ROOFTOP',
    }
}

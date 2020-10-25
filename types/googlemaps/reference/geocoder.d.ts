declare namespace google.maps {
    /**
     * A service for converting between an address and a {@link LatLng}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder Maps JavaScript API}
     */
    class Geocoder {
        /**
         * Creates a new instance of a Geocoder that sends geocode requests to Google servers.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.constructor Maps JavaScript API}
         */
        constructor();

        /**
         * Geocode a request.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode Maps JavaScript API}
         */
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
    }

    /**
     * The specification for a geocoding request to be sent to the {@link Geocoder}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest Maps JavaScript API}
     */
    interface GeocoderRequest {
        /**
         * Address to geocode. One, and only one, of {@link address}, {@link location} and {@link placeId} must be
         * supplied.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.address Maps JavaScript API}
         */
        address?: string;

        /**
         * {@link LatLngBounds} within which to search.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.bounds Maps JavaScript API}
         */
        bounds?: LatLngBounds | LatLngBoundsLiteral;

        /**
         * Components are used to restrict results to a specific area. A filter consists of one or more of:
         * {@link GeocoderComponentRestrictions#route route}, {@link GeocoderComponentRestrictions#locality locality},
         * {@link GeocoderComponentRestrictions#administrativeArea administrativeArea},
         * {@link GeocoderComponentRestrictions#postalCode postalCode},
         * {@link GeocoderComponentRestrictions#country country}. Only the results that match all the filters will be
         * returned. Filter values support the same methods of spelling correction and partial matching as other
         * geocoding requests.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.componentRestrictions Maps JavaScript API}
         */
        componentRestrictions?: GeocoderComponentRestrictions;

        /**
         * {@link LatLng} (or {@link LatLngLiteral}) for which to search. The geocoder performs a reverse geocode. See
         * {@link https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding Reverse Geocoding}
         * for more information. One, and only one, of {@link address}, {@link location} and {@link placeId} must be
         * supplied.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.location Maps JavaScript API}
         */
        location?: LatLng | LatLngLiteral;

        /**
         * The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database
         * and on Google Maps. Learn more about {@link https://developers.google.com/places/place-id place IDs} in the
         * Places API developer guide. The geocoder performs a reverse geocode. See
         * {@link https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding Reverse Geocoding}
         * for more information. One, and only one, of {@link address}, {@link location} and {@link placeId} must be
         * supplied.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.placeId Maps JavaScript API}
         */
        placeId?: string;

        /**
         * Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest.region Maps JavaScript API}
         */
        region?: string;
    }

    /**
     * `GeocoderComponentRestrictions` represents a set of filters that resolve to a specific area. For details on how
     * this works, see
     * {@link https://developers.google.com/maps/documentation/javascript/geocoding#ComponentFiltering Geocoding Component Filtering}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions Maps JavaScript API}
     */
    interface GeocoderComponentRestrictions {
        /**
         * Matches all the `administrative_area levels`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.administrativeArea Maps JavaScript API}
         */
        administrativeArea?: string;

        /**
         * Matches a country name or a two letter ISO 3166-1 country code.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.country Maps JavaScript API}
         */
        country?: string | string[];

        /**
         * Matches against both `locality` and `sublocality` types.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.locality Maps JavaScript API}
         */
        locality?: string;

        /**
         * Matches `postal_code` and `postal_code_prefix`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.postalCode Maps JavaScript API}
         */
        postalCode?: string;

        /**
         * Matches the long or short name of a `route`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderComponentRestrictions.route Maps JavaScript API}
         */
        route?: string;
    }

    /**
     * The status returned by the {@link Geocoder} on the completion of a call to {@link Geocoder#geocode geocode()}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus Maps JavaScript API}
     */
    enum GeocoderStatus {
        /**
         * There was a problem contacting the Google servers.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.ERROR Maps JavaScript API}
         */
        ERROR = 'ERROR',

        /**
         * This {@link GeocoderRequest} was invalid.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.INVALID_REQUEST Maps JavaScript API}
         */
        INVALID_REQUEST = 'INVALID_REQUEST',

        /**
         * The response contains a valid {@link GeocoderResult}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.OK Maps JavaScript API}
         */
        OK = 'OK',

        /**
         * The webpage has gone over the requests limit in too short a period of time.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.OVER_QUERY_LIMIT Maps JavaScript API}
         */
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',

        /**
         * The webpage is not allowed to use the geocoder.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.REQUEST_DENIED Maps JavaScript API}
         */
        REQUEST_DENIED = 'REQUEST_DENIED',

        /**
         * A geocoding request could not be processed due to a server error. The request may succeed if you try again.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.UNKNOWN_ERROR Maps JavaScript API}
         */
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',

        /**
         * No result was found for this {@link GeocoderRequest}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus.ZERO_RESULTS Maps JavaScript API}
         */
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    /**
     * A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects.
     * Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes a
     * {@link LatLng} object.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult Maps JavaScript API}
     */
    interface GeocoderResult {
        /**
         * An array of {@link GeocoderAddressComponent}s
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.address_components Maps JavaScript API}
         */
        address_components: GeocoderAddressComponent[];

        /**
         * A string containing the human-readable address of this location.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.formatted_address Maps JavaScript API}
         */
        formatted_address: string;

        /**
         * A {@link GeocoderGeometry} object
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.geometry Maps JavaScript API}
         */
        geometry: GeocoderGeometry;

        /**
         * Whether the geocoder did not return an exact match for the original request, though it was able to match part
         * of the requested address.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.partial_match Maps JavaScript API}
         */
        partial_match: boolean;

        /**
         * The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database
         * and on Google Maps. Learn more about {@link https://developers.google.com/places/place-id Place IDs} in the
         * Places API developer guide.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.place_id Maps JavaScript API}
         */
        place_id: string;

        /**
         * An array of strings denoting all the localities contained in a postal code. This is only present when the
         * result is a postal code that contains multiple localities. This array can contain up to 10 localities.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.postcode_localities Maps JavaScript API}
         */
        postcode_localities: string[];

        /**
         * An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer
         * to the
         * {@link https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes Address Component Types}
         * section of the Developer's Guide.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderResult.types Maps JavaScript API}
         */
        types: string[];
    }

    /**
     * A single address component within a {@link GeocoderResult}. A full address may consist of multiple address
     * components.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent Maps JavaScript API}
     */
    interface GeocoderAddressComponent {
        /**
         * The full text of the address component
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent.long_name Maps JavaScript API}
         */
        long_name: string;

        /**
         * The abbreviated, short text of the given address component
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent.short_name Maps JavaScript API}
         */
        short_name: string;

        /**
         * An array of strings denoting the type of this address component. A list of valid types can be found
         * {@link https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes here}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent.types Maps JavaScript API}
         */
        types: string[];
    }

    /**
     * Geometry information about this {@link GeocoderResult}
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry Maps JavaScript API}
     */
    interface GeocoderGeometry {
        /**
         * The precise bounds of this {@link GeocoderResult}, if applicable
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.bounds Maps JavaScript API}
         */
        bounds: LatLngBounds;

        /**
         * The latitude/longitude coordinates of this result
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.location Maps JavaScript API}
         */
        location: LatLng;

        /**
         * The type of location returned in {@link location}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.location_type Maps JavaScript API}
         */
        location_type: GeocoderLocationType;

        /**
         * The bounds of the recommended viewport for displaying this {@link GeocoderResult}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderGeometry.viewport Maps JavaScript API}
         */
        viewport: LatLngBounds;
    }

    /**
     * Describes the type of location returned from a geocode.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType Maps JavaScript API}
     */
    enum GeocoderLocationType {
        /**
         * The returned result is approximate.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.APPROXIMATE Maps JavaScript API}
         */
        APPROXIMATE = 'APPROXIMATE',

        /**
         * The returned result is the geometric center of a result such a line (e.g. street) or polygon (region).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.GEOMETRIC_CENTER Maps JavaScript API}
         */
        GEOMETRIC_CENTER = 'GEOMETRIC_CENTER',

        /**
         * The returned result reflects an approximation (usually on a road) interpolated between two precise points
         * (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable
         * for a street address.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.RANGE_INTERPOLATED Maps JavaScript API}
         */
        RANGE_INTERPOLATED = 'RANGE_INTERPOLATED',

        /**
         * The returned result reflects a precise geocode.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderLocationType.ROOFTOP Maps JavaScript API}
         */
        ROOFTOP = 'ROOFTOP',
    }
}

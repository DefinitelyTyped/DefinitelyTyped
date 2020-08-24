declare namespace google.maps {
    /***** Services *****/
    class Geocoder {
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
    }

    interface GeocoderRequest {
        address?: string;
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        componentRestrictions?: GeocoderComponentRestrictions;
        location?: LatLng | LatLngLiteral;
        placeId?: string;
        region?: string;
    }

    interface GeocoderComponentRestrictions {
        administrativeArea?: string;
        country?: string | string[];
        locality?: string;
        postalCode?: string;
        route?: string;
    }

    enum GeocoderStatus {
        ERROR = 'ERROR',
        INVALID_REQUEST = 'INVALID_REQUEST',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    interface GeocoderResult {
        address_components: GeocoderAddressComponent[];
        formatted_address: string;
        geometry: GeocoderGeometry;
        partial_match: boolean;
        place_id: string;
        postcode_localities: string[];
        types: string[];
    }

    interface GeocoderAddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
    }

    interface GeocoderGeometry {
        bounds: LatLngBounds;
        location: LatLng;
        location_type: GeocoderLocationType;
        viewport: LatLngBounds;
    }

    enum GeocoderLocationType {
        APPROXIMATE = 'APPROXIMATE',
        GEOMETRIC_CENTER = 'GEOMETRIC_CENTER',
        RANGE_INTERPOLATED = 'RANGE_INTERPOLATED',
        ROOFTOP = 'ROOFTOP',
    }
}

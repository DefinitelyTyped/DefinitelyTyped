declare namespace google.maps.places {
    // TODO find source documentation
    interface RadarSearchRequest {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        keyword?: string;
        location?: LatLng | LatLngLiteral;
        name?: string;
        radius?: number;
        types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
        type?: string;
    }

    class PlacesService {
        constructor(attrContainer: HTMLDivElement | Map);
        findPlaceFromPhoneNumber(
            request: FindPlaceFromPhoneNumberRequest,
            callback: (results: PlaceResult[], status: PlacesServiceStatus) => void,
        ): void;
        findPlaceFromQuery(
            request: FindPlaceFromQueryRequest,
            callback: (results: PlaceResult[], status: PlacesServiceStatus) => void,
        ): void;
        getDetails(
            request: PlaceDetailsRequest,
            callback: (result: PlaceResult, status: PlacesServiceStatus) => void,
        ): void;
        nearbySearch(
            request: PlaceSearchRequest,
            callback: (results: PlaceResult[], status: PlacesServiceStatus, pagination: PlaceSearchPagination) => void,
        ): void;
        /**
         * @deprecated Radar search is deprecated as of June 30, 2018. After that
         *     time, this feature will no longer be available.
         */
        radarSearch(
            request: RadarSearchRequest,
            callback: (results: PlaceResult[], status: PlacesServiceStatus) => void,
        ): void;
        textSearch(
            request: TextSearchRequest,
            callback: (results: PlaceResult[], status: PlacesServiceStatus, pagination: PlaceSearchPagination) => void,
        ): void;
    }

    interface PlaceDetailsRequest {
        placeId: string;
        fields?: string[];
        sessionToken?: AutocompleteSessionToken;
    }

    interface FindPlaceFromPhoneNumberRequest {
        fields: string[];
        locationBias?: LocationBias;
        phoneNumber: string;
    }

    interface FindPlaceFromQueryRequest {
        fields: string[];
        locationBias?: LocationBias;
        query: string;
    }

    interface PlaceSearchRequest {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        keyword?: string;
        location?: LatLng | LatLngLiteral;
        maxPriceLevel?: number;
        minPriceLevel?: number;
        name?: string;
        openNow?: boolean;
        radius?: number;
        rankBy?: RankBy;
        types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
        type?: string;
    }

    interface TextSearchRequest {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        location?: LatLng | LatLngLiteral;
        query: string;
        radius?: number;
        types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
        type?: string;
    }

    enum RankBy {
        PROMINENCE = 0,
        DISTANCE = 1,
    }

    type LocationBias = LatLng | LatLngLiteral | LatLngBounds | LatLngBoundsLiteral | Circle | CircleLiteral | string;

    enum PlacesServiceStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        NOT_FOUND = 'NOT_FOUND',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    interface PlaceSearchPagination {
        nextPage(): void;
        hasNextPage: boolean;
    }

    interface PlaceResult {
        address_components?: GeocoderAddressComponent[];
        adr_address?: string;
        aspects?: PlaceAspectRating[];
        formatted_address?: string;
        formatted_phone_number?: string;
        geometry?: PlaceGeometry;
        html_attributions?: string[];
        icon?: string;
        id?: string;
        international_phone_number?: string;
        name: string;
        opening_hours?: OpeningHours;
        permanently_closed?: boolean;
        photos?: PlacePhoto[];
        place_id?: string;
        plus_code?: PlacePlusCode;
        price_level?: number;
        rating?: number;
        reviews?: PlaceReview[];
        types?: string[];
        url?: string;
        user_ratings_total?: number;
        /**
         * @deprecated utc_offset is deprecated as of November 2019 and will be turned off in November 2020.
         *      Use PlaceResult.utc_offset_minutes instead.
         */
        utc_offset?: number;
        utc_offset_minutes?: number;
        vicinity?: string;
        website?: string;
    }

    interface PlaceAspectRating {
        rating: number;
        type: string;
    }

    // TODO add BusinessStatus https://developers.google.com/maps/documentation/javascript/reference/places-service#BusinessStatus

    interface PlaceGeometry {
        location: LatLng;
        viewport: LatLngBounds;
    }

    // TODO rename to PlaceOpeningHours https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHours
    interface OpeningHours {
        /**
         * @deprecated open_now is deprecated as of November 2019 and will be turned off in November 2020.
         *      Use the PlaceOpeningHours.isOpen function from a PlacesService.getDetails result instead.
         */
        open_now: boolean;
        periods: OpeningPeriod[];
        weekday_text: string[];
        isOpen(date?: Date): boolean;
    }

    // TODO rename to PlaceOpeningHoursPeriod https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursPeriod
    interface OpeningPeriod {
        open: OpeningHoursTime;
        close?: OpeningHoursTime;
    }

    // TODO rename to PlaceOpeningHoursTime https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime
    interface OpeningHoursTime {
        day: number;
        hours: number;
        minutes: number;
        nextDate: number;
        time: string;
    }

    interface PlacePlusCode {
        compound_code?: string;
        global_code: string;
    }

    interface PlacePhoto {
        height: number;
        html_attributions: string[];
        width: number;
        getUrl(opts: PhotoOptions): string;
    }

    interface PhotoOptions {
        maxHeight?: number;
        maxWidth?: number;
    }

    interface PlaceReview {
        aspects: PlaceAspectRating[];
        author_name: string;
        author_url?: string;
        language: string;
        profile_photo_url: string;
        // TODO rating is documented in the HTTP API (https://developers.google.com/places/web-service/details#PlaceDetailsResults) but not in the Javascript API.
        rating: number;
        relative_time_description: string;
        text: string;
        time: number;
    }
}

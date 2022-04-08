declare namespace google.maps.places {
    class AutocompleteService {
        constructor();
        getPlacePredictions(
            request: AutocompletionRequest,
            callback: (result: AutocompletePrediction[], status: PlacesServiceStatus) => void,
        ): void;
        getQueryPredictions(
            request: QueryAutocompletionRequest,
            callback: (result: QueryAutocompletePrediction[], status: PlacesServiceStatus) => void,
        ): void;
    }

    interface AutocompletionRequest {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        componentRestrictions?: ComponentRestrictions;
        input: string;
        location?: LatLng;
        offset?: number;

        /**
         * The location where {@link AutocompletePrediction#distance_meters} is calculated from.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest.origin Maps JavaScript API}
         */
        origin?: LatLng | LatLngLiteral;

        radius?: number;
        sessionToken?: AutocompleteSessionToken;
        types?: string[];
    }

    interface QueryAutocompletionRequest {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        input?: string;
        location?: LatLng;
        offset?: number;
        radius?: number;
    }

    class AutocompleteSessionToken {}

    interface ComponentRestrictions {
        country: string | string[];
    }

    interface AutocompletePrediction {
        description: string;

        /**
         * The distance in meters of the place from the {@link AutocompletionRequest#origin}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletePrediction.distance_meters Maps JavaScript API}
         */
        distance_meters?: number;

        id?: string;
        matched_substrings: PredictionSubstring[];
        place_id: string;
        reference: string;
        structured_formatting: AutocompleteStructuredFormatting;
        terms: PredictionTerm[];
        types: string[];
    }

    interface QueryAutocompletePrediction {
        description: string;
        id?: string;
        matched_substrings: PredictionSubstring[];
        place_id: string;
        terms: PredictionTerm[];
    }

    interface PredictionTerm {
        offset: number;
        value: string;
    }

    interface PredictionSubstring {
        length: number;
        offset: number;
    }

    // TODO: rename to StructuredFormatting https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#StructuredFormatting
    interface AutocompleteStructuredFormatting {
        main_text: string;
        main_text_matched_substrings: PredictionSubstring[];
        secondary_text: string;
        secondary_text_matched_substrings?: PredictionSubstring[];
    }
}

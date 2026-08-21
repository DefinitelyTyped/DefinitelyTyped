/// <reference types="google.maps" />

import { Component, JSX, ReactNode } from "react";

declare class ReactGooglePlacesSuggest extends Component<ReactGooglePlacesSuggest.Props> {}

declare namespace ReactGooglePlacesSuggest {
    type AutocompletionRequest = google.maps.places.AutocompletionRequest;
    type PlacesServiceStatus = google.maps.places.PlacesServiceStatus;
    type Prediction = google.maps.places.AutocompletePrediction;
    type GoogleMaps = typeof google.maps;
    type GeocodedPrediction = google.maps.GeocoderResult;

    interface Props {
        /** Undocumented */
        autocompletionRequest: AutocompletionRequest;

        /** Undocumented */
        children: ReactNode;

        /** injected by react-google-maps-loader */
        googleMaps: GoogleMaps;

        /** Handle no results when enter key is pressed */
        onNoResult?:
            | (
                (
                    geocodedPrediction: GeocodedPrediction,
                    originalPrediction: Prediction,
                ) => void
            )
            | undefined;

        /** Handle click on suggest */
        onSelectSuggest?:
            | (
                (
                    geocodedPrediction: GeocodedPrediction,
                    originalPrediction: Prediction,
                ) => void
            )
            | undefined;

        /** Handle places service status update */
        onStatusUpdate?: ((status: PlacesServiceStatus) => void) | undefined;

        /** Customize list item */
        customRender?: ((prediction?: Prediction) => JSX.Element | string) | undefined;

        /** Customize list */
        customContainerRender?: ((predictions: Prediction[]) => JSX.Element | string) | undefined;

        /**
         * Display the "Powered By Google" logo as required by the [Google Maps autocomplete terms and conditions](https://developers.google.com/maps/documentation/javascript/place-autocomplete#fig1).
         * (defaults to true. Not included when using customContainerRender prop)
         *
         * @default true
         */
        displayPoweredByGoogle?: boolean;

        /**
         * No results text, null to disable
         *
         * @default "No results"
         */
        textNoResults?: string | null | undefined;
    }
}

export = ReactGooglePlacesSuggest;

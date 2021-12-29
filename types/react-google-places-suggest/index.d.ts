// Type definitions for react-google-places-suggest 3.4
// Project: https://github.com/xuopled/react-google-places-suggest
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="google.maps" />
import { Component, ReactNode } from "react";

export default ReactGooglePlacesSuggest;

declare class ReactGooglePlacesSuggest extends Component<
    ReactGooglePlacesSuggest.Props
    > { }

declare namespace ReactGooglePlacesSuggest {
    type Prediction = google.maps.places.AutocompletePrediction;
    type GeocodedPrediction = google.maps.GeocoderResult;

    interface Props {
        autocompletionRequest: google.maps.places.AutocompletionRequest;
        children?: ReactNode | undefined;
        customRender?: ((prediction?: Prediction) => JSX.Element | string) | undefined;
        customContainerRender?: ((
            predictions: ReadonlyArray<Prediction>
        ) => JSX.Element | string) | undefined;
        googleMaps: typeof google.maps;
        onSelectSuggest?: ((
            geocodedPrediction: GeocodedPrediction,
            originalPrediction: Prediction
        ) => any) | undefined;
        textNoResults?: string | null | undefined;
    }
}

import * as React from "react";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

// @ts-expect-error -- Some props are required.
<ReactGooglePlacesSuggest />;

declare const autocompletionRequest: ReactGooglePlacesSuggest.AutocompletionRequest;
declare const googleMaps: ReactGooglePlacesSuggest.GoogleMaps;

// Required props
<ReactGooglePlacesSuggest
    autocompletionRequest={autocompletionRequest}
    children={null}
    googleMaps={googleMaps}
/>;

// Required props + other optional props
<ReactGooglePlacesSuggest
    autocompletionRequest={autocompletionRequest}
    children={null}
    googleMaps={googleMaps}
    onNoResult={(geocodedPrediction, originalPrediction) => {
        // $ExpectType GeocoderResult
        geocodedPrediction;

        // $ExpectType AutocompletePrediction
        originalPrediction;
    }}
    onSelectSuggest={(geocodedPrediction, originalPrediction) => {
        // $ExpectType GeocoderResult
        geocodedPrediction;

        // $ExpectType AutocompletePrediction
        originalPrediction;
    }}
    onStatusUpdate={(status) => {
        // $ExpectType PlacesServiceStatus
        status;
    }}
    customRender={(prediction) => {
        // $ExpectType AutocompletePrediction | undefined
        prediction;

        return <div />;
    }}
    customContainerRender={(predictions) => {
        // $ExpectType AutocompletePrediction[]
        predictions;

        return <div />;
    }}
    displayPoweredByGoogle={true}
    textNoResults="No results from props"
/>;

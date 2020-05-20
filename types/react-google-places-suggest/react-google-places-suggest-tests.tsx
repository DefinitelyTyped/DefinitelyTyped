import * as React from "react";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

const defaultProps: ReactGooglePlacesSuggest.Props = {
    googleMaps: google.maps,
    autocompletionRequest: { input: "" }
};

const ReactGooglePlacesSuggestWithChildrenTest: React.SFC = () => (
    <ReactGooglePlacesSuggest {...defaultProps}>
        <div />
    </ReactGooglePlacesSuggest>
);

const ReactGooglePlacesSuggestWithTextNoResultsPropTest: React.SFC = () => (
    <ReactGooglePlacesSuggest {...defaultProps} textNoResults="No results..." />
);

const ReactGooglePlacesSuggestWithCustomRenderPropTest: React.SFC = () => (
    <ReactGooglePlacesSuggest
        {...defaultProps}
        customRender={(prediction?: ReactGooglePlacesSuggest.Prediction) => {
            return "123";
        }}
    />
);

const ReactGooglePlacesSuggestWithOnSelectSuggestPropTest: React.SFC = () => (
    <ReactGooglePlacesSuggest
        {...defaultProps}
        onSelectSuggest={(geocodedPrediction, originalPrediction) => {
            return "123";
        }}
    />
);

const ReactGooglePlacesSuggestWithCustomContainerRenderPropTest: React.SFC = () => (
    <ReactGooglePlacesSuggest
        {...defaultProps}
        customContainerRender={(
            predictions: ReadonlyArray<ReactGooglePlacesSuggest.Prediction>
        ) => {
            return "123";
        }}
    />
);

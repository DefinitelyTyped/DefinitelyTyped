import * as React from "react";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

const defaultProps: ReactGooglePlacesSuggest.Props = {
    googleMaps: google.maps,
    autocompletionRequest: { input: "" }
};

const ReactGooglePlacesSuggestWithChildrenTest: React.FC = () => (
    <ReactGooglePlacesSuggest {...defaultProps}>
        <div />
    </ReactGooglePlacesSuggest>
);

const ReactGooglePlacesSuggestWithTextNoResultsPropTest: React.FC = () => (
    <ReactGooglePlacesSuggest {...defaultProps} textNoResults="No results..." />
);

const ReactGooglePlacesSuggestWithCustomRenderPropTest: React.FC = () => (
    <ReactGooglePlacesSuggest
        {...defaultProps}
        customRender={(prediction?: ReactGooglePlacesSuggest.Prediction) => {
            return "123";
        }}
    />
);

const ReactGooglePlacesSuggestWithOnSelectSuggestPropTest: React.FC = () => (
    <ReactGooglePlacesSuggest
        {...defaultProps}
        onSelectSuggest={(geocodedPrediction, originalPrediction) => {
            return "123";
        }}
    />
);

const ReactGooglePlacesSuggestWithCustomContainerRenderPropTest: React.FC = () => (
    <ReactGooglePlacesSuggest
        {...defaultProps}
        customContainerRender={(
            predictions: ReadonlyArray<ReactGooglePlacesSuggest.Prediction>
        ) => {
            return "123";
        }}
    />
);

import * as React from "react";
import ReactGoogleMapsLoader from "react-google-maps-loader";

const ReactGoogleMapsLoaderTest: React.FC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key" }}
        render={googleMaps => <div />}
    />
);

const ReactGoogleMapsLoaderWithLibrariesTest: React.FC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key", libraries: "places" }}
        render={googleMaps => <div />}
    />
);

const ReactGoogleMapsLoaderWithErrorHandlerTest: React.FC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key", libraries: "places" }}
        render={(googleMaps, error) => <div>{error}</div>}
    />
);

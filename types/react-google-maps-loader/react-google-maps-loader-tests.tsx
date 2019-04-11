import * as React from "react";
import ReactGoogleMapsLoader from "react-google-maps-loader";

const ReactGoogleMapsLoaderTest: React.SFC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key" }}
        render={googleMaps => <div />}
    />
);

const ReactGoogleMapsLoaderWithLibrariesTest: React.SFC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key", libraries: "places" }}
        render={googleMaps => <div />}
    />
);

const ReactGoogleMapsLoaderWithErrorHandlerTest: React.SFC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key", libraries: "places" }}
        render={(googleMaps, error) => <div>{error}</div>}
    />
);

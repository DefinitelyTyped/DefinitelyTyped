// Type definitions for react-google-maps-loader 4.2
// Project: https://github.com/xuopled/react-google-maps-loader
// Definitions by: Vasily Nesterov <https://github.com/vasilysn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="googlemaps" />
import { Component, ReactNode } from "react";

export default ReactGoogleMapsLoader;

declare class ReactGoogleMapsLoader extends Component<
    ReactGoogleMapsLoader.Props
> {}

declare namespace ReactGoogleMapsLoader {
    type GoogleMaps = typeof google.maps;

    interface Params {
        key: string;
        libraries?: string;
    }

    interface Props {
        params: Params;
        render: (googleMaps: GoogleMaps, error?: string | null) => ReactNode;
    }
}

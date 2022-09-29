// Type definitions for react-google-maps-loader 4.2
// Project: https://github.com/xuopled/react-google-maps-loader
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="google.maps" />
import { Component, ReactNode } from "react";

export default ReactGoogleMapsLoader;

declare class ReactGoogleMapsLoader extends Component<
    ReactGoogleMapsLoader.Props
> {}

declare namespace ReactGoogleMapsLoader {
    type GoogleMaps = typeof google.maps;

    interface Params {
        key: string;
        libraries?: string | undefined;
    }

    interface Props {
        params: Params;
        render: (googleMaps: GoogleMaps, error?: string | null) => ReactNode;
    }
}

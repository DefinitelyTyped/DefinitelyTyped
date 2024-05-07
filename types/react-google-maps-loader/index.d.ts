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

import * as L from "leaflet";

declare module "leaflet" {
    interface MapOptions {
        fullscreenControl?: true | FullscreenControlOptions | undefined;
    }

    interface FullscreenControlOptions extends ControlOptions {
        pseudoFullscreen?: boolean;
        title?: {
            "false": string;
            "true": string;
        };
    }

    interface Map {
        isFullscreen: () => boolean;
        toggleFullscreen: (options?: FullscreenControlOptions) => void;
    }
}

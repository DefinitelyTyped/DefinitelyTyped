// Type definitions for react-leaflet-fullscreen-plugin 1.0
// Project: https://github.com/elangobharathi/react-leaflet-fullscreen-plugin
// Definitions by: Zenoo <https://github.com/Zenoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface FullscreenProps {
    position?: "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    title?: string | undefined;
    titleCancel?: string | undefined;
    content?: string | undefined;
    forceSeparateButton?: boolean | undefined;
    forcePseudoFullscreen?: boolean | undefined;
    fullscreenElement?: false | HTMLElement | undefined;
    eventHandlers?: {
        enterFullscreen?: (event: Event) => void;
        exitFullscreen?: (event: Event) => void;
    } | undefined;
}

declare function Fullscreen(props: FullscreenProps): JSX.Element;

export default Fullscreen;

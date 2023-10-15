import * as React from "react";
import Fullscreen from "react-leaflet-fullscreen-plugin";

/**
 * Main component
 */
const Component = () => (
    <Fullscreen
        eventHandlers={{
            enterFullscreen: (event) => {},
            exitFullscreen: (event) => {},
        }}
        position="topleft"
        title="Full Screen"
        titleCancel="Exit Full Screen"
        content=""
        forceSeparateButton={false}
        forcePseudoFullscreen={false}
        fullscreenElement
    />
);

export default Component;

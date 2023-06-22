import Fullscreen from 'react-leaflet-fullscreen-plugin';
import * as React from 'react';

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

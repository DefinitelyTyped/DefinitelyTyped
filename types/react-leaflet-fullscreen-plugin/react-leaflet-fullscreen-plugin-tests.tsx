import * as React from 'react';
import Fullscreen from 'react-leaflet-fullscreen-plugin';

const FullscreenComponent = (
    <Fullscreen
      position="topright"
      forceSeparateButton={true}
      forcePseudoFullscreen={true}
      content={'<i>[]</i>'}
      fullscreenElement={false}
      title={'Open full screen'}
      titleCancel={'Close full screen'}
      eventHandlers={{
        enterFullscreen: (event) =>
          console.log('Enter fullscreen event', event),
        exitFullscreen: (event) =>
          console.log('Exit fullscreen event', event),
      }}
    />
);

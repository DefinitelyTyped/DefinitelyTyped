import * as React from 'react';

import PixiOverlay, { MarkersPropsPixiOverlay } from 'react-leaflet-pixi-overlay';

class PixiOverlayTest extends React.Component {
    markers: MarkersPropsPixiOverlay = [
        {
            id: 'randomStringOrNumber',
            iconColor: 'red',
            position: [-37.814, 144.96332],
            popup: '<div>All good!</div>',
            onClick: () => console.log('clicked'),
            tooltip: 'Hey!',
        },
        {
            id: '2',
            iconColor: 'blue',
            position: [-37.814, 144.96332],
            popup: 'Quack!',
            popupOpen: true,
            onClick: () => console.log('clicked'),
            tooltip: 'Nice!',
        },
    ];
    render() {
        return <PixiOverlay markers={this.markers} />;
    }
}

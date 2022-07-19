// Type definitions for react-leaflet-pixi-overlay 3.0
// Project: hhttps://github.com/knapcio/react-leaflet-pixi-overlay
// Definitions by: Guilherme Vier <https://github.com/Guilherm456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface MarkerPropsPixiOverlay {
    id: string | number;
    position: [number, number];
    iconColor?: string;
    popup?: string;
    popupOpen?: boolean;
    onClick?: () => void;
    tooltip?: string;
    customIcon?: string;
    iconId?: string;
    markerSpriteAnchor?: [number, number];
}

export interface MarkersPropsPixiOverlay extends Array<MarkerPropsPixiOverlay> {}

export interface PixiOverlayProps {
    markers: MarkersPropsPixiOverlay;
}

export default class extends React.Component<PixiOverlayProps> {}

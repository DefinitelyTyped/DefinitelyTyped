import * as React from "react";

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

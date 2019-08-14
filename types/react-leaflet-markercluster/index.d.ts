// Type definitions for react-leaflet-markercluster 2.0
// Project: https://github.com/YUzhva/react-leaflet-markercluster
// Definitions by: Adam Binford <https://github.com/Kimahriman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="leaflet.markercluster" />
import * as Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

export type MarkerClusterGroupProps = ReactLeaflet.MapLayerProps & Leaflet.MarkerClusterGroupOptions;

export default class MarkerClusterGroup<P extends MarkerClusterGroupProps = MarkerClusterGroupProps> extends ReactLeaflet.MapLayer<P> { }

/// <reference types="leaflet.markercluster" />
import * as Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";

export type MarkerClusterGroupProps = ReactLeaflet.MapLayerProps & Leaflet.MarkerClusterGroupOptions;

export default class MarkerClusterGroup<P extends MarkerClusterGroupProps = MarkerClusterGroupProps>
    extends ReactLeaflet.MapLayer<P>
{}

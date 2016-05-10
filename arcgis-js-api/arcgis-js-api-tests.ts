/// <reference path="arcgis-js-api.d.ts" />

import Map = require("esri/Map");
import MapView = require("esri/views/MapView");

export default class MapController {
    map: Map;
    mapView: MapView;
    
    start() {
        // Create a Map instance
        this.map = new Map({
            basemap: 'streets'
        });
        // Create a MapView instance (for 2D viewing) and reference the map instance
        this.mapView = new MapView({
            map: this.map
        });
    }
}
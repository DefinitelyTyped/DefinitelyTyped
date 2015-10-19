/// <reference path="arcgis-js-api.d.ts" />

import esri = require("esri");
import Map = require("esri/map");
import Point = require("esri/geometry/Point");

export = MapController;

class MapController {
  map: Map;

  constructor(public mapDiv: string) {
  }

  start() {
    var point = new Point(-122.45, 37.75); // long, lat

    var mapOptions: esri.MapOptions = {};
    mapOptions.basemap = "topo";
    mapOptions.center = point;
    mapOptions.zoom = 13;

    this.map = new Map(this.mapDiv, mapOptions);
  }
}

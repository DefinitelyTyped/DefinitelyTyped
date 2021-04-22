import config = require("esri/config");
import Map = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");

console.log(config.assetsPath);

class MapController {
  map: Map;

  constructor(public mapDiv: string) {
  }

  start() {
    let point = new Point({
      latitude: 37.75,
      longitude: -122.45
    });

    this.map = new Map({
      basemap: { title: "topo" }
    });

    let view = new MapView({
      center: point,
      container: this.mapDiv,
      map: this.map,
      zoom: 13
    });
  }
}

import esriId = require("esri/identity/IdentityManager");

esriId.disablePostMessageAuth();

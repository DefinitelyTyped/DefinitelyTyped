import esri = require("esri");
import Map = require("esri/map");
import Point = require("esri/geometry/Point");

class MapController {
  map: Map;

  constructor(public mapDiv: string) {
  }

  start() {
    let point = new Point(-122.45, 37.75); // long, lat

    let mapOptions: esri.MapOptions = {};
    mapOptions.basemap = "topo";
    mapOptions.center = point;
    mapOptions.zoom = 13;

    this.map = new Map(this.mapDiv, mapOptions);
  }
}

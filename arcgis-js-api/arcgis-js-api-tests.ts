import Map = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");

export = MapController;

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
      basemap: "topo"
    });
    
    let view = new MapView({
      center: point,
      container: this.mapDiv,
      map: this.map,
      zoom: 13
    });
  }
}

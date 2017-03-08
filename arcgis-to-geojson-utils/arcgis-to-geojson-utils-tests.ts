import utils = require("arcgis-to-geojson-utils");
import arcgisApi = require("arcgis-rest-api");

const arcgisPoint: arcgisApi.Point = {
  x: -122.6764,
  y: 45.5165,
  spatialReference: {
    wkid: 4326
  }
};
const geojsonPoint: GeoJSON.Point = {
  type: "Point",
  coordinates: [45.5165, -122.6764]
};

// parse ArcGIS JSON, convert it to GeoJSON
var geojson = utils.arcgisToGeoJSON(arcgisPoint);

// take GeoJSON and convert it to ArcGIS JSON
var arcgis = utils.geojsonToArcGIS(geojsonPoint);
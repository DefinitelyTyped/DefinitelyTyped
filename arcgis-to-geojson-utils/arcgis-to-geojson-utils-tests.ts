import utils = require("arcgis-to-geojson-utils");

// parse ArcGIS JSON, convert it to GeoJSON
var geojson = utils.arcgisToGeoJSON({
    x: -122.6764,
    y: 45.5165,
    spatialReference: {
      wkid: 4326
    }
  });

// take GeoJSON and convert it to ArcGIS JSON
var arcgis = utils.geojsonToArcGIS({
  type: "Point",
  coordinates: [45.5165, -122.6764]
});
import ArcGIS = require("arcgis-rest-api");
import GeoJSON = require("geojson");

export function arcgisToGeoJSON(arcgis: ArcGIS.Geometry, idAttribute?: string): GeoJSON.GeometryObject;
export function geojsonToArcGIS(geojson: GeoJSON.GeoJSON, idAttribute?: string): ArcGIS.Geometry;

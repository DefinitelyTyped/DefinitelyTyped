import * as ArcGIS from "arcgis-rest-api";
import * as GeoJSON from "geojson";

export function arcgisToGeoJSON(arcgis: ArcGIS.Geometry, idAttribute?: string): GeoJSON.GeometryObject;
export function geojsonToArcGIS(geojson: GeoJSON.GeoJSON, idAttribute?: string): ArcGIS.Geometry;

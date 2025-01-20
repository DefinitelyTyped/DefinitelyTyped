/// <reference types="geojson" />

import * as ArcGis from "arcgis-rest-api";

/**
 * Converts an ArcGIS geometry into a GeoJSON geometry.
 */
export function arcgisToGeoJSON<T extends ArcGis.Geometry>(arcgis: T): GeoJSON.GeometryObject;

/**
 * Converts a GeoJSON geometry into a ArcGIS geometry.
 */
export function geojsonToArcGIS(geojson: GeoJSON.GeometryObject): ArcGis.Geometry;

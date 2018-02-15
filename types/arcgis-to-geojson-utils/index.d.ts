// Type definitions for arcgis-to-geojson-utils 1.0
// Project: https://github.com/Esri/arcgis-to-geojson-utils
// Definitions by: Jeff Jacobson <https://github.com/JeffJacobson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

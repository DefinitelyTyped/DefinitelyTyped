// Type definitions for @terraformer/arcgis 2.0
// Project: https://github.com/terraformer-js/terraformer
// Definitions by: Jeff Jacobson <https://github.com/JeffJacobson>, Gavin Rehkemper <https://github.com/gavinr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as GeoJSON from 'geojson';
import * as ArcGIS from 'arcgis-rest-api';

export function arcgisToGeoJSON(arcgis: ArcGIS.Geometry, idAttribute?: string): GeoJSON.GeometryObject;
export function geojsonToArcGIS(geojson: GeoJSON.GeometryObject, idAttribute?: string): ArcGIS.Geometry;

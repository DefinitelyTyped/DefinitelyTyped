// Type definitions for @terraformer/wkt 2.0
// Project: https://github.com/terraformer-js/terraformer/tree/main/packages/wkt
// Definitions by: Feng Wang <https://github.com/fwang49asu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.7

import { GeoJSON } from "geojson";

export function wktToGeoJSON(wkt: string): GeoJSON;
export function geojsonToWKT(geojson: GeoJSON): string;

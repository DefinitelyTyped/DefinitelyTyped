// Type definitions for geojson2osm 0.0.5
// Project: https://github.com/Rub21/geojson2osm
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson"/>

/**
 * Converts GeoJSON features to OpenStreetMap XML.
 * @param features Input features
 * @returns OpenStreetMap XML
 */
export function geojson2osm(features: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): any

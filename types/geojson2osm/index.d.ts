/// <reference types="geojson"/>

/**
 * Converts GeoJSON features to OpenStreetMap XML.
 * @param features Input features
 * @returns OpenStreetMap XML
 */
export function geojson2osm(features: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): any;

import GeoJSONValidation = require("geojson-validation");

GeoJSONValidation.allTypes.Feature; // $ExpectType GeoJSONValidator
GeoJSONValidation.define("Feature", () => {}); // $ExpectType boolean
GeoJSONValidation.isBbox(null); // $ExpectType boolean
GeoJSONValidation.isFeature(null); // $ExpectType boolean
GeoJSONValidation.isFeatureCollection(null); // $ExpectType boolean
GeoJSONValidation.isGeoJSONObject(null); // $ExpectType boolean
GeoJSONValidation.valid(null); // $ExpectType boolean
GeoJSONValidation.isGeometryObject(null); // $ExpectType boolean
GeoJSONValidation.isLineString(null); // $ExpectType boolean
GeoJSONValidation.isLineStringCoor(null); // $ExpectType boolean
GeoJSONValidation.isMultiLineString(null); // $ExpectType boolean
GeoJSONValidation.isMultiLineStringCoor(null); // $ExpectType boolean
GeoJSONValidation.isMultiPoint(null); // $ExpectType boolean
GeoJSONValidation.isMultiPointCoor(null); // $ExpectType boolean
GeoJSONValidation.isMultiPolygon(null); // $ExpectType boolean
GeoJSONValidation.isMultiPolygonCoor(null); // $ExpectType boolean
GeoJSONValidation.isPoint(null); // $ExpectType boolean
GeoJSONValidation.isPolygon(null); // $ExpectType boolean
GeoJSONValidation.isPolygonCoor(null); // $ExpectType boolean
GeoJSONValidation.isPosition(null); // $ExpectType boolean

GeoJSONValidation.isBbox(null, false); // $ExpectType boolean
GeoJSONValidation.isFeature(null, false); // $ExpectType boolean
GeoJSONValidation.isFeatureCollection(null, false); // $ExpectType boolean
GeoJSONValidation.isGeoJSONObject(null, false); // $ExpectType boolean
GeoJSONValidation.valid(null, false); // $ExpectType boolean
GeoJSONValidation.isGeometryObject(null, false); // $ExpectType boolean
GeoJSONValidation.isLineString(null, false); // $ExpectType boolean
GeoJSONValidation.isLineStringCoor(null, false); // $ExpectType boolean
GeoJSONValidation.isMultiLineString(null, false); // $ExpectType boolean
GeoJSONValidation.isMultiLineStringCoor(null, false); // $ExpectType boolean
GeoJSONValidation.isMultiPoint(null, false); // $ExpectType boolean
GeoJSONValidation.isMultiPointCoor(null, false); // $ExpectType boolean
GeoJSONValidation.isMultiPolygon(null, false); // $ExpectType boolean
GeoJSONValidation.isMultiPolygonCoor(null, false); // $ExpectType boolean
GeoJSONValidation.isPoint(null, false); // $ExpectType boolean
GeoJSONValidation.isPolygon(null, false); // $ExpectType boolean
GeoJSONValidation.isPolygonCoor(null, false); // $ExpectType boolean
GeoJSONValidation.isPosition(null, false); // $ExpectType boolean

GeoJSONValidation.isBbox(null, true); // $ExpectType string[]
GeoJSONValidation.isFeature(null, true); // $ExpectType string[]
GeoJSONValidation.isFeatureCollection(null, true); // $ExpectType string[]
GeoJSONValidation.isGeoJSONObject(null, true); // $ExpectType string[]
GeoJSONValidation.valid(null, true); // $ExpectType string[]
GeoJSONValidation.isGeometryObject(null, true); // $ExpectType string[]
GeoJSONValidation.isLineString(null, true); // $ExpectType string[]
GeoJSONValidation.isLineStringCoor(null, true); // $ExpectType string[]
GeoJSONValidation.isMultiLineString(null, true); // $ExpectType string[]
GeoJSONValidation.isMultiLineStringCoor(null, true); // $ExpectType string[]
GeoJSONValidation.isMultiPoint(null, true); // $ExpectType string[]
GeoJSONValidation.isMultiPointCoor(null, true); // $ExpectType string[]
GeoJSONValidation.isMultiPolygon(null, true); // $ExpectType string[]
GeoJSONValidation.isMultiPolygonCoor(null, true); // $ExpectType string[]
GeoJSONValidation.isPoint(null, true); // $ExpectType string[]
GeoJSONValidation.isPolygon(null, true); // $ExpectType string[]
GeoJSONValidation.isPolygonCoor(null, true); // $ExpectType string[]
GeoJSONValidation.isPosition(null, true); // $ExpectType string[]

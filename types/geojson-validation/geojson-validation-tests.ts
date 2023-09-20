import GeoJSONValidation = require("geojson-validation");

GeoJSONValidation.allTypes.Feature; // $ExpectType GeoJSONValidator
GeoJSONValidation.define("Feature", () => {}); // $ExpectType boolean
GeoJSONValidation.isBbox(null); // $ExpectType string[]
GeoJSONValidation.isFeature(null); // $ExpectType string[]
GeoJSONValidation.isFeatureCollection(null); // $ExpectType string[]
GeoJSONValidation.isGeoJSONObject(null); // $ExpectType string[]
GeoJSONValidation.valid(null); // $ExpectType string[]
GeoJSONValidation.isGeometryObject(null); // $ExpectType string[]
GeoJSONValidation.isLineString(null); // $ExpectType string[]
GeoJSONValidation.isLineStringCoor(null); // $ExpectType string[]
GeoJSONValidation.isMultiLineString(null); // $ExpectType string[]
GeoJSONValidation.isMultiLineStringCoor(null); // $ExpectType string[]
GeoJSONValidation.isMultiPoint(null); // $ExpectType string[]
GeoJSONValidation.isMultiPointCoor(null); // $ExpectType string[]
GeoJSONValidation.isMultiPolygon(null); // $ExpectType string[]
GeoJSONValidation.isMultiPolygonCoor(null); // $ExpectType string[]
GeoJSONValidation.isPoint(null); // $ExpectType string[]
GeoJSONValidation.isPolygon(null); // $ExpectType string[]
GeoJSONValidation.isPolygonCoor(null); // $ExpectType string[]
GeoJSONValidation.isPosition(null); // $ExpectType string[]

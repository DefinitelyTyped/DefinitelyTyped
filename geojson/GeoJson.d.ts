// Type definitions for GeoJson 
// Project: https://github.com/borisyankov/DefinitelyTyped
// Definitions by: enternet <https://github.com/enternet>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// GeoJson specification: http://geojson.org/geojson-spec.html

declare module GeoJson {

  // GeoJSON Objects

  export interface GeoJsonObject {
    // This member's value is a string that determines the type of the GeoJSON object.
    // The value of the type member must be one of: "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", 
    // "GeometryCollection", "Feature", or "FeatureCollection". The case of the type member values must be as shown here.
    type: string;
    // Coordinate reference system object
    crs?: CRS;
    // Bounding box array
    // The value of the bbox member must be a 2*n array where n is the number of dimensions represented in the contained geometries, 
    // with the lowest values for all axes followed by the highest values. The axes order of a bbox follows the axes order of geometries.
    // In addition, the coordinate reference system for the bbox is assumed to match the coordinate reference system of the GeoJSON object of which it is a member.
    // examples: [-180.0, -90.0, 180.0, 90.0] or [100.0, 0.0, 105.0, 1.0]
    bbox?: number[];
    // The GeoJSON object may have any number of members (name/value pairs).
    [name: string]: any;
  }

  // Coordinate Reference System Objects
  //
  // The default CRS is a geographic coordinate reference system, using the WGS84 datum, and with longitude and latitude units of decimal degrees.
  // The crs member should be on the top-level GeoJSON object in a hierarchy (in feature collection, feature, geometry order) and should not be 
  // repeated or overridden on children or grandchildren of the object.

  export interface CRS {
    type: string; // "name" or "link"
    properties: {};
  }

  export interface NamedCRS extends CRS {
    properties: {
      // The value of that "name" member must be a string identifying a coordinate reference system. 
      // OGC CRS URNs such as "urn:ogc:def:crs:OGC:1.3:CRS84" shall be preferred over legacy identifiers such as "EPSG:4326"
      name: string;
    }
  }

  export interface LinkedCRS extends CRS {
    properties: LinkObject;
  }

  export interface LinkObject {
    href: string;
    // The value of the optional "type" member must be a string that hints at the format used to represent CRS parameters at the provided URI. 
    // Suggested values are: "proj4", "ogcwkt", "esriwkt", but others can be used:
    type?: string;
  }

  // Feature Collection & Feature Objects

  export interface Feature extends GeoJsonObject {
    geometry: Geometry;
    properties: {
      [name: string]: any;
    };
    id?: any;
  }

  export interface FeatureCollection extends GeoJsonObject {
    features: Feature[];
  }

  // Geometry Objects

  export interface GeometryObject extends GeoJsonObject {
    // A geometry is a GeoJSON object where the type member's value is one of the following strings: 
    // "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", or "GeometryCollection".
  }

  export interface Geometry extends GeometryObject {
  }

  // A GeoJSON geometry object of any type other than "GeometryCollection" must have a member with the name "coordinates". 
  // The value of the coordinates member is always an array. The structure for the elements in this array is determined by the type of geometry.
  // A position is represented by an array of numbers. There must be at least two elements, and may be more. 
  // The order of elements must follow x, y, z order (easting, northing, altitude for coordinates in a projected coordinate reference system, 
  // or longitude, latitude, altitude for coordinates in a geographic coordinate reference system). 

  export interface Point extends Geometry {
    coordinates: number[];
  }

  export interface MultiPoint extends Geometry {
    coordinates: number[][];
  }

  export interface LineString extends Geometry {
    coordinates: number[][];
  }

  export interface MultiLineString extends Geometry {
    coordinates: number[][][];
  }

  export interface Polygon extends Geometry {
    coordinates: number[][][];
  }

  export interface MultiPolygon extends Geometry {
    coordinates: number[][][][];
  }

  export interface GeometryCollection extends GeometryObject {
    geometries: Geometry[];
  }

}

// Type definitions for osmtogeojson 2.2.5
// Project: https://github.com/tyrasd/osmtogeojson.git
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "osmtogeojson" {
  export interface OsmToGeoJSON {
    (data: Document|OsmJSON.Root, options?: Options): GeoJSON.GeoJSONObject;
    toGeojson(data: Document|OsmJSON.Root, options?: Options): GeoJSON.GeoJSONObject;
  }

  export interface Options {
    verbose?: boolean;
    /**
     * If true, the resulting GeoJSON feature's properties will be a simple key-value list instead of a structured json object (with separate tags and metadata). default: false
     */
    flatProperties?: boolean;
    /**
     * Either a blacklist of tag keys or a callback function. Will be used to decide if a feature is interesting enough for its own GeoJSON feature.
     */
    uninterestingTags?: { [tag: string]: boolean; }|Function; //TODO: type function
    /**
     * Either a json object or callback function that is used to determine if a closed way should be treated as a Polygon or LineString.
     */
    polygonFeatures?: any|Function; //TODO: type this
  }

  export namespace GeoJSON {
    export interface GeoJSONObject {
      type: string;
    }

    export interface Feature extends GeoJSONObject {
      id?: string;
      geometry: Geometry;
      properties: any; //TODO: type this
    }

    export interface FeatureCollection extends GeoJSONObject {
      features: Feature[];
    }

    export interface Geometry extends GeoJSONObject {
      coordinates: Coordinate|Coordinate[]|Coordinate[][];
    }

    export interface GeometryCollection extends GeoJSONObject {
      geometries: Geometry[];
    }

    export type Coordinate2d = [number, number];
    export type Coordinate3d = [number, number, number];
    export type Coordinate = Coordinate2d|Coordinate3d;
  }

  export namespace OsmJSON {
    export interface Root {
      elements: (Node|Way|Relationship)[];
    }

    export interface OsmJSONObject {
      type: string;
      id: number;
      tags?: { [name: string]: string; }
      timestamp?: string;
      version?: number;
      changeset?: number;
      user?: string;
      uid?: number;
    }

    export interface Node extends OsmJSONObject {
      lat: number;
      lon: number;
    }

    export interface Way extends OsmJSONObject {
      nodes: number[];
    }

    export interface Relationship extends OsmJSONObject {
      members: Member[];
    }

    export interface Member {
      type: string;
      ref: number;
      role: string;
    }
  }

  var osmtogeojson: OsmToGeoJSON;

  export default osmtogeojson;
}


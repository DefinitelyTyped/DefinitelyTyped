// Type definitions for mongoose-geojson-schema 2.1
// Project: https://github.com/rideamigoscorp/mongoose-geojson-schema#readme
// Definitions by: Bond <https://github.com/bondz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import mongoose = require('mongoose');

declare module 'mongoose' {
  namespace Schema {
    namespace Types {
      class GeoJSON extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'GeoJSON';
      }

      class Point extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'Point';
      }

      class MultiPoint extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'MultiPoint';
      }

      class LineString extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'LineString';
      }

      class MultiLineString extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'MultiLineString';
      }

      class Polygon extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'Polygon';
      }

      class MultiPolygon extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'MultiPolygon';
      }

      class Geometry extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'Geometry';
      }

      class GeometryCollection extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'GeometryCollection';
      }

      class Feature extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'Feature';
      }

      class FeatureCollection extends SchemaType {
        constructor(key: string, options?: object);
        cast(geojson: object): this;
        static schemaName: 'FeatureCollection';
      }
    }
  }
}

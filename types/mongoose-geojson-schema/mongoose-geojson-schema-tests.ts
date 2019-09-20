'use strict';

import * as mongoose from 'mongoose';
import * as mongooseGeoJSONSchema from 'mongoose-geojson-schema';

const TestSchema = new mongoose.Schema(
  {
    title: String,
    test: {},
    point: mongoose.Schema.Types.Point,
    multipoint: mongoose.Schema.Types.MultiPoint,
    linestring: mongoose.Schema.Types.LineString,
    multilinestring: mongoose.Schema.Types.MultiLineString,
    polygon: mongoose.Schema.Types.Polygon,
    multipolygon: mongoose.Schema.Types.MultiPolygon,
    geometry: mongoose.Schema.Types.Geometry,
    geometrycollection: mongoose.Schema.Types.GeometryCollection,
    feature: mongoose.Schema.Types.Feature,
    featurecollection: mongoose.Schema.Types.FeatureCollection,
  },
  { typeKey: '$type', collection: 'echoes' }
);

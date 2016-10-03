// Type definitions for ngeohash v0.6.0
// Project: https://github.com/sunng87/node-geohash
// Definitions by: Erik Rothoff Andersson <https://github.com/erkie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

declare namespace ngeohash {
  interface GeographicPoint {
    latitude: number;
    longitude: number;
  }

  type GeographicBoundingBox = [number, number, number, number];
  type NSEW = [number, number];

  function encode(latitude: number, longitude: number, precision?: number): string;
  function decode(hashstring: string): GeographicPoint;
  function decode_bbox(hashstring: string): GeographicBoundingBox;
  function bboxes(minlat: number, minlon: number, maxlat: number, maxlon: number, precision?: number): Array<string>;
  function neighbor(hashstring: string, direction: NSEW): string;
  function neighbors(hashstring: string): Array<string>;

  function encode_int(latitude: number, longitude: number, bitDepth?: number): number;
  function decode_int(hashinteger: number, bitDepth?: number): GeographicPoint;
  function decode_bbox_int(hashinteger: number, bitDepth?: number): GeographicBoundingBox;
  function bboxes_int(minlat: number, minlon: number, maxlat: number, maxlon: number, bitDepth?: number): number;
  function neighbor_int(hashinteger: number, direction: NSEW, bitDepth?: number): number;
  function neighbors_int(hashinteger: number, bitDepth?: number): number;
}

declare module "ngeohash" {
  export = ngeohash;
}

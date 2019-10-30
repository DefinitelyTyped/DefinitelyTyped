// Type definitions for @mapbox/geojson-area 0.2
// Project: https://github.com/mapbox/geojson-area#readme
// Definitions by: Sagie Maoz <https://github.com/n0nick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// tslint:disable-next-line no-single-declare-module
declare module "@mapbox/geojson-area" {
  import { Geometry, Position } from 'geojson';

  function geometry(geo: Geometry): number;
  function ring(coordinates: Position[]): number;
}

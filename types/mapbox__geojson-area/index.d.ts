/* eslint-disable @definitelytyped/no-declare-current-package */
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "@mapbox/geojson-area" {
    import { Geometry, Position } from "geojson";

    function geometry(geo: Geometry): number;
    function ring(coordinates: Position[]): number;
}

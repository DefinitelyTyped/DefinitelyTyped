// Type definitions for topojson 3.2
// Project: https://github.com/topojson/topojson
// Definitions by: Ricardo Mello <https://github.com/ricmello>
//                 Zhutian Chen <https://github.com/chenzhutian>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import * as GeoJSON from "geojson";
import * as TopoJSON from "topojson-specification";

export as namespace topojson;

// ---------------------------------------------------------------
// TopoJSON Server
// ---------------------------------------------------------------

export * from 'topojson-server';

// ---------------------------------------------------------------
// TopoJSON Simplify
// ---------------------------------------------------------------

export * from 'topojson-simplify';

// ---------------------------------------------------------------
// TopoJSON Client
// ---------------------------------------------------------------

export * from 'topojson-client';

// ---------------------------------------------------------------
// U.S. Atlas TopoJSON
// ---------------------------------------------------------------

export interface UsAtlas extends TopoJSON.Topology {
    objects: {
        counties: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
        states: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
        nation: TopoJSON.GeometryCollection;
    };
    bbox: [number, number, number, number];
    transform: TopoJSON.Transform;
}

// ---------------------------------------------------------------
// World Atlas TopoJSON
// ---------------------------------------------------------------

export interface WorldAtlas extends TopoJSON.Topology {
    objects: {
        countries: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
        land: TopoJSON.GeometryCollection;
    };
    bbox: [number, number, number, number];
    transform: TopoJSON.Transform;
}

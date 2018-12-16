// Type definitions for shapefile 0.6
// Project: https://github.com/mbostock/shapefile
// Definitions by:  Denis Carriere <https://github.com/DenisCarriere>
//                  James Bromwell <https://github.com/Thw0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Feature, FeatureCollection, GeometryObject, GeoJsonProperties } from "geojson";
import { Readable } from "stream";

export interface Options {
    encoding?: string;
    highWaterMark?: number;
}
export interface Source<RecordType> {
    bbox: number[];
    read(): Promise<{done: boolean, value: RecordType}>;
    cancel(): Promise<void>;
}

export type Openable = string | ArrayBuffer | Uint8Array | Readable | ReadableStream;

export function open(shp: Openable, dbf?: Openable, options?: Options): Promise<Source<Feature>>;
export function openShp(source: Openable, options?: Options): Promise<Source<GeometryObject>>;
export function openDbf(source: Openable, options?: Options): Promise<Source<GeoJsonProperties>>;
export function read(shp: Openable, dbf?: Openable, options?: Options): Promise<FeatureCollection>;

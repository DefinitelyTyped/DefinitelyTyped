/// <reference types="node" />

import { Feature, FeatureCollection, GeoJsonProperties, GeometryObject } from "geojson";
import { Readable } from "stream";

export interface Options {
    encoding?: string | undefined;
    highWaterMark?: number | undefined;
}
export interface Source<RecordType> {
    bbox: number[];
    read(): Promise<{ done: boolean; value: RecordType }>;
    cancel(): Promise<void>;
}

export type Openable = string | ArrayBuffer | Uint8Array | Readable | ReadableStream;

export function open(shp: Openable, dbf?: Openable, options?: Options): Promise<Source<Feature>>;
export function openShp(source: Openable, options?: Options): Promise<Source<GeometryObject>>;
export function openDbf(source: Openable, options?: Options): Promise<Source<GeoJsonProperties>>;
export function read(shp: Openable, dbf?: Openable, options?: Options): Promise<FeatureCollection>;

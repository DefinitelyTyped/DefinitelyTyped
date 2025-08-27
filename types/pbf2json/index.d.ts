/// <reference types="node" />

import stream = require("stream");

/** A key-value pair of OSM tags */
export type Tags = Record<string, string | undefined>;

export interface Coordinate {
    lat: number;
    lon: number;
}
export interface Centroid extends Coordinate {
    type: "entrance" | undefined;
}

export interface Node extends Coordinate {
    id: number;
    type: "node";
    tags: Tags;
}
export interface Way {
    id: number;
    type: "way";
    tags: Tags;
    centroid: Centroid;
    bounds: {
        n: number;
        s: number;
        e: number;
        w: number;
    };
    nodes: Coordinate[];
}
export interface Relation {
    id: number;
    type: "relation";
    tags: Tags;
    centroid: Centroid;
    bounds: {
        n: number;
        s: number;
        e: number;
        w: number;
    };
}

export type Item = Node | Way | Relation;

export interface Options {
    /** Path to the .pbf file */
    file: string;
    /** To control which tags are output */
    tags?: string[] | undefined;
    /** Path to store temp files */
    leveldb?: string | undefined;
    waynodes?: string | undefined;
}

export interface Decoder extends stream.Transform {
    /** terminate the process and pipeline */
    kill(): void;
}

/**
 * An API to read a .pbf file.
 *
 * Usage:
 * @example
 * ```ts
 * import { createReadStream, Item } from "pbf2json";
 *
 * createReadStream(options).pipe(through2.obj((item: Item, e, next) => {
 *     // ...
 * }))
 * ```
 */
export function createReadStream(options: Options): Decoder;

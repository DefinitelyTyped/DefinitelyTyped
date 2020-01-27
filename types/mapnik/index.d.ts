// Type definitions for mapnik 3.x
// Project: http://mapnik.org
// Definitions by: Loli <https://github.com/ipv4sec>
//                 EdgarJeremy <https://github.com/edgarjeremy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export const settings: any;
export function register_default_fonts(): void;
export function register_default_input_plugins(): void;
export function register_datasource(path: string): void;

export class VectorTile {
    constructor(z: number, x: number, y: number);
    addData(
        buffer: Buffer,
        options?: { validate?: boolean; upgrade?: boolean },
        callback?: (err?: Error) => void
    ): void;
    addDataSync(buffer: Buffer, options?: { validate?: boolean; upgrade?: boolean }): void;
    addGeoJSON(
        geojson: string,
        name: string,
        options?: {
            area_threshold?: number;
            simplify_distance?: number;
            strictly_simple?: boolean;
            multi_polygon_union?: boolean;
            fill_type?: number;
            process_all_rings?: boolean;
        }
    ): void;
    addImage(image: Image, name: string, options?: { image_scaling?: string; image_format?: string }): void;
    addImageBuffer(buffer: Buffer, name: string, callback?: (err?: Error) => void): void;
    addImageBufferSync(buffer: Buffer, name: string): void;
    addImageSync(
        image: Image,
        name: string,
        options?: { image_scaling?: string; image_format?: 'webp' | 'jpeg' | 'png' | 'tiff' }
    ): void;
    bufferedExtent(): [number, number, number, number];
    clear(callback?: (err?: Error) => void): void;
    clearSync(): void;
    composite(
        vectorTiles: VectorTile[],
        options?: {
            scale_factor?: number;
            offset_x?: number;
            offset_y?: number;
            area_threshold?: number;
            strictly_simple?: boolean;
            multi_polygon_union?: boolean;
            fill_type?: number;
            scale_denominator?: number;
            reencode?: boolean;
            max_extent?: [number, number, number, number];
            simplify_distance?: number;
            process_all_rings?: boolean;
            image_format?: 'webp' | 'jpeg' | 'png' | 'tiff';
            scaling_method?: string;
            threading_mode?: string;
            callback?: (err: Error) => void;
        }
    ): void;
    compositeSync(
        vectorTiles: VectorTile[],
        options?: {
            scale_factor?: number;
            offset_x?: number;
            offset_y?: number;
            area_threshold?: number;
            strictly_simple?: boolean;
            multi_polygon_union?: boolean;
            fill_type?: number;
            scale_denominator?: number;
            reencode?: boolean;
            max_extent?: [number, number, number, number];
            simplify_distance?: number;
            process_all_rings?: boolean;
            image_format?: 'webp' | 'jpeg' | 'png' | 'tiff';
            scaling_method?: string;
            threading_mode?: string;
        }
    ): void;
    empty(): boolean;
    emptyLayers(): string[];
    extent(): [number, number, number, number];
    getData(
        options?: {
            compression?: number;
            level?: number;
            strategy?: 'FILTERED' | 'HUFFMAN_ONLY' | 'RLE' | 'FIXED' | 'DEFAULT';
        },
        callback?: () => void
    ): void;
    getDataSync(options?: {
        compression?: number;
        level?: number;
        strategy?: 'FILTERED' | 'HUFFMAN_ONLY' | 'RLE' | 'FIXED' | 'DEFAULT';
    }): void;
    info(buffer: Buffer): void;
    layer(layer_name: string): VectorTile;
    names(): string[];
    painted(): boolean;
    paintedLayers(): string[];
    query(
        longitude: number,
        latitude: number,
        options?: { tolerance?: number; layer?: string },
        callback?: (err: Error, features: Feature[]) => void
    ): void;
}

export class Feature {
    fromJSON(geojson: string): void;
    attributes(): any;
    extent(): [number, number, number, number];
    geometry(): any; // TODO: Geometry class
    id(): number;
    toJSON(): string;
}

export class Datasource {
    constructor(datasource: any)
    featureset(): Featureset;
}

export class Featureset {
    constructor()
    next(): FeaturesetNext;
}
export class FeaturesetNext {
    constructor()
    toJSON(): string;
}

export class Image {
    constructor(x: number, y: number)
    encode(type: string, callback?: (err: Error, buffer: Buffer) => void): void;
    getData(): Buffer;
}

export interface Image {
    // constructor(x: number, y: number)
    new(x: number, y: number): () => void;
    encode(type: string, callback?: (err: Error, buffer: Buffer) => void): void;
    getData(): Buffer;
    save(fp: string): () => void;
    open(fp: string): () => void;
}

export class Map {
    constructor(x: number, y: number)
    load(xml: string, callback?: (err: Error, map: Map) => void): void;
    zoomAll(): void;
    render(images: Image | VectorTile, callback?: (err: Error, map: Image) => void): void;
}

/// <reference types="node" />
export const settings: any;
export function register_default_fonts(): void;
export function register_default_input_plugins(): void;
export function register_datasource(path: string): void;

export interface MapOptions {
    strict: boolean;
}

export type MapRenderCallback = (error: Error, image: Image) => void;
export type MapLoadCallback = (err: Error, map: Map) => void;
export type ImageEncodeCallback = (err: Error, buffer: Buffer) => void;

export class VectorTile {
    constructor(z: number, x: number, y: number);
    addData(
        buffer: Buffer,
        options?: { validate?: boolean | undefined; upgrade?: boolean | undefined },
        callback?: (err?: Error) => void,
    ): void;
    addDataSync(buffer: Buffer, options?: { validate?: boolean | undefined; upgrade?: boolean | undefined }): void;
    addGeoJSON(
        geojson: string,
        name: string,
        options?: {
            area_threshold?: number | undefined;
            simplify_distance?: number | undefined;
            strictly_simple?: boolean | undefined;
            multi_polygon_union?: boolean | undefined;
            fill_type?: number | undefined;
            process_all_rings?: boolean | undefined;
        },
    ): void;
    addImage(
        image: Image,
        name: string,
        options?: { image_scaling?: string | undefined; image_format?: string | undefined },
    ): void;
    addImageBuffer(buffer: Buffer, name: string, callback?: (err?: Error) => void): void;
    addImageBufferSync(buffer: Buffer, name: string): void;
    addImageSync(
        image: Image,
        name: string,
        options?: { image_scaling?: string | undefined; image_format?: "webp" | "jpeg" | "png" | "tiff" | undefined },
    ): void;
    bufferedExtent(): [number, number, number, number];
    clear(callback?: (err?: Error) => void): void;
    clearSync(): void;
    composite(
        vectorTiles: VectorTile[],
        options?: {
            scale_factor?: number | undefined;
            offset_x?: number | undefined;
            offset_y?: number | undefined;
            area_threshold?: number | undefined;
            strictly_simple?: boolean | undefined;
            multi_polygon_union?: boolean | undefined;
            fill_type?: number | undefined;
            scale_denominator?: number | undefined;
            reencode?: boolean | undefined;
            max_extent?: [number, number, number, number] | undefined;
            simplify_distance?: number | undefined;
            process_all_rings?: boolean | undefined;
            image_format?: "webp" | "jpeg" | "png" | "tiff" | undefined;
            scaling_method?: string | undefined;
            threading_mode?: string | undefined;
            callback?: ((err: Error) => void) | undefined;
        },
    ): void;
    compositeSync(
        vectorTiles: VectorTile[],
        options?: {
            scale_factor?: number | undefined;
            offset_x?: number | undefined;
            offset_y?: number | undefined;
            area_threshold?: number | undefined;
            strictly_simple?: boolean | undefined;
            multi_polygon_union?: boolean | undefined;
            fill_type?: number | undefined;
            scale_denominator?: number | undefined;
            reencode?: boolean | undefined;
            max_extent?: [number, number, number, number] | undefined;
            simplify_distance?: number | undefined;
            process_all_rings?: boolean | undefined;
            image_format?: "webp" | "jpeg" | "png" | "tiff" | undefined;
            scaling_method?: string | undefined;
            threading_mode?: string | undefined;
        },
    ): void;
    empty(): boolean;
    emptyLayers(): string[];
    extent(): [number, number, number, number];
    getData(
        options?: {
            compression?: number | undefined;
            level?: number | undefined;
            strategy?: "FILTERED" | "HUFFMAN_ONLY" | "RLE" | "FIXED" | "DEFAULT" | undefined;
        },
        callback?: () => void,
    ): void;
    getDataSync(options?: {
        compression?: number | undefined;
        level?: number | undefined;
        strategy?: "FILTERED" | "HUFFMAN_ONLY" | "RLE" | "FIXED" | "DEFAULT" | undefined;
    }): void;
    info(buffer: Buffer): void;
    layer(layer_name: string): VectorTile;
    names(): string[];
    painted(): boolean;
    paintedLayers(): string[];
    query(
        longitude: number,
        latitude: number,
        options?: { tolerance?: number | undefined; layer?: string | undefined },
        callback?: (err: Error, features: Feature[]) => void,
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

export interface DatasourceOptions {
    type: string;
    inline?: string;
    file?: string;
}

export class Datasource {
    constructor(options: DatasourceOptions);
    featureset(): Featureset;
}

export class Featureset {
    constructor();
    next(): FeaturesetNext;
}
export class FeaturesetNext {
    constructor();
    toJSON(): string;
}

export class Image {
    constructor(x: number, y: number);
    encode(type: string, callback?: ImageEncodeCallback): void;
    getData(): Buffer;
}
export interface Image {
    // constructor(x: number, y: number)
    new(x: number, y: number): () => void;
    encode(type: string, callback?: ImageEncodeCallback): void;
    getData(): Buffer;
    save(fp: string): () => void;
    open(fp: string): () => void;
}

export class Map {
    constructor(x: number, y: number);
    load(xml: string, callback?: MapLoadCallback): void;
    zoomAll(): void;
    zoomToBox(extent: number[]): void;
    render(images: Image | VectorTile, callback?: MapRenderCallback): void;
    loadSync(stylesheet: string, options: MapOptions): void;
    fromString(styles: string, options: MapOptions, loadedCallback: MapLoadCallback): void;
    add_layer(layer: Layer): void;

    srs: string;
    extent: number[];
}

export class Layer {
    constructor(name: string);
    srs: string;
    styles: string[];
    datasource: Datasource;
}

export class Projection {
    constructor(epsg: string);
    forward(coordinate: number[]): number[];
}

/// <reference types="node" />

declare var mapOptions: Options;

interface Events {
    /**
     * Start Event
     *
     * @returns {Events}
     * @example
     * tilereduce({...})
     * .on('start', () => {
     *     console.log('starting')
     * })
     */
    on(type: "start", callback: () => void): Events;

    /**
     * Map Event
     *
     * @param {Tile} tile
     * @param {number} workerId
     * @returns {Events}
     * @example
     * tilereduce({...})
     * .on('map', (tile, workerId) => {
     *     console.log(`about to process [${ tile }] on worker ${ workerId }`)
     * })
     */
    on(type: "map", callback: (tile: TileReduce.Tile, workerId: number) => void): Events;

    /**
     * Reduce Event
     *
     * @param {any} result
     * @param {Tile} tile
     * @returns {Events}
     * @example
     * const count = 0
     * tilereduce({...})
     * .on('reduce', (result, tile) => {
     *     console.log(`got a count of ${ result } from ${ tile }`
     *     count ++
     * })
     */
    on(type: "reduce", callback: (result: any, tile: TileReduce.Tile) => void): Events;

    /**
     * End Event
     *
     * @returns {Events}
     * @example
     * let count = 0
     * tilereduce({...})
     * .on('end', () => {
     *     console.log(`Total count was: ${ count }`)
     * })
     */
    on(type: "end", callback: (error: any) => void): Events;
}

interface Options {
    map: string;
    zoom: number;
    sources: Array<TileReduce.Source>;
    bbox?: TileReduce.BBox | undefined;
    geojson?: any;
    log?: boolean | undefined;
    mapOptions?: any;
    maxWorkers?: number | undefined;
    output?: any;
    tiles?: Array<TileReduce.Tile> | undefined;
    tileStream?: any;
    sourceCover?: string | undefined;
}

/**
 * Tile Reduce
 *
 * @param {Options} options Tile Reduce Options
 * @param {string} options.map Path to the map script, which will be executed against each tile
 * @param {number} options.zoom Zoom specifies the zoom level of tiles to retrieve from each source.
 * @param {Array<Source>} options.source Sources are specified as an array
 * @param {BBox} [options.bbox] BBox extent in [minX, minY, maxX, maxY] order
 * @param {GeoJSON} [options.geojson] GeoJSON Feature or Feature Collection
 * @param {boolean} [options.log] Disables logging and progress output
 * @param {any} [options.mapOptions] Passes through arbitrary options to workers. Options are made available to map scripts as global.mapOptions
 * @param {number} [options.maxWorkers] By default, TileReduce creates one worker process per CPU. maxWorkers may be used to limit the number of workers created
 * @param {any} [options.output] By default, any data written from workers is piped to process.stdout on the main process. You can pipe to an alternative writable stream using the output option.
 * @param {Array<Tile>} [options.tiles] An array of quadtiles represented as xyz arrays.
 * @param {any} [options.tileStream] Tiles can be read from an object mode node stream. Each object in the stream should be either a string in the format x y z or an array in the format [x, y, z].
 * @param {string} [options.sourceCover] When using MBTiles sources, a list of tiles to process can be automatically retrieved from the source metadata
 * @return {Events} TileReduce returns an EventEmitter.
 * @example
 * tilereduce({...})
 * .on('start', () => {
 *     console.log('starting')
 * })
 */
declare function TileReduce(options: Options): Events;

declare namespace TileReduce {
    type BBox = [number, number, number, number];
    type Tile = [number, number, number];
    type Types = "start" | "map" | "reduce" | "end";
    interface Source {
        name: string;
        mbtiles?: string | undefined;
        url?: string | undefined;
        layers?: Array<string> | undefined;
        maxrate?: number | undefined;
        raw?: boolean | undefined;
    }
}

declare module "tile-reduce" {
    export = TileReduce;
}

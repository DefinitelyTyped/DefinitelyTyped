import * as UnlCore from 'unl-core';

// Encoding
const atx_locationId: string = UnlCore.encode(30.2672, -97.7431);
const atx_locationId_p3: string = UnlCore.encode(30.2672, -97.7431, 3);

// Decoding
const atx_latlong: UnlCore.PointWithElevation = UnlCore.decode(atx_locationId);

// Bounds
const atx_bounds: UnlCore.BoundsWithElevation = UnlCore.bounds(atx_locationId);

// Adjacent
const atx_adj_cell1: string = UnlCore.adjacent(atx_locationId, 'N');

// Neighbors
const atx_neighbors: UnlCore.Neighbours = UnlCore.neighbours(atx_locationId);
const atx_adj_cell3: string = atx_neighbors.n;

// Grid Lines
const atx_gridLines: Array<[[number, number], [number, number]]> = UnlCore.gridLines(atx_bounds);

// Polyhash

// Sample polygon
const grachtenGordel = [
    [52.3860252, 4.882822],
    [52.3721408, 4.8751831],
    [52.3628122, 4.8804188],
    [52.3578851, 4.8902035],
    [52.3596149, 4.9085712],
    [52.3625501, 4.9202442],
    [52.3665334, 4.9275398],
    [52.3716691, 4.9126911],
    [52.3758612, 4.9129486],
    [52.3776427, 4.9120903],
    [52.3860252, 4.882822],
];

/**
 * [{
 *     precision: 7,
 *     data: [
 *        'u176p0e', '3yyj',
 *        'zh3',    '72',
 *        'ey',    'uq',
 *        '9bjh',    '3zvc',
 *        'y9',    'z0',
 *        '6p0e'
 *     ]
 * }]
 */
const polyGordel: UnlCore.Polyhash[] = UnlCore.toPolyhash(grachtenGordel, 7);

// u0COMqBaDeexPoRh4hvxrYSUjgDfbrPUn4AyoFo=
let compressed: string = UnlCore.compressPolyhash(polyGordel);

/**
 * [
 *    'u176p0e', 'u173yyj',
 *    'u173zh3', 'u173z72',
 *    'u173zey', 'u173zuq',
 *    'u179bjh', 'u173zvc',
 *    'u173zy9', 'u173zz0',
 *    'u176p0e'
 * ]
 */
const decompressed: string[] = UnlCore.decompressPolyhash(compressed);

// == grachtenGordel
const coords: number[][] = UnlCore.toCoordinates(decompressed);

/**
 * [
 *     { precision: 6, data: [ 'u173zk', 'm', 'q', 's', 't', 'w' ] },
 *     { precision: 7, data: [ 'yvp', 'w', 'x', 'y', 'z', 'yj','n', 'p', 'q', 'r', ... ] }
 * ]
 */
const clusterGordel: UnlCore.Polyhash[] = UnlCore.toCluster(grachtenGordel, 7);

/**
 * s0COG/kzbOHLy7zerx6+fnsWjVs3ePX58Xx6+fh4 ...
 */
compressed = UnlCore.compressPolyhash(clusterGordel);

/**
 * [ 'u173zk',  'u173zm',  'u173zq',  ... ]
 */
const inflated: string[] = UnlCore.inflate(clusterGordel);

/**
 * [
 *    [ 'u173zk', 'm', 'q', 's', 't', 'w' ],
 *    [ 'u173yvp', 'w',  'x',  'y', 'z', 'yj', ... ]
 * ]
 */
const grouped: string[][] = UnlCore.groupByPrefix(inflated);

// == clusterGordel
const deflated: UnlCore.Polyhash[] = UnlCore.deflate(inflated);

export const VISIBLE_DISTANCE: 3570;
export const MAX_RENDERED_NODES: 700;
export const NW: 0;
export const NE: 1;
export const SW: 2;
export const SE: 3;
export const N: 0;
export const E: 1;
export const S: 2;
export const W: 3;
export const NOTRENDERING: 0;
export const RENDERING: 1;
export const WALKTHROUGH: 2;
/**
 * World opposite side table.
 */
export const OPSIDE: number[];
/**
 * First index is {N,E,S,W} and second is {NW,NE,SW,SE}
 */
export const NEIGHBOUR: number[][];
/**
 * Neighbor's oposite part. For example oposite side
 * on the east neighbor side is: [S][SE] = NE
 */
export const OPPART: number[][];
/**
 * Neighbos's opside array order. For example NW node
 * by E side array index is 0, SE node by S side is 1.
 */
export const NOPSORD: number[][];
/**
 * First index is {NW,NE,SW,SE}, another one is {N,E,S,W}
 */
export const COMSIDE: boolean[][];
/**
 * Gets segment part left to right or up to downo ffset against neighbour side.
 * Where 0 - no offset 1 - half segment size offset.
 */
export const PARTOFFSET: number[][];

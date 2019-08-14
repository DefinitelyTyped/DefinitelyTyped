import * as Geohash from 'unl-core';

// Encoding
const atx_geohash: string = Geohash.encode(30.2672, -97.7431);
const atx_geohash_p3: string = Geohash.encode(30.2672, -97.7431, 3);

// Decoding
const atx_latlong: Geohash.Point = Geohash.decode(atx_geohash);

// Bounds
const atx_bounds: Geohash.Bounds = Geohash.bounds(atx_geohash);

// Adjacent
const atx_adj_cell1: string = Geohash.adjacent(atx_geohash, Geohash.Direction.North);
const atx_adj_cell2: string = Geohash.adjacent(atx_geohash, 'N');

// Neighbors
const atx_neighbors: Geohash.Neighbours = Geohash.neighbours(atx_geohash);
const atx_adj_cell3: string = atx_neighbors.n;

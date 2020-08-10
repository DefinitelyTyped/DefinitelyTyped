import * as LocationId from 'unl-core';

// Encoding
const atx_locationId: string = LocationId.encode(30.2672, -97.7431);
const atx_locationId_p3: string = LocationId.encode(30.2672, -97.7431, 3);

// Decoding
const atx_latlong: LocationId.PointWithElevation = LocationId.decode(atx_locationId);

// Bounds
const atx_bounds: LocationId.BoundsWithElevation = LocationId.bounds(atx_locationId);

// Adjacent
const atx_adj_cell1: string = LocationId.adjacent(atx_locationId, 'N');

// Neighbors
const atx_neighbors: LocationId.Neighbours = LocationId.neighbours(atx_locationId);
const atx_adj_cell3: string = atx_neighbors.n;

// Grid Lines
const atx_gridLines: Array<[[number, number], [number, number]]> = LocationId.gridLines(atx_bounds);

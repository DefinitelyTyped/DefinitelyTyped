import { BaseQuad, DatasetCore, Quad } from "rdf-js";

/**
 * Iterates over iterable and adds all quads to dataset by calling `.add` for each quad.
 *
 * Returns the given dataset.
 */
declare function addAll<Q extends BaseQuad = Quad, D extends DatasetCore<Q> = DatasetCore<Q>>(dataset: D, iterable: Iterable<Q>): D;

export =  addAll;

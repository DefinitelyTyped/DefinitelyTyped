import { BaseQuad, DatasetCore, Quad, Stream } from 'rdf-js';

/**
 * Creates a `Stream` which emits all quads of the given dataset. Returns the created stream.
 */
declare function toStream<Q extends BaseQuad = Quad>(dataset: DatasetCore<Q>): Stream<Q>;

export = toStream;

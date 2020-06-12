// Type definitions for rdf-dataset-ext 1.0
// Project: https://github.com/rdf-ext/rdf-dataset-ext
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { BaseQuad, DatasetCore, Quad, Stream, Term } from 'rdf-js';

/**
 * Iterates over iterable and adds all quads to dataset by calling `.add` for each quad.
 *
 * Returns the given dataset.
 */
export function addAll<Q extends BaseQuad = Quad, D extends DatasetCore<Q> = DatasetCore<Q>>(dataset: D, iterable: Iterable<Q>): D;

/**
 * Deletes all quads in the given dataset which match the given subject, predicate, object, graph pattern.
 *
 * `.match` of dataset is used to find the matches and .delete to delete all matches. Returns the given dataset.
 */
export function deleteMatch<D extends DatasetCore<BaseQuad> = DatasetCore>(dataset: D, subject?: Term, predicate?: Term, object?: Term, graph?: Term): D;

/**
 * Tests if the datasets a and b contain the same quads without doing a normalization step beforehand.
 *
 * That means Blank Node labels must also match. The comparison is done by testing `.size` of both dataset for
 * equality and by looping over all quads of a and check if b contains it using the `.has` method. Returns `true` if
 * both datasets are equal. Otherwise `false `is returned.
 */
export function equals(a: DatasetCore<BaseQuad>, b: DatasetCore<BaseQuad>): boolean;

/**
 * Adds all quads from stream till the stream is finished.
 *
 * Errors emitted by the stream are forwarded as Promise rejects. Returns the given dataset.
 */
export function fromStream<D extends DatasetCore<BaseQuad> = DatasetCore>(dataset: D, stream: EventEmitter): Promise<D>;

/**
 * Returns the canonical representation of the dataset as string.
 */
export function toCanonical(dataset: DatasetCore<BaseQuad>): string;

/**
 * Creates a `Stream` which emits all quads of the given dataset. Returns the created stream.
 */
export function toStream<Q extends BaseQuad = Quad>(dataset: DatasetCore<Q>): Stream<Q>;

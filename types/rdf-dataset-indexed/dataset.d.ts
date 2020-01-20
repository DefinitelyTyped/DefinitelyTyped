import * as RDF from 'rdf-js';
import { Readable } from 'stream';

declare class DatasetIndexed<Q extends RDF.Quad = RDF.Quad> implements RDF.Dataset<Q> {
    constructor(quads?: RDF.BaseQuad[] | null, factory?: RDF.DataFactory);

    create(quads: RDF.BaseQuad[]): this;
    length: number;
    clone(): this;
    includes(quad: RDF.BaseQuad): boolean;
    merge(other: RDF.DatasetCore<RDF.BaseQuad>): this;

    every(iteratee: (quad: Q, dataset: this) => boolean): boolean;
    filter(iteratee: (quad: Q, dataset: this) => boolean): this;
    forEach(iteratee: (quad: Q, dataset: this) => void): void;
    map(iteratee: (quad: Q, dataset: this) => Q): this;
    reduce<A = any>(iteratee: (accumulator: A, quad: Q, dataset: this) => A, initialValue?: A): A;
    some(iteratee: (quad: Q, dataset: this) => boolean): boolean;
    size: number;
    add(quad: RDF.BaseQuad): this;
    delete(quad: RDF.BaseQuad): this;
    has(quad: RDF.BaseQuad): boolean;
    match(subject?: RDF.Quad_Subject | null, predicate?: RDF.Quad_Predicate | null, object?: RDF.Quad_Object | null, graph?: RDF.Quad_Graph | null): this;
    [Symbol.iterator](): Iterator<Q>;
    addAll(quads: RDF.Dataset<RDF.BaseQuad>|RDF.BaseQuad[]): this;
    contains(other: RDF.Dataset<RDF.BaseQuad>): boolean;
    deleteMatches(subject?: RDF.Term, predicate?: RDF.Term, object?: RDF.Term, graph?: RDF.Term): this;
    difference(other: RDF.Dataset<RDF.BaseQuad>): this;
    equals(other: RDF.Dataset<RDF.BaseQuad>): boolean;
    import(stream: RDF.Stream<RDF.BaseQuad>): Promise<this>;
    intersection(other: RDF.Dataset<RDF.BaseQuad>): this;
    toArray(): Q[];
    toCanonical(): string;
    toStream(): RDF.Stream & Readable;
    toString(): string;
    union(quads: RDF.Dataset<RDF.BaseQuad>): this;
}

export = DatasetIndexed;

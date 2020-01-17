import * as RDF from 'rdf-js';
import { Readable } from 'stream';

declare class DatasetIndexed implements RDF.Dataset<RDF.Quad> {
    constructor(quads?: RDF.BaseQuad[] | null, factory?: RDF.DataFactory);

    create(quads: RDF.BaseQuad[]): this;
    length: number;
    clone(): this;
    includes(quad: RDF.BaseQuad): boolean;
    merge(other: RDF.DatasetCore<RDF.BaseQuad>): this;

    every(iteratee: (quad: RDF.Quad, dataset: RDF.Dataset<RDF.Quad>) => boolean): boolean;
    filter(iteratee: (quad: RDF.Quad, dataset: RDF.Dataset<RDF.Quad>) => boolean): this;
    forEach(iteratee: (quad: RDF.Quad, dataset: RDF.Dataset<RDF.Quad>) => void): void;
    map(iteratee: (quad: RDF.Quad, dataset: RDF.Dataset<RDF.Quad>) => RDF.Quad): this;
    reduce<A = any>(iteratee: (accumulator: A, quad: RDF.Quad, dataset: RDF.Dataset<RDF.Quad>) => A, initialValue?: A): A;
    some(iteratee: (quad: RDF.Quad, dataset: RDF.Dataset<RDF.Quad>) => boolean): boolean;
    size: number;
    add(quad: RDF.BaseQuad): this;
    delete(quad: RDF.BaseQuad): this;
    has(quad: RDF.BaseQuad): boolean;
    match(subject?: RDF.Quad_Subject | null, predicate?: RDF.Quad_Predicate | null, object?: RDF.Quad_Object | null, graph?: RDF.Quad_Graph | null): this;
    [Symbol.iterator](): Iterator<RDF.Quad>;
    addAll(quads: RDF.Dataset<RDF.BaseQuad>|RDF.BaseQuad[]): this;
    contains(other: RDF.Dataset<RDF.BaseQuad>): boolean;
    deleteMatches(subject?: RDF.Term, predicate?: RDF.Term, object?: RDF.Term, graph?: RDF.Term): this;
    difference(other: RDF.Dataset<RDF.BaseQuad>): this;
    equals(other: RDF.Dataset<RDF.BaseQuad>): boolean;
    import(stream: RDF.Stream<RDF.BaseQuad>): Promise<this>;
    intersection(other: RDF.Dataset<RDF.BaseQuad>): this;
    toArray(): RDF.Quad[];
    toCanonical(): string;
    toStream(): RDF.Stream & Readable;
    toString(): string;
    union(quads: RDF.Dataset<RDF.BaseQuad>): this;
}

export = DatasetIndexed;
